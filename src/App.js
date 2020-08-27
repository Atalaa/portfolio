import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Contact from './pages/Contact';
import Home from './pages/Home';
import Skill from './pages/Skill';
import NotFound from './pages/NotFound';
import Project from './pages/Project';


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/skills" component={Skill} />
        <Route path="/projects" component={Project} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;