import React from 'react';
import Navigation from '../components/Navigation';


const Home = () => {
    return (
        <div className="home">
            <Navigation />   
            <div className="homeContent">
                <div className="content">
                    <h1>Aata Rchidi</h1>
                    <h2>Front-End Developer</h2>
                    <div className="resume">
                        <a href="../../public/media/Aata-allah_resume.pdf" target="_blank">View resume</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;