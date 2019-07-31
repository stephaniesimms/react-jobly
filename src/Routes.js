import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Companies from './Companies';
import Company from './Company';
import JobList from './JobList';
import LoginForm from './LoginForm';
import ProfileForm from './ProfileForm';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <Home/>} />
        <Route exact path="/companies" render={() => <Companies />} />
        <Route exact path="/company/:company" render={() => <Company/>} />
        <Route exact path="/jobs" render={() => <JobList />} />
        <Route exact path="/login" render={() => <LoginForm />} />
        <Route exact path="/profile" render={() => <ProfileForm/>} />
        <Route exact path="/jobs" render={() => <JobList />} />
      </Switch>

    );
  }
}

export default Routes;