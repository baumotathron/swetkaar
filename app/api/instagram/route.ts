import { NextResponse } from "next/server";

const INSTAGRAM_GRAPH = "https://graph.instagram.com";
const FIELDS = "id,media_type,media_url,permalink,thumbnail_url";
const LIMIT = 6;

export type InstagramMediaItem = {
  id: string;
  permalink: string;
  imageUrl: string;
  mediaType: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
};

export async function GET() {
  const userId = process.env.INSTAGRAM_USER_ID;
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!userId || !token) {
    return NextResponse.json(
      { media: [] as InstagramMediaItem[] },
      { status: 200 }
    );
  }

  try {
    const url = `${INSTAGRAM_GRAPH}/${userId}/media?fields=${FIELDS}&access_token=${token}&limit=${LIMIT}`;
    const res = await fetch(url, { next: { revalidate: 3600 } }); // cache 1 hour
    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json(
        { media: [] as InstagramMediaItem[] },
        { status: 200 }
      );
    }

    const items = (data.data ?? []) as Array<{
      id: string;
      media_type: string;
      media_url: string;
      permalink: string;
      thumbnail_url?: string;
    }>;

    const media: InstagramMediaItem[] = items.map((item) => ({
      id: item.id,
      permalink: item.permalink,
      imageUrl:
        item.media_type === "VIDEO" && item.thumbnail_url
          ? item.thumbnail_url
          : item.media_url,
      mediaType:
        item.media_type === "VIDEO"
          ? "VIDEO"
          : item.media_type === "CAROUSEL_ALBUM"
            ? "CAROUSEL_ALBUM"
            : "IMAGE",
    }));

    return NextResponse.json({ media });
  } catch {
    return NextResponse.json(
      { media: [] as InstagramMediaItem[] },
      { status: 200 }
    );
  }
}
