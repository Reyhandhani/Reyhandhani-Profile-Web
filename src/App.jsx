import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { profileData } from './data/profileData';
import { useScrollReveal } from './hooks/useScrollReveal';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  useScrollReveal();

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <Navbar
        name={profileData.name}
        darkMode={darkMode}
        toggleDark={() => setDarkMode((d) => !d)}
      />
      <main>
        <Hero data={profileData} />
        <About data={profileData.about} />
        <Skills skills={profileData.skills} />
        <Experience
          experience={profileData.experience}
          education={profileData.education}
        />
        <Projects projects={profileData.projects} />
        <Certifications certifications={profileData.certifications} />
        <Contact data={profileData} />
      </main>
      <Footer name={profileData.name} social={profileData.social} />
    </div>
  );
}

export default App;
