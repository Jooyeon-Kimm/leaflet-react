import logo from './logo.svg'; // svg image file
import './App.css';
import { FaMapMarked } from "react-icons/fa"; // icon
import MapView from './MapView';
import Hello from './01_Hello_Component/Hello';
import MyClock from './02_MyClock/MyClock';

function App() {
  return (
    <div className="App"
    style={{height: '100vh'}}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <Hello/>
       <MyClock/>
      </header>
      <MapView/>
    </div>
    // <div className="App" style={{height: '100vh'}}><MapView/></div>
  );
}

export default App; // 외부에서 import할 수 있도록,
