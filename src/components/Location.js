import Header from './Header';
import Footer from './Footer';
import logements from "../data/logements.json";
import { useParams } from 'react-router-dom';
import '../styles/location.scss';

function Location() {
  const params = useParams();

  const logement = logements.filter((e) => e.id === params.id);
  const hostname = logement[0].host.name.split(" ");

  return (
    <div>
      <Header />
      <div className='main'>
        <div className='logement'>
          <div className='logement__carrousel'>
            <img src={logement[0].pictures[0]} alt={logement[0].title} />
          </div>
          <div className='logement__infos'>
            <div className='logement_location'>
              <p className='logement__title'>{logement[0].title}</p>
              <p className='logement__city'>{logement[0].location}</p>
              <div className='logement__tags'>
                {logement[0].tags.map((tag) => {
                  return <p>{tag}</p>
                })}
              </div>
            </div>
            <div className='logement_rate'>
              <div className='logement__host'>
                <div className='logement__host__name'>
                  <p>{hostname[0]}</p>
                  <p>{hostname[1]}</p>
                </div>
                <img src={logement[0].host.picture} alt={logement[0].host.name} />
              </div>
              <div className='logement__host__rate'>
                {() => {
                  for (let i = 0; i < parseInt(logement[0].rating); i++) {
                    <img src="../assets/star-active.svg" alt="rating star" />
                    console.log(parseInt(logement[0].rating));
                  }
                }}
              </div>
            </div>
          </div>
          <div className='logement__data'>
            <button className='logement__section'>Description</button>
            <button className='logement__section'>Équipement</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Location