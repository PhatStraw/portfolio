import React from "react";
import { Route, Switch} from "react-router-dom";
import HomePage from './home'
import AboutMe from "./aboutMe";
import Projects from "./projects";
import Contact from './contact'

function App() {
  return (
    <div className="App" >
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/aboutme" component={AboutMe}/>
          <Route path="/projects" component={Projects}/>
          <Route path='/contact' component={Contact}/>
        </Switch>
    </div>
  );
}

export default App;