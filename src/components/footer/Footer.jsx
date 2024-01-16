import "./Starter.css";
import "./Footer.css";
import FooterLogo from "@/assets/img/Footer.png";

export const Footer = () => {
  return (
    <footer className="footer-area footer-one">
      <div className="footer-widget">
        <div className="container-lg">
          <div className="row">
            <div className="col-xl-6 col-lg-4 col-sm-12">
              <div className="f-about">
                <div className="footer-logo">
                  <a href="#home">
                    <img src={FooterLogo} alt="Logo" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-sm-4">
              <div className="footer-link">
                <h6 className="footer-title">Company</h6>
                <ul>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Marketing</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Awards</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-sm-4">
              <div className="footer-link">
                <h6 className="footer-title">Services</h6>
                <ul>
                  <li>
                    <a href="javascript:void(0)">Products</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Business</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Developer</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Insights</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-sm-4">
              <div className="footer-contact">
                <h6 className="footer-title">Help &amp; Suuport</h6>
                <ul>
                  <li>
                    <i className="lni lni-map-marker" /> Malang, Jawa Timur,
                    Indonesia
                  </li>
                  <li>
                    <i className="lni lni-phone-set" /> +62 812345678
                  </li>
                  <li>
                    <i className="lni lni-envelope" />
                    yumens@gmail.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container-lg">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="
           copyright
           text-center
           d-md-flex
           justify-content-between
           align-items-center
           mr-5
           "
              >
                <p className="text">
                  Copyright © 2024 Yumens. Made With Bootstrap UI Components
                </p>
                <ul className="social">
                  <li>
                    <a href="javascript:void(0)">
                      <i className="lni lni-tiktok" />
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i className="lni lni-twitter-original" />
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i className="lni lni-instagram-filled" />
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i className="lni lni-linkedin-original" />
                    </a>
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
