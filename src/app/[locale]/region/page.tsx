import { getTranslations } from "next-intl/server";
import { getLocalizedRegionSpots } from "@/lib/data/content";
import { RegionGrid } from "@/components/home/region-preview";
import { CtaSection } from "@/components/home/about-preview";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "region" });
  return {
    title: t("pageTitle"),
    description: t("pageSubtitle"),
  };
}

export default async function RegionPage() {
  const spots = await getLocalizedRegionSpots();

  return (
    <>
      <div className="pt-24" />
      <RegionGrid spots={spots} />
      <CtaSection />
    </>
  );
}
