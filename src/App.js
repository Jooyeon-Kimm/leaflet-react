import logo from './logo.svg'; // svg image file
import './App.css';
import { FaMapMarked } from "react-icons/fa"; // icon
import MapView from './MapView';


function App() {
  return (
    <div className="App"
    style={{height: '100vh'}}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='bg-slate-500'>
          Edit <code>src/App.js</code> and save to reload.<FaMapMarked />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <MapView/>
    </div>
    // <div className="App" style={{height: '100vh'}}><MapView/></div>
  );
}

export default App; // 외부에서 import할 수 있도록,
