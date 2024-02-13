import logo from '../assets/logo.svg';
import '../styles/header.scss';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="Header">
      <div className="App-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="App-menu">
        <Link to="/">Accueil</Link>
        <Link to="/about">About</Link>
      </div>
    </header>
  );
}

export default Header;