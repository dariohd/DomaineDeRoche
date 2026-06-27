import { getTranslations } from "next-intl/server";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { EventTypesGrid } from "@/components/events/event-types-grid";
import { CtaSection } from "@/components/home/about-preview";
import { ConditionalImage } from "@/components/ui/conditional-image";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "events" });
  return {
    title: t("heroTitle"),
    description: t("heroSubtitle"),
  };
}

export default async function EvenementsPage() {
  const t = await getTranslations("events");
  const tc = await getTranslations("common");
  const capacityItems = t.raw("capacityItems") as string[];

  return (
    <>
      <section className="relative flex min-h-[60vh] items-end pt-24">
        <div className="absolute inset-0">
          <ConditionalImage
            src="https://l.icdbcdn.com/oh/509ecfea-facf-4d85-924d-7e36b8343ddf.jpg?w=1600"
            alt="Château pour événements"
            fill
            className="object-cover"
            sizes="100vw"
            placeholderLabel={tc("photoPlaceholder")}
            placeholderVariant="hero"
          />
          <div className="image-overlay absolute inset-0" />
        </div>
        <div className="section-padding relative container-wide pb-16">
          <AnimatedSection>
            <p className="text-sm uppercase tracking-[0.2em] text-gold-light">{t("heroLabel")}</p>
            <h1 className="mt-3 max-w-3xl font-serif text-4xl text-cream md:text-6xl">{t("heroTitle")}</h1>
            <p className="mt-6 max-w-xl text-lg text-cream/80">{t("heroSubtitle")}</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-wide">
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl text-forest md:text-4xl">{t("sectionTitle")}</h2>
            <p className="mt-4 text-stone">{t("sectionSubtitle")}</p>
          </AnimatedSection>
          <EventTypesGrid />
        </div>
      </section>

      <section className="section-padding bg-forest text-cream">
        <div className="container-wide">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <AnimatedSection>
              <h2 className="font-serif text-3xl md:text-4xl">{t("capacityTitle")}</h2>
              <ul className="mt-8 space-y-4 text-cream/80">
                {capacityItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
            <AnimatedSection delay={0.2} direction="right">
              <div className="rounded-2xl bg-cream/10 p-8 backdrop-blur-sm">
                <h3 className="font-serif text-2xl">{t("quoteTitle")}</h3>
                <p className="mt-4 text-cream/70 leading-relaxed">{t("quoteText")}</p>
                <Button href="/contact" variant="secondary" className="mt-6">
                  {tc("requestQuote")}
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
