import React from 'react';
import './ImgBox.css'
function ImgBox() {
  return (
    <div className="containerImgBox">
        <div className='wrapImgBox'>
            <div className='leftImgBox'>
            <img src="/images/b1.png" />
                    <img src="/images/b2.png" />
                    <img src="/images/b3.png" /> 
                    <img src="/images/b4.png" />
            </div>
            <div className='rightImgBox'>
            <h1>About Us</h1>
            <p>The MMYC is not just a project, it's an exciting new youthful brand birthed through NFT's. Welcoming our children into the Metaverse. Welcoming OUR future into THE future.

Everything is about to change. All the way from the Meta Mini Youth Club the Meta Minis have arrived and are ready to take over. Only 9,999 MMYC's will be minted as ERC-721 tokens on the ether blockchain, and quickly adopted by owners LIVE on our website.

As a youth club member you are guaranteed many long and exciting adentures ahead. Not only will you be generating passive income and making critically ill children's wished come true. You will be helping to shape the ethos of Web3.0 into an opportunistic place for the next generation. Encouraging those to foster an open conversation about the benefits of the online world and our future within the metaverse.</p>
            </div>
        </div>
    </div>
  );
}

export default ImgBox;
