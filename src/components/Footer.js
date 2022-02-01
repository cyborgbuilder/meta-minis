import React from 'react';
import './Footer.css';
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className="containerFoot">
        <div className='logoFoot'>
            <img src='/images/logo2.png' />
        </div>
        <div className='socialFoot'>
            <a href=''><FaInstagram style={{fontSize: '40px', margin: '0 10px'}} /></a>
            <a href=''><FaTwitter style={{fontSize: '40px', margin: '0 10px'}}/></a>
            <a href=''><FaDiscord style={{fontSize: '40px', margin: '0 10px'}}/></a>
            <a href=''><FaYoutube style={{fontSize: '40px', margin: '0 10px' }}/></a>

        </div>

        <div className='textFoot'>
            <p>© MMYC - Est. 2021</p>
        </div>
    </div>
  );
}

export default Footer;
