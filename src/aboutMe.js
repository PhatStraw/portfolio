import React, { Component } from 'react';

class AboutMe extends Component {
    render(){
        return(
            <>
            <main id="about">
            <h1 className="lg-heading">
                About <span className="text-secondary">Me</span>
            </h1>
            <h2 className="sm-heading">
               Let me tell you a few things
            </h2>

            <div className="about-info">
                <div className="aboutmeportrait bio-image"></div>
              
              <div className="bio">
                  <h3 className="text-secondary">Bio</h3>
                  <p>
                    Someone trying to make his world better one day at a time. Finishing up at Lambda School Academy of Computer Science and Web Development. Working on becoming a Full Stack Engineer focused on education, team building environments, and personal mastery.
                  </p>
              </div>

            </div>
            </main>
            </>
        )
    }
}

export default AboutMe;