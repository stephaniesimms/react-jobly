import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import CompanyList from './CompanyList';
import Company from './Company';
import JobList from './JobList';
import LoginForm from './LoginForm';
import ProfileForm from './ProfileForm';

class Routes extends Component {

  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/companies" render={() => <CompanyList />} />
        <Route exact path="/companies/:company" render={rtProps => <Company {...rtProps} />} />
        <Route exact path="/jobs" render={() => <JobList />} />
        <Route exact path="/login" render={rtProps => <LoginForm {...rtProps}
          authenticate={this.props.authenticate}
          register={this.props.register} />} />
        <Route exact path="/profile" render={() => <ProfileForm />} />
      </Switch>
    );
  }
}

export default Routes;