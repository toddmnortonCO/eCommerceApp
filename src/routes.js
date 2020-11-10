import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from './Components/Dashboard/Dashboard.js';
import Landing from './Components/Landing/Landing';
import CustomerService from './Components/CustomerService/CustomerService'
import OrderHistory from './Components/OrderHistory/OrderHistory'


export default (    
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/Dashboard" component={Dashboard} />
    <Route path="/CustomerService" component={CustomerService} />
    <Route path='/OrderHistory' component={OrderHistory} />
  </Switch>
);
