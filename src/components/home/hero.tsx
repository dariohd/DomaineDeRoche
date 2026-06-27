"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { heroImages, siteConfig } from "@/lib/data/site";
import { Button } from "@/components/ui/button";

export function Hero() {
  const t = useTranslations("hero");
  const tc = useTranslations("common");
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % heroImages.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-[100svh] min-h-[600px] overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={heroImages[current]}
            alt="Domaine de Rochebonne"
            fill
            priority={current === 0}
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      <div className="image-overlay absolute inset-0" />

      <div className="relative z-10 flex h-full flex-col justify-end pb-6 pt-32 md:pb-10">
        <div className="container-wide px-6 md:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="mb-4 flex items-center gap-2 text-cream/80">
              <MapPin className="h-4 w-4" />
              <span className="text-sm tracking-wide">{t("location")}</span>
            </div>

            <h1 className="max-w-4xl font-serif text-4xl leading-[1.1] text-cream md:text-6xl lg:text-7xl">
              {t("title")}
              <br />
              <span className="text-gold-light">{t("titleHighlight")}</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-cream/80 md:text-xl">{t("subtitle")}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/reservation" variant="secondary" size="lg">
                {t("bookStay")}
              </Button>
              <Button href="/hebergements" variant="outline" size="lg">
                {t("discoverAccommodations")}
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-wrap gap-6 border-t border-cream/20 pt-8 md:mt-12 md:gap-12"
          >
            {[
              { value: String(siteConfig.stats.gites), label: t("statAccommodations") },
              { value: String(siteConfig.stats.capacity), label: t("statCapacity") },
              { value: String(siteConfig.stats.rating), label: t("statRating") },
              { value: "10 min", label: t("statBeaches") },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-3xl text-gold-light md:text-4xl">{stat.value}</p>
                <p className="text-sm text-cream/60">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          <div className="mt-6 flex justify-center gap-2 md:mt-8">
            {heroImages.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? "w-8 bg-gold" : "w-1.5 bg-cream/40"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-6 hidden md:block"
          >
            <div className="glass rounded-2xl border border-forest/5 p-6 shadow-2xl">
              <div className="flex items-center justify-between gap-6">
                <div>
                  <p className="text-sm font-medium text-stone">{t("readyToGo")}</p>
                  <p className="font-serif text-xl text-forest">{t("findStay")}</p>
                </div>
                <Button href="/reservation">{t("checkAvailability")}</Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute right-6 top-1/2 z-20 flex -translate-y-1/2 gap-2 md:right-10">
        <button
          type="button"
          onClick={prev}
          className="rounded-full bg-cream/10 p-3 text-cream backdrop-blur-sm transition-colors hover:bg-cream/20"
          aria-label={tc("previousImage")}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={next}
          className="rounded-full bg-cream/10 p-3 text-cream backdrop-blur-sm transition-colors hover:bg-cream/20"
          aria-label={tc("nextImage")}
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}
