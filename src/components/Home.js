import Header from '../components/Header';
import Footer from '../components/Footer';
import logements from "../data/logements.json";
import { useNavigate } from 'react-router-dom';
import '../styles/home.scss';

function Home() {
  let navigate = useNavigate();

  const getLocation = (id) => {
    navigate("./location/" + id)
  }

  return (
    <div>
      <Header />
      <div className='main'>
        <div className='main-header'>
          <p className='main-title'>Chez vous, partout et ailleurs</p>
        </div>
        <div className='main-content'>
          {
            logements.map(logement => {
              return (
                <div className="card" key={logement.id} onClick={() => getLocation(logement.id)}>
                  <div className='gradient'></div>
                  <img src={logement.cover} alt={logement.title} />
                  <p>{logement.title}</p>
                </div>
              )
            })
          }
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;