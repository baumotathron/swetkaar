import Link from "next/link";
import { navigation } from "@/lib/data";
import { Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mx-auto mt-32 w-full max-w-6xl px-6 pb-16 pt-12">
      <div className="rounded-[2.5rem] border border-white/10 bg-black/60 px-8 py-10 backdrop-blur">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-white/40">
              Swetkaar AI
            </span>
            <h3 className="mt-4 font-display text-3xl text-white">
              Craft the story only your future remembers.
            </h3>
          </div>
          <div className="flex flex-col items-end gap-3">
            <span className="text-[11px] uppercase tracking-[0.4em] text-white/40">
              hello@swetkaar.com
            </span>
            <a
              href="https://www.instagram.com/swetkaar.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-full border border-electric/40 bg-electric/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-electric transition hover:border-electric hover:bg-electric/20"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="h-4 w-4" />
              <span>Instagram</span>
            </a>
          </div>
        </div>
        <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-electric/40 to-transparent" />
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <nav className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.3em] text-white/50">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full border border-transparent px-4 py-2 transition hover:border-electric/40 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="text-xs uppercase tracking-[0.3em] text-white/40">
            © {new Date().getFullYear()} Swetkaar AI. All creation reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}


