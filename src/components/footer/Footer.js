import { RiFacebookFill, RiTwitterXFill, RiLinkedinFill } from "react-icons/ri";
import Logo from "../../components/logo/Logo";
import FooterForm from "./FooterForm";
import { Link } from "react-router-dom";
import { footerNavLinks } from "../../utils/footerNavLinks";

// styles
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container ">
        <div className="footer__grid">
          <div className="footer__content">
            <Logo medium />
            <ul className="footer__social">
              <li>
                <a href="" target="_blank" className="footer__link">
                  <RiFacebookFill className="footer__icon" />
                </a>
              </li>
              <li>
                <a href="" target="_blank" className="footer__link">
                  <RiTwitterXFill className="footer__icon" />
                </a>
              </li>
              <li>
                <a href="" target="_blank" className="footer__link">
                  <RiLinkedinFill className="footer__icon" />
                </a>
              </li>
            </ul>
            <FooterForm />
          </div>

          {/* opening hours */}
          <div className="footer__openings-container">
            <h3 className="heading-tertiary">Opening hours</h3>

            <div className="footer__openings">
              <div className="footer__opening">
                <span className="footer__day">Monday - Friday</span>
                <span className="footer__time">10:00 am - 10:00 pm</span>
              </div>

              <div className="footer__opening">
                <span className="footer__day">Saturday - Sunday</span>
                <span className="footer__time">10:00 am - 09:00 pm</span>
              </div>

              <p className="footer__address">
                12 Adeola Odeku Street, Victoria Island, Lagos.
              </p>
            </div>
          </div>

          {/* company */}
          <div>
            <h3 className="heading-tertiary">Company</h3>
            <ul className="footer__nav-links">
              {footerNavLinks.company.map((link) => {
                return (
                  <li key={link.id}>
                    <Link to={link.path} className="footer__nav-link">
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* useful links */}
          <div>
            <h3 className="heading-tertiary">Useful links</h3>
            <ul className="footer__nav-links">
              {footerNavLinks["useful-links"].map((link) => {
                return (
                  <li key={link.id}>
                    <Link to={link.path} className="footer__nav-link">
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* account */}
          <div>
            <h3 className="heading-tertiary">Account</h3>
            <ul className="footer__nav-links">
              {footerNavLinks.account.map((link) => {
                return (
                  <li key={link.id}>
                    <Link to={link.path} className="footer__nav-link">
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="footer__support">
          <Link className="footer__support-link">
            <span>Terms and condition</span>
          </Link>
          <Link className="footer__support-link">
            <span>Privacy policy</span>
          </Link>
          <Link className="footer__support-link">
            <span>Contact support</span>
          </Link>
        </div>

        <div className="footer__copyright">
          <p className="footer__copyright-text">
            &copy; {new Date().getFullYear()} Delicias de Mexico. All Right
            Reserved.
          </p>
          <p className="footer__copyright-name">
            Built by <a href="">Kanyun Ngere</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
