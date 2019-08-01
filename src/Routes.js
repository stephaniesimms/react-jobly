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

    // const company = props => {
    //   let name = props.match.params.handle;
    //   let currentCompany = this.props..find(
    //     company => company.name.toLowerCase() === company.toLowerCase()
    //   );
    //   return <DogDetails {...props} dog={currentDog} />;
    // };

    return (
      <Switch>
        <Route exact path="/" render={() => <Home/>} />
        <Route exact path="/companies" render={() => <CompanyList />} />
        <Route exact path="/companies/:company" render={rtProps => <Company {...rtProps} />} />
        <Route exact path="/jobs" render={() => <JobList />} />
        <Route exact path="/login" render={() => <LoginForm />} />
        <Route exact path="/profile" render={() => <ProfileForm/>} />
        <Route exact path="/jobs" render={() => <JobList />} />
      </Switch>

    );
  }
}

export default Routes;