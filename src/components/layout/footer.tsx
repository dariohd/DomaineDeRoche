import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/lib/data/site";
import { getLocalizedAccommodations } from "@/lib/data/content";

export async function Footer() {
  const t = await getTranslations("common");
  const tNav = await getTranslations("nav");
  const tMeta = await getTranslations("metadata");
  const accommodations = await getLocalizedAccommodations();

  return (
    <footer className="bg-forest text-cream">
      <div className="section-padding container-wide">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="https://l.icdbcdn.com/oh/1d23a54c-a405-4f10-93f5-c967eba92a39.png?w=200"
                alt={tMeta("siteName")}
                width={56}
                height={56}
                className="h-14 w-14 object-contain brightness-110"
              />
              <div>
                <p className="font-serif text-xl">{tMeta("siteName")}</p>
                <p className="text-xs uppercase tracking-widest text-cream/60">
                  {tMeta("tagline")}
                </p>
              </div>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-cream/70">{t("footerAbout")}</p>
          </div>

          <div>
            <h3 className="mb-4 font-serif text-lg">{tNav("accommodations")}</h3>
            <ul className="space-y-2 text-sm text-cream/70">
              {accommodations.slice(0, 8).map((acc) => (
                <li key={acc.slug}>
                  <Link
                    href={`/hebergements/${acc.slug}`}
                    className="transition-colors hover:text-gold-light"
                  >
                    {acc.shortName}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/hebergements"
                  className="font-medium text-gold-light transition-colors hover:text-gold"
                >
                  {t("seeAll")} →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-serif text-lg">Navigation</h3>
            <ul className="space-y-2 text-sm text-cream/70">
              <li><Link href="/decouvrir" className="transition-colors hover:text-gold-light">{t("discoverDomain")}</Link></li>
              <li><Link href="/hebergements" className="transition-colors hover:text-gold-light">{t("allAccommodations")}</Link></li>
              <li><Link href="/evenements" className="transition-colors hover:text-gold-light">{t("weddingsEvents")}</Link></li>
              <li><Link href="/region" className="transition-colors hover:text-gold-light">{t("exploreRegion")}</Link></li>
              <li><Link href="/reservation" className="transition-colors hover:text-gold-light">{t("onlineBooking")}</Link></li>
              <li><Link href="/contact" className="transition-colors hover:text-gold-light">{tNav("contact")}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-serif text-lg">{tNav("contact")}</h3>
            <ul className="space-y-4 text-sm text-cream/70">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>
                  {siteConfig.address.street}<br />
                  {siteConfig.address.zip} {siteConfig.address.city}
                </span>
              </li>
              <li>
                <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 transition-colors hover:text-gold-light">
                  <Phone className="h-4 w-4 text-gold" />
                  {t("firstName")} : {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`tel:${siteConfig.phoneSecondary.replace(/\s/g, "")}`} className="flex items-center gap-3 transition-colors hover:text-gold-light">
                  <Phone className="h-4 w-4 text-gold" />
                  {t("lastName")} : {siteConfig.phoneSecondary}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition-colors hover:text-gold-light"
                >
                  <Mail className="h-4 w-4 text-gold" />
                  {siteConfig.url.replace("https://", "")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 text-xs text-cream/50 md:flex-row">
          <p>© {new Date().getFullYear()} {tMeta("siteName")}. {t("copyright")}</p>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="transition-colors hover:text-cream/80">
              {t("legal")}
            </Link>
            <Link href="/confidentialite" className="transition-colors hover:text-cream/80">
              {t("privacy")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
