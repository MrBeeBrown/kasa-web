import React, { useState } from 'react';

function Collapse({ title, content }) {
  const [showItem, setShowItem] = useState(false);

  const toggleShow = () => {
    setShowItem(!showItem)
  }

  return (
    <div className='about-content'>
      {
        <div className='about-section'>
          <button className='section' onClick={() => toggleShow()}>{title}</button>
          <div className={`${showItem ? 'section-panel' : 'hidden'}`}>
            <p>{content}</p>
          </div>
        </div>
      }
    </div>
  );
}

export default Collapse;