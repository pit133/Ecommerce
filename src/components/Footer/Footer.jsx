import Input from "../Input/Input";
import Button from "../Button/Button";
import "./Footer.css"
import Link from "../Link/Link";

const Footer = (props) => {
  const {className} = props

  return (
    <footer className="footer">
      <div className="footer__top-border"></div>
      <div className={`${className} footer__container`}>
        <div className="footer__section">
          <h3>About</h3>
          <ul className="footer__section-list">
            <li className="footer__section-item">
              <Link
                className="footer__section-link"
                content="About us"
                to="#"
              />
            </li>
            <li className="footer__section-item">
              <Link
                className="footer__section-link"
                content="Careers"
                to="#"
              />
            </li>

            <li className="footer__section-item">
              <Link
                className="footer__section-link"
                content="Press"
                to="#"
              />
            </li>
          </ul>
        </div>

        <div className="footer__section">
          <h3>Support</h3>
          <ul className="footer__section-list">
            <li className="footer__section-item">
              <Link
                className="footer__section-link"
                content="Contact"
                to="#"
              />
            </li>
            <li className="footer__section-item">
              <Link
                className="footer__section-link"
                content="FAQ"
                to="#"
              />
            </li>
            <li className="footer__section-item">
              <Link
                className="footer__section-link"
                content="Shipping"
                to="#"
              />
            </li>
          </ul>
        </div>

        <div className="footer__section">
          <h3>Legal</h3>
          <ul className="footer__section-list">
            <li className="footer__section-item">
              <Link
                className="footer__section-link"
                content="Privacy Policy"
                to="#"
              />
            </li>
            <li className="footer__section-item">
              <Link
                className="footer__section-link"
                content="Terms of Services"
                to="#"
              />
            </li>
            <li className="footer__section-item">
              <Link
                className="footer__section-link"
                content="Returns"
                to="#"
              />
            </li>
          </ul>
        </div>

        <div className="footer__section">
          <h3>Newsletter</h3>
          <ul className="footer__section-list">
            <li className="footer__section-item">
              <Link
                className="footer__section-link"
                content="Subscribe for exclusive deals"
                to="#"
              />
            </li>
          </ul>

          <div className="footer__section-subscribe">
            <Input
              className="footer__section-input"
              placeholder="Email"
            />
            <Button
              className="footer__section-button"
              content="Subscribe"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer