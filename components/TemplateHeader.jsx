const NAV_ITEMS = [
  { href: "/#leistungen", label: "Leistungsfelder" },
  { href: "/#philosophie", label: "Philosophie" },
  { href: "/#branchen", label: "Einsatzfelder" },
  { href: "/booking", label: "Anfrage" },
  { href: "/angebote", label: "Pakete" },
  { href: "/#kontakt", label: "Kontakt" },
];

export default function TemplateHeader() {
  return (
    <>
      <div id="menuholder">
        <div className="pagewrap">
          <div className="flex-elements">
            <div className="flex-element-left">
              <a href="/">
                <img src="/panorama/logo-panorama-catering.png" alt="Panorama Catering logo" />
              </a>
            </div>

            <div className="flex-element-right">
              <div className="desktop-menu">
                <div className="menu-elements">
                  <ul className="menu">
                    {NAV_ITEMS.map((item) => (
                      <li key={item.href}>
                        <a href={item.href}>
                          <span>{item.label}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="enquiry-element">
                  <a href="/booking" className="button">
                    Anfrage
                  </a>
                </div>
              </div>

              <div className="mobile-menu toggle">
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="overlay">
        <div className="pagewrap">
          <div className="overlay-menu-top">
            <div className="grid-2-elements">
              <div className="grid-element-menu-left">
                <ul>
                  {NAV_ITEMS.map((item) => (
                    <li key={`overlay-${item.href}`}>
                      <a href={item.href}>{item.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid-element-menu-right">
                <ul>
                  <li>
                    <p>Hotline</p>
                  </li>
                  <li>
                    <a href="tel:+4979409307820">+49 79 40 - 930 78 20</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <p>E-Mail</p>
                  </li>
                  <li>
                    <a href="mailto:info@panorama-catering.de">info@panorama-catering.de</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <p>Adresse</p>
                  </li>
                  <li>
                    <a href="https://maps.google.com/?q=Gartenstrasse+13+74653+Kuenzelsau" target="_blank" rel="noreferrer">
                      {"Gartenstra\u00dfe 13, 74653 K\u00fcnzelsau"}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
