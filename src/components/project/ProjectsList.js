import React from 'react';
import portfolioData from '../../data/portfolioData';
import Projects from './Projects';

const ProjectsList = () => {
  return (
    <div className="projectsContent">
      <ul className="radioDisplay">

      </ul>

      <div className="proj">
        {portfolioData.map(item => {
            
          return (
            <Projects 
              key={item.id}
              item={item}
            />
          )})
        }
      </div>      
    </div>
  );
};

export default ProjectsList;