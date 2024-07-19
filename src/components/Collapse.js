import React, { useState } from 'react';

function Collapse({ title, content }) {
  const [showItem, setShowItem] = useState(false);

  const toggleShow = () => {
    setShowItem(!showItem)
  }

  return (
    <div className='about-content'>
      <div className='about-section'>
        <div className='section-title'>
          <button className='section'>{title}</button>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={showItem ? "rotate" : "icon"} onClick={() => toggleShow()}>
            <path fill="#FFFFFF" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
          </svg>
        </div>
        <div className={showItem ? 'section-panel' : 'hidden'}>
          <p className={showItem ? 'show' : 'hidden'}>{content}</p>
        </div>
      </div>
    </div>
  );
}

export default Collapse;