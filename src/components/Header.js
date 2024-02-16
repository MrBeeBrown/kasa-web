import logo from '../assets/logo.svg';
import '../styles/header.scss';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="Header">
      <div className="App-logo">
        <Link to="/"><img src={logo} alt="logo" /></Link>
      </div>
      <div className="App-menu">
        <Link to="/">Accueil</Link>
        <Link to="/about">A Propos</Link>
      </div>
    </header>
  );
}

export default Header;