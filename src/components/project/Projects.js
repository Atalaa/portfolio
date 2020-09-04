import React, { useState } from 'react';


const Projects = (props) => {

  const [showInfo, setShowInfo] = useState(false);

  const handleInfo = () => {
     return setShowInfo(!showInfo);
  }

  return (
    <div className="projects">
      <div className="icons">
        {props.items.languagesIcons.map(icon => 
          <i className={icon} key={icon}></i>
        )}
      </div>
      <h3>{props.items.name}</h3>
        <img src={props.items.picture} alt="img" onClick={handleInfo}/>
      <span className="infos">
        <i className="fas fa-info-circle" onClick={handleInfo}></i>
      </span>

      { //pop-up 
        showInfo && (
          <div className="showInfos">
            <div className="infosContent">
              <div className="head">
                <h2>{props.items.name}</h2>

                {
                  props.items.demo && (
                    <div className="demoCode">
                      <a href={props.items.demo} rel="noopener noreferrer" className="button" target="_blank">View demo</a>
                    </div>
                  )
                }

                <div className="sourceCode">
                  <a href={props.items.source} rel="noopener noreferrer" className="button" target="_blank">Source code</a>
                </div>
              </div>

              <div className="text">{props.items.info}</div>

              <div className="button return" onClick={handleInfo}>Return</div>
            </div>
          </div>
        )
      }

    </div>
  );
};

export default Projects;