import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';

import Home from './pages/Home';
import Login from './pages/Login';
import ClientSearch from './pages/ClientSearch';
import SignInLanding from './pages/SignInLanding';
import SignInClient from './pages/SignInClient';
import SignInCompany from './pages/SignInCompany';
import FilterCompanies from './pages/FilterCompanies';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signin" component={SignInLanding} />
        <Route path="/signinCompany" component={SignInCompany} />
        <Route path="/signinClient" component={SignInClient} />
        <Route path="/search" component={ClientSearch} />
        <Route path="/filter" component={FilterCompanies} />
      </Switch>
    </BrowserRouter>
  );
}
