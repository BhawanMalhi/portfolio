import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import './app.scss';
import { useState } from 'react';
import Menu from './components/Menu/Menu';

function App() {
   const[menuState,setMenuState] = useState(false);
  return (
    <div className="app">
     <Header menuState={menuState} setMenuState={setMenuState}/>
     <Menu menuState={menuState} setMenuState={setMenuState} />
     <div className="sections">
      <Intro />
      <Portfolio/>
      <About />
      <Skills />
      <Contact />
     </div>
    </div>
  );
}

export default App;
