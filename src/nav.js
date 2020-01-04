import React, {Component} from "react";
import { Link } from 'react-router-dom';
import Contact from './contact.js'

class Nav extends Component {

    // constructor(props){
    //     super(props)
    //     this.state={
    //         isOpen: false
    //     }
    // }

    // toggleMenu = (e) =>{
    //     e.preventDefault()
    //     this.setState({
    //         isOpen: !this.state.isOpen
    //     })
    // }

    render(){
        return(  
            <>
             {/* <div className={`menu-btn ${isOpen ? 'is-open' : ''}`}  onClick={e=>this.toggleMenu(e)}>
                <div className="btn-line"></div>
                <div className="btn-line"></div>
                <div className="btn-line"></div>
            </div> */}
            <nav className='menu'>
                <ul className='menu-nav'>
                <li className='nav-item'>
                    <a href="#contact" className="nav-link">
                        How To Reach Me
                    </a>
                </li>
                <li className='nav-item'>
                    <a href="#Projects" className="nav-link">
                        Projects
                    </a>
                </li>
                <li className='nav-item'>
                    <a href="#about" className="nav-link">
                        About Me
                    </a>
                </li>
                <li className='nav-item'>
                    <a exact href="#home" className="nav-link">
                        Home
                    </a>
                </li>
                </ul>
            </nav>
            </>
        )
    }
}
 export default Nav