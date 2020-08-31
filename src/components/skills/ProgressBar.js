import React from 'react';

const ProgressBar = (props) => {
  console.log('progressbar',props);

  return (
    <div className={props.className}>
      <h3>{props.title}</h3>
      <div className="years">
        <span>Years of experience</span>
        <span>1 year</span>
        <span>2 years</span>
      </div>

      <div>
        {
          props.languages.map(item => {
            let yearOfExp = 2;
            let progressBar = item.exp / yearOfExp * 100 + '%';
            
            return(
              <div key={item.id} className="languagesList">
                <ul>
                  <li>{item.value}</li>
                </ul>
                <div className="progressBar" style={{width:progressBar}}></div>
              </div>
            )
          }) 
        }
      </div>

    </div>
  );
};

export default ProgressBar;