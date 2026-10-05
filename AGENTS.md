# Projektbeskrivelse

- Projektet er en landingpage for et tegne- og akvarelkursus for voksne.
- Siden skal informere om kurset, priser og tilmelding.
- Projektet består af statiske sider uden CMS eller backend.
- Bevar hjemmesidens eksisterende sprog, tone og visuelle udtryk.
- Figma-designet er den primære visuelle reference for layout, spacing, typografi, farver, billedplacering og responsive forskelle.
- Websitet skal implementeres så tæt på Figma-designet som praktisk muligt.

# Teknologier

- Brug HTML5, CSS3 og almindelig JavaScript.
- Siden skal fungere uden kompilering eller build-proces.
- Tilføj ikke frameworks, biblioteker, pakker eller preprocessorer uden udtrykkelig tilladelse.

# Projektstruktur

- Placér HTML-filer i projektets rod.
- Placér CSS, JavaScript, billeder og fonte i relevante undermapper under `assets/`.
- `robots.txt`, `sitemap.xml`, `favicon.ico` og `site.webmanifest` må ligge i roden.
- Brug relative filstier.
- Følg den eksisterende struktur. Ændr den kun, når opgaven kræver det, og forklar hvorfor.

```text
/
├── index.html
├── AGENTS.md
├── robots.txt
├── sitemap.xml
├── favicon.ico
├── site.webmanifest
└── assets/
    ├── css/
    ├── js/
    ├── images/
    └── fonts/
```

# Figma som designgrundlag

- Brug Figma-filen som den primære visuelle reference.
- Desktop- og mobilframes er de vigtigste referencepunkter.
- Layout, størrelsesforhold, spacing, typografi, farver, billeder og placeringer skal matche Figma så tæt som praktisk muligt.
- Codex må ikke ændre eller "forbedre" designet efter eget valg.
- Hvis noget i Figma er uklart eller teknisk vanskeligt at implementere, skal det oplyses.
- Brug Figma til at identificere komponenter, billeder, ikoner, SVG'er og andre designressourcer.
- Brug relevante Figma-assets i projektet og gem dem lokalt i den eksisterende `assets/`-struktur.
- Midlertidige Figma-URL'er må ikke bruges i den færdige kode.
- Eventuel kode eller struktur genereret fra Figma skal tilpasses projektets eksisterende HTML- og CSS-struktur og må ikke kopieres ukritisk.
- Statiske desktop- og mobilframes er tilstrækkelige som designreference. Prototype-interactions er kun nødvendige, hvis en funktion eller interaktion ikke kan aflæses entydigt af de statiske frames.

# Arbejdsform

- Undersøg eksisterende kode, filer, Figma-design og designmønstre før ændringer.
- Lav kun de ændringer, der er nødvendige for den aktuelle opgave.
- Genbrug eksisterende kode og filer, når det er muligt.
- Genbrug eksisterende HTML-strukturer og CSS-regler, når elementer har samme funktion eller visuelle opbygning.
- Undgå unødvendig duplikering af HTML og CSS.
- Mindre refaktorering er tilladt, når det reducerer duplikering, forbedrer strukturen og ikke ændrer Figma-designet eller eksisterende funktionalitet.
- Undgå unødvendig abstraktion, hvis det gør koden sværere at læse eller vedligeholde.
- Bevar eksisterende funktionalitet, design og tekstens betydning.
- Ret ikke andre forskelle mellem websitet og Figma, medmindre de er omfattet af den aktuelle opgave.
- Andre observerede afvigelser må nævnes som forslag eller observationer i opsummeringen.
- Spørg før ændringer af visuel identitet, centrale tekster, priser, tilmelding, eksterne tjenester eller overordnet struktur.
- Hvis vigtig information mangler, skal du spørge eller bruge en tydelig pladsholder som `[INDSÆT KURSUSPRIS]`. Gæt ikke.

# Prioritet ved konflikter

Hvis instruktioner eller eksisterende kode er i konflikt, bruges følgende prioritet:

1. krav i `AGENTS.md`;
2. Figma-designet som visuel reference;
3. eksisterende kode og projektstruktur.

