import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer-area text-white main-bg">
      <div className="container">
        {/*====== Footer Widget ======*/}
        <div className="footer-widget-area pt-80 pb-40">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              {/*====== Footer Widget ======*/}
              <div className="footer-widget footer-about-widget mb-40 pr-lg-70 wow fadeInUp">
                <div className="widget-content">
                  <div className="footer-logo mb-25">
                    <Link legacyBehavior href="/index">
                      <a>
                        <img
                          src="assets/images/logo/ets-brevet-rect.png"
                          alt="Logo"
                          height={100}
                        />
                      </a>
                    </Link>
                  </div>
                  <p>
                  Entreprise Brevet, votre paysagiste à votre service depuis 1890 à Charbonnières-les-Bains
                  </p>
                  <Link legacyBehavior href="/contact">
                    <a className="main-btn filled-btn filled-white">
                      Nous Contacter
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              {/*====== Footer Widget ======*/}
              <div className="footer-widget contact-info-widget mb-40 wow fadeInDown">
                <h4 className="widget-title">Informations pratique</h4>
                <div className="widget-content">
                  <ul className="info-list">
                    <li>8 Chemin de la Bressonnière <br></br> 69260 Charbonnières-les-Bains </li>
                    <li>
                      <a href="mailto:contact@ets-brevet.fr">contact@ets-brevet.fr</a>
                    </li>
                    <li>
                      <a href="tel:0478870001">04 78 87 00 01</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              {/*====== Footer Widget ======*/}
              <div className="footer-widget footer-nav-widget mb-40 wow fadeInUp">
                <h4 className="widget-title">Liens rapide</h4>
                <div className="widget-content">
                  <ul className="footer-nav">
                    <li>
                      <a href="/about-us">Notre histoire</a>
                    </li>
                    <li>
                      <a href="/services">Services</a>
                    </li>
                    <li>
                      <a href="/gallery">Réalisations</a>
                    </li>
                    <li>
                      <a href="/contact">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              {/*====== Footer Widget ======*/}
              <div className="footer-widget footer-experience-widget float-lg-right mb-40 wow fadeInDown">
                <div className="widget-content">
                  <div className="experience-box-two">
                    <h2 className="number">
                      <span className="count">25</span>+
                    </h2>
                    <h6>Années d'expériences</h6>
                    <a href="#" className="icon-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*=== Copyright Area ===*/}
        <div className="copyright-area">
          <div className="row">
            <div className="col-lg-6">
              {/*====== Copyright Text ======*/}
              <div className="copyright-text">
                <p>© 2023 A2DEV. Tous droits réservés.</p>
              </div>
            </div>
            <div className="col-lg-6">
              {/*====== Copyright Nav ======*/}
              <div className="copyright-nav float-lg-right">
                <ul>
                  <li>
                    <a href="/legals">Mentions légales</a>
                  </li>
                  <li>
                    <a href="/contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
