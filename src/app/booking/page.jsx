import TemplateHeader from "@/components/TemplateHeader";
import TemplateFooter from "@/components/TemplateFooter";
import BookingFlow from "@/components/BookingFlow";

export const metadata = {
  title: "Booking | Panorama Catering",
  description: "Demo Booking Flow fuer Panorama Catering mit B2B Fokus.",
};

const bookingVisuals = [
  {
    src: "/panorama/betriebsrestaurant.jpg",
    title: "B2B Fokus",
    text: "Firmen, Bildungs- und Eventkunden in einem klaren Anfragefluss.",
  },
  {
    src: "/panorama/pc-philo-03.jpg",
    title: "Lieferung oder Personal",
    text: "Lieferung, Lieferung mit Personal oder Pickup in einem Schritt.",
  },
  {
    src: "/panorama/wuerth-open-air-26-aushilfe.jpg",
    title: "Skalierbare Events",
    text: "Von kleinen Formaten bis zu groesseren Business Events.",
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
              Panorama Catering Booking
            </p>
            <h1 data-aos="fade-up" data-aos-delay="100">
              Anfrage fuer Catering in wenigen Schritten
            </h1>
            <p data-aos="fade-up" data-aos-delay="180">
              Dieser Demo-Flow priorisiert B2B Anfragen, bietet aber auch eine private Buchung.
              Jede neue Anfrage wird mit Status <strong>pending</strong> angezeigt.
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
