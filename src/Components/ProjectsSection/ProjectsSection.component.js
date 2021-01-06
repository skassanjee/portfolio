import React, { Component } from 'react'
import Projects from '../../Components/Projects/Projects.component'
import Data from '../../Data/projects.data'
import './ProjectsSection.component.js'
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
                <Grid item xs={12} sm container justify="space-around"
  alignItems="center">
                    <div>
                         <Projects 
                              title={"Natours"}
                              description={"A fictional travel website built with ReactJS for the front end, and nodeJS for the backend."} />
                    </div>    

                    <div>
                         <Projects 
                              title={"project 1"}
                              description={"Some text"} />
                    </div>     

                      <div>
                         <Projects 
                              title={"project 1"}
                              description={"Some text"} />
                    </div>
                </Grid>

                <Grid item xs={12} sm container justify="space-around"
  alignItems="center">
                    <div>
                         <Projects 
                              title={"project 1"}
                              description={"Some text"} />
                    </div>    

                    <div>
                         <Projects 
                              title={"project 1"}
                              description={"Some text"} />
                    </div>     

                      <div>
                         <Projects 
                              title={"project 1"}
                              description={"Some text"} />
                    </div>
                </Grid>
                 </div>
    }
}

export default ProjectsSection