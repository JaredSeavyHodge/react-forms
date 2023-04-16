import './App.css';
import Control from './components/Control';
import useScript from './helpers/useScript';
import Canvas from './components/Canvas';
import addEventListener from './helpers/AddEventListener';
import saveToLocal from './helpers/saveToLocal';
import { useEffect } from 'react';
import loadFromLocal from './helpers/loadFromLocal';

function App() {
  useScript ("https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js");
  useScript ("https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.3.3/html2canvas.min.js");

  
  useEffect(() => {
    loadFromLocal();
    addEventListener("div[contenteditable]", "input", saveToLocal);
    addEventListener("input", "input", saveToLocal);
  }, [])

  return (
    <div className="App flex-container flex-col">
      <Control />
      <Canvas />
    </div>
  );
}

export default App;
