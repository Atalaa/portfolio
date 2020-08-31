import React from 'react';
import Navigation from '../components/Navigation';
import Languages from '../components/skills/Languages';
import Experience from '../components/skills/Experience';
import OtherSkills from '../components/skills/OtherSkills';
import Hobbies from '../components/skills/Hobbies';


const Skill = () => {
    return (
        <div className="skills">
            <Navigation />
            <div className="skillsContent">
                <Languages />
                <Experience />
                <OtherSkills />
                <Hobbies />
            </div>
        </div>
    );
};

export default Skill;