# Prosjektnavn README

Dette README-dokumentet gir en oversikt over de tilgjengelige npm-scriptene for dette prosjektet. Disse scriptene hjelper deg med å håndtere utvikling, testing, bygging og annen vedlikehold av prosjektet.

## Tilgjengelige NPM-script

```
npm run dev
```

Dette scriptet starter Vite-utviklingsmodus. Prosjektet vil bli kjørt lokalt på lokalt portnummer. Eventuelle endringer i koden vil utløse automatisk oppdatering av nettleseren.

```
npm start
```

Dette scriptet starter også Vite-utviklingsmodus og oppfører seg identisk til `npm run dev`.

```cli
npm test
```

Dette scriptet kjører tester ved hjelp av Vitest. Det vil kjøre alle tester i prosjektet.

```cli
npm run coverage
```

Dette scriptet kjører tester med kodedekning ved hjelp av Vitest. Etter fullføring vil det generere rapporter for kodedekning som du kan finne i prosjektet ditt. Rapporter finner du [her](./coverage/index.html)

```
npm run build
```

Dette scriptet bygger prosjektet for produksjon ved hjelp av Vite. Før bygging vil det utføre følgende trinn:

- Kjør linting for TypeScript-filer.
- Kjør linting for SCSS-filer.
- Kjør TypeScript-kompilering.
- Kjør Vite-bygging.

```cli
npm run lint
```

Dette scriptet kjører ESLint for å sjekke TypeScript- og TypeScript-relaterte filer i prosjektet for stilfeil og feil i koden. Den vil også rapportere om eventuelle ubrukte ESLint-disable-direktiver.

```cli
npm run lint:fix
```

Dette scriptet kjører ESLint med `--fix`-flagget for å automatisk løse formateringsproblemer og stilfeil i prosjektfilene. Dette kan hjelpe med å forbedre kodekvaliteten.

```cli
npm run lint:scss
```

Dette scriptet kjører Stylelint for å sjekke SCSS-filer i prosjektet for stilfeil og feil i koden.

```cli
npm run preview
```

Dette scriptet starter Vite i forhåndsvisningsmodus, som gir deg muligheten til å forhåndsvise produksjonsbygget lokalt før det eventuelt deployes.

```cli
npm run format
```

Dette scriptet kjører Prettier for å formatere koden i TypeScript-, JavaScript-, SCSS-, JSON- og CSS-filene i prosjektet i henhold til konfigurasjonen som er definert i `.prettierrc.cjs`-filen.

## Filstruktur

[Filstruktur](./docs/filstruktur.md)
