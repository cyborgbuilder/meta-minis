import React from 'react'
import './Team.css'

function Team() {
  return (
    <div className="containerTeam">
        <div className='wrapTeam'>
           <div className='headerTeam'>
               <h1>MEET THE TEAM</h1>
           </div>
           <div className='memTeam'>
               <div className='cardTeam'>
                   <img src="/images/c1.png" />
                   <h1>Meta Papa</h1>
                   <p>CO FOUNDER</p>
               </div>

               <div className='cardTeam'>
                   <img src="/images/c2.png" />
                   <h1>Meta Mama</h1>
                   <p>CO FOUNDER</p>
               </div>

               <div className='cardTeam'>
                   <img src="/images/c3.png" />
                   <h1>Zio</h1>
                   <p>CREATIVE</p>
               </div>

               <div className='cardTeam'>
                   <img src="/images/c4.png" />
                   <h1>Eslam</h1>
                   <p>CREATIVE</p>
               </div>

               <div className='cardTeam'>
                   <img src="/images/c5.png" />
                   <h1>Rosa</h1>
                   <p>Community Manager</p>
               </div>

               <div className='cardTeam'>
                   <img src="/images/c6.png" />
                   <h1>Chance</h1>
                   <p>Senior Manager</p>
               </div>

               <div className='cardTeam'>
                   <img src="/images/c7.png" />
                   <h1>Gio</h1>
                   <p>Game Developer</p>
               </div>

               <div className='cardTeam'>
                   <img src="/images/c8.png" />
                   <h1>Technico</h1>
                   <p>Discord Manager</p>
               </div>

               <div className='cardTeam'>
                   <img src="/images/c9.png" />
                   <h1>Razor</h1>
                   <p>Web3 Developer</p>
               </div>
            </div> 
        </div>
    </div>
  );
}

export default Team;