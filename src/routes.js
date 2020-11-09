import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from './Components/Dashboard/Dashboard.js';
import Landing from '../src/Components/Landing/Landing';
import CustomerService from './Components/CustomerService/CustomerService.js';
import Checkout from '../src/Components/Checkout/Checkout';


export default (    
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/Dashboard" component={Dashboard} />
    <Route path="/CustomerService" component={CustomerService} />
    <Route path='/Checkout' component={Checkout} />
  </Switch>
);
