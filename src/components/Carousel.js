import '../styles/carousel.scss';
import { useState } from 'react';


function Carousel({ data }) {

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === data.length - 1 ? 0 : currentSlide + 1);
  };
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? data.length - 1 : currentSlide - 1);
  };

  return (
    <div className='logement__carrousel'>
      {data.length > 1 ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className='chevron chevron_left' onClick={prevSlide}>
        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" fill="#FFFFFF" />
      </svg> : null}
      {data.map((item, index) => {
        return <img src={item} alt={index} key={index} className={currentSlide === index ? 'active' : 'inactive'} />
      })}
      {data.length > 1 ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className='chevron chevron_right' onClick={nextSlide}>
        <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" fill="#FFFFFF" />
      </svg> : null}
      {data.length > 1 ? <span className='indicators'>
        {currentSlide + 1} / {data.length}
      </span> : null}
    </div>
  )
}

export default Carousel;