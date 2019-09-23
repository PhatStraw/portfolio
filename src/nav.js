import React, {Component} from "react";
import { Link } from 'react-router-dom';

class Nav extends Component {

    constructor(props){
        super(props)
        this.state={
            isOpen: false
        }
    }

    toggleMenu = (e) =>{
        e.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render(){
        const {isOpen} = this.state;

        return(
            <header>
            <div className={`menu-btn ${isOpen ? 'is-open' : ''}`}  onClick={e=>this.toggleMenu(e)}>
                <div className="btn-line"></div>
                <div className="btn-line"></div>
                <div className="btn-line"></div>
            </div>

            <nav className={`menu ${isOpen ? 'is-open' : ''}`} onClick={e=>this.toggleMenu(e)}>
                <div className={`menu-branding ${isOpen ? 'is-open' : ''}`}>
                    <div className="portrait"></div>
                </div>
                <ul className={`menu-nav ${isOpen ? 'is-open' : ''}`}>
                <li className={`nav-item current ${isOpen ? 'is-open' : ''}`}>
                    <Link exact to="/" className="nav-link">
                        Home
                    </Link>
                </li>
                <li className={`nav-item ${isOpen ? 'is-open' : ''}`}>
                    <Link to="/aboutme" className="nav-link">
                        About Me
                    </Link>
                </li>
                <li className={`nav-item ${isOpen ? 'is-open' : ''}`}>
                    <Link to="/projects" className="nav-link">
                        Projects
                    </Link>
                </li>
                <li className={`nav-item ${isOpen ? 'is-open' : ''}`}>
                    <Link to="/contact" className="nav-link">
                        How To Reach Me
                    </Link>
                </li>
                </ul>
            </nav>
            </header>  
        )
    }
}
 export default Nav