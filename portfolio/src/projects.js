import React, { Component } from 'react';
import Nav from "./nav"

class Projects extends Component {
    render(){
        return(
            <>
             <Nav/>
            <main id="Projects">
            <h1 className="lg-heading">
                My <span className="text-secondary">Projects</span>
            </h1>
            <h2 className="sm-heading">
              Check out some of my projects...
            </h2>

            <div className="projects">
                <div className="item">
                <a href="#">
                    <img src="src/img/project1.jpg"/>
                </a>

                <a className="btn-light" href="#">
                    <i className="fas fa-eye"> </i>Project
                </a>
                <a className="btn-dark" href="#">
                    <i className="fab fa-github"></i>Github
                </a>
                </div>          
           
                <div className="item">
                <a>
                <img src="src/img/project2.jpg"/>
                </a>

                <a className="btn-light">
                    <i className="fas fa-eye"> </i>Project
                </a>
                <a className="btn-dark">
                    <i className="fab fa-github"></i>Github
                </a>
                </div>                
            
                <div className="item">
                <a>
                     <img src="src/img/project3.jpg"/>
                </a>

                <a className="btn-light">
                    <i className="fas fa-eye"> </i>Project
                </a>
                <a className="btn-dark">
                    <i className="fab fa-github"></i>Github
                </a>
                </div>             
            
                <div className="item">
                <a>
                     <img src="src/img/project4.jpg"/>
                </a>

                <a className="btn-light">
                    <i className="fas fa-eye"> </i>Project
                </a>
                <a className="btn-dark">
                    <i className="fab fa-github"></i>Github
                </a>
                </div>     
            
                <div className="item">
                   <a>
                     <img src="src/img/project5.jpg"/>
                    </a>

                    <a className="btn-light">
                        <i className="fas fa-eye"> </i>Project
                    </a>
                    <a className="btn-dark">
                        <i className="fab fa-github"></i>Github
                    </a> 
                </div>        
            </div>
            </main>
            <footer id="main-footer">
             Copyright &copy; 2019
            </footer>
            </>
        )
    }
}

export default Projects;