# Filstruktur komponent

For å holde en oversiktlig struktur i komponentene organiseres tilhørende filer på denne måten:
Merk at komponentnavn skal skrives med stor forbokstav. Dette er en konvensjon som gjør det enklere å skille mellom komponenter og andre filer.

```
├── Komponentnavn
│   ├── test
│       ├── __snapshots__                   # snapshots fra tester
│       ├── Komponent.test.tsx              # testfil for 'Komponent'
│       ├── Komponent-utils.test.ts         # tester utils-filen i komponenten
│       ├── README.md                       # dokumentasjon til tester
│   ├── Komponent.tsx                       # komponent
│   ├── Komponent.module.css                # stilark
│   ├── utils.ts                            # utils til komponenten
│   ├── README.md                           # dokumentasjon til komponenten
```

## Test

Testene for komponenten ligger i `Komponent.test.tsx`. Her er det lagt opp til at det skal være en test per funksjon i komponenten. Dette gjør det enklere å finne ut hvilken funksjon som feiler dersom en test feiler.

Eventuelle tester for utils-filer ligger i `Komponent-utils.test.ts`.

### Snapshot-tester

Snapshot-tester er en enkel måte å sjekke at det statiske innholdet på siden er som forventet. Dette er en enkel måte å sjekke at komponenten ikke har endret seg utilsiktet. Snapshot-testene vil automatisk legges i `__snapshots__`-mappen i `./test`.

### Dokumentasjon av tester

I `./test/README.md` skal det være en kort beskrivelse av testene som er skrevet for komponenten. Dersom komponenten har utils-filer skal det også være en oversikt over testene for disse.

I dokumentasjonen skal det forekomme en vurdering av hva som har blitt testet for, og hvorfor. Dersom det eventuelt ikke testes for noe vil dette redesgjøres for i dokumentasjonen.

## Dokumentasjon av komponenten

Der det ansees som nødvndig med dokumentasjon til en komponent vil denne ligger i `./README.md`. Her skal det være en kort beskrivelse av komponenten.

## Utils

Dersom komponenten har utils-filer skal disse ligge i `./utils.ts`. Testene for utils-filene vil ligge i `Komponent-utils.test.ts`.
Eventuelle utils som ikke er spesifikke for komponenten skal ligge i `.src/utils.ts` i rotmappen.
