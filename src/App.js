import './App.css';
import useScript from './helpers/useScript';
import Form from './components/Form';
import Control from './components/Control';
import addEventListener from './helpers/AddEventListener';
import saveToLocal from './helpers/saveToLocal';
import { useEffect, useState } from 'react';
import loadFromLocal from './helpers/loadFromLocal';

function App() {
  useScript ("https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js");
  useScript ("https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.3.3/html2canvas.min.js");

  const [formData, setFormData] = useState({});
  
  useEffect(() => {
    console.log(formData);
    // loadFromLocal();
    // addEventListener("div[contenteditable]", "input", saveToLocal);
    // addEventListener("input", "input", saveToLocal);
  }, [formData])

  return (
    <div className="App flex-container flex-col">
      <Control />
      <Form formData={formData} setFormData={setFormData} />
    </div>
  );
}

export default App;
