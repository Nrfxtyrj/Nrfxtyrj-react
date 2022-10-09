
import Projects from './projects/Projects.js';
import Aboutme from './aboutme/Aboutme.js';
import './App.css';

const App = () => {

  return (
    <div className='App'>
      <div className='container'><div><h1 className='Name'>Nrfxtyrj</h1></div><div><h1 className='Name-plus'>_</h1></div></div>
            <ul>
            <li className='link'><Aboutme /></li>
            <li className='link'><Projects /> </li>
            <li className='link'><a className='open-bth' href="https://github.com/Nrfxtyrj" target="_blank">__GitHub__</a></li>
          </ul>
          
    </div>
  );
}

export default App;
