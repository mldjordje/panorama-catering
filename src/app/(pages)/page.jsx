import AppData from "@data/app.json";
import TemplateHeader from "@/components/TemplateHeader";
import TemplateFooter from "@/components/TemplateFooter";
import ImmersiveGallery from "@/components/ImmersiveGallery";

const panoramaHomeShowcase = {
  sectionId: "panorama-galerie",
  eyebrow: "Panorama Einblicke",
  title: "Mehr Bildmaterial fuer Vertrieb und Erstgespraeche",
  description:
    "Die Galerie kombiniert Motive aus Betrieb, Bildung und Event, damit Interessenten den Leistungsumfang sofort erfassen.",
  highlights: [
    {
      kicker: "Betrieb",
      title: "Betriebsrestaurant",
      text: "Loesungen fuer Mitarbeitende, Gaeste und Tagesbetrieb.",
    },
    {
      kicker: "Bildung",
      title: "Schule + Kita",
      text: "Zielgruppengerechte Verpflegung fuer Kinder und Jugendliche.",
    },
    {
      kicker: "Event",
      title: "Messen und Veranstaltungen",
      text: "Flexible Catering-Setups fuer unterschiedliche Formate.",
    },
  ],
  ctaPrimary: { label: "Projektgespraech starten", href: "/#kontakt" },
  ctaSecondary: { label: "Event-Website ansehen", href: "https://www.panorama4event.de/" },
  items: [
    {
      src: "/panorama/pc-home-01.jpg",
      title: "Panorama Catering",
      text: "Unternehmensansicht als Einstieg in den Leistungsumfang.",
      category: "Unternehmen",
      layout: "wide",
    },
    {
      src: "/panorama/betriebsrestaurant.jpg",
      title: "Betriebsrestaurant",
      text: "Verpflegung fuer Unternehmen im laufenden Betrieb.",
      category: "Betrieb",
    },
    {
      src: "/panorama/pc-philo-01.jpg",
      title: "Philosophie",
      text: "Qualitaet, Teamgeist und Kundennutzen im Mittelpunkt.",
      category: "Unternehmen",
    },
    {
      src: "/panorama/pc-philo-03.jpg",
      title: "Service Team",
      text: "Praxisnahe Umsetzung und verlassliche Ablaeufe.",
      category: "Betrieb",
    },
    {
      src: "/panorama/pc-sk-dge-02.jpg",
      title: "Schul- und Kitaverpflegung",
      text: "Alltagstaugliche Konzepte fuer Traeger und Einrichtungen.",
      category: "Bildung",
      layout: "tall",
    },
    {
      src: "/panorama/wuerth-open-air-26-aushilfe.jpg",
      title: "Event Catering",
      text: "Unterstuetzung grosser Veranstaltungsformate.",
      category: "Event",
    },
    {
      src: "/panorama/woa25-job-banner.png",
      title: "Event Recruiting",
      text: "Teamaufbau fuer saisonale Grossveranstaltungen.",
      category: "Event",
    },
    {
      src: "/panorama/woa25-job-banner-large.png",
      title: "Saisonkampagne",
      text: "Kommunikation und Einsatzplanung fuer Event-Teams.",
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
              Catering fuer Betrieb, <em>Bildung</em> und Event
            </h1>
            <p className="panorama-hero-subtitle" data-aos="fade-up" data-aos-delay="220">
              Zwei Video-Shorts laufen als durchgaengiger Hintergrund und zeigen die Dynamik der
              Marke direkt im ersten Viewport.
            </p>
            <div className="panorama-hero-actions" data-aos="fade-up" data-aos-delay="280">
              <a href="/#leistungen" className="button white">Leistungen ansehen</a>
              <a href="/booking" className="button white">Booking Demo</a>
            </div>
          </div>

          <div className="small-title">
            <p>Hotline: +49 79 40 - 930 78 20 | Kuenzelsau, Deutschland</p>
          </div>
        </section>

        <section id="leistungen" className="panorama-intro">
          <div className="pagewrap">
            <div className="panorama-intro-copy">
              <div className="section-title" data-aos="fade-up">
                <p>LEISTUNGEN</p>
              </div>
              <div className="section-bigtitle" data-aos="fade-up" data-aos-delay="100">
                <h2>Herzlich willkommen bei Panorama Catering</h2>
              </div>
              <p data-aos="fade-up" data-aos-delay="180">
                Wir entwickeln massgeschneiderte Konzepte fuer Betriebsrestaurants, Kantinen,
                Schulen, Kitas sowie Firmenveranstaltungen und Privatfeiern in unterschiedlichen
                Groessenordnungen.
              </p>
              <p data-aos="fade-up" data-aos-delay="240">
                Neben frischer Verpflegung stehen bei uns klare Prozesse, kundennahe Betreuung
                und konsequente Qualitaetsstandards im Mittelpunkt.
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
                { value: "B2B", label: "Betriebsrestaurants", text: "Konzepte fuer Unternehmen jeder Groesse." },
                { value: "KITA", label: "Schule + Kita", text: "Verpflegung fuer Kinder und Jugendliche." },
                { value: "EVENT", label: "Konferenz + Messe", text: "Flexible Betreuung fuer Veranstaltungen." },
                { value: "DE + CH", label: "Regionen", text: "Aktiv in Deutschland und der Schweiz." },
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
                  <h2>Qualitaetsprodukte, Kundenorientierung und Teamgeist</h2>
                </div>
                <p data-aos="fade-up" data-aos-delay="180">
                  Kompetenz, Verlaesslichkeit und Vertrauen sind die Grundlage unserer Partnerschaften.
                  Wir richten jedes Konzept nach den spezifischen Anforderungen von Kunden und Zielgruppen aus.
                </p>
                <p data-aos="fade-up" data-aos-delay="240">
                  Unser Ziel ist, mehr zu bieten als erwartet: mit professioneller Organisation,
                  ressourcenschonender Arbeitsweise und verbindlichen Qualitaetsstandards.
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
              <p>BRANCHEN</p>
            </div>
            <div className="section-bigtitle" data-aos="fade-up" data-aos-delay="100">
              <h2>Einsatzfelder von Panorama Catering</h2>
            </div>

            <div className="panorama-branch-grid">
              {[
                {
                  title: "Betriebsrestaurants und Kantinen",
                  text: "Versorgung fuer Mitarbeitende, Gaeste und Besucher mit klaren Tagesablaeufen.",
                  img: "/panorama/betriebsrestaurant.jpg",
                },
                {
                  title: "Schule und Kita",
                  text: "Alltagstaugliche Verpflegungskonzepte fuer Bildungseinrichtungen und Traeger.",
                  img: "/panorama/pc-sk-dge-02.jpg",
                },
                {
                  title: "Konferenz und Eventservice",
                  text: "Skalierbare Loesungen fuer Business-Events, Messen und Sportveranstaltungen.",
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
              <h2>So startet die Zusammenarbeit</h2>
            </div>
            <div className="panorama-process-grid">
              {[
                { step: "01", title: "Erstgespraech", text: "Ziele, Einsatzbereich und Rahmenbedingungen definieren." },
                { step: "02", title: "Angebot", text: "Passende Leistungsbausteine mit klarem Kostenrahmen." },
                { step: "03", title: "Feinplanung", text: "Ablauf, Verantwortlichkeiten und Schnittstellen abstimmen." },
                { step: "04", title: "Umsetzung", text: "Operativer Start mit direktem Ansprechpartner vor Ort." },
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
                  <p>BOOKING FLOW</p>
                </div>
                <div className="section-bigtitle">
                  <h2>B2B zuerst, Privatkunde direkt mitgedacht</h2>
                </div>
                <p>
                  Der neue Booking-Demo fuehrt durch Personenanzahl, Paket, Serviceart, Termin und
                  Kontaktdaten. Jede Anfrage startet mit Status pending.
                </p>
                <div className="panorama-hero-actions">
                  <a href="/booking" className="button white">Zum Booking</a>
                  <a href="/admin" className="button white">Admin Demo</a>
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
                  <p>VERTRIEBS DEMO</p>
                </div>
                <div className="section-bigtitle">
                  <h2>Mobile optimierte Storyline fuer Praesentationen</h2>
                </div>
                <p>
                  Jede Sektion ist fuer kleine Screens priorisiert, mit klaren CTAs,
                  kurzen Texten, mehr Bildmaterial und sichtbaren Bewegungsimpulsen.
                </p>
                <a href="/booking" className="button">Booking testen</a>
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
                    title: "FUER WELCHE BEREICHE BIETEN SIE CATERING AN?",
                    text: "Wir betreuen Betriebsrestaurants, Kantinen, Schulen, Kitas sowie Konferenz- und Eventformate.",
                  },
                  {
                    title: "WIE SCHNELL ERHALTEN WIR EIN ANGEBOT?",
                    text: "Nach dem Erstgespraech erstellen wir kurzfristig ein abgestimmtes Angebot fuer Ihren Bedarf.",
                  },
                  {
                    title: "IN WELCHEN REGIONEN SIND SIE AKTIV?",
                    text: "Deutschland: Hohenlohe, Unterland, Raum Ludwigsburg/Stuttgart, Markgraeflerland, Berlin, Main-Tauber-Kreis. Schweiz: Bodensee, St. Gallen.",
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
                <h3>Bereit fuer ein konkretes Angebot?</h3>
                <p>Rufen Sie uns an oder wechseln Sie zur Kontaktseite fuer die strukturierte Anfrage.</p>
              </div>
              <div className="panorama-contact-actions">
                <a href="/booking" className="button white">Booking starten</a>
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
