'use client';

import { useEffect } from "react";
import AppData from "@data/app.json";
import TemplateHeader from "@/components/TemplateHeader";
import TemplateFooter from "@/components/TemplateFooter";
import ImmersiveGallery from "@/components/ImmersiveGallery";

const panoramaKontaktShowcase = {
  sectionId: "kontakt-showcase",
  eyebrow: "Einblicke",
  title: "Einblicke für das Erstgespräch",
  description:
    "Diese Galerie zeigt typische Einsatzbereiche von Panorama Catering und unterstützt ein ruhiges, gut strukturiertes Erstgespräch.",
  highlights: [
    {
      kicker: "Betrieb",
      title: "Betriebsgastronomie",
      text: "Laufende Verpflegung für Unternehmen und Standorte unterschiedlicher Größe.",
    },
    {
      kicker: "Bildung",
      title: "Schule und Kita",
      text: "Verpflegungslösungen mit klaren Qualitäts- und Prozessstandards.",
    },
    {
      kicker: "Event",
      title: "Konferenz und Messe",
      text: "Flexible Formate für Veranstaltungen, Business-Events und Sport.",
    },
  ],
  ctaPrimary: { label: "Hotline anrufen", href: "tel:+4979409307820" },
  ctaSecondary: { label: "Event-Website", href: "https://www.panorama4event.de/" },
  items: [
    {
      src: "/panorama/pc-home-01.jpg",
      title: "Panorama Catering",
      text: "Unternehmensansicht für einen starken ersten Eindruck.",
      category: "Unternehmen",
      layout: "wide",
    },
    {
      src: "/panorama/betriebsrestaurant.jpg",
      title: "Betriebsrestaurant",
      text: "Verpflegung für den Arbeitsalltag und den laufenden Betrieb.",
      category: "Betrieb",
    },
    {
      src: "/panorama/pc-sk-dge-02.jpg",
      title: "Schule und Kita",
      text: "Alltagstaugliche Versorgung für Einrichtungen und Träger.",
      category: "Bildung",
      layout: "tall",
    },
    {
      src: "/panorama/pc-philo-03.jpg",
      title: "Service und Team",
      text: "Operative Umsetzung mit verlässlichen Ansprechpartnern.",
      category: "Unternehmen",
    },
    {
      src: "/panorama/wuerth-open-air-26-aushilfe.jpg",
      title: "Eventbetrieb",
      text: "Unterstützung für größere Veranstaltungsformate.",
      category: "Event",
    },
  ],
};

