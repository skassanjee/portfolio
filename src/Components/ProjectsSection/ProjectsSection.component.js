import React, { Component } from 'react'
import Projects from '../../Components/Projects/Projects.component'
import Data from '../../Data/projects.data'
import './ProjectSection.styles.css'
import './mediaQueries.styles.css'
import { Grid } from '@material-ui/core';

class ProjectsSection extends Component {
    constructor(props){
        super(props)
        this.state = {
            Data
        }
    }
    render(){
        return (
            <div>
                {this.state.Data.map(proj => (
                    <Projects id={proj.id} description={proj.description} name={proj.name} img={proj.img} />
                ))}
            </div>
        )
        }
}
export default ProjectsSection