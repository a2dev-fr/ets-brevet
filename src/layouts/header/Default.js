import Link from "next/link";
import { Fragment, useState } from "react";
import SearchModal from "../SearchModal";
import Sidebar from "../Sidebar";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";

const Default = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [searchModal, setSearchModal] = useState(false);
  return (
    <Fragment>
      <SearchModal
        show={searchModal}
        handleClose={() => setSearchModal(false)}
      />
      <header className="header-area header-two">
        <div className="container-fluid">
          {/*====== Header Top Bar ======*/}
          {/*====== Header Middle ======*/}
          {/*====== Header Navigation ======*/}
          <div className="header-navigation d-xl-block d-none sticky">
            <div className="nav-overlay" />
            <div className="primary-menu">
              {/*====== Site Branding ======*/}
              <div className="site-branding">
                <Link legacyBehavior href="/">
                  <a className="brand-logo">
                    <img
                      src="assets/images/logo/logo-white-two.png"
                      alt="Site Logo"
                    />
                  </a>
                </Link>
                <Link legacyBehavior href="/">
                  <a className="sticky-logo">
                    <img
                      src="assets/images/logo/logo-black.png"
                      alt="Site Logo"
                      height={55}
                    />
                  </a>
                </Link>
              </div>
              {/*====== Nav Menu ======*/}
              <div className="nav-menu">
                {/*====== Site Branding ======*/}
                <div className="mobile-logo mb-30 d-block d-xl-none">
                  <Link legacyBehavior href="/">
                    <a className="brand-logo">
                      <img
                        src="assets/images/logo/logo-black.png"
                        alt="Site Logo"
                      />
                    </a>
                  </Link>
                </div>
                {/*=== Nav Search ===*/}
                <div className="nav-search mb-30 d-block d-xl-none ">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form_group">
                      <input
                        type="email"
                        className="form_control"
                        placeholder="Search Here"
                        name="email"
                        required
                      />
                      <button className="search-btn">
                        <i className="fas fa-search" />
                      </button>
                    </div>
                  </form>
                </div>
                {/*====== main Menu ======*/}
                <Menu />
                {/*====== Menu Button ======*/}
                <div className="menu-button mt-40 d-xl-none">
                  <Link legacyBehavior href="tel:0478870001">
                    <a className="main-btn secondary-btn">Appelez-nous</a>
                  </Link>
                </div>
              </div>
              {/*====== Nav Right Item ======*/}
              <div className="nav-right-item">
                {/* <div className="lang-dropdown">
                 
                </div> */}
                <div className="menu-button d-xl-block d-none">
                  <Link legacyBehavior href="tel:0478870001">
                    <a className="main-btn primary-btn text-uppercase">Appelez-nous</a>
                  </Link>
                </div>
                <div className="navbar-toggler">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          </div>
          <MobileMenu
            handleShow={handleShow}
            logo="assets/images/logo/logo-black.png"
          />
        </div>
      </header>
      <Sidebar show={show} handleClose={handleClose} />
    </Fragment>
  );
};
export default Default;
