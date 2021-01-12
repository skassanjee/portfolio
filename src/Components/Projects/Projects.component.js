import React from 'react'
import img from '../../Assets/placeholder.png'
import './projects.styles.css'
import './mediaQueries.styles.css'
import github from '../../Assets/GitHub-Logo.png'
import { Grid } from '@material-ui/core';

const Projects = (props) =>{
    return(
        
        <div className='card' >
            <h1 className="proj-title"> {props.title}</h1>
            <img src={img}/>
            <div  className="projectLinks" >
                <a href={props.github}>
                 <img src={github} />
                </a>
                <span className="viewLive">View Live</span>
            </div>
            <p> {props.description}</p>
        </div>
    )
}

export default Projects