import React from 'react';
import NavbarComp from './Components/Fungsi/NavbarComp';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from './Components/Fungsi/HomePage';
import About from './Components/Fungsi/About';

function App() {
  return (
    <BrowserRouter>
         <NavbarComp/>
         <Switch>
           <Route exact path="/" component={HomePage}/>
           <Route exact path="/about" component={About}/>
         </Switch>
    </BrowserRouter>
    
  );
}

export default App;
