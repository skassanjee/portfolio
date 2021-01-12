import React from 'react';
import Sahil from '../../Assets/Sahil.jpg'
import './intro.styles.css'
import './intro.media.css'
import { Grid } from '@material-ui/core';


const Intro = () =>{   
    return(
        <div className="Intro">

        <Grid item container xs={12} lg={12}>

            <Grid item xs={12} lg={6}>
                <div className='profilepicbox'>
                    <img className="profilepic" src={Sahil} alt = 'profile picture' />
                </div>
               </Grid>
               
            <Grid item xs={12} lg={6}>
                <div className="profile-card">
                <span className='name'>My name is Sahil Kassanjee</span>
                <span className='job'>I am a Fullstack MERN Web Developer </span>
                <p>Thank you for visiting my potfolio. I am a MERN web developer with experience in many technologies. I am currently seeking a full time position.</p>
                </div>
             </Grid>

        </Grid>
        </div>


    )
}

export default Intro