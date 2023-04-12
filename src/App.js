import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Control from './components/Control';
import useScript from './components/useScript';
import Canvas from './components/Canvas';

function App() {
  useScript ("https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js");
  useScript ("https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.3.3/html2canvas.min.js");
  return (
    <div className="App flex-container flex-col">
      <Control />
      <Canvas />
    </div>
  );
}

export default App;
