import { useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import logements from "../data/logements.json";
import Carousel from "./Carousel";
import Collapse from './Collapse';
import '../styles/location.scss';

function Location() {
  const params = useParams();

  const logement = logements.filter((e) => e.id === params.id);
  const hostname = logement[0].host.name.split(" ");

  const ratingStars = () => {
    const stars = [];
    for (let i = 0; i < parseInt(logement[0].rating); i++) {
      stars.push(<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" key={i}>
        <path d="M19.7212 6.84366C19.4728 6.32809 18.9479 6 18.3714 6C17.7949 6 17.2747 6.32809 17.0216 6.84366L14.0079 13.0445L7.27748 14.0382C6.71506 14.1225 6.24636 14.5162 6.07295 15.0552C5.89953 15.5942 6.04014 16.1895 6.44321 16.5879L11.327 21.4201L10.174 28.2491C10.0803 28.8115 10.3146 29.3833 10.7786 29.7161C11.2426 30.0489 11.8566 30.0911 12.3628 29.8239L18.3761 26.6133L24.3894 29.8239C24.8956 30.0911 25.5096 30.0536 25.9736 29.7161C26.4376 29.3786 26.6719 28.8115 26.5782 28.2491L25.4205 21.4201L30.3043 16.5879C30.7073 16.1895 30.8526 15.5942 30.6745 15.0552C30.4964 14.5162 30.0324 14.1225 29.47 14.0382L22.7349 13.0445L19.7212 6.84366Z" fill="#FF6060" />
      </svg>);
    }
    while (stars.length < 5) {
      stars.push(<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" key={stars.length}>
        <path d="M19.7212 6.84366C19.4728 6.32809 18.9479 6 18.3714 6C17.7949 6 17.2747 6.32809 17.0216 6.84366L14.0079 13.0445L7.27748 14.0382C6.71506 14.1225 6.24636 14.5162 6.07295 15.0552C5.89953 15.5942 6.04014 16.1895 6.44321 16.5879L11.327 21.4201L10.174 28.2491C10.0803 28.8115 10.3146 29.3833 10.7786 29.7161C11.2426 30.0489 11.8566 30.0911 12.3628 29.8239L18.3761 26.6133L24.3894 29.8239C24.8956 30.0911 25.5096 30.0536 25.9736 29.7161C26.4376 29.3786 26.6719 28.8115 26.5782 28.2491L25.4205 21.4201L30.3043 16.5879C30.7073 16.1895 30.8526 15.5942 30.6745 15.0552C30.4964 14.5162 30.0324 14.1225 29.47 14.0382L22.7349 13.0445L19.7212 6.84366Z" fill="#E3E3E3" />
      </svg>)
    }
    return stars;
  }

  return (
    <div className="Home">
      <Header />
      <div className='main'>
        <div className='logement'>
          <Carousel data={logement[0].pictures} />
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
            <div className='logement__rate'>
              <div className='logement__host'>
                <div className='logement__host__name'>
                  <p>{hostname[0]}</p>
                  <p>{hostname[1]}</p>
                </div>
                <img src={logement[0].host.picture} alt={logement[0].host.name} />
              </div>
              <div className='logement__host__rate'>
                {ratingStars()}
              </div>
            </div>
          </div>
          <div className='logement__data'>
            <Collapse title='Description' content={logement[0].description} />
            <Collapse title='Équipement' content={logement[0].equipments.map((equipement) => { return <li key={equipement}>{equipement}</li> })} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Location