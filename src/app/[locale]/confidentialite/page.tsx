import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal.privacy" });
  return { title: t("title") };
}

export default async function ConfidentialitePage() {
  const t = await getTranslations("legal.privacy");
  const sections = t.raw("sections") as { title: string; content: string }[];

  return (
    <section className="section-padding bg-cream pt-32">
      <div className="container-wide mx-auto max-w-3xl">
        <h1 className="font-serif text-4xl text-forest">{t("title")}</h1>
        <div className="mt-8 space-y-6 text-stone leading-relaxed">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-serif text-xl text-forest">{section.title}</h2>
              <p className="mt-2">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
