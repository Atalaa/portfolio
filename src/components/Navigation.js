import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="sidebar">
            <div className="profile">
                <div className="profileContent">
                    <img src="./media/Aata.png" alt="profilePic"/>
                    <h3>Aata-allah Rchidi</h3>
                </div>
            </div>

            <div className="navigation">
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="activeNav">
                            <i className="fas fa-home"></i>
                            <span>Home</span>   
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/skills" activeClassName="activeNav">
                            <i className="fas fa-mountain"></i>
                            <span>Skills</span>   
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/projects" activeClassName="activeNav">
                            <i className="fas fa-images"></i>
                            <span>Projects</span>   
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/contact" activeClassName="activeNav">
                            <i className="fas fa-address-book"></i>
                            <span>Contact</span>   
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="socialNetwork">
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/aata-allah-rchidi/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Atalaa" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-medium"></i>
                        </a>
                    </li>
                </ul>

                <div className="signature">
                    <p>Aata-allah Rchidi - 2020</p>
                </div>
            </div>
        </div>
    );
};

export default Navigation;