import React from 'react';
import Navigation from '../components/Navigation';
import ProjectsList from '../components/project/ProjectsList';


const Project = () => {
    return (
        <div className="projects">
            <Navigation />
            <ProjectsList />
        </div>
    );
};

export default Project;