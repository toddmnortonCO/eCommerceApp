import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from './Components/Dashboard/Dashboard.js';
import Landing from './Components/Landing/Landing';
// import CustomerService from './Components/CustomerService/CustomerServiceForm';
import OrderHistory from './Components/OrderHistory/OrderHistory';
import Checkout from './Components/Checkout/Checkout';


export default (    
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/Dashboard" component={Dashboard} />
    {/* <Route path="/CustomerService" component={CustomerService} /> */}
    <Route path="/Checkout" component={Checkout} />
    <Route path='/OrderHistory' component={OrderHistory} />
  </Switch>
);
