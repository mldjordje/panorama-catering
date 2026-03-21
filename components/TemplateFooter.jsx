const FOOTER_ITEMS = [
  { href: "/#leistungen", label: "Leistungen" },
  { href: "/#philosophie", label: "Philosophie" },
  { href: "/#branchen", label: "Branchen" },
  { href: "/booking", label: "Booking" },
  { href: "/#panorama-galerie", label: "Galerie" },
  { href: "/#kontakt", label: "Kontakt" },
];

export default function TemplateFooter() {
  return (
    <div id="footer">
      <div className="pagewrap">
        <div className="footer-top">
          <div className="flex-elements">
            <div className="footer-top-element-left">
              <img src="/panorama/logo-panorama-catering.png" alt="Panorama Catering" />
            </div>

            <div className="footer-top-element-right">
              {FOOTER_ITEMS.map((item) => (
                <a key={item.href} href={item.href} className="button white">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-middle">
          <div className="flex-elements">
            <div className="element-title">
              <p>KONTAKT</p>
            </div>
            <div className="element-informations">
              <ul>
                <li>
                  <a href="tel:+4979409307820">Hotline: +49 79 40 - 930 78 20</a>
                </li>
                <li>
                  <a href="mailto:info@panorama-catering.de">info@panorama-catering.de</a>
                </li>
                <li>
                  <a href="https://maps.google.com/?q=Gartenstrasse+13+74653+Kuenzelsau" target="_blank" rel="noreferrer">
                    Gartenstrasse 13, 74653 Kuenzelsau
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex-elements">
            <div className="element-title">
              <p>SCHWERPUNKTE</p>
            </div>
            <div className="element-informations">
              <ul>
                <li><p>Betriebsrestaurants und Kantinen</p></li>
                <li><p>Schul- und Kitaverpflegung</p></li>
                <li><p>Konferenzservice, Events und Privatfeiern</p></li>
              </ul>
            </div>
          </div>

          <div className="flex-elements">
            <div className="element-title">
              <p>REGIONEN</p>
            </div>
            <div className="element-informations">
              <ul>
                <li><p>Deutschland: Hohenlohe, Unterland, Raum Ludwigsburg/Stuttgart, Markgraeflerland, Berlin, Main-Tauber-Kreis</p></li>
                <li><p>Schweiz: Bodensee, St. Gallen</p></li>
              </ul>
            </div>
          </div>

          <div className="footer-middle-bottom">
            <a href="https://www.panorama-catering.de/karriere/freie-stellen" className="button white" target="_blank" rel="noreferrer">
              Karriere
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>(c) 2026 Panorama Hotel- und Service GmbH</p>
          <p>
            <a href="https://www.panorama-catering.de/kontakt/impressum" target="_blank" rel="noreferrer">
              Impressum
            </a>
          </p>
          <p>
            <a href="https://www.panorama-catering.de/kontakt/datenschutz" target="_blank" rel="noreferrer">
              Datenschutz
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
