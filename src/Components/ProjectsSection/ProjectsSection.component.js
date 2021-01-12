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

            <h1>Projects</h1>

            <Grid item xs={12} md={12} container>

                <Grid item xs={12} md={4} spaceing={3}>
                    <div>
                         <Projects 
                              title={"Natours"} 
                              github={'http://www.google.com'}
                              description={"A fictional travel website built with ReactJS for the front end, and nodeJS for the backend."} />
                    </div>    
                </Grid>
                <Grid item xs={12}  md={4} spaceing={3}>
                    <div>
                    <Projects 
                              title={"Natours"} 
                              github={'http://www.google.com'}
                              description={"A fictional travel website built with ReactJS for the front end, and nodeJS for the backend."} />
                    </div>    
                    </Grid>    
                <Grid item xs={12}  md={4 }spaceing={2}>
                      <div>
                       <Projects 
                              title={"Natours"} 
                              github={'http://www.google.com'}
                              description={"A fictional travel website built with ReactJS for the front end, and nodeJS for the backend."} />
                    </div>
                    </Grid>
            </Grid>
                 </div>
    }
}

export default ProjectsSection