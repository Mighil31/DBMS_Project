import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import './App.css';
import Login from './route/Login';

import Home from './route/Home'

import SalesPerson from './route/salesperson/SalesPersonLanding';

import SalesClerkLanding  from './route/SalesClerkLanding'
import SalesClerkInfo  from './route/SalesClerkInfo';

import Warehouse from './route/Warehouse/Warehouse';
import WarehouseInventory from './route/Warehouse/WarehouseInventory';
import BuildingMat from './route/Warehouse/category/BuildingMat';
import Electrical from './route/Warehouse/category/Electrical';
import Pipes from './route/Warehouse/category/Pipes';

import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <div >
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/' component={Home} />

            <Route exact path='/salesperson' component={SalesPerson} />

            <Route exact path='/warehouse' component={Warehouse} />
            <Route exact path='/warehouse/inventory' component={WarehouseInventory} />
            <Route exact path='/warehouse/inventory/buildingmat' component={BuildingMat} />
            <Route exact path='/warehouse/inventory/electrical' component={Electrical} />
            <Route exact path='/warehouse/inventory/pipes' component={Pipes} />

            {/* <Route exact path='/buildingmat' component={BuildingMat} /> */}

            <Route exact path='/salesclerk' component={SalesClerkLanding} />
            <Route exact path='/salesclerk/info' component={SalesClerkInfo} />
            
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
