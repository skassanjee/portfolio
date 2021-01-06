import React from 'react'
import img from '../../Assets/placeholder.png'
const Projects = (props) =>{
    return(
        
        <div>
            <h1> {props.title}</h1>
            <img src={img} />
            <p> {props. description}</p>
        </div>
    )
}

export default Projects