import logo from '../assets/logo-white.svg';
import '../styles/footer.scss';

function Footer() {
  return (
    <div className="Footer">
      <img className="Footer-logo" src={logo} alt="logo" />
      <p className="Footer-text">© 2020 Kasa. All rights reserved</p>
    </div>
  );
}

export default Footer;