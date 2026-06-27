export type AccommodationMeta = {
  slug: string;
  type: "chateau" | "maison" | "gite" | "studio" | "combo";
  guests: number;
  bedrooms: number;
  bathrooms?: number;
  beds?: number;
  image: string;
  images: string[];
  featured?: boolean;
  privatePool?: boolean;
};

export const accommodationMeta: AccommodationMeta[] = [
  {
    slug: "chateau",
    type: "chateau",
    guests: 20,
    bedrooms: 8,
    bathrooms: 4,
    beds: 11,
    featured: true,
    privatePool: true,
    image: "https://l.icdbcdn.com/oh/509ecfea-facf-4d85-924d-7e36b8343ddf.jpg?w=1200",
    images: [
      "https://l.icdbcdn.com/oh/509ecfea-facf-4d85-924d-7e36b8343ddf.jpg?w=1200",
      "https://l.icdbcdn.com/oh/92f0fe01-98b4-49b0-b718-02e34fc6d028.jpg?w=1200",
      "https://l.icdbcdn.com/oh/befb98ee-5b80-4d62-8c65-9cb467278b00.jpg?w=1200",
    ],
  },
  {
    slug: "la-charrue",
    type: "maison",
    guests: 10,
    bedrooms: 4,
    image: "https://l.icdbcdn.com/oh/4a8ec480-78f0-4534-be28-2690d7e3ae34.jpg?w=1200",
    images: [
      "https://l.icdbcdn.com/oh/4a8ec480-78f0-4534-be28-2690d7e3ae34.jpg?w=1200",
      "https://l.icdbcdn.com/oh/0faf45ea-2f63-4330-a828-950bbd13022c.jpg?w=1200",
    ],
  },
  {
    slug: "le-pressoir",
    type: "maison",
    guests: 8,
    bedrooms: 3,
    image: "https://l.icdbcdn.com/oh/628060aa-a9f2-46a0-af58-81cab6e551b6.jpg?w=1200",
    images: ["https://l.icdbcdn.com/oh/628060aa-a9f2-46a0-af58-81cab6e551b6.jpg?w=1200"],
  },
  {
    slug: "la-cave",
    type: "maison",
    guests: 6,
    bedrooms: 3,
    image: "https://l.icdbcdn.com/oh/8f3d6fa7-601c-4a53-9198-d8ff43d63496.jpg?w=1200",
    images: ["https://l.icdbcdn.com/oh/8f3d6fa7-601c-4a53-9198-d8ff43d63496.jpg?w=1200"],
  },
  {
    slug: "maison-piscine-privee",
    type: "maison",
    guests: 12,
    bedrooms: 4,
    privatePool: true,
    image: "https://l.icdbcdn.com/oh/466bb09b-3f43-4449-af48-fdf0b27c8d7f.jpg?w=1200",
    images: ["https://l.icdbcdn.com/oh/466bb09b-3f43-4449-af48-fdf0b27c8d7f.jpg?w=1200"],
  },
  {
    slug: "le-chai",
    type: "gite",
    guests: 4,
    bedrooms: 2,
    image: "https://l.icdbcdn.com/oh/832dfc1c-51c9-411e-b162-cf097bf3e266.jpg?w=1200",
    images: ["https://l.icdbcdn.com/oh/832dfc1c-51c9-411e-b162-cf097bf3e266.jpg?w=1200"],
  },
  {
    slug: "la-mangeoire",
    type: "gite",
    guests: 4,
    bedrooms: 2,
    image: "https://l.icdbcdn.com/oh/eb230029-c29c-4a68-a46c-770f510d5b6d.jpg?w=1200",
    images: ["https://l.icdbcdn.com/oh/eb230029-c29c-4a68-a46c-770f510d5b6d.jpg?w=1200"],
  },
  {
    slug: "le-four-a-pain",
    type: "gite",
    guests: 4,
    bedrooms: 2,
    image: "https://l.icdbcdn.com/oh/e5a0cbf3-b8d6-4a81-9d37-a214a2e1d8e0.jpg?w=1200",
    images: ["https://l.icdbcdn.com/oh/e5a0cbf3-b8d6-4a81-9d37-a214a2e1d8e0.jpg?w=1200"],
  },
  {
    slug: "la-chaumiere",
    type: "gite",
    guests: 3,
    bedrooms: 1,
    image: "https://l.icdbcdn.com/oh/9f626302-87c4-43aa-8fa8-94113756e4c5.jpg?w=1200",
    images: ["https://l.icdbcdn.com/oh/9f626302-87c4-43aa-8fa8-94113756e4c5.jpg?w=1200"],
  },
  {
    slug: "le-studio",
    type: "studio",
    guests: 2,
    bedrooms: 1,
    image: "https://l.icdbcdn.com/oh/13e4c677-13cb-4001-9e2c-32b375860ad8.jpg?w=1200",
    images: ["https://l.icdbcdn.com/oh/13e4c677-13cb-4001-9e2c-32b375860ad8.jpg?w=1200"],
  },
  {
    slug: "pressoir-cave",
    type: "combo",
    guests: 14,
    bedrooms: 6,
    image: "https://l.icdbcdn.com/oh/92b6eaa5-e385-4c4f-a8b8-e393225ae8af.jpg?w=1200",
    images: ["https://l.icdbcdn.com/oh/92b6eaa5-e385-4c4f-a8b8-e393225ae8af.jpg?w=1200"],
  },
  {
    slug: "domaine-entier",
    type: "combo",
    guests: 68,
    bedrooms: 30,
    featured: true,
    image: "https://l.icdbcdn.com/oh/ef3765af-d04f-4097-ad51-91253d1c80b5.jpg?w=1200",
    images: [
      "https://l.icdbcdn.com/oh/ef3765af-d04f-4097-ad51-91253d1c80b5.jpg?w=1200",
      "https://l.icdbcdn.com/oh/33686df5-bbdf-4652-8d29-2cc7b19c1bd3.jpg?w=1200",
    ],
  },
];

