import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar, Nav } from 'react-bootstrap'
import './Home.css'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";


function Home() {
  return (
    <div className="containerHome">
      <Navbar  bg="myTra" variant='dark'  expand='lg' sticky='top'>
             

             <Navbar.Toggle style={{marginLeft: '10px'}} />
             <Navbar.Collapse>
             <Nav style={{}}>
             <img className='logo' src='/images/logo2.png' />
                <div className='links'>
                <Nav.Link style={{  color: 'white',  letterSpacing: '1.2px'}} href="">TRAITS</Nav.Link>
                 <Nav.Link style={{   color: 'white',letterSpacing: '1.2px'}} href="">ROADMAP</Nav.Link>
                 <Nav.Link style={{   color: 'white',letterSpacing: '1.2px'}} href="">TEAM</Nav.Link>
                 <Nav.Link style={{    color: 'white',letterSpacing: '1.2px'}} href="">FAQ</Nav.Link>
                 <Nav.Link style={{    color: 'white',letterSpacing: '1.2px'}} href="">SOCIALS</Nav.Link>
                 <Nav.Link style={{    color: 'white',letterSpacing: '1.2px'}} href="">OUR MISSION</Nav.Link>
                </div>

                

                <button className='mintBtn'>MINT</button>
                 
             </Nav>
             </Navbar.Collapse >
             
             
             
             </Navbar>

             <div className='wrapHome'>
                 <div className='bannerHome'>
                     <img src='/images/banner.png' />
                 </div>
             </div>
    </div>
  );
}

export default Home;