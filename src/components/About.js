import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Collapse from './Collapse';
import '../styles/about.scss';

function About() {
  return (
    <div className="Home">
      <Header />
      <div className='about'>
        <div className='about-header'></div>
        <div className='about-content'>
          <div className='about-section'>
            <Collapse title='Fiabilité' content='Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.' />
            <Collapse title='Respect' content='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.' />
            <Collapse title='Service' content='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.' />
            <Collapse title='Sécurité' content={`La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.`} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;