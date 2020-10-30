import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Skill from './pages/Skill';
import NotFound from './pages/NotFound';
import Project from './pages/Project';


const App = () => {
  return (
    <HashRouter basename='/'>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/skills" component={Skill} />
        <Route exact path="/projects" component={Project} />
        <Route exact path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </HashRouter>
  );
};

export default App;