import Recat from "react";
import FooterLogo from '../../public/img/icons/logo.svg';
import Linkedin from "../../public/img/icons/footer/linkedin.svg";
import PlayMarket from "../../public/img/images/join/playMarket.png";
import Image from "next/image";
import AppStore from "../../public/img/images/join/appStore.png";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container footer__container">
          <div className="footer__inner">
            <div>
              <a href="./" className="footer-logo" title="litit logo">
                <picture>
                  {/* <img src="assets/img/icons/logo.svg" width="109" height="44" alt="" /> */}
                  <Image src={FooterLogo} alt="" height={44} width={109} />
                </picture>
              </a>
              <ul className="footer__socials">
                <li>
                  <a
                    href="https://www.linkedin.com/company/lititapp"
                    target="_blank"
                    title="litit linkedin"
                  >
                    <picture>
                      <Image src={Linkedin} alt="" height={20} width={20} />
                    </picture>
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-links">
              <ul className="footer-links__list">
                <li className="footer-links__item">
                  <a
                    href="./pages/privacy-notice"
                    target="_blank"
                    title="Privacy Notice"
                  >
                    Privacy Notice
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__store-btn">
              <a
                href="https://apps.apple.com/us/app/lit-it-short-video-app/id1610743469"
                data-download-link="true"
                target="_blank"
              >
                {/* <img src="assets/img/images/join/appStore.png" loading="lazy" alt="" class="store-img"> */}
                <Image src={AppStore} alt="" className="store-img" />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.litit.app"
                data-download-link="true"
                target="_blank"
              >
                {/* <img src="assets/img/images/join/playMarket.png" loading="lazy" alt="" class="store-img"> */}
                <Image src={PlayMarket} alt="" className="store-img" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
