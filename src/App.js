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
        {/* <Route exact path="/" component={Home} /> */}
        <Route exact path="/portfolio/" component={Home} />
        <Route exact path="/portfolio/skills" component={Skill} />
        <Route exact path="/portfolio/projects" component={Project} />
        <Route exact path="/portfolio/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;