import React from 'react';
import './App.css';
import Header from './components/Header';
// import Footer from './components/Footer';
import About from './components/About';
import Experience from './components/Experience';
// import Projects from './components/Projects';
// import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Experience />
      </main>
    </div>
  );
}

export default App;
