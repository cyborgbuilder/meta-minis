import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Dev.css'
import Home from "./Home";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      accessibility: false,
      arrows: false
    };
    return (
        <div className="containerDeve">

<div className="headerDeve">
                <h1>POST SALE DEVELOPMENT</h1>
                </div>
            <div className="sliderDeve">

                

                <Slider {...settings}>
                <div className="wrapDeve">
                    <h2>Make-A-Wish</h2>
                    <p>Visiting and Documenting the Recipients of the MMYC Community’s charity donations.</p>
                   
                
                </div>
                <div className="wrapDeve">
                <h2>Community</h2>
                    <p>2.5% of our secondary sales will go directly to our community wallet to keep giving back to the community.</p>
                    


                </div>

                <div className="wrapDeve">
                <h2>MMYC Generation 2</h2>
                    <p>Finalise MMYC Generation 2 collection. We created a BRAND with MMYC Not just a project. Which is why we used 100% custom characters and chose not to use any other inspiration from Disney/Marvel for our legendary characters. MMYC Generation 2 is also custom and unique and will launch shortly after MMYC Generation 1 Sell out. Details will be discussed with our holders in our Discord.</p>
                    
                </div>

                <div className="wrapDeve">
                <h2>Metaverse Land Purchase</h2>
                    <p>Join our 3D Avatars and MMYC community in the first ever Youth Club in the Metaverse. MMYC Holders will decide on our Land and make the purchase from the community wallet.</p>
                    
                </div>

                <div className="wrapDeve">
                <h2>Meta Minis Play to Earn Game</h2>
                    <p>Our Meta Minis Game is in the early stages of Development and will be finalised post public sale with help from our holders. Our goal is to introduce the children of OUR future, to THE FUTURE. The Metaverse. Holders will have exclusive access to our interactive Family game, using their Meta Minis as 3D Avatars.</p>
                    
                </div>

                </Slider>
                </div>
        </div>
    );
  }
}
