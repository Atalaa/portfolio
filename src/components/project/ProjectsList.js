import React, { useState } from 'react';
import portfolioData from '../../data/portfolioData';
import Projects from './Projects';

const ProjectsList = () => {

  let radios = [
    {id:1, value: "javascript"},
    {id:2, value: "css3"},
    {id:3, value: "react"},
    {id:4, value: "sass"},
    {id:5, value: "swift"},
  ];

  const [radio] = useState(radios); //fixed state
  const [itemSelected, setItemSelected] = useState('javascript'); //dynamic state

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
                  value={item.value}
                  id={item.value}
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
          portfolioData
          .filter(resultItem => resultItem.languages.includes(itemSelected))
          .map(item => {

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