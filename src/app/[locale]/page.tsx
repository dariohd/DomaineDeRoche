import {
  getLocalizedAccommodations,
  getLocalizedFaq,
  getLocalizedHighlights,
  getLocalizedRegionSpots,
  getLocalizedTestimonials,
} from "@/lib/data/content";
import { Hero } from "@/components/home/hero";
import { Highlights, FeaturesGrid } from "@/components/home/highlights";
import { AboutPreview, PaymentBanner, CtaSection } from "@/components/home/about-preview";
import { AccommodationsGrid } from "@/components/home/accommodations-grid";
import { Testimonials, Faq } from "@/components/home/testimonials-faq";
import { RegionPreview } from "@/components/home/region-preview";

export default async function HomePage() {
  const [accommodations, highlights, regionSpots, testimonials, faq] =
    await Promise.all([
      getLocalizedAccommodations(),
      getLocalizedHighlights(),
      getLocalizedRegionSpots(),
      getLocalizedTestimonials(),
      getLocalizedFaq(),
    ]);

  return (
    <>
      <Hero />
      <Highlights items={highlights} />
      <FeaturesGrid items={highlights} />
      <AboutPreview />
      <PaymentBanner />
      <AccommodationsGrid items={accommodations.slice(0, 6)} />
      <RegionPreview spots={regionSpots} />
      <Testimonials items={testimonials} />
      <Faq items={faq} />
      <CtaSection />
    </>
  );
}
