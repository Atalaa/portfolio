import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';


const Contact = () => {


    return (
        <div className="contact">
            <Navigation />
            <div className="contactContent">
                <div className="header"></div>
                <div className="contactBox">
                    <h1>Contact me</h1>
                    <ul>
                        <li>
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Toronto</span>
                        </li>

                        <li>
                            <i className="fas fa-mobile-alt"></i>
                            <CopyToClipboard text="4379838081">
                                <span className="clickInput"
                                    onClick={() => { alert('Number copied!'); }}>
                                    437 983 8081
                                </span>
                            </CopyToClipboard>
                        </li>

                        <li>
                            <i className="far fa-envelope"></i>
                            <CopyToClipboard text="atala.rchidi@gmail.com">
                                <span className="clickInput"
                                    onClick={() => { alert('Email copied!'); }}>
                                    atala.rchidi@gmail.com
                                </span>
                            </CopyToClipboard>
                        </li>
                    </ul>
                </div>

                <div className="socialNetwork">
                    <ul>
                        <li>
                            <a href="https://www.linkedin.com/in/aata-allah-rchidi/" target="_blank" rel="noopener noreferrer">
                                <h4>LinkedIn</h4>
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/Atalaa" target="_blank" rel="noopener noreferrer">
                                <h4>Github</h4>
                                <i className="fab fa-github"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/AataRchidi" target="_blank" rel="noopener noreferrer">
                                <h4>Twitter</h4>
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://medium.com/@Atalaa" target="_blank" rel="noopener noreferrer">
                                <h4>Medium</h4>
                                <i className="fab fa-medium"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;