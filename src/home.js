import React, { Component } from 'react';
import Nav from "./nav"

class HomePage extends Component {
    render(){
        return(
            <>
             <Nav/>
            <main id="home">
            <h1 className="lg-heading">
                Kevin <span className="text-secondary">Sims</span>
            </h1>
            <h2 className="sm-heading">
                Full Stack Engineer, Problem Solver, Human
            </h2>
            <div className="icons">
                <a href="https://twitter.com/KevSmss">
                    <i className="fab fa-twitter fa-2x"></i>
                </a>
                <a href="https://www.linkedin.com/in/kevin-sims/">
                    <i className="fab fa-linkedin fa-2x"></i>
                </a>
                <a href="https://github.com/kevinsims1">
                    <i className="fab fa-github fa-2x"></i>
                </a>
            </div>
            </main>
            </>
        )
    }
}

export default HomePage;