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
        return <div className="mainContainer">

            <Grid item xs={12} md={12} container spacing={3}>
                <Grid item xs={12} md={4} spaceing={1}>
                    <div>
                         <Projects 
                              title={"Natours"} link={'http://www.google.com'}
                              description={"A fictional travel website built with ReactJS for the front end, and nodeJS for the backend."} />
                    </div>    
                </Grid>
                <Grid item xs={12}  md={4} spaceing={3}>
                    <div>
                         <Projects 
                              title={"project 1"}
                              description={"Some A fictional travel website built with ReactJS for the front end, and nodeJS for the backend."} />
                    </div> 
                    </Grid>    
                <Grid item xs={12}  md={4 }spaceing={3}>
                      <div>
                         <Projects 
                              title={"project 1"}
                              description={"Some A fictional travel website built with ReactJS for the front end, and nodeJS for the backend."} />
                    </div>
                    </Grid>
            </Grid>
                 </div>
    }
}

export default ProjectsSection