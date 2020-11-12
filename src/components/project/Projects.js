import React from 'react';


const Projects = (props) => {
  return (
    <div className="projects"> {/*content*/}
    
      <div className="icons">
        {props.items.languagesIcons.map(icon => 
          <i className={icon} key={icon}></i> 
        )}
      </div>

      <h3>{props.items.name}</h3>

      <div className="card">{/*photo*/}

        <img className="card__face card__face--front" src={props.items.picture} alt="imagePortfolio" />

        <div className="card__face card__face--back">
          <div className="head">
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

        </div>
      </div>

    </div>
  );
};

export default Projects;