"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { ChevronDown, Star, ExternalLink } from "lucide-react";
import { siteConfig } from "@/lib/data/site";
import type { LocalizedFaqItem, LocalizedTestimonial } from "@/lib/data/content";
import { AnimatedSection, StaggerContainer, staggerItem } from "@/components/ui/animated-section";

export function Testimonials({ items }: { items: LocalizedTestimonial[] }) {
  const t = useTranslations("testimonials");

  return (
    <section className="section-padding bg-cream">
      <div className="container-wide">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-stone">{t("sectionLabel")}</p>
          <h2 className="mt-3 font-serif text-3xl text-forest md:text-5xl">{t("title")}</h2>
          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-stone">
              {siteConfig.stats.rating}/5 · {siteConfig.stats.reviews} {t("ratingText")}
            </span>
          </div>
        </AnimatedSection>

        <StaggerContainer className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <motion.div
              key={item.name}
              variants={staggerItem}
              className="rounded-2xl border border-forest/5 bg-white p-8 transition-shadow hover:shadow-lg hover:shadow-forest/5"
            >
              <div className="flex items-center gap-1">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-stone italic">
                &ldquo;{item.text}&rdquo;
              </p>
              <div className="mt-6 flex items-center justify-between border-t border-forest/5 pt-4">
                <div>
                  <p className="font-medium text-forest">{item.name}</p>
                  <p className="text-xs text-stone">{item.date}</p>
                </div>
                <span className="rounded-full bg-forest/5 px-3 py-1 text-xs text-stone">
                  {item.source}
                </span>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        <AnimatedSection className="mt-10 text-center">
          <a
            href={siteConfig.social.googleReviews}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-forest transition-colors hover:text-gold"
          >
            {t("seeAllGoogle")}
            <ExternalLink className="h-4 w-4" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}

export function Faq({ items }: { items: LocalizedFaqItem[] }) {
  const t = useTranslations("faq");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-cream-dark">
      <div className="container-wide">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-stone">{t("sectionLabel")}</p>
          <h2 className="mt-3 font-serif text-3xl text-forest md:text-5xl">{t("title")}</h2>
          <p className="mt-4 text-stone">{t("subtitle")}</p>
        </AnimatedSection>

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {items.map((item, index) => (
            <AnimatedSection key={item.question} delay={index * 0.05}>
              <div className="overflow-hidden rounded-xl border border-forest/5 bg-white">
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left transition-colors hover:bg-forest/[0.02]"
                >
                  <span className="font-medium text-forest">{item.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-stone transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="border-t border-forest/5 px-6 pb-6 pt-4 text-sm leading-relaxed text-stone">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
