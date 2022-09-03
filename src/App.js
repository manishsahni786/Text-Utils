import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About'; 
import React, { useState } from 'react'
import Alert from './components/Alert';
import Home from './pages/Home'

import {
  Route,
  Routes
  
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert =(message, type)=>
  {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
    
  }
  const toogleMode = ()=>{  
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#092e64';
      showAlert("Dark mode has been enabled","success");
      document.title='TextUtils -Dark Mode';
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      document.title='TextUtils -Light Mode';
    }
  }
   return (
  <>
    <Navbar title="TextUtils" aboutText="About" mode={mode} toogleMode={toogleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
      <Routes>
          <Route  path="/home" element={<Home />} />
          <Route  path="/home/about" element={<About />} />
          <Route  path="/home/textutils" element={<TextForm heading="Enter the text to analize" mode={mode}/>} />
      </Routes>
    </div>
  </>
  );
}

export default App;
