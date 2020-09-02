import React from 'react';
import portfolioData from '../../data/portfolioData';
import Projects from './Projects';

const ProjectsList = () => {
  return (
    <div className="projectContent">
      <ul className="radioDisplay">

      </ul>

      <div className="projectsList">
        {portfolioData.map(item => {

          return (
            <Projects 
              key={item.id}
              items={item}
            />
          )})
        }
      </div>      
    </div>
  );
};

export default ProjectsList;