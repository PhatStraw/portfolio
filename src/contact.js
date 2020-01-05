import React, { Component } from 'react';

class Contact extends Component {
    render(){
        return(
            <>
            <main id="contact">
            <h1 className="lg-heading">
                Contact <span className="text-secondary">Me</span>
            </h1>
            <h2 className="sm-heading">
            Email or Call me with any questions or opportunities you may have...
            </h2>

            <div className="boxes">
                <div>
                    <span className="text-secondary">Email:</span><a href="mailto:Kevindsims1@gmail.com">Kevindsims1@gmail.com</a>
                </div>
                
                <div>
                    <span className="text-secondary">Phone:</span><a href="tel:+17142710309">714-271-0309</a>
                </div>
            </div>
            </main>
            <footer id="main-footer">
             Copyright &copy; 2020
            </footer>
            </>
        )
    }
}

export default Contact;