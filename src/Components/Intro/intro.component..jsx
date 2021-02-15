import React from 'react';
import Sahil from '../../Assets/Sahil.jpg'
import './intro.styles.css'
import './intro.media.css'


const Intro = () =>{   
    return(
        <div className="intro">


                
                    <img className="profilepic" src={Sahil} alt = 'profile picture' />
                
               
               

                <div className="profile-card">
                    <span className='name'>My name is Sahil Kassanjee </span><br/>
                    <span className='job'>I am a Fullstack MERN Web Developer </span>
                    <p>Thank you for visiting my potfolio. I am a MERN web developer with experience in many technologies. I am currently seeking a full time position.</p>
                </div>
          
        </div>


    )
}

export default Intro