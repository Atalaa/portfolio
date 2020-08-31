import React from 'react';

const Experience = () => {
  return (
    <div className="experience">
      <h3>Experience</h3>
      <div className="exp-1">
        <h4>Front-end developer - PenguinPickUp</h4>
        <h5>Jun 2019 - Jul 2020</h5>

        <div className="experienceContent">
          <ul>
            <li>Developed and maintained 70% of Shopify E-commerce websites with JavaScript, Liquid.</li>
            <li>Designed and styled 100% of webpages with HML5, CSS3, Sass.</li>
            <li>Experience with React.</li>
            <li>Familiarity with agile soRware development.</li>
          </ul>
        </div>
      </div>

      <div className="exp-2">
        <h4>Front-end developer - FDM Group</h4>
        <h5>Nov 2018 - May 2019</h5>

        <div className="experienceContent">
          <ul>
            <li>Developed 25% of the front end for internal project using Bootstrap, jQuery, JavaScript in a team of 4 developers.</li>
            <li>Revamped UI of exis`ng website for customer with 100,000+ visitors per month.</li>
          </ul>
        </div>
      </div>        
    </div>
  );
};

export default Experience;