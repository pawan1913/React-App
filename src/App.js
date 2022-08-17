
import Navbar from './Components.js/Navbar';
import './App.css';
// import About from './Components.js/About';
import React from 'react'
import TextForm from './Components.js/TextForm';
import { useState } from 'react';
import Alert from './Components.js/Alert';

// import Alert from './Components.js/Alert';

function App() {

  const[mode,setMode] = useState ('light');

   const[alert,setAlert] = useState (null);

   const showalert = (message, type) => {
    setAlert({
        msg: message,
        type: type
    })
    setTimeout(() =>{
      setAlert(null);
    },1500);
}
 

   const togglemode =() => {
    if(mode==='light'){
      setMode ('dark');
      document.body.style.background = 'black';
      showalert("Dark mode has been enable","success ")
      document.title = "Textutils - Dark Mode"
      // This is use continous change your title of app
      // setInterval(() => {
      //   document.title = "Textutils is Amazing"
      // }, 2000);
      
      // setInterval(() => {
      //   document.title = "Textutils Now"
      // }, 1500);
    }
    else{
      setMode ('light');
      document.body.style.background = 'White';
      showalert("Light mode has been enable","success ")
      document.title = "Textutils - Light Mode"

    }
   }
  return (
   <>
   
{/* <Navbar/> */}
 {/* <div className="container" >
  <About/>
</div> */}
{/* <Alert alert='This is alert' /> */}
<Navbar title ="Textutles" wordpress = "About" mode={mode} togglemode={togglemode} />
<Alert alert={alert}/>

<div className="container">
 <TextForm showalert={showalert} heading = "Enter the Text to Analyze Below "mode={mode} />
 </div>

      </>
  );
}


export default App;