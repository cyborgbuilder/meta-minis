import './Game.css';
import React from 'react';
import Slide from 'react-reveal/Slide';



function Game() {
  return (
    <div className="containerGame">
        <div className='wrapGame'>
            

            <div className='imageGame'>
                <Slide bottom>
                <img src='/images/game.png' />
                </Slide>
            </div>

            <div className='headerGame' >
            <h1>MMYC Game Development</h1>
            {/* <h2>Introducing our children’s to the Meta Mini Youth Club in the Metaverse</h2>
        <p>Meta Mini Youth Club’s Metaverse Land purchase. Join our our 3D Avatars and MMYC community in the first ever Youth Club in the Metaverse. MMYC Holders will decide on our Land and make the purchase from the community wallet.</p> */}
            </div>
        </div>
    </div>
  );
}

export default Game;