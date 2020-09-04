import React, { useState } from 'react';
import portfolioData from '../../data/portfolioData';
import Projects from './Projects';

const ProjectsList = () => {

  let radios = [
    {id:1, value: "javascript"},
    {id:2, value: "css"},
    {id:3, value: "react"},
    {id:4, value: "sass"},
    {id:5, value: "swift"},
  ];

  const [radio] = useState(radios);
  const [itemSelected, setItemSelected] = useState('javascript');

  const handleRadio = (e) => {
    setItemSelected(e.target.value);
  }


  return (
    <div className="projectContent">
      <ul className="radioDisplay">
        {
          radio.map(item => {
            return (
              <li key={item.id}>
                <input 
                  type="radio"
                  name="radio"
                  checked={item.value === itemSelected}
                  id={item.value}
                  value={item.value}
                  onChange={handleRadio}
                />
                <label htmlFor={item.value}>{item.value}</label>
              </li>
            )
          })
        }
      </ul>

      <div className="projectsList">
        {
          portfolioData.map(item => {

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