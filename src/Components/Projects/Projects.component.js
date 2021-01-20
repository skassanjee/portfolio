import React from 'react'
import img from '../../Assets/placeholder.png'
import './projects.styles.css'
import './mediaQueries.styles.css'
import github from '../../Assets/GitHub-Logo.png'
import { Grid } from '@material-ui/core';
import Github from '../../Assets/GitHub-Logo.png'


const Projects = ({description, img, name, githublink}) =>{
    return(
        
        <div className='card' >
            <img className="proj-preview" src={img} /> 
            <div className="proj-description">
                <div className="proj-name">{name}</div>
                    <div className="proj-summary">{description}</div>
                        <div className="proj-link-div">
                             <div>
                                <a href={githublink}>
                                    <img className='link-images' src={github}/>
                                </a>
                            </div>  

                            <div>
                                <a href={githublink}>
                                    <img className='link-images' src={github}/>
                                </a>
                            </div>  
                        </div>
                    </div>
                 </div>
    )
}

export default Projects