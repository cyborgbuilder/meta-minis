import React from 'react'
import './Faq.css'
import { useState } from 'react'

function Faq() {

    const [isVisibleOne, setIsVisibleOne] = useState(false);
    const [isVisibleTwo, setIsVisibleTwo] = useState(false);
    const [isVisibleThree, setIsVisibleThree] = useState(false);
    const [isVisibleFour, setIsVisibleFour] = useState(false);
    const [isVisibleFive, setIsVisibleFive] = useState(false);
    const [isVisibleSix, setIsVisibleSix] = useState(false);
    const [isVisibleSeven, setIsVisibleSeven] = useState(false);
    const [isVisibleEight, setIsVisibleEight] = useState(false);
    const [isVisibleNine, setIsVisibleNine] = useState(false);

  return (
    <div className="containerFaq">
       <div className='wrapFaq'>
           <div className='headerFaq'>
               <h1>FREQUENTLY ASKED QUESTIONS</h1>
           </div>

           <div className='contentFaq'>
               <div className='slotFaq'>
               <h1 onClick={() => {
                   setIsVisibleOne(v => !v)
               }}>What are Meta Minis Youth Club NFT's?</h1>
               {isVisibleOne ? <p>NFT stands for 'non-fungible token. An NFT is basically data that is accounted for in a digital ledger, and that data represents something specific and unique. An NFT can, for example, represent a unique piece of art or a game token.</p> : ''}
               </div>

               <div className='slotFaq'>
               <h1 onClick={() => {
                   setIsVisibleTwo(v => !v)
               }}>Where can I get a MMYC NFT?</h1>
               {isVisibleTwo ? <p>Our NFTs will be minted directly from our website in an initial sale. At the time of purchase, a random Meta Mini will be assigned to its owner. If you missed our Pre and Public Sale then you will be able to mint a Meta Mini from an existing owner on our Openesa.</p> : ''}
               </div>

               <div className='slotFaq'>
               <h1 onClick={() => {
                   setIsVisibleThree(v => !v)
               }}>How do you gain access to the Presale and the Public Sale?</h1>
               {isVisibleThree ? <p>To gain access to our Pre Sale you must be on our whitelist, our whitelist rules can be found on our Discord.As for the standard public sale, simply be there on our launch date.</p> : ''}
               </div>

               <div className='slotFaq'>
               <h1 onClick={() => {
                   setIsVisibleFour(v => !v)
               }}>How much does it cost to become a Meta Mini Youth Club owner?</h1>
               {isVisibleFour ? <p>In the Pre sale, each Meta Mini will be 0.04 ETH + gas fees. Our Public sale will be 0.06 ETH + gas fees.</p> : ''}
               </div>

               <div className='slotFaq'>
               <h1 onClick={() => {
                   setIsVisibleFive(v => !v)
               }}>Will there be a maximum mint per Tx?</h1>
               {isVisibleFive ? <p>All Whitelisters will have a maximum of 20 mint per Tx and the Public Sale will depend on the number of Meta Mini's sold in the Pre Sale.</p> : ''}
               </div>

               <div className='slotFaq'>
               <h1 onClick={() => {
                   setIsVisibleSix(v => !v)
               }}>Will the artwork be revealed instantly after I mint?</h1>
               {isVisibleSix ? <p>There will be an opensea preview during pre sale and public sale and your Meta Mini will be revealed when all Meta Minis are sold out.</p> : ''}
               </div>

               <div className='slotFaq'>
               <h1 onClick={() => {
                   setIsVisibleSeven(v => !v)
               }}>Can I mint on my mobile device?</h1>
               {isVisibleSeven ? <p>Yes, we are going to add Metamask dApp support prior to launch.</p> : ''}
               </div>

               <div className='slotFaq'>
               <h1 onClick={() => {
                   setIsVisibleEight(v => !v)
               }}>Which wallet do I need to mint?</h1>
               {isVisibleEight ? <p>Our website supports MetaMask and Trust wallets.</p> : ''}
               </div>

               <div className='slotFaq'>
               <h1 onClick={() => {
                   setIsVisibleNine(v => !v)
               }}>What will the community wallet be used for?</h1>
               {isVisibleNine ? <p>The community wallet will be used to support the longevity of the Meta Mini Youth Club.</p> : ''}
               </div>
               
             
           </div>
       </div>
    </div>
  );
}

export default Faq;