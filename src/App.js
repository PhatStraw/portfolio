import React from "react";
import { Route, Switch} from "react-router-dom";
import HomePage from './home'
import AboutMe from "./aboutMe";
import Projects from "./projects";
import Contact from './contact'
import Nav from "./nav"

function App() {
  return (
    <div className="App" >
        <Nav/>
        <HomePage />
        <AboutMe />
        <Projects />
        <Contact />
        {/* <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/aboutme" component={AboutMe}/>
          <Route path="/projects" component={Projects}/>
          <Route path='/contact' component={Contact}/>
        </Switch> */}
    </div>
  );
}

export default App;