import { getTranslations } from "next-intl/server";
import { getLocalizedAccommodations } from "@/lib/data/content";
import { AccommodationsGrid } from "@/components/home/accommodations-grid";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "accommodations" });
  return {
    title: t("pageTitle"),
    description: t("pageSubtitle"),
  };
}

export default async function HebergementsPage() {
  const accommodations = await getLocalizedAccommodations();

  return (
    <div className="pt-24">
      <AccommodationsGrid items={accommodations} showAll />
    </div>
  );
}