export const regionSpotKeys = [
  "oleron",
  "rochelle",
  "royan",
  "palmyre",
  "marennes",
  "rochefort",
] as const;

export const regionSpotImages: Record<(typeof regionSpotKeys)[number], string> = {
  oleron: "https://l.icdbcdn.com/oh/628060aa-a9f2-46a0-af58-81cab6e551b6.jpg?w=800",
  rochelle: "https://l.icdbcdn.com/oh/8f3d6fa7-601c-4a53-9198-d8ff43d63496.jpg?w=800",
  royan: "https://l.icdbcdn.com/oh/466bb09b-3f43-4449-af48-fdf0b27c8d7f.jpg?w=800",
  palmyre: "https://l.icdbcdn.com/oh/832dfc1c-51c9-411e-b162-cf097bf3e266.jpg?w=800",
  marennes: "https://l.icdbcdn.com/oh/eb230029-c29c-4a68-a46c-770f510d5b6d.jpg?w=800",
  rochefort: "https://l.icdbcdn.com/oh/e5a0cbf3-b8d6-4a81-9d37-a214a2e1d8e0.jpg?w=800",
};

export const highlightIcons = ["home", "waves", "sun", "trees", "paw", "shield"] as const;

export type LocalizedAccommodation = AccommodationMeta & {
  name: string;
  shortName: string;
  description: string;
  highlights: string[];
};

export type LocalizedRegionSpot = {
  key: (typeof regionSpotKeys)[number];
  name: string;
  distance: string;
  description: string;
  image: string;
};

export type LocalizedHighlight = {
  icon: (typeof highlightIcons)[number];
  title: string;
  description: string;
};

export type LocalizedFaqItem = { question: string; answer: string };
export type LocalizedTestimonial = {
  name: string;
  date: string;
  text: string;
  source: string;
  rating: number;
};

export async function getLocalizedAccommodations(): Promise<LocalizedAccommodation[]> {
  const { getTranslations } = await import("next-intl/server");
  const t = await getTranslations("accommodations");

  return accommodationMeta.map((meta) => ({
    ...meta,
    name: t(`${meta.slug}.name`),
    shortName: t(`${meta.slug}.shortName`),
    description: t(`${meta.slug}.description`),
    highlights: t.raw(`${meta.slug}.highlights`) as string[],
  }));
}

export async function getLocalizedAccommodation(
  slug: string,
): Promise<LocalizedAccommodation | undefined> {
  const items = await getLocalizedAccommodations();
  return items.find((a) => a.slug === slug);
}

export async function getLocalizedRegionSpots(): Promise<LocalizedRegionSpot[]> {
  const { getTranslations } = await import("next-intl/server");
  const t = await getTranslations("region.spots");

  return regionSpotKeys.map((key) => ({
    key,
    name: t(`${key}.name`),
    distance: t(`${key}.distance`),
    description: t(`${key}.description`),
    image: regionSpotImages[key],
  }));
}

export async function getLocalizedHighlights(): Promise<LocalizedHighlight[]> {
  const { getTranslations } = await import("next-intl/server");
  const t = await getTranslations("highlights.items");

  return highlightIcons.map((icon) => ({
    icon,
    title: t(`${icon}.title`),
    description: t(`${icon}.description`),
  }));
}

export async function getLocalizedFaq(): Promise<LocalizedFaqItem[]> {
  const { getTranslations } = await import("next-intl/server");
  const t = await getTranslations("faq");
  const items = t.raw("items") as LocalizedFaqItem[];
  return items;
}

export async function getLocalizedTestimonials(): Promise<LocalizedTestimonial[]> {
  const { getTranslations } = await import("next-intl/server");
  const t = await getTranslations("testimonials");
  const items = t.raw("items") as Omit<LocalizedTestimonial, "rating">[];
  return items.map((item) => ({ ...item, rating: 5 }));
}
