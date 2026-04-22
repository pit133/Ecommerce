import Input from "../Input/Input";
import Button from "../Button/Button";
import "./Footer.css"

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
              About us
            </li>
            <li className="footer__section-item">Careers</li>
            <li className="footer__section-item">Press</li>
          </ul>
        </div>

        <div className="footer__section">
          <h3>Support</h3>
          <ul className="footer__section-list">
            <li className="footer__section-item">
              Contact
            </li>
            <li className="footer__section-item">FAQ</li>
            <li className="footer__section-item">Shipping</li>
          </ul>
        </div>

        <div className="footer__section">
          <h3>Legal</h3>
          <ul className="footer__section-list">
            <li className="footer__section-item">
              Privacy Policy
            </li>
            <li className="footer__section-item">Terms of Services</li>
            <li className="footer__section-item">Returns</li>
          </ul>
        </div>

        <div className="footer__section">
          <h3>Newsletter</h3>
          <ul className="footer__section-list">
            <li className="footer__section-item">
              Subscribe for exclusive deals
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