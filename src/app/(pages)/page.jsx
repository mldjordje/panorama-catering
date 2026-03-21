import AppData from "@data/app.json";
import TemplateHeader from "@/components/TemplateHeader";
import TemplateFooter from "@/components/TemplateFooter";
import ImmersiveGallery from "@/components/ImmersiveGallery";

const panoramaHomeShowcase = {
  sectionId: "panorama-galerie",
  eyebrow: "Panorama Einblicke",
  title: "Bildmaterial für Beratung, Angebot und Erstgespräch",
  description:
    "Die Galerie verbindet Motive aus Betriebsrestaurant, Schulverpflegung und Eventservice, damit Leistungsumfang und Qualitätsanspruch auf einen Blick sichtbar werden.",
  highlights: [
    {
      kicker: "Betrieb",
      title: "Betriebsrestaurant",
      text: "Kundenspezifische Lösungen für Unternehmen aller Größen.",
    },
    {
      kicker: "Bildung",
      title: "Schule + Kita",
      text: "Gesunde Verpflegung für Kinder und Jugendliche mit alltagstauglichen Abläufen.",
    },
    {
      kicker: "Event",
      title: "Events, Messen u. Sport",
      text: "Maßgeschneiderte Konzepte für Veranstaltungen in allen Größenordnungen.",
    },
  ],
  ctaPrimary: { label: "Beratung anfragen", href: "/kontakt" },
  ctaSecondary: { label: "Event-Website ansehen", href: "https://www.panorama4event.de/" },
  items: [
    {
      src: "/panorama/pc-home-01.jpg",
      title: "Panorama Catering",
      text: "Ein erster Eindruck von Unternehmen, Anspruch und Leistungsbreite.",
      category: "Unternehmen",
      layout: "wide",
    },
    {
      src: "/panorama/betriebsrestaurant.jpg",
      title: "Betriebsrestaurant",
      text: "Verpflegungslösungen für den laufenden Betrieb und den täglichen Bedarf.",
      category: "Betrieb",
    },
    {
      src: "/panorama/pc-philo-01.jpg",
      title: "Philosophie",
      text: "Qualität, Verlässlichkeit und partnerschaftliche Zusammenarbeit im Mittelpunkt.",
      category: "Unternehmen",
    },
    {
      src: "/panorama/pc-philo-03.jpg",
      title: "Service Team",
      text: "Praxisnahe Umsetzung und verlässliche Abläufe vor Ort.",
      category: "Betrieb",
    },
    {
      src: "/panorama/pc-sk-dge-02.jpg",
      title: "Schul- und Kitaverpflegung",
      text: "Gesunde und zielgruppengerechte Konzepte für Träger und Einrichtungen.",
      category: "Bildung",
      layout: "tall",
    },
    {
      src: "/panorama/wuerth-open-air-26-aushilfe.jpg",
      title: "Event Catering",
      text: "Flexible Unterstützung für Business-Events, Messen und Sportveranstaltungen.",
      category: "Event",
    },
    {
      src: "/panorama/woa25-job-banner.png",
      title: "Event Recruiting",
      text: "Operative Verstärkung für saisonale und großformatige Einsätze.",
      category: "Event",
    },
    {
      src: "/panorama/woa25-job-banner-large.png",
      title: "Saisonkampagne",
      text: "Kommunikation und Einsatzplanung für größere Event-Teams.",
      category: "Karriere",
      layout: "wide",
    },
  ],
};

const videoEmbedUrl =
  "https://www.youtube.com/embed/SB-fxcb0XtA?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&rel=0&playsinline=1&loop=1&playlist=SB-fxcb0XtA,cEDzgCUK5rU";

export const metadata = {
  title: {
    default: "Panorama Catering",
    template: "%s | " + AppData.settings.siteName,
  },
  description: AppData.settings.siteDescription,
};

export default function HomePage() {
  return (
    <>
      <TemplateHeader />

      <div id="homepage" className="panorama-homepage">
        <section className="hero-section panorama-hero">
          <div className="background-element"></div>
          <div className="panorama-hero-video-wrap" aria-hidden="true">
            <iframe
              src={videoEmbedUrl}
              title="Panorama Catering Shorts Background"
              allow="autoplay; encrypted-media; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          <div className="titlos-element">
            <p className="panorama-eyebrow" data-aos="fade-up">Panorama Catering</p>
            <h1 data-aos="fade-up" data-aos-delay="120">
              Maßgeschneiderte Catering-Konzepte für <em>Betrieb</em>, Bildung und Veranstaltungen
            </h1>
            <p className="panorama-hero-subtitle" data-aos="fade-up" data-aos-delay="220">
              Bei uns ist Catering mehr als nur die professionelle Belieferung mit schmackhafter
              und frischer Verpflegung. Wir entwickeln kundenspezifische Lösungen für
              Betriebsrestaurants, Kantinen, Schulen, Kindergärten sowie Firmenveranstaltungen und
              Privatfeiern.
            </p>
            <div className="panorama-hero-actions" data-aos="fade-up" data-aos-delay="280">
              <a href="/#leistungen" className="button white">Leistungsfelder entdecken</a>
              <a href="/kontakt" className="button white">Beratung anfragen</a>
            </div>
          </div>

          <div className="small-title">
            <p>Hotline: +49 79 40 - 930 78 20 | Künzelsau, Deutschland</p>
          </div>
        </section>

        <section id="leistungen" className="panorama-intro">
          <div className="pagewrap">
            <div className="panorama-intro-copy">
              <div className="section-title" data-aos="fade-up">
                <p>LEISTUNGSFELDER</p>
              </div>
              <div className="section-bigtitle" data-aos="fade-up" data-aos-delay="100">
                <h2>Herzlich willkommen bei Panorama Catering</h2>
              </div>
              <p data-aos="fade-up" data-aos-delay="180">
                Wir entwickeln maßgeschneiderte Konzepte und bieten kundenspezifische Lösungen für
                Betriebsrestaurants, Kantinen, Schulen, Kindergärten sowie Firmenveranstaltungen
                und Privatfeiern in allen Größenordnungen.
              </p>
              <p data-aos="fade-up" data-aos-delay="240">
                Und das machen wir bei Panorama Catering mit ganzem Herzen und höchsten
                Qualitätsmaßstäben.
              </p>
            </div>

            <div className="panorama-inline-gallery">
              {[
                { src: "/panorama/betriebsrestaurant.jpg", alt: "Betriebsrestaurant", delay: 80 },
                { src: "/panorama/pc-philo-03.jpg", alt: "Panorama Team", delay: 160 },
                { src: "/panorama/pc-sk-dge-02.jpg", alt: "Schulverpflegung", delay: 240 },
              ].map((item, index) => (
                <figure key={`intro-image-${index}`} data-aos="zoom-in-up" data-aos-delay={item.delay}>
                  <img src={item.src} alt={item.alt} />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="panorama-facts">
          <div className="pagewrap">
            <div className="panorama-facts-grid">
              {[
                { value: "BETRIEB", label: "Betriebsrestaurants", text: "Konzepte für Unternehmen jeder Größe und jeden Tagesablauf." },
                { value: "BILDUNG", label: "Schule + Kita", text: "Gesunde Verpflegung für Kinder und Jugendliche." },
                { value: "QUALITÄT", label: "Erzeuger & Händler", text: "Qualitätsprodukte von regionalen und überregionalen Partnern." },
                { value: "DE + CH", label: "Regionen", text: "Aktiv in Deutschland und in der Schweiz." },
              ].map((fact, idx) => (
                <article className="panorama-fact-card" key={`fact-${idx}`} data-aos="fade-up" data-aos-delay={100 + idx * 90}>
                  <p className="panorama-fact-value">{fact.value}</p>
                  <h4>{fact.label}</h4>
                  <p>{fact.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="panorama-photo-strip">
          <div className="pagewrap">
            <div className="panorama-photo-strip-track">
              {[
                "/panorama/pc-home-01.jpg",
                "/panorama/pc-philo-01.jpg",
                "/panorama/wuerth-open-air-26-aushilfe.jpg",
                "/panorama/woa25-job-banner-large.png",
              ].map((src, index) => (
                <div className="panorama-photo-strip-card" key={`strip-${index}`} data-aos="fade-left" data-aos-delay={100 + index * 90}>
                  <img src={src} alt={`Panorama Referenz ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="philosophie" className="panorama-philosophy">
          <div className="pagewrap">
            <div className="panorama-philosophy-grid">
              <div className="panorama-philosophy-copy">
                <div className="section-title" data-aos="fade-up">
                  <p>PHILOSOPHIE</p>
                </div>
                <div className="section-bigtitle" data-aos="fade-up" data-aos-delay="120">
                  <h2>Qualität, Verlässlichkeit und partnerschaftliche Lösungen</h2>
                </div>
                <p data-aos="fade-up" data-aos-delay="180">
                  Kompetenz, Verlässlichkeit und Vertrauen sind die Grundlage unserer Partnerschaften.
                  Wir richten jedes Konzept an den spezifischen Anforderungen von Kunden, Zielgruppen
                  und Einsatzbereichen aus.
                </p>
                <p data-aos="fade-up" data-aos-delay="240">
                  Unser Ziel ist, mehr zu bieten als erwartet: mit professioneller Organisation,
                  klaren Prozessen, ressourcenschonender Arbeitsweise und verbindlichen
                  Qualitätsstandards.
                </p>
              </div>

              <div className="panorama-philosophy-visuals">
                <figure data-aos="fade-up" data-aos-delay="160">
                  <img src="/panorama/pc-philo-01.jpg" alt="Panorama Philosophie Bild 1" />
                </figure>
                <figure data-aos="fade-up" data-aos-delay="220">
                  <img src="/panorama/pc-philo-03.jpg" alt="Panorama Philosophie Bild 2" />
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section id="branchen" className="panorama-branch-section">
          <div className="pagewrap">
            <div className="section-title" data-aos="fade-up">
              <p>EINSATZFELDER</p>
            </div>
            <div className="section-bigtitle" data-aos="fade-up" data-aos-delay="100">
              <h2>Leistungsfelder von Panorama Catering</h2>
            </div>

            <div className="panorama-branch-grid">
              {[
                {
                  title: "Panorama Catering",
                  text: "Maßgeschneiderte Konzepte und kundenspezifische Lösungen für Betriebsrestaurants, Kantinen, Schulen, Kindergärten sowie Firmenveranstaltungen und Privatfeiern.",
                  img: "/panorama/pc-home-01.jpg",
                },
                {
                  title: "Betriebsrestaurant",
                  text: "Wir bieten Catering-Konzepte, die auf spezielle Wünsche und Bedürfnisse von Unternehmen aller Größen zugeschnitten sind.",
                  img: "/panorama/betriebsrestaurant.jpg",
                },
                {
                  title: "Schulverpflegung",
                  text: "Gesunde Verpflegung für Schulen, Kindergärten und Kitas. Gesundes Essen für Kinder und Jugendliche kann sehr lecker sein und sogar Spaß machen.",
                  img: "/panorama/pc-sk-dge-02.jpg",
                },
                {
                  title: "Qualität",
                  text: "Qualitätsprodukte von regionalen und überregionalen Erzeugern und Händlern. Gutes Essen ist ein Stück Lebensqualität.",
                  img: "/panorama/pc-philo-03.jpg",
                },
                {
                  title: "Events, Messen u. Sport",
                  text: "Maßgeschneiderte Konzepte und kundenspezifische Lösungen für Veranstaltungen in allen Größenordnungen.",
                  img: "/panorama/wuerth-open-air-26-aushilfe.jpg",
                },
              ].map((item, idx) => (
                <article className="panorama-branch-card" key={`branch-${idx}`} data-aos="fade-up" data-aos-delay={120 + idx * 100}>
                  <div className="panorama-branch-image">
                    <img src={item.img} alt={item.title} />
                  </div>
                  <div className="panorama-branch-body">
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="panorama-process-section">
          <div className="pagewrap">
            <div className="section-title" data-aos="fade-up">
              <p>ABLAUF</p>
            </div>
            <div className="section-bigtitle" data-aos="fade-up" data-aos-delay="100">
              <h2>So entsteht ein passendes Konzept</h2>
            </div>
            <div className="panorama-process-grid">
              {[
                { step: "01", title: "Erstgespräch", text: "Ziele, Einsatzbereich, Personenzahl und Rahmenbedingungen klären." },
                { step: "02", title: "Bedarfserfassung", text: "Anforderungen, Abläufe und gewünschte Servicebausteine aufnehmen." },
                { step: "03", title: "Individuelles Angebot", text: "Passende Leistungsbausteine mit nachvollziehbarem Kostenrahmen vorstellen." },
                { step: "04", title: "Umsetzung", text: "Operativer Start mit klaren Ansprechpartnern und verlässlichen Prozessen." },
              ].map((item, idx) => (
                <article className="panorama-process-card" key={`process-${idx}`} data-aos="flip-up" data-aos-delay={120 + idx * 90}>
                  <span>{item.step}</span>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="panorama-booking-teaser">
          <div className="pagewrap">
            <div className="panorama-booking-teaser-grid">
              <div className="panorama-booking-teaser-copy" data-aos="fade-right">
                <div className="section-title">
                  <p>ANFRAGE</p>
                </div>
                <div className="section-bigtitle">
                  <h2>Strukturierter Einstieg in das Beratungsgespräch</h2>
                </div>
                <p>
                  Für die Präsentation steht ein strukturiertes Anfrageformular bereit. Es erfasst
                  Personenzahl, Leistungsbereich, Serviceart, Termin und Kontaktdaten übersichtlich
                  und unterstützt so eine saubere Vorqualifizierung.
                </p>
                <div className="panorama-hero-actions">
                  <a href="/booking" className="button white">Anfrage öffnen</a>
                  <a href="/kontakt" className="button white">Kontaktseite</a>
                </div>
              </div>

              <div className="panorama-booking-teaser-images">
                {[
                  { src: "/panorama/betriebsrestaurant.jpg", alt: "Business Catering" },
                  { src: "/panorama/pc-sk-dge-02.jpg", alt: "Schule und Kita" },
                  { src: "/panorama/wuerth-open-air-26-aushilfe.jpg", alt: "Event Catering" },
                ].map((item, index) => (
                  <figure key={`booking-teaser-${index}`} data-aos="zoom-in-up" data-aos-delay={120 + index * 90}>
                    <img src={item.src} alt={item.alt} />
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ImmersiveGallery {...panoramaHomeShowcase} />

        <section className="panorama-proof-section">
          <div className="pagewrap">
            <div className="panorama-proof-grid">
              <div className="panorama-proof-copy" data-aos="fade-right">
                <div className="section-title">
                  <p>PRÄSENTATION</p>
                </div>
                <div className="section-bigtitle">
                  <h2>Klar aufgebaut für Vertrieb und Vor-Ort-Termine</h2>
                </div>
                <p>
                  Die Seite führt von Leistungsfeldern über Bildmaterial bis zur Kontaktaufnahme
                  und schafft damit eine professionelle Struktur für Angebotsgespräche auf Desktop
                  und Mobilgeräten.
                </p>
                <a href="/kontakt" className="button">Kontakt aufnehmen</a>
              </div>

              <div className="panorama-proof-images">
                <figure data-aos="zoom-in" data-aos-delay="120">
                  <img src="/panorama/woa25-job-banner.png" alt="Panorama Kampagne" />
                </figure>
                <figure data-aos="zoom-in" data-aos-delay="220">
                  <img src="/panorama/pc-home-01.jpg" alt="Panorama Unternehmen" />
                </figure>
              </div>
            </div>
          </div>
        </section>

        <div className="faq-section">
          <div className="pagewrapbig">
            <div className="section-top">
              <div className="flex-elements">
                <div className="flex-element-left">
                  <img src="/panorama/logo-panorama-catering.png" alt="Panorama Catering" />
                </div>
                <div className="flex-element-right">
                  <a href="/kontakt" className="button white">Kontaktseite</a>
                </div>
              </div>
            </div>

            <div className="section-bottom">
              <div className="faq-container">
                {[
                  {
                    title: "WELCHE LEISTUNGSBEREICHE DECKT PANORAMA CATERING AB?",
                    text: "Wir entwickeln Lösungen für Betriebsrestaurants, Kantinen, Schulen, Kindergärten, Firmenveranstaltungen, Privatfeiern sowie Event- und Konferenzformate.",
                  },
                  {
                    title: "IN WELCHEN REGIONEN SIND SIE AKTIV?",
                    text: "Deutschland: Hohenlohe, Unterland, Raum Ludwigsburg und Stuttgart, Markgräferland, Berlin, Main-Tauber-Kreis. Schweiz: Bodensee, St. Gallen.",
                  },
                  {
                    title: "WAS ZEICHNET IHRE ARBEITSWEISE AUS?",
                    text: "Maßgeschneiderte Konzepte, kundenspezifische Lösungen, hohe Qualitätsmaßstäbe und eine verlässliche, partnerschaftliche Betreuung vom Erstgespräch bis zur Umsetzung.",
                  },
                ].map((item, idx) => (
                  <div className="faq" key={`faq-${idx}`} data-aos="fade-up" data-aos-delay={100 + idx * 80}>
                    <div className="faq-inside">
                      <div className="faq-question">
                        <h3>{item.title}</h3>
                        <div className="faq-btn">
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                      <div className="faq-answer">
                        <p>{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <section id="kontakt" className="panorama-contact-strip">
          <div className="pagewrap">
            <div className="panorama-contact-card" data-aos="fade-up">
              <div className="panorama-contact-copy">
                <h3>Bereit für ein konkretes Gespräch?</h3>
                <p>Rufen Sie uns an oder senden Sie uns Ihre Eckdaten. Wir entwickeln gern einen passenden Vorschlag für Ihren Bedarf.</p>
              </div>
              <div className="panorama-contact-actions">
                <a href="/booking" className="button white">Anfrageformular</a>
                <a href="tel:+4979409307820" className="button white">+49 79 40 - 930 78 20</a>
                <a href="/kontakt" className="button white">Zur Kontaktseite</a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <TemplateFooter />
    </>
  );
}
