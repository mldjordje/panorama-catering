import TemplateHeader from "@/components/TemplateHeader";
import TemplateFooter from "@/components/TemplateFooter";
import panoramaSalesOffer from "@data/panorama-sales-offer";

export const metadata = {
  title: panoramaSalesOffer.metadata.title,
  description: panoramaSalesOffer.metadata.description,
};

export default function AngebotePage() {
  const { hero, whyNow, missingNow, packages, roi, addons, process, nextStep, salesScript } =
    panoramaSalesOffer;

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
                  <a href={hero.tertiaryCta.href} className="button white">{hero.tertiaryCta.label}</a>
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
                  <img src="/panorama/pc-home-01.jpg" alt="Panorama Catering Angebotspakete" />
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section className="angebote-section angebote-section-light">
          <div className="pagewrap">
            <div className="section-title" data-aos="fade-up">
              <p>{whyNow.eyebrow}</p>
            </div>
            <div className="section-bigtitle" data-aos="fade-up" data-aos-delay="80">
              <h2>{whyNow.title}</h2>
            </div>
            <p className="angebote-section-intro" data-aos="fade-up" data-aos-delay="140">
              {whyNow.intro}
            </p>

            <div className="angebote-audit-grid">
              {whyNow.auditCards.map((card, index) => (
                <article
                  key={card.title}
                  className="angebote-audit-card"
                  data-aos="fade-up"
                  data-aos-delay={120 + index * 70}
                >
                  <h4>{card.title}</h4>
                  <p><strong>Heute:</strong> {card.before}</p>
                  <p><strong>Mit uns:</strong> {card.after}</p>
                </article>
              ))}
            </div>

            <div className="angebote-source-box" data-aos="fade-up" data-aos-delay="220">
              <h4>{whyNow.evidenceTitle}</h4>
              <ul className="angebote-source-list">
                {whyNow.evidence.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} target="_blank" rel="noreferrer">{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="angebote-section angebote-section-dark">
          <div className="pagewrap">
            <div className="section-title" data-aos="fade-up">
              <p>{missingNow.eyebrow}</p>
            </div>
            <div className="section-bigtitle" data-aos="fade-up" data-aos-delay="80">
              <h2>{missingNow.title}</h2>
            </div>

            <div className="angebote-gap-grid">
              {missingNow.items.map((item, index) => (
                <article
                  key={item.title}
                  className="angebote-gap-card"
                  data-aos="fade-up"
                  data-aos-delay={120 + index * 60}
                >
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="angebote-section angebote-section-light">
          <div className="pagewrap">
            <div className="section-title" data-aos="fade-up">
              <p>{packages.eyebrow}</p>
            </div>
            <div className="section-bigtitle" data-aos="fade-up" data-aos-delay="80">
              <h2>{packages.title}</h2>
            </div>
            <p className="angebote-section-intro" data-aos="fade-up" data-aos-delay="140">
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
                  <p className="angebote-package-summary">{item.summary}</p>
                  <p className="angebote-package-fit"><strong>F\u00fcr wen geeignet:</strong> {item.fit}</p>
                  <p className="angebote-package-fit"><strong>Zeitrahmen:</strong> {item.timeline}</p>
                  <div className="angebote-package-block">
                    <h4>{item.includedTitle}</h4>
                    <ul className="angebote-check-list">
                      {item.deliverables.map((deliverable) => (
                        <li key={deliverable}>{deliverable}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="angebote-package-block">
                    <h4>{item.functionsTitle}</h4>
                    <ul className="angebote-check-list">
                      {item.functions.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="angebote-package-block">
                    <h4>{item.impactTitle}</h4>
                    <ul className="angebote-check-list">
                      {item.impacts.map((impact) => (
                        <li key={impact}>{impact}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="angebote-package-actions">
                    <a href={item.cta.href} className="button white">{item.cta.label}</a>
                    {item.secondaryCta ? (
                      <a href={item.secondaryCta.href} className="button">{item.secondaryCta.label}</a>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="angebote-section angebote-section-dark">
          <div className="pagewrap">
            <div className="section-title" data-aos="fade-up">
              <p>{roi.eyebrow}</p>
            </div>
            <div className="section-bigtitle" data-aos="fade-up" data-aos-delay="80">
              <h2>{roi.title}</h2>
            </div>
            <p className="angebote-section-intro is-dark" data-aos="fade-up" data-aos-delay="140">
              {roi.intro}
            </p>

            <div className="angebote-roi-grid">
              <article className="angebote-roi-card is-highlight" data-aos="fade-right" data-aos-delay="180">
                <p className="angebote-package-kicker">Lead &amp; Booking Pro</p>
                <h3>{roi.spotlightTitle}</h3>
                <ul className="angebote-check-list">
                  {roi.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <a href="/booking" className="button white">Anfrage-Flow live zeigen</a>
              </article>

              <div className="angebote-roi-proof">
                {roi.proof.map((item, index) => (
                  <article
                    key={item}
                    className="angebote-roi-card"
                    data-aos="fade-left"
                    data-aos-delay={200 + index * 80}
                  >
                    <p>{item}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="angebote-section angebote-section-light">
          <div className="pagewrap">
            <div className="section-title" data-aos="fade-up">
              <p>{addons.eyebrow}</p>
            </div>
            <div className="section-bigtitle" data-aos="fade-up" data-aos-delay="80">
              <h2>{addons.title}</h2>
            </div>

            <div className="angebote-retainer-card" data-aos="fade-up" data-aos-delay="120">
              <p className="angebote-package-kicker">{addons.growthRetainer.name}</p>
              <h3>{addons.growthRetainer.price}</h3>
              <span>{addons.growthRetainer.discount}</span>
              <p>{addons.growthRetainer.text}</p>
            </div>

            <div className="angebote-addon-grid">
              {addons.items.map((item, index) => (
                <article
                  key={item.name}
                  className="angebote-addon-card"
                  data-aos="fade-up"
                  data-aos-delay={140 + index * 60}
                >
                  <div className="angebote-addon-head">
                    <h4>{item.name}</h4>
                    <span>{item.price}</span>
                  </div>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="angebote-section angebote-section-dark">
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

        <section className="angebote-section angebote-section-light">
          <div className="pagewrap">
            <div className="section-title" data-aos="fade-up">
              <p>{nextStep.eyebrow}</p>
            </div>
            <div className="section-bigtitle" data-aos="fade-up" data-aos-delay="80">
              <h2>{nextStep.title}</h2>
            </div>
            <p className="angebote-section-intro" data-aos="fade-up" data-aos-delay="140">
              {nextStep.text}
            </p>

            <div className="angebote-next-grid">
              <article className="angebote-next-card" data-aos="fade-right" data-aos-delay="180">
                <h3>{"Empfohlener n\u00e4chster Schritt"}</h3>
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
                <p className="angebote-package-kicker">{"Gespr\u00e4chsleitfaden"}</p>
                <h3>{salesScript.title}</h3>
                <p className="angebote-script-intro">{salesScript.intro}</p>
                <div className="angebote-script-steps">
                  {salesScript.steps.map((item) => (
                    <div key={item.kicker} className="angebote-script-step">
                      <h4>{item.kicker}</h4>
                      <p>{item.text}</p>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>
      </div>

      <TemplateFooter />
    </>
  );
}
