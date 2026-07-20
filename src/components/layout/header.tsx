"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { siteConfig } from "@/lib/data/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { routing, type Locale } from "@/i18n/routing";

const navItems = [
  { href: "/", key: "home" },
  { href: "/decouvrir", key: "discover" },
  { href: "/hebergements", key: "accommodations" },
  { href: "/evenements", key: "events" },
  { href: "/region", key: "region" },
  { href: "/contact", key: "contact" },
] as const;

function hasDarkHeroAtTop(pathname: string) {
  if (pathname === "/") return true;
  if (pathname === "/decouvrir" || pathname === "/evenements") return true;
  return /^\/hebergements\/[^/]+$/.test(pathname);
}

function LanguageSwitcher({ solid }: { solid: boolean }) {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (nextLocale: Locale) => {
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <div className="flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full border border-current/10 p-0.5">
      {routing.locales.map((loc) => (
        <button
          key={loc}
          type="button"
          onClick={() => switchLocale(loc)}
          className={cn(
            "rounded-full px-2.5 py-1 text-xs font-medium uppercase tracking-wide transition-colors",
            locale === loc
              ? solid
                ? "bg-forest text-cream"
                : "bg-cream/20 text-cream"
              : solid
                ? "text-stone hover:text-forest"
                : "text-cream/70 hover:text-cream",
          )}
        >
          {loc}
        </button>
      ))}
    </div>
  );
}

export function Header() {
  const t = useTranslations("nav");
  const tMeta = useTranslations("metadata");
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const darkHero = hasDarkHeroAtTop(pathname);
  const solid = scrolled || !darkHero;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed left-0 right-0 z-50 transition-all duration-500",
          "top-[var(--demo-banner-h)]",
          solid
            ? "glass border-b border-forest/5 py-3 shadow-sm"
            : "bg-transparent py-5",
        )}
      >
        <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between gap-3 px-4 md:px-8 lg:px-10 xl:gap-6 xl:px-12">
          <Link href="/" className="group flex shrink-0 items-center gap-2.5 sm:gap-3">
            <Image
              src="https://l.icdbcdn.com/oh/1d23a54c-a405-4f10-93f5-c967eba92a39.png?w=200"
              alt={tMeta("siteName")}
              width={48}
              height={48}
              className="h-10 w-10 shrink-0 object-contain transition-transform duration-300 group-hover:scale-105 md:h-11 md:w-11"
            />
            <div className="hidden min-w-0 sm:block">
              <p
                className={cn(
                  "whitespace-nowrap font-serif text-base leading-tight tracking-wide transition-colors lg:text-lg xl:text-xl",
                  solid ? "text-forest" : "text-cream",
                )}
              >
                {tMeta("siteName")}
              </p>
              <p
                className={cn(
                  "hidden whitespace-nowrap text-[10px] uppercase tracking-[0.2em] transition-colors xl:block xl:text-xs",
                  solid ? "text-stone" : "text-cream/70",
                )}
              >
                Charente-Maritime
              </p>
            </div>
          </Link>

          <nav className="hidden shrink-0 items-center lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "whitespace-nowrap rounded-full px-2.5 py-2 text-[13px] font-medium transition-all duration-300 xl:px-3.5 xl:text-sm",
                  solid
                    ? "text-forest/80 hover:bg-forest/5 hover:text-forest"
                    : "text-cream/90 hover:bg-cream/10 hover:text-cream",
                )}
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>

          <div className="hidden shrink-0 items-center gap-2 lg:flex xl:gap-3">
            <LanguageSwitcher solid={solid} />
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className={cn(
                "flex shrink-0 items-center gap-1.5 whitespace-nowrap text-[13px] transition-colors xl:text-sm",
                solid ? "text-stone hover:text-forest" : "text-cream/80 hover:text-cream",
              )}
            >
              <Phone className="h-4 w-4 shrink-0" />
              <span className="hidden xl:inline">{siteConfig.phone}</span>
            </a>
            <Button href="/reservation" variant={solid ? "primary" : "secondary"} size="sm" className="shrink-0">
              {t("book")}
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher solid={solid} />
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className={cn(
                "rounded-lg p-2 transition-colors",
                solid ? "text-forest" : "text-cream",
              )}
              aria-label={t("openMenu")}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-forest/95 backdrop-blur-md lg:hidden"
          >
            <div className="flex h-full flex-col px-6 py-6">
              <div className="flex items-center justify-between">
                <span className="font-serif text-xl text-cream">{t("menu")}</span>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg p-2 text-cream"
                  aria-label={t("closeMenu")}
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <nav className="mt-12 flex flex-col gap-2">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-xl px-4 py-4 font-serif text-2xl text-cream transition-colors hover:bg-cream/10"
                    >
                      {t(item.key)}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto space-y-4 pb-8">
                <Button href="/reservation" variant="secondary" size="lg" className="w-full">
                  {t("book")}
                </Button>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="flex items-center justify-center gap-2 text-cream/80"
                >
                  <Phone className="h-4 w-4" />
                  {siteConfig.phone}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
