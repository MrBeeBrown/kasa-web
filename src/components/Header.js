import logo from '../assets/logo.svg';
import '../styles/header.scss';

function Header() {
  return (
    <header className="Header">
      <div className="App-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="App-menu">
        <a
          href="#top"
          target="_blank"
          rel="noopener noreferrer"
        >
          Accueil
        </a>
        <a
          href="#top"
          target="_blank"
          rel="noopener noreferrer"
        >
          A Propos
        </a>
      </div>
    </header>
  );
}

export default Header;