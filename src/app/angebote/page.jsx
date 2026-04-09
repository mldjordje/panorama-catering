import TemplateHeader from "@/components/TemplateHeader";
import TemplateFooter from "@/components/TemplateFooter";
import panoramaSalesOffer from "@data/panorama-sales-offer";

export const metadata = {
  title: panoramaSalesOffer.metadata.title,
  description: panoramaSalesOffer.metadata.description,
};

export default function AngebotePage() {
  const { hero, packages, techStack, appOptions, process, nextStep } = panoramaSalesOffer;

  return (
    <>
      <TemplateHeader />

      <div id="angebote-page" className="angebote-page">
        <section className="angebote-hero">
          <div className="pagewrap">
            <div className="angebote-hero-grid">
              <div className="angebote-hero-copy">
                <p className="panorama-eyebrow" data-aos="fade-up">{hero.eyebrow}</p>
                <h1 data-aos="fade-up" data-aos-delay="80">{hero.title}</h1>
                <p className="angebote-hero-subtitle" data-aos="fade-up" data-aos-delay="140">
                  {hero.subtitle}
                </p>

                <div className="angebote-badge-row" data-aos="fade-up" data-aos-delay="200">
                  {hero.badges.map((badge) => (
                    <span key={badge} className="angebote-badge">{badge}</span>
                  ))}
                </div>

                <div className="panorama-hero-actions angebote-hero-actions" data-aos="fade-up" data-aos-delay="240">
                  <a href={hero.primaryCta.href} className="button white">{hero.primaryCta.label}</a>
                  <a href={hero.secondaryCta.href} className="button white">{hero.secondaryCta.label}</a>
                  <a href={hero.tertiaryCta.href} className="button">{hero.tertiaryCta.label}</a>
                </div>
              </div>

              <div className="angebote-hero-proof">
                {hero.proofCards.map((card, index) => (
                  <article
                    key={card.title}
                    className="angebote-hero-proof-card"
                    data-aos="fade-left"
                    data-aos-delay={160 + index * 80}
                  >
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </article>
                ))}
                <figure className="angebote-hero-visual" data-aos="zoom-in" data-aos-delay="260">
                  <img src="/panorama/pc-home-01.jpg" alt="Panorama Catering Angebotsübersicht" />
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section className="angebote-section angebote-section-dark">
          <div className="pagewrap">
            <div className="section-title" data-aos="fade-up">
              <p>{packages.eyebrow}</p>
            </div>
            <div className="section-bigtitle" data-aos="fade-up" data-aos-delay="80">
              <h2>{packages.title}</h2>
            </div>
            <p className="angebote-section-intro is-dark" data-aos="fade-up" data-aos-delay="140">
              {packages.intro}
            </p>

            <div className="angebote-package-grid">
              {packages.items.map((item, index) => (
                <article
                  key={item.id}
                  className={`angebote-package-card ${item.featured ? "is-featured" : ""}`}
                  data-aos="fade-up"
                  data-aos-delay={120 + index * 70}
                >
                  <div className="angebote-package-head">
                    <p className="angebote-package-kicker">{item.name}</p>
                    <h3>{item.headline}</h3>
                    <span>{item.subline}</span>
                  </div>

                  <div className="angebote-package-price-row">
                    <p className="angebote-package-price">{item.price}</p>
                    <span className="angebote-package-price-note">{item.priceNote}</span>
                  </div>

                  <p className="angebote-package-summary">{item.summary}</p>
                  <p className="angebote-package-fit"><strong>Geeignet für:</strong> {item.fit}</p>
                  <p className="angebote-package-fit"><strong>Zeitrahmen:</strong> {item.timeline}</p>

                  {item.sections.map((section) => (
                    <div key={section.title} className="angebote-package-block">
                      <h4>{section.title}</h4>
                      <ul className="angebote-check-list">
                        {section.items.map((entry) => (
                          <li key={entry}>{entry}</li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  <div className="angebote-package-actions">
                    <a href={item.cta.href} className="button white">{item.cta.label}</a>
                    <a href={item.secondaryCta.href} className="button">{item.secondaryCta.label}</a>
                  </div>
                </article>
              ))}
            </div>

            <p className="angebote-package-footnote" data-aos="fade-up" data-aos-delay="260">
              {packages.footnote}
            </p>
          </div>
        </section>

        <section className="angebote-section angebote-section-light">
          <div className="pagewrap">
            <div className="section-title" data-aos="fade-up">
              <p>{techStack.eyebrow}</p>
            </div>
            <div className="section-bigtitle" data-aos="fade-up" data-aos-delay="80">
              <h2>{techStack.title}</h2>
            </div>
            <p className="angebote-section-intro" data-aos="fade-up" data-aos-delay="140">
              {techStack.intro}
            </p>

            <div className="angebote-audit-grid">
              {techStack.cards.map((card, index) => (
                <article
                  key={card.title}
                  className="angebote-audit-card"
                  data-aos="fade-up"
                  data-aos-delay={120 + index * 60}
                >
                  <h4>{card.title}</h4>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="angebote-section angebote-section-light angebote-section-topless">
          <div className="pagewrap">
            <div className="section-title" data-aos="fade-up">
              <p>{appOptions.eyebrow}</p>
            </div>
            <div className="section-bigtitle" data-aos="fade-up" data-aos-delay="80">
              <h2>{appOptions.title}</h2>
            </div>
            <p className="angebote-section-intro" data-aos="fade-up" data-aos-delay="140">
              {appOptions.intro}
            </p>

            <div className="angebote-audit-grid">
              {appOptions.cards.map((card, index) => (
                <article
                  key={card.title}
                  className="angebote-audit-card"
                  data-aos="fade-up"
                  data-aos-delay={120 + index * 60}
                >
                  <h4>{card.title}</h4>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="angebote-section angebote-section-light">
          <div className="pagewrap">
            <div className="section-title" data-aos="fade-up">
              <p>{process.eyebrow}</p>
            </div>
            <div className="section-bigtitle" data-aos="fade-up" data-aos-delay="80">
              <h2>{process.title}</h2>
            </div>

            <div className="angebote-process-grid">
              {process.steps.map((item, index) => (
                <article
                  key={item.step}
                  className="angebote-process-card"
                  data-aos="flip-up"
                  data-aos-delay={120 + index * 70}
                >
                  <span>{item.step}</span>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="angebote-section angebote-section-dark">
          <div className="pagewrap">
            <div className="section-title" data-aos="fade-up">
              <p>{nextStep.eyebrow}</p>
            </div>
            <div className="section-bigtitle" data-aos="fade-up" data-aos-delay="80">
              <h2>{nextStep.title}</h2>
            </div>
            <p className="angebote-section-intro is-dark" data-aos="fade-up" data-aos-delay="140">
              {nextStep.text}
            </p>

            <div className="angebote-next-grid">
              <article className="angebote-next-card" data-aos="fade-right" data-aos-delay="180">
                <h3>Empfohlener nächster Schritt</h3>
                <ul className="angebote-check-list">
                  {nextStep.pilotPoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="angebote-next-actions">
                  <a href={nextStep.primaryCta.href} className="button white">{nextStep.primaryCta.label}</a>
                  <a href={nextStep.secondaryCta.href} className="button">{nextStep.secondaryCta.label}</a>
                  <a href={nextStep.tertiaryCta.href} className="button">{nextStep.tertiaryCta.label}</a>
                </div>
              </article>

              <article className="angebote-script-card" data-aos="fade-left" data-aos-delay="220">
                <p className="angebote-package-kicker">Roadmap-Logik</p>
                <h3>{nextStep.reassuranceTitle}</h3>
                <p className="angebote-script-intro">{nextStep.reassuranceText}</p>
                <ul className="angebote-check-list">
                  {nextStep.reassurancePoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>
      </div>

      <TemplateFooter />
    </>
  );
}
