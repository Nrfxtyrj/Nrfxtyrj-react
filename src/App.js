
import Projects from './projects/Projects.js';
import About from './aboutme/Aboutme.js';
import React, {useState } from "react";
import './App.css';

const App = () => {

  

  const [modalActive, setModalActive] = useState(true);
  return (
    <div className='App'>
      <div className='container'><div><h1 className='Name'>Nrfxtyrj</h1></div><div><h1 className='Name-plus'>_</h1></div></div>
            <ul>
            <li><button className='open-bth' onClick={() => setModalActive(true)}>обо мне</button></li>
            <li><button className='open-bth' onClick={() => setModalActive(true)}>мои проекты</button>  </li>
            <li><a className='open-bth' href="https://github.com/Nrfxtyrj" target="_blank">__GitHub__</a></li>
          </ul>
          <Projects active={modalActive}
          setActive={setModalActive} />
    </div>
  );
}

export default App;
