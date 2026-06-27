"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Heart, Users, Sparkles, Camera, type LucideIcon } from "lucide-react";
import { StaggerContainer, staggerItem } from "@/components/ui/animated-section";

const eventKeys = ["wedding", "seminar", "birthday", "privatization"] as const;
const iconMap: Record<(typeof eventKeys)[number], LucideIcon> = {
  wedding: Heart,
  seminar: Users,
  birthday: Sparkles,
  privatization: Camera,
};

export function EventTypesGrid() {
  const t = useTranslations("events.types");

  return (
    <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-2">
      {eventKeys.map((key) => {
        const Icon = iconMap[key];
        return (
          <motion.div
            key={key}
            variants={staggerItem}
            className="rounded-2xl border border-forest/5 bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-forest/5"
          >
            <div className="mb-5 inline-flex rounded-xl bg-gold/10 p-3">
              <Icon className="h-6 w-6 text-gold" />
            </div>
            <h3 className="font-serif text-xl text-forest">{t(`${key}.title`)}</h3>
            <p className="mt-3 text-sm leading-relaxed text-stone">{t(`${key}.description`)}</p>
          </motion.div>
        );
      })}
    </StaggerContainer>
  );
}
