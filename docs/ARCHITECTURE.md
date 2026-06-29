# Notes techniques

Site Next.js 16 (App Router), TypeScript, Tailwind 4. Contenu FR/EN via next-intl : routes sous `src/app/[locale]/`, textes dans `messages/fr.json` et `messages/en.json`.

## i18n

`routing.ts` déclare les locales. `generateStaticParams` pré-génère `/fr` et `/en`. Le middleware next-intl redirige vers la locale par défaut.

## Contenu

Pas de CMS ni de base : hébergements, événements, textes région, etc. sont dans les composants et les fichiers de traduction. La config globale (URL, téléphones, réseaux) est dans `src/lib/data/site.ts`.

Animations scroll et hero carousel : Framer Motion. Metadata SEO par page via `generateMetadata` dans le layout locale.

## Pages

- `/[locale]` — accueil
- `/[locale]/decouvrir`, `/hebergements`, `/evenements`, `/region`, `/contact`

## Déploiement

Push sur `main` → Vercel. `next build`, pas de variables d'env obligatoires pour le site tel qu'il est aujourd'hui.
