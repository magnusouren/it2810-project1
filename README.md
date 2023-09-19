# Prosjektnavn README

## Tilgjengelige NPM-script

Denne seksjonen gir en oversikt over de tilgjengelige npm-scriptene for dette prosjektet. Disse scriptene hjelper deg med å håndtere utvikling, testing, bygging og annen vedlikehold av prosjektet.

```
npm i
```

Må kjøres for å kunne kjøre prosjektet

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

Dette prosjektet følger en bestemt filstruktur. Denne seksjonen gir en oversikt over filstrukturen og beskriver hva som skal være i de forskjellige mappene og filene.

[Filstruktur prosjekt](./docs/filstruktur-prosjekt.md)

[Filstruktur komponent](./docs/filstruktur-komponent.md)

## Copy project to VM

1. Build project with `npm run build`
2. run `npm run preview` to preview the application before deployment
3. Copy files from `dist` folder to VM with `scp -r dist <username>@it2810-16.idi.ntnu.no:/tmp/`. Replace `<username>` with your username!
4. SSH into VM with `ssh <username>@it2810-16.idi.ntnu.no`. Replace `<username>` with your username!
5. Move files from `/tmp/dist` to `/var/www/html` with `sudo mv /tmp/dist/* /var/www/html/project1`