- Genbrug eksisterende kode, når det kan ske uden at bryde `AGENTS.md` eller ændre Figma-designet.
- Informér kort om relevante ændringer, der foretages for at løse en konflikt.

# Tilladte ændringer

- Opret og rediger HTML, CSS og JavaScript.
- Ret fejl.
- Forbedr layout, responsivitet, tilgængelighed, ydeevne og teknisk SEO.
- Refaktorér mindre dele af HTML og CSS, når det reducerer unødvendig duplikering.
- Foreslå større forbedringer uden at gennemføre dem uden godkendelse.

# Andre vigtige ting i projektet

## HTML og indhold

- Brug semantisk HTML og én meningsfuld `h1` pr. side.
- Brug en logisk overskriftsstruktur og `lang="da"` på danske sider.
- Brug præcise tekster på links og knapper.
- Bevar eksisterende tilmeldingslinks og formularhandlinger.
- Brug en pladsholder, hvis en destination mangler.
- Opfind ikke links eller destinationer.
- Brug navigation og knapdestinationer fra Figma og den aktuelle prompt.
- Genbrug samme semantiske HTML-struktur på desktop og mobil, hvor det er muligt.
- Forskelle mellem desktop- og mobilframes skal som udgangspunkt håndteres med responsiv CSS frem for separate HTML-strukturer.
- Separate HTML-strukturer må kun bruges, hvis indholdet eller funktionaliteten reelt er forskellig.

## CSS og responsivitet

- Arbejd mobile-first, medmindre den eksisterende CSS konsekvent bruger en anden tilgang.
- Desktop- og mobilframes i Figma er de vigtigste responsive referencepunkter.
- Sørg også for et stabilt responsivt layout mellem disse størrelser, eksempelvis tablet og mindre laptops.
- Designet fra Figma skal bevares så tæt som muligt ved alle skærmstørrelser.
- Vælg breakpoints ud fra layoutets faktiske behov frem for faste standardværdier.
- Undgå overlappende indhold og utilsigtet vandret rulning på hele siden.
- Tekst, billeder og andre elementer skal tilpasse sig responsivt uden at overlappe hinanden.
- Undgå tilfældige linjeskift midt i ord og unødvendige bindestreger.
- Genbrug eksisterende CSS-klasser, variabler, spacing-regler og layoutmønstre, når det er muligt.
- Undgå næsten identiske CSS-regler. Saml fælles styling i genanvendelige klasser, når det gør strukturen enklere.
- Genbrug eksisterende farver, typografi og afstande.
- Undgå `!important`, medmindre det er nødvendigt og begrundet.
- Respektér `prefers-reduced-motion` ved animationer.

### Vandret scrolling på mobil

- Sektionerne **Kurser** og **Testimonials** må bruge vandret scrolling i mobilvisning, men kun hvis denne opbygning fremgår af mobilframen i Figma.
- Hvis Figma viser disse sektioner som vandrette rækker, skal denne adfærd bevares.
- Næste kort må gerne være delvist synligt, så det visuelt fremgår, at sektionen kan scrolles.
- Vandret scrolling skal begrænses til den relevante sektion og må ikke skabe vandret scrolling på hele siden.
- Brug ikke vandret scrolling i disse sektioner, hvis det ikke fremgår af mobilframen.

## JavaScript

- Brug kun JavaScript til funktioner, der ikke kan løses med HTML og CSS.
- Centrale oplysninger om kursus, priser og tilmelding skal kunne læses uden JavaScript.
- Undgå globale variabler og inline event handlers.
- Kontrollér, at DOM-elementer findes, før de bruges.
- Implementér kun interaktioner, der fremgår af Figma, den aktuelle prompt eller eksisterende funktionalitet.
- Opfind ikke funktioner eller interaktioner, der ikke er specificeret.

## Tilgængelighed

