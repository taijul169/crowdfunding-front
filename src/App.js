import React, { createContext,useReducer } from 'react';
import './App.css'
import Home from '../src/components/pages/Home';
import Signup from '../src/components/pages/Signup';
import Signin from '../src/components/pages/Signin';
import Dashboard from '../src/components/pages/Dashboard';
import{Route, Switch} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../node_modules/owl.carousel/dist/assets/owl.theme.default.css';
import '../node_modules/owl.carousel/dist/assets/owl.theme.default.css';

function App() {
  
  return (
    <Switch>
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route exact path='/signup'>
        <Signup/>
      </Route>
      <Route exact path='/signin'>
        <Signin/>
      </Route>
      <Route exact path='/dashboard'>
        <Dashboard/>
      </Route>
    
    {/* <Route>
      <Errorpage />
    </Route> */}
  </Switch>
  )
}

export default App;
