
 import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";  
  
 function App() {
  const [mode, setMode] = useState('light'); //whether mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
  
    setTimeout(() => { 
      setAlert(null);
    }, 1000);
  }
const removeBodyClasses=()=>{
  document.body.classList.remove('bg-light')
  document.body.classList.remove('bg-danger')
  document.body.classList.remove('bg-success')
  document.body.classList.remove('bg-warning')

}
  const toggleMode =(cls)=>{
    removeBodyClasses();
    console.log(cls)
    document.body.classList.add('bg-'+cls)
    if (mode==='light') {
      setMode ('dark');
      document.body.style.background ='#6f42c1';
      showAlert("Dark mood is enabled", "success");
     

    }
    else  {
      setMode ('light');
      document.body.style.background = 'white';
      showAlert("Light mood is enabled", "success");
    }
  }
   return (
     <>
       {/* < Navbar title= "Textutilse" aboutText="about utlise" /> */}
         {/* <Navbar />  */}


 <Router>
   < Navbar title= "Textutilse" mode={mode}  toggleMode={toggleMode} />
   <Alert alert={alert}/>

<div className="container my-3" >

<Switch>
          <Route exact path="/">

          <TextForm showAlert={showAlert} heading="Enter the text analyze below" mode={mode} />
            </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
          
        
</div>
</Router>
      
     
    </>

  )



  
 }

 export default App;
