import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/error.scss';

function Error() {
  return (
    <div>
      <Header>
      </Header>
      <div className='Error'>
        <p className='Error-number'>404</p>
        <p className='Error-text'>Oups ! La page que vous demandez n'existe pas.</p>
        <p className='Error-link'>Retournez sur la page d'accueil</p>
      </div>
      <Footer>
      </Footer>
    </div>
  );
}

export default Error;