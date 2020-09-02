import React from 'react';


const Projects = (props) => {
  return (
    <div className="projects">
      <div className="icons">
        {props.items.languagesIcons.map(icon => 
          <i className={icon} key={icon}></i>
        )}
      </div>
      <h3>{props.items.name}</h3>
      <img src={props.items.picture} alt=""/>
      <span className="infos">
        <i className="fas fa-plus-circle"></i>
      </span>
    </div>
  );
};

export default Projects;