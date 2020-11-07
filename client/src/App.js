import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import './App.css';
import Home from './route/Home'
import SalesPerson from './route/SalesPerson';
import Warehouse from './route/Warehouse';
import BuildingMat from './route/BuildingMat';
import Login from './route/Login';

function App() {
  return (
    <div >
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/salesperson' component={SalesPerson} />
          <Route exact path='/warehouse' component={Warehouse} />
          <Route exact path='/buildingmat' component={BuildingMat} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
