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
                <a href="https://donor-management-fe.netlify.com/signup"
                    target="_blank"
                    rel="noopener noreferer">
                </a>

                <a className="btn-light" href="https://donor-management-fe.netlify.com/signup"  target="_blank"
                    rel="noopener noreferer">
                    <i className="fas fa-eye"> </i>Donor Management
                </a>
                <a className="btn-dark" href="https://github.com/kevinsims1/donormanagement-fe"  target="_blank"
                    rel="noopener noreferer">
                    <i className="fab fa-github"></i>Github
                </a>
                </div>          
           
                <div className="item">
                <a  target="_blank"
                    rel="noopener noreferer"
                    href="https://github.com/kevinsims1/project-board">
                </a>

                <a className="btn-light"  target="_blank"
                    rel="noopener noreferer"
                    href="https://github.com/kevinsims1/project-board">
                    <i className="fas fa-eye"> </i>Project Board
                </a>
                <a className="btn-dark"  target="_blank"
                    rel="noopener noreferer"
                    href="https://github.com/kevinsims1/project-board">
                    <i className="fab fa-github"></i>Github
                </a>
                </div>                
            
                <div className="item">
                <a  target="_blank"
                    rel="noopener noreferer"
                    href="https://github.com/kevinsims1/OpenSource-marketplace-BE"> 
                        </a>

                <a className="btn-light"
                     target="_blank"
                     rel="noopener noreferer"
                     href="https://github.com/kevinsims1/OpenSource-marketplace-BE">
                    <i className="fas fa-eye"> </i>Open Source Marketplace Api
                </a>
                <a className="btn-dark"
                     target="_blank"
                     rel="noopener noreferer"
                     href="https://github.com/kevinsims1/OpenSource-marketplace-BE">
                    <i className="fab fa-github"></i>Github
                </a>
                </div>             
            
                <div className="item">
                <a
                 target="_blank"
                 rel="noopener noreferer"
                 href="https://github.com/labs15-rv-life">
                        </a>

                <a className="btn-light"
                     target="_blank"
                     rel="noopener noreferer"
                     href="https://github.com/labs15-rv-life">
                    <i className="fas fa-eye"> </i>RV Navigator
                </a>
                <a className="btn-dark"
                     target="_blank"
                     rel="noopener noreferer"
                     href="https://github.com/labs15-rv-life">
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