import React from 'react'
import img from '../../Assets/placeholder.png'
import './projects.styles.css'
import './mediaQueries.styles.css'

const Projects = (props) =>{
    return(
        
        <div className='card' >
            <h1 className="proj-title"> {props.title}</h1>
            <img src={img}/>
            <p> {props. description}</p>
        </div>
    )
}

export default Projects