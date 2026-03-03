"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { navigation } from "@/lib/data";

export function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        isScrolled ? "py-3 backdrop-blur-xl" : "py-6"
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border border-electric/30 bg-black/70 px-6 py-3 shadow-inner-glow backdrop-blur-xl transition-all">
        <Link href="/" className="flex items-center gap-3">
          <span className="logo_main relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-electric/20">
            <span className="absolute inset-0 animate-pulse rounded-full bg-electric/40 blur-xl" />
            <Image
              src="/swetkaar_logo.webp"
              alt="Swetkaar"
              width={64}
              height={64}
              className="relative z-10 h-full w-full object-cover"
              priority
            />
          </span>
          <div className="flex flex-col leading-tight">
            <span className="font-display text-lg tracking-widest text-white">SWETKAAR</span>
          </div>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-white/80 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative transition hover:text-white"
            >
              {item.label}
              <span className="absolute inset-x-0 -bottom-2 h-px origin-left scale-x-0 bg-gradient-to-r from-electric via-tech-blue to-electric transition-transform duration-300 hover:scale-x-100" />
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <a
            href="https://www.instagram.com/swetkaar.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-electric/40 bg-electric/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-electric transition hover:border-electric hover:bg-electric/20"
          >
            <Instagram className="h-4 w-4" />
            <span>Instagram</span>
            <ArrowUpRight className="h-3 w-3 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <Link
            href="/contact"
            className="rounded-full border border-gold/60 bg-gradient-to-r from-gold/20 via-gold/15 to-transparent px-5 py-2 text-sm font-semibold text-gold transition hover:border-gold hover:bg-gold/20"
          >
            Let's Talk
          </Link>
        </div>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-electric/40 bg-black/70 p-2 text-white hover:border-electric md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <AnimatePresence>
        {isOpen ? (
          <motion.nav
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="mx-auto mt-4 w-[92%] max-w-md overflow-hidden rounded-3xl border border-electric/40 bg-black/90 p-6 md:hidden"
          >
            <ul className="flex flex-col gap-4 text-sm font-semibold text-white/80">
              {navigation.map((item) => (
                <li key={item.href} className="group">
                  <Link
                    href={item.href}
                    className="flex items-center justify-between rounded-xl border border-transparent bg-white/0 px-4 py-3 transition group-hover:border-electric/50 group-hover:bg-electric/10"
                  >
                    <span>{item.label}</span>
                    <span className="text-xs uppercase tracking-wider text-electric/70">
                      Explore
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 grid gap-3">
              <a
                href="https://www.instagram.com/swetkaar.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-electric/40 bg-electric/10 px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-electric transition hover:border-electric hover:bg-electric/20"
              >
                <Instagram className="h-4 w-4" />
                <span>Instagram</span>
                <ArrowUpRight className="h-3 w-3 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <Link
                href="/contact"
                className="rounded-full border border-gold/60 bg-gradient-to-r from-gold/20 via-transparent to-transparent px-5 py-3 text-center text-sm font-semibold text-gold transition hover:border-gold hover:bg-gold/20"
              >
                Let's Talk
              </Link>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

