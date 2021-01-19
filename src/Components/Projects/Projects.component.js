import React from 'react'
import img from '../../Assets/placeholder.png'
import './projects.styles.css'
import './mediaQueries.styles.css'
import github from '../../Assets/GitHub-Logo.png'
import { Grid } from '@material-ui/core';

const Projects = ({description, img, name}) =>{
    return(
        
        <div className='card' >
            <img src={img} /> 
            <div>{name}</div>

        </div>
    )
}

export default Projects