import React from 'react';
import LogoImg from "../../public/img/icons/logo-home.svg";
import Image from 'next/image';


const Header = () => {
    return(
        <>
            <header className="header" id="header">
          <div className="container">
            <div className="header__inner">
              <a
                href="/"
                className="header-logo header-logo--home"
                title="litit logo"
              >
                <picture>
                  {/* <img src="/assets/img/icons/logo-home.svg" width="115" height="56" alt="" /> */}
                  <Image src={LogoImg} alt="logo" width={115} height={56} />
                </picture>
              </a>
              <button
                id="mobile-menu-button"
                className="hamburger hamburger--squeeze show-tablet"
                type="button"
              >
                <span className="hamburger-box">
                  <span className="hamburger-inner"></span>
                </span>
              </button>

              <nav className="header-nav hide-tablet">
                <ul className="header-nav__ul">
                  <li className="header-nav__li show-desktop">
                    <span className="dropdown">
                      <a href="#" className="dropdown__btn header-nav__more">
                        <span></span>
                      </a>
                      <span className="dropdown__tooltip header-nav__tooltip">
                        <span className="dropdown__tooltip-inner">
                          <ul className="header-nav__dropdown-list">
                            <li className="header-nav__dropdown-item">
                              <a
                                href="./token"
                                title="Token"
                                className="header-nav__link"
                              >
                                Token
                              </a>
                            </li>
                            <li className="header-nav__dropdown-item">
                              <a
                                href="./creators"
                                title="Creators"
                                className="header-nav__link"
                              >
                                Creators
                              </a>
                            </li>
                          </ul>
                        </span>
                      </span>
                    </span>
                  </li>
                </ul>
              </nav>

              <div id="user-menu" className="header-user-wrapper">
                <div className="log-btn-block">
                  <div className="log-btn-block__inner">
                    <a href="./signin" className="btn btn-white">
                      <span className="btn__inner">Log in</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        </>
    )
}

export default Header;