export default function KontaktPage() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    let cancelled = false;
    let tries = 0;
    const maxTries = 20;

    const initAos = () => {
      if (cancelled) return;

      if (window.AOS) {
        if (window.AOS.refreshHard) {
          window.AOS.refreshHard();
        }
        window.AOS.init({ duration: 1300, once: true });
        return;
      }

      tries += 1;
      if (tries < maxTries) {
        window.setTimeout(initAos, 120);
        return;
      }

      document.querySelectorAll("#contactpage [data-aos]").forEach((element) => {
        element.classList.add("aos-animate");
      });
    };

    initAos();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      <TemplateHeader />
      <div id="contactpage">
        <div className="contact-us-section">
          <div className="pagewrap">
            <div className="section-title" data-aos="fade-up">
              <p>KONTAKT</p>
            </div>
            <div className="grid-2-elements">
              <div className="contact-us-grid-left">
                <div className="section-content">
                  <h1 data-aos="fade-up" data-aos-delay="200">
                    Ihr direkter Draht zu <em>Panorama Catering</em>
                  </h1>
                  <h4 data-aos="fade-up" data-aos-delay="400">
                    Senden Sie uns Eckdaten zu Standort, Personenzahl und Einsatzbereich. Unser
                    Team meldet sich zeitnah mit einem passenden Vorschlag für Ihr Projekt.
                  </h4>
                </div>
              </div>

              <div className="contact-us-grid-right">
                <div className="grid-right-1" data-aos="fade-up" data-aos-delay="500">
                  <div className="element">
                    <div className="title"><p>Hotline</p></div>
                    <ul>
                      <li><a href="tel:+4979409307820">+49 79 40 - 930 78 20</a></li>
                    </ul>
                  </div>
                  <div className="element">
                    <div className="title"><p>E-Mail</p></div>
                    <ul>
                      <li><a href="mailto:info@panorama-catering.de">info@panorama-catering.de</a></li>
                    </ul>
                  </div>
                  <div className="element">
                    <div className="title"><p>Adresse</p></div>
                    <ul>
                      <li>
                        <a href="https://maps.google.com/?q=Gartenstrasse+13+74653+Kuenzelsau" target="_blank" rel="noreferrer">
                          Gartenstraße 13, 74653 Künzelsau
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="element">
                    <div className="title"><p>Event Website</p></div>
                    <ul>
                      <li>
                        <a href="https://www.panorama4event.de/" target="_blank" rel="noreferrer">
                          panorama4event.de
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div id="kontakt" className="contact-form" data-aos="fade-up" data-aos-delay="600">
                  <div className="fluentform ff-default">
                    <form
                      className="frm-fluent-form"
                      method="POST"
                      action={AppData.settings.formspreeURL}
                    >
                      <input type="hidden" name="_subject" value="Neue Anfrage - Panorama Catering" />

                      <div className="ff-el-group">
                        <div className="ff-el-input--label ff-el-is-required asterisk-right">
                          <label>Name</label>
                        </div>
                        <div className="ff-el-input--content">
                          <input type="text" name="name" className="ff-el-form-control" placeholder="Vor- und Nachname" required />
                        </div>
                      </div>

                      <div className="ff-t-container ff-column-container ff_columns_total_2">
                        <div className="ff-t-cell ff-t-column-1" style={{ flexBasis: "50%" }}>
                          <div className="ff-el-group">
                            <div className="ff-el-input--label ff-el-is-required asterisk-right">
                              <label>E-Mail</label>
                            </div>
                            <div className="ff-el-input--content">
                              <input type="email" name="email" className="ff-el-form-control" placeholder="name@unternehmen.de" required />
                            </div>
                          </div>
                        </div>
                        <div className="ff-t-cell ff-t-column-2" style={{ flexBasis: "50%" }}>
                          <div className="ff-el-group">
                            <div className="ff-el-input--label ff-el-is-required asterisk-right">
                              <label>Telefon</label>
                            </div>
                            <div className="ff-el-input--content">
                              <input type="text" name="phone" className="ff-el-form-control" placeholder="+49 ..." required />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="ff-t-container ff-column-container ff_columns_total_2">
                        <div className="ff-t-cell ff-t-column-1" style={{ flexBasis: "50%" }}>
                          <div className="ff-el-group">
                            <div className="ff-el-input--label asterisk-right">
                              <label>Unternehmen / Einrichtung</label>
                            </div>
                            <div className="ff-el-input--content">
                              <input type="text" name="company" className="ff-el-form-control" placeholder="Unternehmen oder Träger" />
                            </div>
                          </div>
                        </div>
                        <div className="ff-t-cell ff-t-column-2" style={{ flexBasis: "50%" }}>
                          <div className="ff-el-group">
                            <div className="ff-el-input--label asterisk-right">
                              <label>Einsatzbereich</label>
                            </div>
                            <div className="ff-el-input--content">
                              <input type="text" name="scope" className="ff-el-form-control" placeholder="Betrieb, Schule/Kita, Event" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="ff-el-group">
                        <div className="ff-el-input--label ff-el-is-required asterisk-right">
                          <label>Nachricht</label>
                        </div>
                        <div className="ff-el-input--content">
                          <textarea
                            name="message"
                            className="ff-el-form-control"
                            placeholder="Beschreiben Sie kurz Ihren Bedarf, den Zeitraum und die Personenzahl."
                            rows={4}
                            required
                          ></textarea>
                        </div>
                      </div>

                      <div className="ff-el-group ff-text-right ff_submit_btn_wrapper">
                        <button type="submit" className="ff-btn ff-btn-submit ff-btn-md ff_btn_style">Anfrage senden</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ImmersiveGallery {...panoramaKontaktShowcase} />
      </div>
      <TemplateFooter />
    </>
  );
}
