const panoramaSalesOffer = {
  metadata: {
    title: "Angebot | Panorama Catering",
    description:
      "Klare Angebotsseite für Panorama Catering mit kostenlosem Einstieg, drei Ausbaustufen und transparenten Richtpreisen.",
  },
  hero: {
    eyebrow: "Digitale Angebots- und Anfrageplattform für Panorama Catering",
    title: "Ein klarer digitaler Auftritt, mehr qualifizierte Anfragen und weniger Abstimmungsaufwand",
    subtitle:
      "Wir schlagen Panorama keinen unnötig großen Start vor, sondern einen sauberen, risikoarmen Einstieg. Landingpage und Kontaktseite erhalten Sie kostenlos. Danach entscheiden Sie in Ruhe, ob Sie zusätzlich ein Anfrage-System oder später ein Kundenportal aufbauen möchten.",
    badges: ["Landingpage gratis", "Kontaktseite gratis", "Änderungen auf Wunsch möglich"],
    primaryCta: { label: "Kostenlosen Einstieg anfragen", href: "/kontakt" },
    secondaryCta: { label: "Anfrage-Flow ansehen", href: "/booking" },
    tertiaryCta: { label: "Panorama-Demo öffnen", href: "/" },
    proofCards: [
      {
        title: "Kostenloser Einstieg",
        text: "Landingpage und Kontaktseite werden als kostenloser Einstieg für Panorama vorbereitet und individuell angepasst.",
      },
      {
        title: "Klare Ausbaulogik",
        text: "Erst ein starker erster Eindruck, danach auf Wunsch ein Anfrage-System und später ein Kundenportal für Bestandskunden.",
      },
    ],
  },
  offerSummary: {
    eyebrow: "Was Panorama konkret bekommt",
    title: "Keine abstrakte Beratung, sondern eine klare Lösung in drei Phasen",
    intro:
      "Die Angebotsseite soll sofort verständlich machen, was in welcher Phase geliefert wird. Deshalb ist die Struktur bewusst einfach: kostenloser Einstieg, empfohlene Hauptausbaustufe und optionale Phase für Bestandskunden und Prozesse.",
    cards: [
      {
        title: "Phase 1: Sofort nutzbarer Einstieg",
        text: "Panorama erhält kostenlos eine neue Landingpage plus Kontaktseite, modern gestaltet, auf Panorama zugeschnitten und bei Bedarf weiter anpassbar.",
      },
      {
        title: "Phase 2: Mehr qualifizierte Anfragen",
        text: "Das Anfrage-System erfasst die wichtigsten Informationen direkt beim Erstkontakt und spart dem Team Zeit bei Rückfragen und Angebotsvorbereitung.",
      },
      {
        title: "Phase 3: Prozesse für Bestandskunden",
        text: "Ein Kundenportal schafft später einen professionellen Reorder- und Abstimmungsprozess für wiederkehrende Kunden und interne Freigaben.",
      },
    ],
  },
  packages: {
    eyebrow: "Pakete und Richtpreise",
    title: "So ist das Angebot für Panorama aufgebaut",
    intro:
      "Jede Phase ist einzeln verständlich und kann sauber auf der vorherigen aufbauen. Der empfohlene Weg ist klar: zuerst der kostenlose Einstieg, danach das Anfrage-System mit dem größten operativen Nutzen.",
    footnote:
      "Alle Preise sind Richtpreise für den dargestellten Umfang. Finale Preise hängen vom gewünschten Detailgrad, Integrationen und zusätzlichen Änderungswünschen ab.",
    items: [
      {
        id: "free-pilot",
        name: "Phase 1",
        headline: "Kostenloser Einstieg: Landingpage + Kontaktseite",
        subline: "Der richtige Start, wenn Panorama schnell und ohne Risiko einen besseren digitalen ersten Eindruck haben soll.",
        price: "0 €",
        priceNote: "kostenloser Einstieg",
        summary:
          "Sie erhalten eine moderne Landingpage und eine klare Kontaktseite als kostenlose Basis. Beides wird auf Panorama zugeschnitten und kann auf Wunsch zusätzlich angepasst werden.",
        fit: "Ideal für den schnellen Einstieg ohne Budgethürde.",
        timeline: "wenige Arbeitstage bis zur ersten Freigabe",
        deliverablesTitle: "Enthalten",
        resultsTitle: "Ergebnis für Panorama",
        cta: { label: "Kostenlosen Einstieg anfragen", href: "/kontakt" },
        secondaryCta: { label: "Demo ansehen", href: "/" },
        deliverables: [
          "eine neue Landingpage mit klarer Positionierung und modernem ersten Eindruck",
          "eine separate Kontaktseite mit klaren Kontaktwegen und Ansprechpartnern",
          "Anpassung von Texten, Bildern, Leistungsbereichen und Ansprechpartnern auf Panorama",
          "zusätzliche Änderungen können nach Feedback eingearbeitet werden",
        ],
        results: [
          "professionellerer Erstkontakt für neue Interessenten",
          "saubere digitale Basis für die nächsten Ausbaustufen",
          "risikoarmer Einstieg, bevor weitere Entscheidungen getroffen werden",
        ],
      },
      {
        id: "lead-system",
        name: "Phase 2",
        headline: "Empfohlen: Anfrage-System für qualifizierte Leads",
        subline: "Die wichtigste Ausbaustufe, wenn Panorama mehr passende Anfragen und weniger Rückfragen im Office haben möchte.",
        price: "ab 3.900 €",
        priceNote: "einmalig, je nach Umfang",
        summary:
          "Diese Phase ergänzt die neue Seite um einen geführten Anfrageprozess. So kommen wichtige Informationen bereits beim Erstkontakt strukturiert an und Angebote können schneller vorbereitet werden.",
        fit: "Ideal, wenn die Website aktiv Anfragen vorbereiten und internen Aufwand senken soll.",
        timeline: "ca. 2 bis 4 Wochen",
        featured: true,
        deliverablesTitle: "Enthalten",
        resultsTitle: "Ergebnis für Panorama",
        cta: { label: "Anfrage-System besprechen", href: "/kontakt" },
        secondaryCta: { label: "Flow live ansehen", href: "/booking" },
        deliverables: [
          "mehrstufiger Anfrage-Flow für Catering- und Eventanfragen",
          "strukturierte Erfassung von Anlass, Gästezahl, Termin, Ort und Anforderungen",
          "interne Übersicht mit Status, Zuständigkeit und Bearbeitungslogik",
          "saubere Übergabe an Office, Vertrieb oder Eventkoordination",
        ],
        results: [
          "weniger Rückfragen per Telefon oder E-Mail",
          "schnellere Angebotserstellung durch bessere Vorqualifizierung",
          "mehr qualifizierte Erstkontakte statt unvollständiger Nachrichten",
        ],
      },
      {
        id: "client-portal",
        name: "Phase 3",
        headline: "Kundenportal und Prozessausbau für Bestandskunden",
        subline: "Die passende nächste Stufe, wenn wiederkehrende Kunden digital einfacher bestellen und abstimmen sollen.",
        price: "ab 8.900 €",
        priceNote: "einmalig, modular erweiterbar",
        summary:
          "Diese Phase ist bewusst nicht der erste Schritt. Sie wird interessant, wenn der neue Auftritt steht und Bestandskunden einen professionelleren Reorder- und Freigabeprozess erhalten sollen.",
        fit: "Ideal für den späteren Ausbau bei wiederkehrenden B2B-Abläufen.",
        timeline: "ca. 4 bis 8 Wochen",
        deliverablesTitle: "Enthalten",
        resultsTitle: "Ergebnis für Panorama",
        cta: { label: "Phase 3 vormerken", href: "/kontakt" },
        secondaryCta: { label: "Vorher Phase 2 ansehen", href: "/booking" },
        deliverables: [
          "Kundenbereich für wiederkehrende Anfragen und Reorders",
          "hinterlegte Standardabläufe, Ansprechpartner und Wunschformate",
          "Freigaben, Abstimmungsschritte und strukturierte Nachbestellung",
          "optionale Erweiterung um interne Prozess- und Aufgabenlogik",
        ],
        results: [
          "weniger E-Mail-Chaos bei Bestandskunden",
          "einfachere Nachbestellung für wiederkehrende Formate",
          "stärkere Kundenbindung durch einen professionelleren Ablauf",
        ],
      },
    ],
  },
  process: {
    eyebrow: "So läuft die Zusammenarbeit",
    title: "Einfach, schnell und ohne unnötiges Projektrisiko",
    steps: [
      {
        step: "01",
        title: "Kickoff",
        text: "Wir klären Zielgruppen, Leistungsbereiche, Ansprechpartner und die gewünschte Priorität für Panorama.",
      },
      {
        step: "02",
        title: "Kostenloser Einstieg",
        text: "Landingpage und Kontaktseite werden auf Panorama angepasst und als erste Version bereitgestellt.",
      },
      {
        step: "03",
        title: "Feedback und Änderungen",
        text: "Feedback wird eingearbeitet, zusätzliche Änderungswünsche können abgestimmt und umgesetzt werden.",
      },
      {
        step: "04",
        title: "Entscheidung über Phase 2",
        text: "Erst danach entscheidet Panorama, ob das Anfrage-System als nächste Stufe aufgebaut werden soll.",
      },
    ],
  },
  nextStep: {
    eyebrow: "Empfohlener nächster Schritt",
    title: "Zuerst kostenlos starten, dann in Ruhe entscheiden",
    text:
      "Für Panorama ist der sinnvollste Einstieg eindeutig: zuerst die kostenlose Landingpage und Kontaktseite live vorbereiten. Damit entsteht sofort ein besserer erster Eindruck, ohne dass direkt über ein größeres Budget entschieden werden muss.",
    pilotPoints: [
      "Landingpage und Kontaktseite sind kostenlos",
      "Anpassungen und zusätzliche Änderungen sind nach Abstimmung möglich",
      "Phase 2 wird erst gestartet, wenn Panorama den Einstieg gesehen und freigegeben hat",
    ],
    reassuranceTitle: "Warum dieser Einstieg stark ist",
    reassuranceText:
      "Diese Angebotslogik senkt das Risiko auf ein Minimum. Panorama sieht zuerst Qualität, Geschwindigkeit und Passung im echten Projektkontext. Danach fällt die Entscheidung für die nächste Ausbaustufe deutlich leichter.",
    reassurancePoints: [
      "keine große Anfangshürde",
      "klare Sicht auf das Ergebnis schon in Phase 1",
      "sauberer Weg zu mehr Anfragen und weniger Verwaltungsaufwand",
    ],
    primaryCta: { label: "Kostenlosen Einstieg anfragen", href: "/kontakt" },
    secondaryCta: { label: "Anfrage-Flow öffnen", href: "/booking" },
    tertiaryCta: { label: "Zur Demo zurück", href: "/" },
  },
};

export default panoramaSalesOffer;
