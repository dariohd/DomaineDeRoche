# Architecture — Domaine de Roche

Site vitrine **Next.js 16** (App Router) multilingue pour un domaine château + gîtes en Charente-Maritime.

## Vue d'ensemble

```
┌──────────────────────────────────────────────────────────┐
│  app/[locale]/… — pages Server Components + metadata SEO │
├──────────────────────────────────────────────────────────┤
│  next-intl — routing /fr | /en, messages JSON            │
├──────────────────────────────────────────────────────────┤
│  components/ — Header, Footer, sections home animées     │
│  Framer Motion — scroll reveals, hero carousel             │
├──────────────────────────────────────────────────────────┤
│  lib/data/site.ts — URL canonique, contact, réseaux        │
│  Tailwind CSS 4 — design tokens, responsive mobile-first │
├──────────────────────────────────────────────────────────┤
│  Vercel — déploiement edge, preview par branche            │
└──────────────────────────────────────────────────────────┘
```

## Routing i18n

- Segment dynamique `[locale]` avec `generateStaticParams` pour `fr` et `en`.
- Fichiers de traduction : `messages/fr.json`, `messages/en.json`.
- Config centralisée dans `src/i18n/routing.ts` (locales, préfixe par défaut).

## Pages principales

| Route | Contenu |
|-------|---------|
| `/[locale]` | Hero carousel, présentation, aperçu hébergements, témoignages |
| `/[locale]/decouvrir` | Histoire du domaine, parc 13 000 m² |
| `/[locale]/hebergements` | Fiches château + 9 gîtes |
| `/[locale]/evenements` | Mariages, séminaires (capacité 80 pers.) |
| `/[locale]/region` | Tourisme Charente-Maritime |
| `/[locale]/contact` | Formulaire + coordonnées |

## SEO & performance

- `generateMetadata` par locale (titre, description, Open Graph).
- Images dans `public/`, polices Google via `next/font` (Cormorant + Outfit).
- Pas de base de données : contenu statique + traductions versionnées dans le repo.

## Déploiement

- **Production** : https://domainederoche.vercel.app
- Build : `next build` — sortie optimisée App Router.
- `vercel.json` : en-têtes sécurité, configuration projet.

## Développement local

```bash
npm install && npm run dev
```

→ http://localhost:3000/fr
