import React, { useState } from 'react';
import ProgressBar from './ProgressBar';


const Languages = () => {

  let languages = [
    {id:1, value: "Javascript", exp:1.9},
    {id:2, value: "Java", exp:1.5},
    {id:3, value: "MongoDB", exp:0.5},
    {id:4, value: "Css", exp:1.8}
  ];
  let frameworks = [
    {id:1, value: "React", exp:1.2},
    {id:2, value: "Bootstrap", exp:1},
    {id:3, value: "Sass", exp:1.1},
    {id:5, value: " Material UI", exp:.8}
  ];



  const [language] = useState(languages);
  const [framework] = useState(frameworks);
  
  return (
    <div className="languagesNframeworks">  
      <ProgressBar 
        languages={language}
        className="languagesDisplay"
        title="languages"
      />
      <ProgressBar 
        languages={framework}
        className="frameworksDisplay"
        title="frameworks & libraries"
      />
    </div>
  );
};

export default Languages;