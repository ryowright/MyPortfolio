import React, { useEffect } from 'react';
import Header from  './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Resume />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
