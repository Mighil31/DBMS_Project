import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import './App.css';
import Home from './route/Home'
import SalesPerson from './route/SalesPerson';
import Warehouse from './route/Warehouse';
import BuildingMat from './route/BuildingMat';
import Login from './route/Login';
import SalesClerkLanding  from './route/SalesClerkLanding'
import SalesClerkInfo  from './route/SalesClerkInfo'

import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <div >
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/salesperson' component={SalesPerson} />
            <Route exact path='/salesperson' component={SalesPerson} />
            <Route exact path='/warehouse' component={Warehouse} />
            <Route exact path='/buildingmat' component={BuildingMat} />
            <Route exact path='/salesclerk' component={SalesClerkLanding} />
            <Route exact path='/salesclerk/info' component={SalesClerkInfo} />
            <Route exact path='/login' component={Login} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
