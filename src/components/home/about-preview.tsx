"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { ConditionalImage } from "@/components/ui/conditional-image";

export function AboutPreview() {
  const t = useTranslations("about");
  const tc = useTranslations("common");

  return (
    <section className="section-padding overflow-hidden bg-cream">
      <div className="container-wide">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <AnimatedSection direction="left" className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <ConditionalImage
                src="https://l.icdbcdn.com/oh/057b5763-a921-4b00-bda1-19658139cb16.jpg?w=1200"
                alt="Domaine de Roche"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                placeholderLabel={tc("photoPlaceholder")}
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-forest p-6 text-cream shadow-2xl md:block lg:-right-10"
            >
              <p className="font-serif text-4xl text-gold-light">{t("parkSize")}</p>
              <p className="text-sm text-cream/70">{t("parkLabel")}</p>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.2}>
            <p className="text-sm uppercase tracking-[0.2em] text-stone">{t("sectionLabel")}</p>
            <h2 className="mt-3 font-serif text-3xl leading-tight text-forest md:text-5xl">
              {t("title")}
            </h2>
            <div className="mt-6 space-y-4 text-stone leading-relaxed">
              <p>{t("p1")}</p>
              <p>{t("p2")}</p>
              <p>{t("p3")}</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/decouvrir">{tc("discoverDomain")}</Button>
              <Button href="/contact" variant="ghost">{tc("contactUs")}</Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

export function PaymentBanner() {
  const t = useTranslations("about");

  return (
    <section className="bg-forest py-6">
      <div className="container-wide px-6 text-center md:px-10 lg:px-16">
        <p className="text-cream/90">{t("paymentBanner")}</p>
      </div>
    </section>
  );
}

export function CtaSection() {
  const t = useTranslations("cta");
  const tc = useTranslations("common");

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <ConditionalImage
          src="https://l.icdbcdn.com/oh/33686df5-bbdf-4652-8d29-2cc7b19c1bd3.jpg?w=1600"
          alt="Domaine de Roche"
          fill
          className="object-cover"
          sizes="100vw"
          placeholderLabel={tc("photoPlaceholder")}
          placeholderVariant="hero"
        />
        <div className="absolute inset-0 bg-forest/80" />
      </div>
      <div className="section-padding relative container-wide text-center">
        <AnimatedSection>
          <h2 className="font-serif text-3xl text-cream md:text-5xl">{t("title")}</h2>
          <p className="mx-auto mt-4 max-w-xl text-cream/70">{t("subtitle")}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/reservation" variant="secondary" size="lg">{t("bookOnline")}</Button>
            <Button href="/contact" variant="outline" size="lg">{t("requestQuote")}</Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
