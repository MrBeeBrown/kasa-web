import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/home.scss';

function Home() {
  return (
    <div>
      <Header>
      </Header>
      <div className='main'>
        <div className='main-header'>
          <p className='main-title'>Chez vous, partout et ailleurs</p>
        </div>
        <div className='main-content'>

        </div>
      </div>
      <Footer>
      </Footer>
    </div>
  );
}

export default Home;