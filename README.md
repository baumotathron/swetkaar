# swetkaar
Swetkaar Vercel

## Instagram feed on Services page

The services page can show your latest Instagram posts using the Instagram Graph API.

1. Use an **Instagram Business or Creator** account linked to a **Facebook Page**.
2. Create a [Facebook Developer](https://developers.facebook.com/) app and add the **Instagram Graph API** product.
3. Get your **Instagram User ID** and a **long-lived access token** (see [Instagram Basic Display / Graph API docs](https://developers.facebook.com/docs/instagram-basic-display-api)).
4. Add to `.env.local`:
   - `INSTAGRAM_USER_ID=your_instagram_user_id`
   - `INSTAGRAM_ACCESS_TOKEN=your_long_lived_access_token`
5. Restart the dev server. The feed will load from `/api/instagram` and show up to 6 recent posts.

If these env vars are not set, the feed shows placeholder tiles that link to your profile.
