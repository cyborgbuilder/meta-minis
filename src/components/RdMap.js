import React from 'react'
import './RdMap.css'
import Slide from 'react-reveal/Slide';


function App() {
  return (
    <div className="containerRd">
      <div className='wrapRd'>
          <div className='headerRd'>
              <h1>ROADMAP</h1>
          </div>
          <div className='mapRd'>
          <div className='leftRd' >
             <div className='leftPerc' id='fivePerc'>
             <Slide bottom>
                 <h1>5% SOLD</h1>
                 </Slide>    
             </div>

             <div className='leftDet' id='tenDet'>
               <Slide bottom>
                <p>Giving back to our community early is a priority. We will deposit 20% of the revenue generated from the first 1000 mints into our community wallet and open our MMYC Holders channel to discuss post sale objectives.</p>
                </Slide>
            </div>

            <div className='leftPerc' id='twentyPerc'>
              <Slide bottom>
                 <h1>20% SOLD</h1>
                 </Slide>
             </div>


             <div className='leftDet' id='fortyDet'>
               <Slide bottom>
               <h3>MMYC 3D FIGURE GIVEAWAY</h3>
                <p>10 Lucky holders will Win a MMYC Gift pack with a 3D collectible figure of their NFT. Winners will be announced at 40% Sold, Production will start after MMYC NFT’s have been revealed.</p>
                </Slide>
            </div>

            <div className='leftPerc' id='sixtyPerc'>
              <Slide bottom>
                 <h1>60% SOLD</h1>
                 </Slide>   
             </div>

             <div className='leftDet' id='eightyDet'>
               <Slide bottom>
               <h3>15 ETH COMMUNITY GIVEAWAY</h3>
                <p>5 Lucky holders will receive 3ETH. All winners will be drawn randomly and you must be a current holder of the first 8000 MMYC NFTs to be eligible.</p>
                </Slide>
            </div>

            <div className='leftPerc' id='hundredPerc'>
              <Slide bottom>
                 <h1>100% SOLD</h1>
                 </Slide>
             </div>



           


          </div>












          <div className='rightRd'>

            <div className='rightDet' id='fiveDet'>
              <Slide bottom>
                <p>We will make our first Make-A-Wish donation
and Airdrop a Golden Star NFT to holders of the first 500 Mints, this will be an additional NFT to signify that you’re a contributor to the first Make-A-Wish Donation. Our collection will also be listed on Rarity Sniper/Rarity Tools.</p>
              </Slide>
            </div>

            <div className='rightPerc' id='tenPerc'>
              <Slide bottom>
                <h1>10% SOLD</h1>
                </Slide>
            </div>
            

            <div className='rightDet' id='twentyDet'>
              <Slide bottom>
                <h3>5 ETH GIVEAWAY</h3>
                <p>1 Lucky Holder will be drawn randomly to receive 5ETH. To be eligible, the winner must be HOLDING one of the first 2000 MMYC NFTs.</p>
                </Slide>
            </div>

            <div className='rightPerc' id='fortyPerc'>
              <Slide bottom>
                <h1>40% SOLD</h1>
                </Slide>
            </div>

            <div className='rightDet' id='sixtyDet'>
                <Slide bottom>
                <p>We will create our first video for our new MMYC YouTube channel - The video will document the MMYC Team meeting with the recipient of the first Make-A-Wish Donation and the impact it had on the child and the family.</p>
                </Slide>
            </div>


            <div className='rightPerc' id='eightyPerc'>
              <Slide bottom>
                <h1>80% SOLD</h1>
                </Slide>
            </div>

            <div className='rightDet' id='hundredDet'>
              <Slide bottom>
              <h3>LET'S CELEBRATE</h3>
                
                <p>To Celebrate we will complete all Make-A-Wish Donations and our donation to a chosen children’s charity. We will also deposit 20% of our overall revenue into our community wallet. This will be used for all Post Sale objectives.</p>
                </Slide>
            </div>

              
          </div>
          </div>
      </div>
    </div>
  );
}

export default App;