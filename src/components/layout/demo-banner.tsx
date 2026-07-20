"use client";

import { useTranslations } from "next-intl";

export function DemoBanner() {
  const t = useTranslations("demo");

  return (
    <div
      role="status"
      className="fixed inset-x-0 top-0 z-[55] border-b border-forest/10 bg-forest text-cream"
      style={{ height: "var(--demo-banner-h)" }}
    >
      <div className="flex h-full items-center justify-center px-4 text-center">
        <p className="text-[11px] font-medium tracking-[0.12em] uppercase sm:text-xs sm:tracking-[0.14em]">
          <span className="text-gold-light">{t("label")}</span>
          <span className="mx-2 text-cream/40" aria-hidden>
            ·
          </span>
          <span className="text-cream/85">{t("detail")}</span>
        </p>
      </div>
    </div>
  );
}
