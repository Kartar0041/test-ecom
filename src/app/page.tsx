import Image from "next/image";
import styles from "./page.module.css";
import LogoImg from "../../public/img/icons/logo-home.svg";
import HeroTop from "../../public/img/images/hero-top-bg.svg";
import AppStore from "../../public/img/images/join/appStore.png";
import PlayMarket from "../../public/img/images/join/playMarket.png";
import HomeToken from "../../public/img/images/home/home-token.svg";
import Coin from '../../public/img/images/coin.png';
import Advantage1 from '../../public/img/images/advantages-pic-1.png';
import Advantage2 from '../../public/img/images/advantages-pic-2.png';
import AppStoreImg from "../../public/img/images/app-store.png";
import GooglePlay from "../../public/img/images/google-play.png"
import LogoPic from "../../public/img/icons/logo-pic.png";
import Iphone from "../../public/img/images/iPhone.svg";
import Face1 from "../../public/img/images/face-1.png"
import Face2 from "../../public/img/images/face-2.png"
import Face3 from "../../public/img/images/face-3.png"
import Faces from "../../public/img/images/faces.png"
import ArrowRight from "../../public/img/icons/arrow-right-white.svg";
import Community from "../../public/img/images/mobile-app/community.png";
import Contents from "../../public/img/images/mobile-app/contents-m.png"
import Gallery1 from "../../public/img/images/mobile-app/gallery-1-m.png"
import Rooms from "../../public/img/images/mobile-app/rooms.png"
import SubCtg from "../../public/img/images/mobile-app/sub-ctg-desc.png";
import Hashtags from "../../public/img/images/mobile-app/hashtags.png"
import ShortVideo from "../../public/img/images/mobile-app/short-videos.png"
import Linkedin from "../../public/img/icons/footer/linkedin.svg";
import FooterLogo from "../../public/img/icons/logo.svg";
import SubCat2 from "../../public/img/images/mobile-app/sub-ctg.png"
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <div className="wrapper">
        <div id="mobile-menu" className="header-mobile-nav">
          <div className="header-mobile-nav__inner">
            <div id="user-menu2" className="menu-user-wrapper">
              <div className="log-btn-block header-mobile-nav__item">
                <div className="log-btn-block__inner">
                  <a href="./signin" className="btn btn-white">
                    <span className="btn__inner">Log in</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <Header />

        <main className="main">
        <section className="hero header-offset">
      <div className="hero-bg">
        <div className="hero-bg__bottom"></div>
        <canvas id="hero-bg"></canvas>
        <div className="hero-bg__middle"></div>
        <div className="hero-bg__top">
          <div className="hero-bg__top-pic">
            <picture>
              {/* <img src="/assets/img/images/hero-top-bg.svg" alt="" /> */}
              <Image src={HeroTop} alt="" />
            </picture>
          </div>
        </div>
      </div>
      <div className="container hero__container">
        <div className="hero__inner">
          <div className="hero__content">
            <div className="hero__content-inner">
              <h1 className="section-title">
                Empowering Creators and Rewarding Fans: <br />Monetizing Short- Form Content for All
               
              </h1>
              <p>My LIT AI, your personal assistant sidekick (coming soon)!</p>
              <div className="hero__actions hide-tablet">
                <div className="hero__store-btn">
                  <a href="https://apps.apple.com/us/app/lit-it-short-video-app/id1610743469" data-download-link="true" target="_blank">
                    {/* <img src="assets/img/images/join/appStore.png" loading="lazy" alt="" className="store-img"> */}
                    <Image src={AppStore} alt="" className="store-img" />
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.litit.app" data-download-link="true" target="_blank">
                    {/* <img src="assets/img/images/join/playMarket.png" loading="lazy" alt="" className="store-img"> */}
                    <Image src={PlayMarket} alt="" className="store-img" />
                  </a>
                </div>
                
              </div>
            </div>
          </div>

          <div className="hero__video common-hero__video">
            <div className="hero__video-inner common-hero__video-inner">
              <div className="hero__video-container common-hero__video-container">
                {/* <video autoplay muted loop playsinline preload="auto" poster="/assets/media/home/new/room_2_on_black_2.jpg" data-support-video>
                  <source data-src="/assets/media/home/new/room_2_on_black_2.webm" type="video/webm" />
                  <source data-src="/assets/media/home/new/room_2_on_black_2.mp4" type='video/mp4' />
                  Your browser doesn&apos;t support HTML5 video tag.
                </video> */}
                <video width="320" height="240" controls preload="none">
                  <source src="../../public/media/home/new/room_2_on_black_2.webm" type="video/webm" />
                  {/* <track
                    src="/path/to/captions.vtt"
                    kind="subtitles"
                    srcLang="en"
                    label="English"
                  /> */}
                  Your browser doesn&apos;t support HTML5 video tag.
                </video>
              </div>
            </div>
          </div>
          <div className="hero__actions  show-tablet">
            <div className="hero__store-btn">
              <a href="https://apps.apple.com/us/app/lit-it-short-video-app/id1610743469" data-download-link="true" target="_blank">
                {/* <img src="assets/img/images/join/appStore.png" loading="lazy" alt="" className="store-img"> */}
                <Image src={AppStore} alt="" className="store-img" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.litit.app" data-download-link="true" target="_blank">
                {/* <img src="assets/img/images/join/playMarket.png" loading="lazy" alt="" className="store-img"> */}
                <Image src={PlayMarket} alt="" className="store-img" />
              </a>
            </div>
           
          </div>
        </div>
      </div>
    </section>

    <section className="home-token">
      <div className="container">
        <h2 className="section-title">Earn LITIT points</h2>

        <div className="home-token__content">

          <div className="home-token__pic">
            <div className="home-token__pic-inner">
              <picture>
                {/* <img src="assets/img/images/home/home-token.svg" loading="lazy" alt=""> */}
                <Image src={HomeToken} alt="" />
              </picture>
            </div>
          </div>

          <div className="home-token__items">
            <div className="home-token__item">
              <div className="token-item">
                <div className="token-item__pic token-item__pic--pink">
                  <picture>
                    {/* <img src="assets/img/images/coin.png" loading="lazy" alt=""> */}
                    <Image src={Coin} alt="" />
                  </picture>
                </div>

                <div className="token-item__main">
                  <h4 className="token-item__name">By Watching or listening to:</h4>
                  <p className="token-item__desc">Videos and music.</p>
                </div>
              </div>
            </div>
            <div className="home-token__item">
              <div className="token-item">
                <div className="token-item__pic token-item__pic--violet">
                  <picture>
                    {/* <img src="assets/img/images/coin.png" loading="lazy" alt=""> */}
                    <Image src={Coin} alt="" />
                  </picture>
                </div>
 
                <div className="token-item__main">
                  <h4 className="token-item__name">Use LITIT Points to:</h4>
                  <p className="token-item__desc">Reward your favorite creators and friends.</p>
                </div>
              </div>
            </div>
            <div className="home-token__item">
              <div className="token-item">
                <div className="token-item__pic token-item__pic--blue">
                  <picture>
                    {/* <img src="assets/img/images/coin.png" loading="lazy" alt=""> */}
                    <Image src={Coin} alt="" />
                  </picture>
                </div>

                <div className="token-item__main">
                  <h4 className="token-item__name">LITIT points is redeemable for:</h4>
                  <p className="token-item__desc">
                    Digital rewards, in-app features and assets, <br />and real word gifts. 
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section className="difference">
      <div className="container">
        <h2 className="section-title">The next generation of social video apps starts here...</h2>
        <div className="difference-block">
          <div className="difference-chart">
            <div className="difference-chart__pic">
              <svg width="1092" height="589" viewBox="0 0 1092 589" fill="none" xmlns="http://www.w3.org/2000/svg" className="hide-tablet">
                <g className="difference-soc">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M88 472.5C88 452.892 103.892 437 123.5 437C143.108 437 159 452.892 159 472.5C159 492.108 143.108 508 123.5 508C103.892 508 88 492.108 88 472.5ZM144.772 483.219C145.688 479.739 145.688 472.542 145.688 472.542C145.688 472.542 145.715 465.303 144.772 461.836C144.259 459.936 142.762 458.439 140.862 457.926C137.381 456.969 123.5 456.969 123.5 456.969C123.5 456.969 109.619 456.969 106.138 457.884C104.28 458.397 102.741 459.936 102.228 461.836C101.312 465.303 101.312 472.5 101.312 472.5C101.312 472.5 101.312 479.739 102.228 483.164C102.741 485.064 104.238 486.561 106.138 487.074C109.647 488.031 123.5 488.031 123.5 488.031C123.5 488.031 137.381 488.031 140.862 487.13C142.762 486.617 144.259 485.119 144.772 483.219ZM130.627 472.5L119.076 479.156V465.844L130.627 472.5Z"
                    fill="#3F3F3F"
                  />
                </g>
                <g className="difference-soc">
                  <path
                    d="M243 433C223.67 433 208 448.67 208 468C208 487.33 223.67 503 243 503C262.33 503 278 487.33 278 468C278 448.67 262.33 433 243 433ZM251.291 457.186H246.03C245.406 457.186 244.714 458.007 244.714 459.097V462.896H251.294L250.299 468.314H244.714V484.578H238.505V468.314H232.872V462.896H238.505V459.709C238.505 455.137 241.677 451.422 246.03 451.422H251.291V457.186Z"
                    fill="#3F3F3F"
                  />
                </g>
                <g className="difference-soc">
                  <g filter="url(#filter0_d_455_18620)">
                    <circle cx="363" cy="453" r="34.9999" fill="#121212" />
                  </g>
                  <path
                    d="M373.937 453C373.937 455.901 372.785 458.683 370.734 460.734C368.683 462.785 365.901 463.937 363 463.937C360.099 463.937 357.317 462.785 355.266 460.734C353.215 458.683 352.062 455.901 352.062 453C352.062 452.377 352.128 451.768 352.241 451.177H348.417V465.749C348.417 466.763 349.237 467.583 350.251 467.583H375.753C376.239 467.582 376.704 467.389 377.047 467.045C377.391 466.701 377.583 466.235 377.583 465.749V451.177H373.759C373.872 451.768 373.937 452.377 373.937 453ZM363 460.292C363.958 460.291 364.906 460.103 365.791 459.736C366.676 459.369 367.48 458.832 368.157 458.154C368.834 457.477 369.371 456.673 369.737 455.788C370.103 454.903 370.292 453.954 370.292 452.996C370.291 452.039 370.103 451.09 369.736 450.205C369.369 449.321 368.832 448.517 368.154 447.84C367.477 447.163 366.673 446.625 365.788 446.259C364.903 445.893 363.954 445.704 362.996 445.705C361.062 445.705 359.207 446.474 357.84 447.842C356.472 449.21 355.704 451.066 355.705 453C355.705 454.934 356.474 456.789 357.842 458.157C359.21 459.524 361.066 460.292 363 460.292ZM371.75 445.344H376.121C376.412 445.344 376.69 445.229 376.896 445.024C377.102 444.819 377.218 444.54 377.219 444.25V439.879C377.219 439.588 377.103 439.308 376.897 439.103C376.692 438.897 376.412 438.781 376.121 438.781H371.75C371.459 438.781 371.18 438.897 370.974 439.103C370.768 439.308 370.653 439.588 370.653 439.879V444.25C370.656 444.852 371.148 445.344 371.75 445.344ZM363 418C353.717 418 344.815 421.687 338.251 428.251C331.687 434.815 328 443.717 328 453C328 462.283 331.687 471.185 338.251 477.749C344.815 484.313 353.717 488 363 488C367.596 488 372.148 487.095 376.394 485.336C380.64 483.577 384.499 480.999 387.749 477.749C390.999 474.499 393.577 470.64 395.336 466.394C397.095 462.148 398 457.596 398 453C398 448.404 397.095 443.852 395.336 439.606C393.577 435.36 390.999 431.501 387.749 428.251C384.499 425.001 380.64 422.423 376.394 420.664C372.148 418.905 367.596 418 363 418ZM381.229 467.179C381.229 469.406 379.406 471.229 377.179 471.229H348.821C346.594 471.229 344.771 469.406 344.771 467.179V438.821C344.771 436.594 346.594 434.771 348.821 434.771H377.179C379.406 434.771 381.229 436.594 381.229 438.821V467.179Z"
                    fill="#3F3F3F"
                  />
                </g>
                <g className="difference-soc">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M482.054 466.108C501.414 466.108 517.108 450.414 517.108 431.054C517.108 411.694 501.414 396 482.054 396C462.694 396 447 411.694 447 431.054C447 450.414 462.694 466.108 482.054 466.108ZM491.335 422.484C492.772 423.567 494.56 424.21 496.499 424.21C496.5 424.21 496.513 424.21 496.514 424.209V425.7V429.721C494.618 429.722 492.776 429.35 491.039 428.617C489.921 428.146 488.881 427.538 487.929 426.804L487.957 439.18C487.945 441.967 486.843 444.586 484.847 446.558C483.223 448.163 481.165 449.184 478.935 449.515C478.411 449.592 477.877 449.632 477.338 449.632C474.95 449.632 472.683 448.859 470.829 447.432C470.48 447.163 470.146 446.872 469.829 446.558C467.666 444.42 466.551 441.523 466.739 438.476C466.882 436.156 467.811 433.943 469.359 432.209C471.408 429.914 474.274 428.641 477.338 428.641C477.877 428.641 478.411 428.681 478.935 428.759V430.245V434.381C478.438 434.217 477.907 434.127 477.354 434.127C474.555 434.127 472.29 436.411 472.332 439.213C472.358 441.005 473.337 442.572 474.782 443.436C475.46 443.842 476.241 444.093 477.074 444.139C477.727 444.175 478.354 444.084 478.935 443.892C480.935 443.232 482.378 441.353 482.378 439.137L482.384 430.849V415.718H487.922C487.927 416.267 487.983 416.802 488.086 417.321C488.504 419.42 489.688 421.242 491.335 422.484ZM496.514 424.208C496.515 424.208 496.515 424.208 496.514 424.209V424.208Z"
                    fill="#3F3F3F"
                  />
                </g>

                <g className="difference-axis">
                  <path
                    d="M16.4142 31.5858C15.6331 30.8047 14.3668 30.8047 13.5858 31.5858L0.857841 44.3137C0.0767925 45.0948 0.0767925 46.3611 0.857841 47.1422C1.63889 47.9232 2.90522 47.9232 3.68627 47.1422L15 35.8284L26.3137 47.1422C27.0947 47.9232 28.3611 47.9232 29.1421 47.1422C29.9232 46.3611 29.9232 45.0948 29.1421 44.3137L16.4142 31.5858ZM17 575L17 33L13 33L13 575L17 575Z"
                    fill="#383838"
                  />
                </g>
                <g className="difference-axis">
                  <path
                    d="M1091.41 575.414C1092.2 574.633 1092.2 573.367 1091.41 572.586L1078.69 559.858C1077.91 559.077 1076.64 559.077 1075.86 559.858C1075.08 560.639 1075.08 561.905 1075.86 562.686L1087.17 574L1075.86 585.314C1075.08 586.095 1075.08 587.361 1075.86 588.142C1076.64 588.923 1077.91 588.923 1078.69 588.142L1091.41 575.414ZM14 576L1090 576V572L14 572V576Z"
                    fill="#383838"
                  />
                </g>

                <g className="difference-line">
                  <path
                    d="M67 523.795C293.437 537.342 796.211 524.247 1065 149"
                    stroke="url(#paint0_linear_455_18620)"
                    stroke-width="13"
                    stroke-linecap="round"
                  />
                </g>
                <line x1="549.5" y1="-1.96396e-08" x2="549.5" y2="572" stroke="#DA37D8" stroke-dasharray="10 10" />
                <defs>
                  <filter
                    id="filter0_d_455_18620"
                    x="310"
                    y="413"
                    width="106"
                    height="106"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="13" />
                    <feGaussianBlur stdDeviation="9" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.0658854 0 0 0 0 0.0730469 0 0 0 0 0.1375 0 0 0 0.08 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_455_18620" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_455_18620" result="shape" />
                  </filter>
                  <linearGradient
                    id="paint0_linear_455_18620"
                    x1="83.6334"
                    y1="236.907"
                    x2="981.199"
                    y2="743.178"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F24D42" />
                    <stop offset="0.379199" stop-color="#ED2CCE" />
                    <stop offset="0.737996" stop-color="#B84AEA" />
                    <stop offset="1" stop-color="#8E61FF" />
                  </linearGradient>
                </defs>
              </svg>

              <svg width="314" height="473" viewBox="0 0 314 473" fill="none" xmlns="http://www.w3.org/2000/svg" className="show-tablet">
                <g className="difference-soc-mob">
                  <g clip-path="url(#clip0_455_18621)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9 392.781C9 379.094 20.0935 368 33.7813 368C47.4691 368 58.5626 379.094 58.5626 392.781C58.5626 406.469 47.4691 417.563 33.7813 417.563C20.0935 417.563 9 406.469 9 392.781ZM48.6307 400.264C49.2696 397.834 49.2696 392.81 49.2696 392.81C49.2696 392.81 49.289 387.757 48.6307 385.337C48.2726 384.011 47.2271 382.966 45.9009 382.607C43.4712 381.939 33.7813 381.939 33.7813 381.939C33.7813 381.939 24.0914 381.939 21.6617 382.578C20.3646 382.937 19.2901 384.011 18.9319 385.337C18.293 387.757 18.293 392.781 18.293 392.781C18.293 392.781 18.293 397.834 18.9319 400.225C19.2901 401.552 20.3355 402.597 21.6617 402.955C24.1108 403.623 33.7813 403.623 33.7813 403.623C33.7813 403.623 43.4712 403.623 45.9009 402.994C47.2271 402.636 48.2726 401.59 48.6307 400.264ZM38.7564 392.781L30.6928 397.428V388.135L38.7564 392.781Z"
                      fill="#3F3F3F"
                    />
                  </g>
                </g>
                <g className="difference-soc-mob">
                  <path
                    d="M115.781 353C102.095 353 90.9998 364.095 90.9998 377.781C90.9998 391.468 102.095 402.563 115.781 402.563C129.468 402.563 140.562 391.468 140.562 377.781C140.562 364.095 129.468 353 115.781 353ZM121.651 370.125H117.926C117.485 370.125 116.994 370.706 116.994 371.478V374.167H121.654L120.949 378.003H116.994V389.519H112.598V378.003H108.61V374.167H112.598V371.911C112.598 368.674 114.844 366.044 117.926 366.044H121.651V370.125Z"
                    fill="#3F3F3F"
                  />
                </g>
                <g className="difference-soc-mob">
                  <g filter="url(#filter0_d_455_18621)">
                    <circle cx="75.7814" cy="342.781" r="24.7812" fill="#121212" />
                  </g>
                  <path
                    d="M83.5255 342.781C83.5255 344.835 82.7096 346.805 81.2573 348.257C79.805 349.71 77.8352 350.525 75.7813 350.525C73.7274 350.525 71.7577 349.71 70.3054 348.257C68.8531 346.805 68.0372 344.835 68.0372 342.781C68.0372 342.34 68.0836 341.909 68.1636 341.491H65.4558V351.808C65.4558 352.526 66.0366 353.107 66.7542 353.107H84.811C85.1549 353.106 85.4845 352.969 85.7275 352.726C85.9704 352.482 86.1069 352.152 86.1069 351.808V341.491H83.399C83.479 341.909 83.5255 342.34 83.5255 342.781ZM75.7813 347.944C76.4595 347.944 77.131 347.81 77.7574 347.551C78.3839 347.291 78.9531 346.91 79.4325 346.431C79.9119 345.951 80.2921 345.382 80.5515 344.755C80.8109 344.128 80.9443 343.457 80.9441 342.779C80.9439 342.101 80.8102 341.429 80.5505 340.803C80.2908 340.176 79.9103 339.607 79.4307 339.128C78.951 338.648 78.3816 338.268 77.755 338.009C77.1284 337.749 76.4569 337.616 75.7787 337.616C74.4091 337.616 73.0958 338.161 72.1276 339.129C71.1594 340.098 70.6156 341.412 70.616 342.781C70.6163 344.151 71.1607 345.464 72.1294 346.432C73.0981 347.401 74.4117 347.944 75.7813 347.944ZM81.9766 337.36H85.0717C85.2774 337.36 85.4746 337.279 85.6202 337.134C85.7659 336.989 85.848 336.792 85.8487 336.586V333.491C85.8487 333.285 85.7669 333.087 85.6212 332.941C85.4754 332.796 85.2778 332.714 85.0717 332.714H81.9766C81.7706 332.714 81.5729 332.796 81.4272 332.941C81.2815 333.087 81.1996 333.285 81.1996 333.491V336.586C81.2022 337.012 81.5507 337.36 81.9766 337.36ZM75.7813 318C69.2089 318 62.9057 320.611 58.2583 325.258C53.6109 329.906 51 336.209 51 342.781C51 349.354 53.6109 355.657 58.2583 360.304C62.9057 364.952 69.2089 367.563 75.7813 367.563C79.0356 367.563 82.2581 366.922 85.2647 365.676C88.2713 364.431 91.0032 362.606 93.3044 360.304C95.6055 358.003 97.4309 355.271 98.6763 352.265C99.9216 349.258 100.563 346.036 100.563 342.781C100.563 339.527 99.9216 336.305 98.6763 333.298C97.4309 330.291 95.6055 327.559 93.3044 325.258C91.0032 322.957 88.2713 321.132 85.2647 319.886C82.2581 318.641 79.0356 318 75.7813 318ZM88.6883 352.82C88.6883 354.398 87.3976 355.688 85.8203 355.688H65.7423C64.1651 355.688 62.8744 354.398 62.8744 352.82V332.742C62.8744 331.165 64.1651 329.874 65.7423 329.874H85.8203C87.3976 329.874 88.6883 331.165 88.6883 332.742V352.82Z"
                    fill="#3F3F3F"
                  />
                </g>
                <g className="difference-soc-mob">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M110.781 327.563C124.468 327.563 135.563 316.468 135.563 302.781C135.563 289.095 124.468 278 110.781 278C97.095 278 86 289.095 86 302.781C86 316.468 97.095 327.563 110.781 327.563ZM117.344 296.723C118.359 297.489 119.624 297.943 120.994 297.943C120.995 297.943 121.005 297.943 121.005 297.942V298.997V301.839C119.665 301.84 118.363 301.577 117.134 301.059C116.344 300.725 115.609 300.296 114.936 299.776L114.956 308.526C114.947 310.496 114.168 312.347 112.757 313.742C111.609 314.877 110.154 315.599 108.577 315.832C108.207 315.887 107.83 315.915 107.448 315.915C105.761 315.915 104.158 315.368 102.847 314.359C102.6 314.17 102.365 313.964 102.14 313.742C100.611 312.231 99.8226 310.183 99.9553 308.028C100.057 306.388 100.713 304.824 101.808 303.598C103.256 301.976 105.282 301.075 107.448 301.075C107.83 301.075 108.207 301.104 108.577 301.159V302.21V305.133C108.226 305.018 107.851 304.954 107.46 304.954C105.481 304.954 103.88 306.568 103.909 308.549C103.928 309.816 104.62 310.924 105.641 311.535C106.121 311.822 106.673 311.999 107.262 312.032C107.724 312.057 108.167 311.993 108.577 311.857C109.991 311.39 111.011 310.062 111.011 308.496L111.016 302.636V291.94H114.931C114.935 292.327 114.974 292.706 115.047 293.073C115.343 294.557 116.179 295.845 117.344 296.723ZM121.005 297.942C121.005 297.942 121.005 297.942 121.005 297.942V297.942Z"
                    fill="#3F3F3F"
                  />
                </g>

                <g className="difference-line-mob">
                  <path
                    d="M4 425C74.136 425 227.446 422.413 310 225"
                    stroke="url(#paint0_linear_455_18621)"
                    stroke-width="8"
                    stroke-linecap="round"
                  />
                </g>

                <g clip-path="url(#clip1_455_18621)">
                  <line
                    x1="157.5"
                    y1="-35.0009"
                    x2="158.398"
                    y2="467.999"
                    stroke="url(#paint1_linear_455_18621)"
                    stroke-dasharray="10 10"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_455_18621"
                    x="33.0001"
                    y="313"
                    width="85.5624"
                    height="85.5625"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="13" />
                    <feGaussianBlur stdDeviation="9" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.0658854 0 0 0 0 0.0730469 0 0 0 0 0.1375 0 0 0 0.08 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_455_18621" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_455_18621" result="shape" />
                  </filter>
                  <linearGradient
                    id="paint0_linear_455_18621"
                    x1="9.10001"
                    y1="271.512"
                    x2="336.846"
                    y2="378.64"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F24D42" />
                    <stop offset="0.379199" stop-color="#ED2CCE" />
                    <stop offset="0.737996" stop-color="#B84AEA" />
                    <stop offset="1" stop-color="#8E61FF" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_455_18621"
                    x1="174.582"
                    y1="10.2565"
                    x2="174.254"
                    y2="478.524"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#DA37D8" stop-opacity="0" />
                    <stop offset="0.296875" stop-color="#DA37D8" />
                    <stop offset="0.671875" stop-color="#DA37D8" />
                    <stop offset="1" stop-color="#DA37D8" stop-opacity="0" />
                  </linearGradient>
                  <clipPath id="clip0_455_18621">
                    <rect width="49.5626" height="49.5626" fill="white" transform="translate(9 368)" />
                  </clipPath>
                  <clipPath id="clip1_455_18621">
                    <rect width="1" height="473" fill="white" transform="translate(158)" />
                  </clipPath>
                </defs>
              </svg>
             
              <div className="difference-chart__logo" id="diff-lit-logo">
                <div className="difference-chart__logo-inner">
                  {/* <img src="/assets/img/icons/logo-pic.png" alt="" /> */}
                  <Image src={LogoPic} alt="" />
                </div>
              </div>
            </div>
            <div className="difference-chart__top">
              <div className="difference-chart__text">Traditional platforms </div>
              <div className="difference-chart__text">The LITIT revolution</div>
            </div>
            <div className="difference-chart__year">2030</div>
            <div className="difference-chart__bottom-text">
              <p>* All trademarks and logos are properties of respective owners</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="advantages">
      <div className="container">
        <h2 className="section-title">
          <span className="hide-tablet">Are you a content creator on TikTok, Instagram or YouTube?</span>
          <span className="show-tablet">Next generation of web communities</span>
        </h2>

        <div className="advantages__list">
          <div className="advantages__item">
            <div className="advantages-card advantages-card--first">
              <div className="advantages-card__top advantages-card__top--first">
                <a href="https://play.google.com/store/apps/details?id=com.litit.app" target="_blank" className="button-link">
                  <picture>
                    {/* <img src="/assets/img/images/google-play.png" alt="" width="100%" /> */}
                    <Image src={GooglePlay} alt="" />
                  </picture>
                </a>
                <a href="https://apps.apple.com/us/app/lit-it-short-video-app/id1610743469" target="_blank" className="button-link">
                  <picture>
                    {/* <img src="/assets/img/images/app-store.png" alt="" width="100%"/> */}
                    <Image src={AppStoreImg} alt="" />
                  </picture>
                </a>
              </div>
              <div className="advantages-card__bottom">
                <h4 className="advantages-card__title">Create your account on<br /> the lit.it app</h4>
              </div>
            </div>
          </div>

          <div className="advantages__item">
            <div className="advantages-card">
              <div className="advantages-card__top">
                <div className="advantages-card__pic">
                  <picture>
                    {/* <img src="/assets/img/images/advantages-pic-1.png" alt="" /> */}
                    <Image src={Advantage1} alt="" />
                  </picture>
                </div>
              </div>
              <div className="advantages-card__bottom">
                <h4 className="advantages-card__title">Create and upload your content.</h4>
              </div>
            </div>
          </div>

          <div className="advantages__item">
            <div className="advantages-card">
              <div className="advantages-card__top">
                <div className="advantages-card__pic">
                  <picture>
                    {/* <img src="/assets/img/images/advantages-pic-2.png" alt="" /> */}
                    <Image src={Advantage2} alt="" />
                  </picture>
                </div>
              </div>
              <div className="advantages-card__bottom">
                <h4 className="advantages-card__title">Start earning LIT points.</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="features">
      <div className="container">
        <h2 className="section-title">lit.it features</h2>

        <div className="features__desk">
          <ul className="features__list">
            <li className="features__item">
              <div className="features-card">
                <div className="features-card__content">
                  <div className="features-card__pic">
                    <div className="features-card__video">
                      <video muted loop preload="auto" data-support-video>
                        <source data-src="/assets/media/Videos app_room.mp4" type="video/mp4" />
                        <source data-src="/assets/media/Videos_app_room.webm" type="video/webm" />
                        Your browser doesn&apos;t support HTML5 video tag.
                      </video>
                    </div>
                    <picture>
                      {/* <img src="/assets/img/images/iPhone.svg" alt="iPhone" /> */}
                      <Image src={Iphone} alt="iPhone" />
                    </picture>
                  </div>
                  <h4 className="features-card__title">Short video app</h4>
                  <p className="features-card__status">*Available</p>
                </div>
              </div>
            </li>

            <li className="features__item">
              <div className="features-card">
                <div className="features-card__content">
                  <div className="features-card__pic">
                    <div className="features-card__video">
                      <video muted loop preload="auto" data-support-video>
                        <source data-src="/assets/media/Character_1.mp4" type="video/mp4" />
                        <source data-src="/assets/media/Character_1.webm" type="video/webm" />
                        Your browser doesn&apos;t support HTML5 video tag.
                      </video>
                    </div>
                    <picture>
                      {/* <img src="/assets/img/images/iPhone.svg" alt="iPhone" /> */}
                      <Image src={Iphone} alt="iPhone" />
                    </picture>
                  </div>
                  <h4 className="features-card__title">Digital avatars</h4>
                  <p className="features-card__status">*Coming soon</p>
                </div>
              </div>
            </li>

            <li className="features__item features__item--full">
              <div className="features-artist">
                <div className="features-artist__top">
                  <h3>Customized AI Emojis</h3>
                  <p>Create AI-Generated personalized emojis and icons for your fans (coming soon)!</p>
                </div>

                <div className="features-artist__bottom">
                  <ul className="features-artist__list">
                    <li className="features-artist__item">
                      <div className="features-artist__card bg-1"></div>
                    </li>
                    <li className="features-artist__item">
                      <div className="features-artist__card bg-2">
                        <div className="features-artist__pic">
                          <div className="features-artist__pic-inner">
                            <picture>
                              {/* <img src="/assets/img/images/face-1.png" alt="" /> */}
                              <Image src={Face1} alt="iPhone" />
                            </picture>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="features-artist__item">
                      <div className="features-artist__card bg-3">
                        <div className="features-artist__pic">
                          <div className="features-artist__pic-inner">
                            <picture>
                              {/* <img src="/assets/img/images/face-2.png" alt="" /> */}
                              <Image src={Face2} alt="iPhone" />
                            </picture>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="features-artist__item">
                      <div className="features-artist__card bg-4">
                        <div className="features-artist__pic">
                          <div className="features-artist__pic-inner">
                            <picture>
                              {/* <img src="/assets/img/images/face-3.png" alt="" /> */}
                              <Image src={Face3} alt="iPhone" />
                            </picture>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="features-artist__item">
                      <div className="features-artist__card bg-5"></div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="features__mob">
          <div className="swiper-container" id="feature-slider">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="features-card">
                  <div className="features-card__content">
                    <div className="features-card__pic">
                      <div className="features-card__video">
                        <video muted loop preload="auto" data-support-video>
                          <source src="/assets/media/Videos app_room.mp4" type="video/mp4" />
                          <source src="/assets/media/Videos_app_room.webm" type="video/webm" />
                          Your browser doesn&apos;t support HTML5 video tag.
                        </video>
                      </div>
                      <picture>
                        {/* <img src="/assets/img/images/iPhone.svg" alt="iPhone" /> */}
                        <Image src={Iphone} alt="iPhone" />
                      </picture>
                    </div>
                    <h4 className="features-card__title">Short video app</h4>
                    <p className="features-card__status">*Available</p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="features-card">
                  <div className="features-card__content">
                    <div className="features-card__pic">
                      <div className="features-card__video">
                        <video muted loop preload="auto" data-support-video>
                          <source data-src="/assets/media/Character_1.mp4" type="video/mp4" />
                          <source data-src="/assets/media/Character_1.webm" type="video/webm" />
                          Your browser doesn&apos;t support HTML5 video tag.
                        </video>
                      </div>
                      <picture>
                        {/* <img src="/assets/img/images/iPhone.svg" alt="iPhone" /> */}
                        <Image src={Iphone} alt="iPhone" />
                      </picture>
                    </div>
                    <h4 className="features-card__title">Digital avatars</h4>
                    <p className="features-card__status">*Coming soon</p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="features-card">
                  <div className="features-card__content">
                    <div className="features-card__pic">
                      <div className="features-card__video">
                        <video muted loop preload="auto" data-support-video>
                          <source data-src="/assets/media/nftmarketplace.mp4" type="video/mp4" />
                          <source data-src="/assets/media/nftmarketplace.webm" type="video/webm" />
                          Your browser doesn&apos;t support HTML5 video tag.
                        </video>
                      </div>
                      <picture>
                        {/* <img src="/assets/img/images/iPhone.svg" alt="iPhone" /> */}
                        <Image src={Iphone} alt="iPhone" />
                      </picture>
                    </div>
                    <h4 className="features-card__title">Social marketplace</h4>
                    <p className="features-card__status">*Coming soon</p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="features-card">
                  <div className="features-card__inner">
                    <div className="features-card__bg"></div>
                  </div>

                  <div className="features-card__content">
                    <div className="features-card__pic">
                      <div className="features-card__artist features-card__artist--1">
                        <div className="features-card__artist-inner">
                          <picture>
                            {/* <img src="/assets/img/images/faces.png" alt="" /> */}
                            <Image src={Faces} alt="iPhone" />
                          </picture>
                        </div>
                      </div>
                    </div>
                    <div className="features-artist__top">
                      <h3>Customized AI Emojis</h3>
                      <p>Create AI-generated personalized emojis and icons for your fans(coming soon)!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </section>

    <section className="join" data-support-animation>
      <div className="container">
        <div className="join-block">
          <div className="join-block__bg"></div>
          <div className="join-block__inner">
            <form className="join-form" id="subs-form">
              <h2 className="section-title">Join <span className="bold">lit.it</span> community</h2>
              <div className="join-form__desc">
                If you became a believer - join now. If you are not a believer yet, join anyway because you have
                <span className="nowrap">nothing to lose.</span>
              </div>

              

              <div className="join-block__button-wrapper">
                <div className="join-block__button-inner">
                  <a href="./signin" className="btn btn-white">
                    <span className="btn__inner">Join lit.it community</span>
                  </a>
                </div>
              </div>

              <div className="join-form__checks">
                <label className="custom-check">
                  <input type="checkbox" name="newsletter" />
                  <span className="custom-check__fake"></span>
                  <span className="custom-check__label">
                        Subscribe to the <span className="bold">lit.it</span> newsletter
                        <br className="show-tablet" />
                        to get updates from the team
                      </span>
                </label>

                <label className="custom-check">
                  <input type="checkbox" name="terms_and_conditions" className="js-validate" checked />
                  <span className="custom-check__fake"></span>
                  <span className="custom-check__label">
                        I have read and agree to the <br className="show-tablet" />
                        <a href="./terms_service" target="_blank" title="Terms of Service">Terms of Service</a>
                        and
                        <a href="./privacy-notice" target="_blank" title="Privacy Notice">Privacy Notice</a>
                      </span>
                  <span className="custom-check__error js-error"></span>
                </label>
              </div>

           
            </form>
          </div>
        </div>

        
      </div>
    </section>

    <section className="mob-app-tiles">
    <div className="container">
      <ul className="section-tiles">
        <li className="section-tiles__item section-tiles__item--large">
          <div className="section-tile-horizontal">
            <div className="section-tile-horizontal__inner">
              <div className="section-tile-horizontal__left">
                <h3 className="section-tile-horizontal__title">Short Videos</h3>
                <div className="section-tile-horizontal__text nowrap">
                 Empowering creators to earn from fan engagement and rewarding<br /> viewers for enjoying their favorite content. <br />Redeem rewards for LITIT ecosystem services.
                </div>
              </div>
              <div className="section-tile-horizontal__right">
                <div className="section-tile-horizontal__short-videos">
                  <div className="section-tile-horizontal__short-videos-inner">
                    <picture>
                      {/* <source media="(max-width: 575.98px)" srcset="assets/img/images/mobile-app/short-videos-m.png" /> */}
                      {/* <img loading="lazy" src="assets/img/images/mobile-app/short-videos.png" alt="" /> */}
                      <Image src={ShortVideo} alt="" />
                    </picture>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>

      
        

        <li className="section-tiles__item section-tiles__item--large">
          <div className="section-tile-horizontal">
            <div className="section-tile-horizontal__inner">
              <div className="section-tile-horizontal__left">
                <h3 className="section-tile-horizontal__title">
                  Subscribe to #hashtags <br className="hide-tablet" />
                  and <span className="nowrap"><span className="sub-ctg-ico"></span>subcategories</span>
                </h3>
                <div className="section-tile-horizontal__text nowrap">
                  Unique feature to <span className="bold">lit.it</span>, whereby users <br className="show-tablet" /> can
                  <br className="hide-tablet" />
                  pre select from 1000 interests to get <br className="show-tablet" /> matched
                  <br className="hide-tablet" />
                  with the right content <br className="show-tablet" /> or other users
                </div>
              </div>
              <div className="section-tile-horizontal__right">
                <div className="section-tile-horizontal__hashtags">
                  <div className="section-tile-horizontal__hashtags-inner">
                    
                    <picture>
                      {/* <img src="assets/img/images/mobile-app/hashtags.png" alt="" /> */}
                      <Image src={Hashtags} alt="" />
                    </picture>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>

        <li className="section-tiles__item section-tiles__item--large">
          <div className="section-tile-horizontal">
            <div className="section-tile-horizontal__inner">
              <div className="section-tile-horizontal__left">
                <h3 className="section-tile-horizontal__title">
                  TOP 100 <br />
                  in subcategory
                </h3>
                <div className="section-tile-horizontal__text npwrap">
                  Always have access to the most <br className="show-tablet" /> popular topics,
                  <br className="hide-tablet" />
                  watch what trending <br className="show-tablet" /> and discovered new interest
                  <br className="hide-tablet" />
                  for you to <br className="show-tablet" /> get inspired
                </div>
              </div>
              <div className="section-tile-horizontal__right">
                <div className="section-tile-horizontal__subcategory">
                  <div className="section-tile-horizontal__subcategory-inner">
                    <picture>
                      <source media="(max-width: 575.98px)" srcset="assets/img/images/mobile-app/sub-ctg.png" />
                      {/* <img loading="lazy" src="assets/img/images/mobile-app/sub-ctg-desc.png" alt="" /> */}
                      <Image src={SubCtg} alt="" />
                    </picture>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>

       

        <li className="section-tiles__item section-tiles__item--large">
          <div className="section-tile-horizontal section-tile-horizontal--rooms">
            <div className="section-tile-horizontal__inner">
              <div className="section-tile-horizontal__left">
                <h3 className="section-tile-horizontal__title">Audio rooms</h3>
                <div className="section-tile-horizontal__text">
                  Users can connect with experts or influencers,
                  <br className="hide-tablet" />
                  one-on-one or group, get inspired & learn how
                  <br className="hide-tablet" />
                  to get-by better in life
                </div>
              </div>
              <div className="section-tile-horizontal__right">
                <div className="section-tile-horizontal__rooms">
                  <div className="section-tile-horizontal__rooms-inner">
                    <picture>
                      {/* <img loading="lazy" src="assets/img/images/mobile-app/rooms.png" alt="" /> */}
                      <Image src={Rooms} alt="" />
                    </picture>
                    <span className="badge badge-pink">Coming soon</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>

        <li className="section-tiles__item section-tiles__item--mobile">
          <div className="section-tile-gallery">
            <div className="section-tile-gallery__inner">
              <div className="section-tile-gallery__bg section-tile-gallery__bg--1"></div>
              <div className="section-tile-gallery__content">
                <h3 className="section-tile-gallery__title">Content categories</h3>
                <div className="section-tile-gallery__text">
                  Choose from over 1000 subcategories of
                  <br className="hide-tablet" />
                  interests, watch only the videos you like,
                  <br className="hide-tablet" />
                  don’t waste your time on fluff
                </div>

                <div className="section-tile-gallery__pic">
                  <div className="section-tile-gallery__pic-inner">
                    <picture>
                      {/* <img src="assets/img/images/mobile-app/gallery-1-m.png" alt="" /> */}
                      <Image src={Gallery1} alt="" />
                    </picture>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>

        <li className="section-tiles__item section-tiles__item--mobile">
          <div className="section-tile-gallery">
            <div className="section-tile-gallery__inner">
              <div className="section-tile-gallery__bg section-tile-gallery__bg--2"></div>
              <div className="section-tile-gallery__content">
                <h3 className="section-tile-gallery__title">Images gallery</h3>
                <div className="section-tile-gallery__text">
                  Videos are not always reflecting everything,
                  <br className="hide-tablet" />
                  have a showcase of the pictures showing
                  <br className="hide-tablet" />
                  your best, get tips for exceptional pics
                </div>
              </div>

              <div className="section-tile-gallery__pic">
                <div className="section-tile-gallery__pic-inner">
                  <picture>
                    {/* <img src="assets/img/images/mobile-app/contents-m.png" alt="" /> */}
                    <Image src={Contents} alt="" />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </li>

        <li className="section-tiles__item section-tiles__item--large section-tiles__item--mobile">
          <div className="section-tile-horizontal">
            <div className="section-tile-horizontal__inner">
              <div className="section-tile-horizontal__left">
                <h3 className="section-tile-horizontal__title">
                  Communities <br className="hide-phone-lg" />
                  & <br className="show-phone-lg" />
                  groups by interests
                </h3>
                <div className="section-tile-horizontal__text">
                  Connect with people with the same interests just like you.
                  <br className="hide-tablet" />
                  The people that you will have a lot in common with
                </div>
              </div>
              <div className="section-tile-horizontal__right">
                <div className="section-tile-horizontal__community">
                  <div className="section-tile-horizontal__community-inner">
                    <div className="section-tile-horizontal__community-pic">
                      <picture>
                        {/* <img loading="lazy" src="assets/img/images/mobile-app/community.png" alt="" /> */}
                        <Image src={Community} alt="" />
                      </picture>
                    </div>

                    <div className="section-tile-horizontal__text">
                      Total registered community members on <span className="bold">lit.it</span>
                    </div>

                    <div className="section-tile-horizontal__community-nums">2, 748,372</div>

                    <a href="#" className="btn btn-link" title="Invite friends now">
                      <span className="btn__inner">
                        Invite friends now
                        {/* <img
                          className="btn-link__arrow btn-link__arrow-next"
                          src="assets/img/icons/arrow-right-white.svg"
                          width="28"
                          height="14"
                          alt=""
                        /> */}
                        <Image src={ArrowRight} alt="" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>

 
  <Footer />

        </main>
      </div>
    </>
  );
}
