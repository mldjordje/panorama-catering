const panoramaSalesOffer = {
  metadata: {
    title: "Angebot | Panorama Catering",
    description:
      "Vier klar definierte Pakete für Panorama Catering mit konkreten Funktionen, Tech-Stack und optionaler PWA- oder Mobile-App.",
  },
  hero: {
    eyebrow: "Digitale Plattform für Panorama Catering",
    title: "4 klar definierte Pakete mit konkreten Funktionen für Vertrieb, CRM, Teamsteuerung und Kundenportal",
    subtitle:
      "Die Angebotsseite soll auf einen Blick zeigen, was Panorama in jeder Phase exakt erhält. Deshalb ist die Struktur bewusst kompakt: kostenloser Einstieg, Vertriebs- und CRM-Ausbau, Operations- und Finanzmodule sowie eine spätere Portal- und App-Stufe.",
    badges: ["Landingpage gratis", "Kontaktseite gratis", "PWA / App optional"],
    primaryCta: { label: "Kostenlosen Einstieg anfragen", href: "/kontakt" },
    secondaryCta: { label: "Anfrage-Flow ansehen", href: "/booking" },
    tertiaryCta: { label: "Panorama-Demo öffnen", href: "/" },
    proofCards: [
      {
        title: "Phase 1 gratis",
        text: "Landingpage und Kontaktseite werden kostenlos umgesetzt und können danach auf Wunsch weiter ausgebaut werden.",
      },
      {
        title: "Modularer Ausbau",
        text: "CRM, CMS, Teamsteuerung, Finanzsicht, Kundenportal und App-Funktionen können phasenweise ergänzt werden.",
      },
    ],
  },
  packages: {
    eyebrow: "Pakete",
    title: "Was Panorama in jeder Phase konkret bekommt",
    intro:
      "Jedes Paket ist klar abgegrenzt. So sieht Panorama direkt, welche Funktionen in welcher Phase enthalten sind und welche Erweiterungen später sinnvoll dazukommen können.",
    footnote:
      "Richtpreise für die dargestellte Struktur. Der finale Preis richtet sich nach Detailtiefe, Integrationen, Benutzerrollen, Datenstruktur und Änderungswünschen.",
    items: [
      {
        id: "package-1",
        name: "Paket 1",
        headline: "Kostenloser Einstieg: Landingpage + Kontaktseite",
        subline: "Die richtige Basis für einen stärkeren ersten Eindruck ohne Startbudget.",
        price: "0 €",
        priceNote: "kostenloser Einstieg",
        summary:
          "Dieses Paket liefert Panorama eine moderne öffentliche Basis, auf der alle späteren Vertriebs- und Systemfunktionen sauber aufbauen können.",
        fit: "Ideal als schneller Einstieg und als sichtbarer erster Schritt für Panorama.",
        timeline: "wenige Arbeitstage",
        featured: false,
        sections: [
          {
            title: "Öffentliche Seiten",
            items: [
              "neue Landingpage für Panorama Catering",
              "separate Kontaktseite mit klaren Kontaktwegen",
              "klare Bereiche für Firmenkunden, Events und weitere Leistungsfelder",
              "mobiloptimierte CTA-Strecken für Anfrage, Rückruf und Kontakt",
            ],
          },
          {
            title: "Inhalte und Anpassungen",
            items: [
              "Anpassung von Texten, Bildern, Ansprechpartnern und Leistungsblöcken",
              "Einbindung vorhandener Inhalte aus der bestehenden Website oder PDFs",
              "strukturierter erster Anfrage-Einstieg über Kontaktformular oder Kontaktmodule",
              "zusätzliche Änderungswünsche können danach separat ergänzt werden",
            ],
          },
          {
            title: "Ergebnis",
            items: [
              "professionellerer digitaler Ersteindruck",
              "bessere Grundlage für spätere CRM- und Anfragefunktionen",
              "klarer, risikoarmer Einstieg ohne direktes Systemprojekt",
            ],
          },
        ],
        cta: { label: "Kostenlosen Einstieg anfragen", href: "/kontakt" },
        secondaryCta: { label: "Demo ansehen", href: "/" },
      },
      {
        id: "package-2",
        name: "Paket 2",
        headline: "Vertrieb, CMS und CRM",
        subline: "Die empfohlene erste Ausbaustufe für mehr qualifizierte Anfragen und klare Lead-Bearbeitung.",
        price: "ab 4.900 €",
        priceNote: "einmalig, je nach Umfang",
        summary:
          "Dieses Paket erweitert die neue Website um ein bearbeitbares CMS, einen geführten Anfrageprozess und ein CRM-Panel für Office und Vertrieb.",
        fit: "Ideal, wenn Panorama aktiv Leads erfassen, intern sortieren und Inhalte selbst pflegen möchte.",
        timeline: "ca. 2 bis 4 Wochen",
        featured: true,
        sections: [
          {
            title: "CMS für Website und Inhalte",
            items: [
              "CMS für Landingpage, Kontaktseite, Leistungsseiten, FAQ und Referenzen",
              "Bearbeitung von Texten, Bildern, Buttons und Inhaltsmodulen im Admin-Bereich",
              "Pflege von Ansprechpartnern, Leistungsbereichen und Vertrauenselementen",
              "strukturierter Content-Aufbau für spätere SEO- und Vertriebsarbeit",
            ],
          },
          {
            title: "Lead- und Anfragefunktionen",
            items: [
              "mehrstufiger Anfrage-Flow für Catering- und Eventanfragen",
              "Pflichtfelder für Anlass, Gästezahl, Datum, Ort, Budget und Sonderwünsche",
              "automatische Benachrichtigungen bei neuen Anfragen",
              "Datei-Upload für Briefings, Pläne oder Zusatzinformationen",
            ],
          },
          {
            title: "CRM-Panel",
            items: [
              "Lead-Übersicht mit Status, Priorität und zuständiger Person",
              "interne Notizen, Rückrufstatus und Bearbeitungsverlauf",
              "Lead-Filter nach Anfrageart, Datum oder Bearbeitungsstand",
              "Exportfunktion für Anfragen und Angebotsvorbereitung",
            ],
          },
        ],
        cta: { label: "Paket 2 besprechen", href: "/kontakt" },
        secondaryCta: { label: "Anfrage-Flow live ansehen", href: "/booking" },
      },
      {
        id: "package-3",
        name: "Paket 3",
        headline: "Operations, Rollen, Tasks und Finanzen",
        subline: "Die operative Plattform für Office, Betriebsleitung, Küche, Service und Geschäftsführung.",
        price: "ab 9.900 €",
        priceNote: "einmalig, modular erweiterbar",
        summary:
          "Dieses Paket verbindet CRM und Auftragsannahme mit interner Teamsteuerung, Rollenlogik und einer operativen Finanzsicht pro Auftrag.",
        fit: "Ideal, wenn Panorama interne Abläufe, Mitarbeitersteuerung und Kostenkontrolle digital abbilden möchte.",
        timeline: "ca. 4 bis 8 Wochen",
        featured: false,
        sections: [
          {
            title: "Rollen und Admin-Zugänge",
            items: [
              "getrennte Rollen im Admin-Panel für Geschäftsführung, Office, Vertrieb, Küchenleitung, Eventleitung und Mitarbeiter",
              "individuelle Rechte pro Rolle für Lesen, Bearbeiten, Freigeben und Zuweisen",
              "eigene Ansichten für Mitarbeiter statt eines überladenen Gesamt-Admin-Bereichs",
              "Aktivitätsprotokoll für Nachvollziehbarkeit von Änderungen und Zuständigkeiten",
            ],
          },
          {
            title: "Task- und Teamsteuerung",
            items: [
              "Aufgabenverteilung an Küche, Service, Logistik, Fahrer, Aufbau und Abbau",
              "eventbezogene Task-Boards mit Status wie offen, in Arbeit und erledigt",
              "Mitarbeiteransicht mit eigenen Aufgaben, Uhrzeiten, Ansprechpartnern und Checklisten",
              "interne Kommentare, Übergaben und Rückmeldungen pro Auftrag",
            ],
          },
          {
            title: "CRM, Aufträge und Finanzsicht",
            items: [
              "CRM-Leads werden direkt in operative Aufträge überführt",
              "Auftragsübersicht mit Kunde, Termin, Team, Status und Leistungsumfang",
              "Erfassung geplanter Kosten, Zusatzkosten und Umsätze pro Auftrag",
              "Finanz- und Managementsicht für Umsatz, offene Vorgänge und Deckungsbeitragsindikatoren",
            ],
          },
        ],
        cta: { label: "Paket 3 besprechen", href: "/kontakt" },
        secondaryCta: { label: "Aufbau als Roadmap ansehen", href: "/booking" },
      },
      {
        id: "package-4",
        name: "Paket 4",
        headline: "Kundenportal, PWA und optionale Mobile App",
        subline: "Die Ausbaustufe für Bestandskunden, wiederkehrende Bestellungen und mobile Nutzung.",
        price: "ab 16.900 €",
        priceNote: "je nach Portal- und App-Umfang",
        summary:
          "Dieses Paket erweitert die Plattform um ein Kundenportal, installierbare PWA-Funktionen und auf Wunsch eine echte Mobile-App für Kunden oder Mitarbeitende.",
        fit: "Ideal für wiederkehrende B2B-Kunden, mobile Teams und langfristige Plattformlogik.",
        timeline: "ca. 6 bis 12 Wochen",
        featured: false,
        sections: [
          {
            title: "Kundenportal",
            items: [
              "Login-Bereich für Bestandskunden und wiederkehrende Auftraggeber",
              "Reorder-Funktionen für wiederkehrende Bestellungen und Standardformate",
              "hinterlegte Ansprechpartner, Lieferorte, Kostenstellen und Freigaben",
              "Statusansicht für offene Anfragen, laufende Aufträge und Historie",
            ],
          },
          {
            title: "PWA-Funktionen",
            items: [
              "installierbare Web-App für Smartphone, Tablet und Desktop",
              "Push-Benachrichtigungen für neue Aufgaben, Statusänderungen oder Rückfragen",
              "schneller Zugriff auf Aufgaben, Kundeninfos und Einsatzdetails unterwegs",
              "optionale Offline-Nutzung für ausgewählte Listen und Kernfunktionen",
            ],
          },
          {
            title: "Mobile App und Erweiterungen",
            items: [
              "optionale native Mobile-App für iOS und Android",
              "Mitarbeiter-App oder Kunden-App als eigener Ausbaupfad",
              "erweiterbar um Dokumente, Medien-Uploads, Reporting und Schnittstellen",
              "mehrere Standorte, mehrere Teams und weiterführende Plattformmodule möglich",
            ],
          },
        ],
        cta: { label: "Paket 4 vormerken", href: "/kontakt" },
        secondaryCta: { label: "Zuerst Paket 2 planen", href: "/booking" },
      },
    ],
  },
  techStack: {
    eyebrow: "Geplanter Tech Stack",
    title: "Technische Basis für Panorama",
    intro:
      "Die Plattform kann so aufgebaut werden, dass Website, CMS, CRM, Admin-Panel und spätere App-Logik auf einer sauberen gemeinsamen Grundlage laufen.",
    cards: [
      {
        title: "Frontend",
        text: "Next.js + React für Website, Landingpages, Kontaktstrecken und das geschützte Admin-Frontend.",
      },
      {
        title: "UI und Styling",
        text: "modulares Komponenten-System mit responsivem Layout für Desktop, Tablet und Smartphone.",
      },
      {
        title: "Backend",
        text: "API- und Geschäftslogik direkt in der Plattform für Leads, CRM, Tasks, Rollen und Portalfunktionen.",
      },
      {
        title: "Datenbank",
        text: "PostgreSQL als zentrale Datenbasis für Anfragen, Nutzer, Rollen, Aufgaben, Kunden und Finanzdaten.",
      },
      {
        title: "Deployment",
        text: "Vercel für Hosting, schnelle Deployments, Preview-Links und saubere Live-Umgebung.",
      },
      {
        title: "Dateien und Uploads",
        text: "strukturierte Medien- und Dokumentenablage für Bilder, Briefings, PDFs und interne Anhänge.",
      },
    ],
  },
  appOptions: {
    eyebrow: "App-Optionen",
    title: "PWA oder Mobile App je nach Bedarf",
    intro:
      "Wenn Panorama später mobile Nutzung stärker ausbauen möchte, kann die Plattform entweder als PWA oder als native App weitergeführt werden.",
    cards: [
      {
        title: "PWA für Team oder Kunden",
        text: "Schnellerer und günstigerer Einstieg. Installierbar direkt aus dem Browser mit Push-Nachrichten und mobilem Zugriff auf Kernfunktionen.",
      },
      {
        title: "Native App für iOS und Android",
        text: "Sinnvoll, wenn Panorama eine echte Store-App mit eigener Nutzererfahrung, tieferer Geräteintegration und langfristigem App-Ausbau möchte.",
      },
      {
        title: "Empfohlene Logik",
        text: "Zuerst Web-Plattform und Prozesse sauber aufbauen, danach PWA und nur bei echtem Mehrwert zusätzlich eine native Mobile-App entwickeln.",
      },
    ],
  },
  process: {
    eyebrow: "Projektablauf",
    title: "So kann der Ausbau sinnvoll starten",
    steps: [
      {
        step: "01",
        title: "Kostenloser Einstieg",
        text: "Landingpage und Kontaktseite werden als sichtbare Basis umgesetzt.",
      },
      {
        step: "02",
        title: "Paket 2",
        text: "CMS, Anfrage-Flow und CRM bringen den ersten echten Vertriebsnutzen.",
      },
      {
        step: "03",
        title: "Paket 3",
        text: "Danach folgen Rollen, Team-Tasks, Aufträge und Finanzsicht.",
      },
      {
        step: "04",
        title: "Paket 4",
        text: "Kundenportal sowie PWA- oder App-Logik werden als spätere Stufe ergänzt.",
      },
    ],
  },
  nextStep: {
    eyebrow: "Empfehlung",
    title: "Der sinnvollste Start für Panorama",
    text:
      "Am sinnvollsten ist es, mit dem kostenlosen Einstieg zu starten und direkt die Daten- und Prozessstruktur für Paket 2 mitzudenken. So bleibt der erste Schritt leicht, und Panorama verliert keine Zeit, wenn der Ausbau in CRM und Operations startet.",
    pilotPoints: [
      "Paket 1 sofort starten",
      "Paket 2 als erste bezahlte Ausbaustufe vorbereiten",
      "Paket 3 und 4 modular als Roadmap einplanen",
    ],
    reassuranceTitle: "Warum diese Struktur funktioniert",
    reassuranceText:
      "Panorama bekommt zuerst sichtbaren Nutzen, danach konkrete Vertriebsfunktionen und erst anschließend die tieferen Operations- und App-Module. So bleibt die Entscheidung übersichtlich und jede Phase liefert einen klaren Mehrwert.",
    reassurancePoints: [
      "klare Leistung pro Phase",
      "keine unnötige Überladung am Anfang",
      "sauberer Ausbaupfad bis hin zur Plattform oder App",
    ],
    primaryCta: { label: "Kostenlosen Einstieg anfragen", href: "/kontakt" },
    secondaryCta: { label: "Paket 2 ansehen", href: "/booking" },
    tertiaryCta: { label: "Zur Demo", href: "/" },
  },
};

export default panoramaSalesOffer;
