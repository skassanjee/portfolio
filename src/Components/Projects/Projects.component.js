import React from 'react'
import img from '../../Assets/placeholder.png'
import './projects.styles.css'
import './mediaQueries.styles.css'

const Projects = (props) =>{
    return(
        
        <div className='card' >
            <h1 className="proj-title"> {props.title}</h1>
            <a href="http://www.google.com">
            <img src={img}/>
            </a>
            <p> {props. description}</p>
        </div>
    )
}

export default Projects