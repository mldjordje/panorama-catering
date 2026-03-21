import TemplateHeader from "@/components/TemplateHeader";
import TemplateFooter from "@/components/TemplateFooter";
import BookingFlow from "@/components/BookingFlow";

export const metadata = {
  title: "Anfrage | Panorama Catering",
  description: "Strukturiertes Anfrageformular für Betriebsrestaurants, Bildungseinrichtungen und Veranstaltungen.",
};

const bookingVisuals = [
  {
    src: "/panorama/betriebsrestaurant.jpg",
    title: "Betriebsrestaurant",
    text: "Klare Erfassung für Unternehmen, Standorte und wiederkehrende Verpflegungssituationen.",
  },
  {
    src: "/panorama/pc-philo-03.jpg",
    title: "Servicebausteine",
    text: "Lieferung, Servicepersonal und Abholung lassen sich strukturiert vorqualifizieren.",
  },
  {
    src: "/panorama/wuerth-open-air-26-aushilfe.jpg",
    title: "Veranstaltungen",
    text: "Von kleineren Formaten bis zu größeren Business-Events sauber vorbereitet.",
  },
];

export default function BookingPage() {
  return (
    <>
      <TemplateHeader />

      <div id="bookingpage" className="panorama-booking-page">
        <section className="panorama-booking-hero">
          <div className="pagewrap">
            <p className="panorama-eyebrow" data-aos="fade-up">
              Anfrage
            </p>
            <h1 data-aos="fade-up" data-aos-delay="100">
              Ihr Weg zum passenden Catering-Konzept
            </h1>
            <p data-aos="fade-up" data-aos-delay="180">
              Für die Präsentation steht ein strukturiertes Anfrageformular bereit. Es erfasst die
              wichtigsten Angaben für Beratung und Angebotserstellung und zeigt, wie Panorama
              Catering Anfragen klar und professionell vorqualifiziert.
            </p>
          </div>
        </section>

        <section className="panorama-booking-visuals">
          <div className="pagewrap">
            <div className="panorama-booking-visual-grid">
              {bookingVisuals.map((item, index) => (
                <article
                  key={item.title}
                  className="panorama-booking-visual-card"
                  data-aos="fade-up"
                  data-aos-delay={120 + index * 90}
                >
                  <img src={item.src} alt={item.title} />
                  <div className="panorama-booking-visual-body">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="panorama-booking-flow-section">
          <div className="pagewrap">
            <BookingFlow />
          </div>
        </section>
      </div>

      <TemplateFooter />
    </>
  );
}
