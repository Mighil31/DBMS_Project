import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import './App.css';
import Login from './route/Login';

import Home from './route/Home';
import { LOGOUT } from './actions/types';
import PrivateRoute from './components/routing/PrivateRoute';

import SalesPerson from './route/salesperson/SalesPersonLanding';
import SalesPersonInventory from './route/salesperson/SalesPersonInventory';
import SalesPersonCustomer from './route/salesperson/SalesPersonCust';

import SalesClerkLanding  from './route/SalesClerkLanding'
import SalesClerkInfo  from './route/SalesClerkInfo';

import Warehouse from './route/Warehouse/Warehouse';
import WarehouseInventory from './route/Warehouse/WarehouseInventory';
import BuildingMat from './route/Warehouse/category/BuildingMat';
import Electrical from './route/Warehouse/category/Electrical';
import Pipes from './route/Warehouse/category/Pipes';

import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth'
import setAuthToken from './utils/setAuthToken'


function App() {

  useEffect(() => {
    // check for token in LS
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener('storage', () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);

  return (
    <div >
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/' component={Home} />

            <PrivateRoute exact path='/salesperson' component={SalesPerson} />
            <PrivateRoute exact path='/salesperson/inventory' component={SalesPersonInventory} />
            <PrivateRoute exact path='/salesperson/customer' component={SalesPersonCustomer} />
            
            <PrivateRoute exact path='/warehouse' component={Warehouse} />
            <PrivateRoute exact path='/warehouse/inventory' component={WarehouseInventory} />
            <PrivateRoute exact path='/warehouse/inventory/buildingmat' component={BuildingMat} />
            <PrivateRoute exact path='/warehouse/inventory/electrical' component={Electrical} />
            <PrivateRoute exact path='/warehouse/inventory/pipes' component={Pipes} />

            {/* <Route exact path='/buildingmat' component={BuildingMat} /> */}

            <PrivateRoute exact path='/salesclerk' component={SalesClerkLanding} />
            <PrivateRoute exact path='/salesclerk/info' component={SalesClerkInfo} />
            
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
