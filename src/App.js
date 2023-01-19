import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';
import React, { useState } from 'react'
import Alert from './Alert';
import About from './About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState();
  const showAlert = (message, type) => {
    setalert(
      {
        msg: message,
        type: type
      }
    )
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#13386e'
      showAlert("Dark mode is enabled", "success");
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("light mode is enabled", "success");
    }
  }
  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">

          <Routes>
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyse below" mode={mode} />} />
            <Route path="/About" element={<About />} />  
          </Routes>

        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
