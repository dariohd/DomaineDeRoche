"use client";

import {
  Home,
  Waves,
  Sun,
  Trees,
  PawPrint,
  Shield,
  type LucideIcon,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import type { LocalizedHighlight } from "@/lib/data/content";
import { AnimatedSection, StaggerContainer, staggerItem } from "@/components/ui/animated-section";

const iconMap: Record<string, LucideIcon> = {
  home: Home,
  waves: Waves,
  sun: Sun,
  trees: Trees,
  paw: PawPrint,
  shield: Shield,
};

export function Highlights({ items }: { items: LocalizedHighlight[] }) {
  const doubled = [...items, ...items];

  return (
    <section className="overflow-hidden border-y border-forest/5 bg-cream-dark py-5">
      <div className="animate-marquee flex w-max gap-12">
        {doubled.map((item, i) => {
          const Icon = iconMap[item.icon] ?? Home;
          return (
            <div key={`${item.title}-${i}`} className="flex items-center gap-3 whitespace-nowrap">
              <Icon className="h-5 w-5 text-gold" />
              <span className="font-medium text-forest">{item.title}</span>
              <span className="text-stone/60">·</span>
              <span className="text-sm text-stone">{item.description}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function FeaturesGrid({ items }: { items: LocalizedHighlight[] }) {
  const t = useTranslations("highlights");

  return (
    <section className="section-padding bg-cream">
      <div className="container-wide">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-stone">{t("sectionLabel")}</p>
          <h2 className="mt-3 font-serif text-3xl text-forest md:text-5xl">{t("title")}</h2>
        </AnimatedSection>

        <StaggerContainer className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => {
            const Icon = iconMap[item.icon] ?? Home;
            return (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className="group rounded-2xl border border-forest/5 bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:border-gold/30 hover:shadow-xl hover:shadow-forest/5"
              >
                <div className="mb-5 inline-flex rounded-xl bg-forest/5 p-3 transition-colors group-hover:bg-gold/10">
                  <Icon className="h-6 w-6 text-forest transition-colors group-hover:text-gold" />
                </div>
                <h3 className="font-serif text-xl text-forest">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone">{item.description}</p>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
