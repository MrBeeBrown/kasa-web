import Header from './Header';
import Footer from './Footer';
import logements from "../data/logements.json";
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import '../styles/location.scss';

function Location() {
  const params = useParams();

  const logement = logements.filter((e) => e.id === params.id);
  const hostname = logement[0].host.name.split(" ");

  const [showItem, setShowItem] = useState(false);

  const toggleShow = (e) => {
    console.log(e.target);
    setShowItem(!showItem);
  }

  const ratingStars = () => {
    const stars = [];
    for (let i = 0; i < parseInt(logement[0].rating); i++) {
    }
  }

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
                  return <p key={tag}>{tag}</p>
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
                  }
                }}
              </div>
            </div>
          </div>
          <div className='logement__data'>
            <div className='description'>
              <div className='description__data'>
                <button className='logement__section'>Description</button>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={showItem ? "rotate" : "icon"} onClick={(e) => toggleShow(e)}>
                  <path fill="#FFFFFF" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
                </svg>
              </div>
              <p className={showItem ? 'show' : 'hidden'}>{logement[0].description}</p>
            </div>
            <div className='equipement'>
              <div className='equipement__data'>
                <button className='logement__section'>Équipement</button>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={showItem ? "rotate" : "icon"} onClick={(e) => toggleShow(e)}>
                  <path fill="#FFFFFF" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
                </svg>
              </div>
              <p className={showItem ? 'show' : 'hidden'}>{logement[0].equipments.map((equipement) => { return <li key={equipement}>{equipement}</li> })}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Location