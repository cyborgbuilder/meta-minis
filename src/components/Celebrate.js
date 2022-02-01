import './Celebrate.css';
import React from 'react';
import Slide from 'react-reveal/Slide';



function Celebrate() {
  return (
    <div className="containerCele">
        <div className='wrapCele'>

            <div className='imageCele'>
               <Slide bottom>
               <img src='/images/diamond2.png' />
               </Slide>
            </div>
        </div>
    </div>
  );
}

export default Celebrate;