import Header from './Header';
import Footer from './Footer';
import logements from "../data/logements.json";
import { useParams } from 'react-router-dom';
import '../styles/location.scss';

function Location() {
  const params = useParams();

  const logement = logements.filter((e) => e.id === params.id);

  return (
    <div>
      <Header />
      <div className='main'>
        <div className='logement'>
          <div className='logement__carrousel'>

          </div>
          <div className='logement__infos'>
            <div className='logement_location'>
              <p className='logement__title'>{logement[0].title}</p>
              <p className='logement__title'>{logement[0].location}</p>
              <div className='logement__tags'>
              </div>
            </div>
            <div className='logement_rate'>
              <div className='logement__host'>
                <p>{logement[0].host.name}</p>
                <img src={logement[0].host.picture} alt={logement[0].host.name} />
              </div>
              <div className='logement__host__rate'>
                <p>{logement[0].rating}</p>
              </div>
            </div>
          </div>
          <div className='logement__data'>
            <div className='logement_description'>

            </div>
            <div className='logement_equipement'>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Location