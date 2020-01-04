import React, { Component } from 'react';
import Rvnav from './img/rvnavimg.png';
import Weatherapp from './img/weatherapp.png';
import Youtube from './img/youtube.jpg';
import DonorTransparency from './img/DonorT.png';
import SautiAM from './img/SautiAM.jpg';
import Portfolio from './img/Portfolio.jpg';
class Projects extends Component {
    render(){
        return(
            <>
             
            <main id="Projects">
            <h1 className="lg-heading">
                My <span className="text-secondary">Projects</span>
            </h1>
            <h2 className="sm-heading">
              Check out some of my projects...
            </h2>

            <div className="projects">
            <div className="item">
                <a href="https://rvnav.com">
                 <img src={Rvnav} alt=''/>
                </a>

                <a className="btn-light"
                     target="_blank"
                     rel="noopener noreferrer"
                     href="https://www.rvnav.com/">
                    <i className="fas fa-eye"> </i>RV Navigator
                </a>
                <a className="btn-dark"
                     target="_blank"
                     rel="noopener noreferrer"
                     href="https://github.com/Lambda-School-Labs/rv-nav-fe">
                    <i className="fab fa-github"></i>Github
                </a>
                </div>           
           
                <div className="item">
                <a  target="_blank"
                    rel="noopener noreferrer"
                    href="https://kevinsims1.github.io/u-tube/">
                    <img src={Youtube} alt=''/>
                </a>

                <a className="btn-light"  target="_blank"
                    rel="noopener noreferrer"
                    href="https://kevinsims1.github.io/u-tube/">
                    <i className="fas fa-eye"> </i>Youtube Clone
                </a>
                <a className="btn-dark"  target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/kevinsims1/u-tube">
                    <i className="fab fa-github"></i>Github
                </a>
                </div> 

                <div className="item">
                <a href="https://donor-management-fe.netlify.com/signup"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img src={DonorTransparency} alt=''/>
                </a>

                <a className="btn-light" href="https://donor-management-fe.netlify.com/signup"  target="_blank"
                    rel="noopener noreferrer">
                    <i className="fas fa-eye"> </i>Donor Management
                </a>
                <a className="btn-dark" href="https://github.com/kevinsims1/donormanagement-fe"  target="_blank"
                    rel="noopener noreferrer">
                    <i className="fab fa-github"></i>Github
                </a>
                </div>                   
            
                <div className="item">
                <a  target="_blank"
                    rel="noopener noreferrer"
                    href="https://price-api.sautiafrica.org"> 
                    <img src={SautiAM} alt=''/>
                        </a>

                <a className="btn-light"
                     target="_blank"
                     rel="noopener noreferrer"
                     href="https://price-api.sautiafrica.org">
                    <i className="fas fa-eye"> </i>Open Source Marketplace Api
                </a>
                <a className="btn-dark"
                     target="_blank"
                     rel="noopener noreferrer"
                     href="https://github.com/kevinsims1/OpenSource-marketplace-BE">
                    <i className="fab fa-github"></i>Github
                </a>
                </div>   
                
                <div className="item">
                <a  target="_blank"
                    rel="noopener noreferrer"
                    href="https://kevinsims1.github.io/weather-app/"> 
                    <img src={Weatherapp} alt=''/>
                        </a>

                <a className="btn-light"
                     target="_blank"
                     rel="noopener noreferrer"
                     href="https://kevinsims1.github.io/weather-app/">
                    <i className="fas fa-eye"> </i>Weather App
                </a>
                <a className="btn-dark"
                     target="_blank"
                     rel="noopener noreferrer"
                     href="https://github.com/kevinsims1/weather-app">
                    <i className="fab fa-github"></i>Github
                </a>
                </div>   

                <div className="item">
                <a  target="_blank"
                    rel="noopener noreferrer"
                    href="https://kevinsims.dev"> 
                    <img src={Portfolio} alt=''/>
                        </a>

                <a className="btn-light"
                     target="_blank"
                     rel="noopener noreferrer"
                     href="https://kevinsims.dev">
                    <i className="fas fa-eye"> </i>Portfolio Project
                </a>
                <a className="btn-dark"
                     target="_blank"
                     rel="noopener noreferrer"
                     href="https://github.com/kevinsims1/portfolio">
                    <i className="fab fa-github"></i>Github
                </a>
                </div>          
            </div>
            </main>
            </>
        )
    }
}

export default Projects;