- Sørg for tastaturbetjening, synlig fokusmarkering og logisk fokusorden.
- Knyt labels til formularfelter.
- Brug beskrivende alt-tekst til informative billeder og tom alt-tekst til dekorative billeder.
- Brug ikke farve som den eneste måde at formidle betydning på.
- Sørg for tilstrækkelig farvekontrast.
- Mindre tilgængelighedsrettelser, der ikke ændrer designet mærkbart, må gennemføres.
- Hvis en farve fra Figma skal ændres for at opfylde tilgængelighedskrav, må ændringen ikke implementeres automatisk.
- Vis først den eksisterende HEX-kode og den foreslåede HEX-kode, forklar kort hvorfor ændringen er nødvendig, og afvent godkendelse.
- Bevar Figma-designet så tæt som muligt ved alle tilgængelighedsrettelser.

## SEO og ydeevne

- Giv hver side en unik `title` og meta description.
- Tilføj kun canonical URL, Open Graph-data, strukturerede data og sitemap, når korrekte oplysninger og domæne er kendt.
- Angiv `width` og `height` på billeder.
- Brug lazy loading til billeder under den første synlige del af siden.
- Undgå unødvendigt JavaScript og unødigt store filer.

# Begrænsninger

- Opfind ikke virksomhedsoplysninger, kontaktoplysninger, priser, datoer, adresser, anmeldelser eller andre fakta.
- Opfind ikke designvalg, funktionalitet, links eller navigation, som ikke fremgår af Figma, projektet eller den aktuelle prompt.
- Slet ikke indhold eller funktionalitet uden at forklare behovet først.
- Tilføj ikke tracking, cookies, analyseværktøjer eller eksterne tjenester uden tilladelse.
- Indsæt ikke personoplysninger, API-nøgler eller andre hemmeligheder i kildekoden.
- Foretag ikke designændringer uden teknisk eller funktionel begrundelse.
- Foretag ikke ændringer uden for den aktuelle opgave, blot fordi der opdages andre forskelle fra Figma.

# Visuel kontrol mod Figma

Efter relevante implementeringer:

- Sammenlign websitet med de relevante desktop- og mobilframes i Figma.
- Kontrollér især:
  - layout;
  - størrelsesforhold;
  - spacing;
  - typografi;
  - farver;
  - billedplacering;
  - alignment;
  - komponentstørrelser;
  - responsive ændringer;
  - vandret scrolling i Kurser og Testimonials, hvis det fremgår af Figma.
- Websitet skal ligne Figma-designet så tæt som overhovedet praktisk muligt.
- Små forskelle som følge af browserrendering, fonte eller responsiv skalering er acceptable, hvis designets visuelle udtryk og proportioner bevares.
- Hvis en væsentlig forskel ikke kan løses, skal den beskrives i opsummeringen.

# Test og kvalitet

Efter relevante ændringer:

- Kontrollér filstier, manglende filer og åbenlyse HTML-, CSS- og JavaScript-fejl.
- Kontrollér layout på mobil, tablet og desktop.
- Prioritér visuel kontrol af desktop- og mobilversionerne.
- Kontrollér, at layoutet fungerer stabilt mellem Figma-referencepunkterne.
- Kontrollér, at vandret scrolling i Kurser og Testimonials kun anvendes, hvis den fremgår af Figma.
- Kontrollér, at eventuel vandret scrolling kun påvirker den relevante sektion.
- Kontrollér, at tekst og billeder ikke overlapper.
- Kontrollér tastaturnavigation, fokus, formularlabels og billeders alt-tekster.
- Kontrollér browserkonsollen, hvis en browser er tilgængelig.
- Brug eksisterende validerings- og testværktøjer. Installér ikke nye.
- Oplys, hvad der ikke kunne kontrolleres.

# Svar fra CODEX

Afslut med en kort opsummering i punktform:

- ændringer, der er gennemført;
- filer, der er oprettet eller redigeret;
- eventuel refaktorering og genbrug af HTML/CSS;
- kontroller og test, der er gennemført;
- relevante forskelle mellem implementeringen og Figma;
- relevante fejl, risici og forhold, der ikke kunne kontrolleres;
- manglende oplysninger eller pladsholdere;
- relevante næste skridt.

Udelad punkter, der ikke er relevante.