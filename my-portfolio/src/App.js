import React from 'react';
import './App.css';
import Navbar from './navbar';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';
import Experience from './Experience';
import WelcomeAnimation from './WelcomeAnimation';

function App() {
  return (
    <div className="App">
      <Navbar />
      <WelcomeAnimation />
      <Home />
      <About />
      <Projects />
      <Resume />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;