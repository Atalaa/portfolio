import React from 'react';

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h3>Interest</h3>
      <ul>
        <li className="hobby">
          <i className="fas fa-gamepad"></i>
          <span>Video Games</span>
        </li>
        <li className="hobby">
          <i className="fas fa-baby"></i>
          <span>Child Care</span>
        </li>
        <li className="hobby">
          <i className="fas fa-plane-departure"></i>
          <span>Traveling</span>
        </li>
        <li className="hobby">
          <i className="fas fa-running"></i>
          <span>Running</span>
        </li>
        <li className="hobby">
          <i className="fas fa-futbol"></i>
          <span>Soccer</span>
        </li>
        <li className="hobby">
          <i className="fas fa-guitar"></i>
          <span>Guitar</span>
        </li>
      </ul>
    </div>
  );
};

export default Hobbies;