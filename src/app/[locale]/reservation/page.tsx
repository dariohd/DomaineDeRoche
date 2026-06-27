import { Suspense } from "react";
import { getTranslations } from "next-intl/server";
import ReservationForm from "@/components/reservation/reservation-form";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "reservation" });
  return {
    title: t("title"),
    description: t("subtitle"),
  };
}

export default async function ReservationPage() {
  return (
    <Suspense>
      <ReservationForm />
    </Suspense>
  );
}
