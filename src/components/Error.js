import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/error.scss';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div>
      <Header>
      </Header>
      <div className='Error'>
        <p className='Error-number'>404</p>
        <p className='Error-text'>Oups ! La page que vous demandez n'existe pas.</p>
        <Link to="/" className='Error-link'>Retournez sur la page d'accueil</Link>
      </div>
      <Footer>
      </Footer>
    </div>
  );
}

export default Error;