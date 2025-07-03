import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <h1>Welcome to My Portfolio</h1>
            <p>
                I am a passionate web developer with a focus on creating dynamic and responsive web applications.
                Explore my projects, skills, and experiences below.
            </p>
            <div className="home-intro">
                <h2>About Me</h2>
                <p>
                    I am currently pursuing a Bachelor of Technology in Computer Science and Engineering at Presidency University.
                    I have experience in both frontend and backend development, and I enjoy working on innovative projects.
                </p>
            </div>
            <div className="home-projects">
                <h2>Featured Projects</h2>
                <p>Check out some of my work in the Projects section!</p>
            </div>
        </div>
    );
};

export default Home;