import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

import JoblyApi from "./JoblyApi";
import CompanyCard from "./CompanyCard";
import Search from "./Search";
import "./CompanyList.scss";
import UserContext from "./userContext";


class CompanyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: []
    };
    this.filterCompanies = this.filterCompanies.bind(this);
  }

  static contextType = UserContext;

  async componentDidMount() {
    const companies = await JoblyApi.getCompanyList();
    this.setState({ companies });
  }
  /** sets the state for the filtered list of companies based on search terms */
  filterCompanies(companies) {
    this.setState({ companies });
  }

  render() {
    const currUser = this.context;

    let companies = this.state.companies.map(company =>
      <Link key={company.handle} className="CompanyCard" to={`/companies/${company.handle}`}>
        <CompanyCard
          name={company.name}
          description={company.description}
          logo_url={company.logo_url} />
      </Link>
    );

    if (Object.keys(currUser).length !== 0) {
      if (this.state.isLoading) {
        return <p>Loading......</p>
      }
      return (
        <div>
          <Search search="company" filterCo={this.filterCompanies} />
          {companies}
        </div>
      );
    }
    return (
      <Redirect to="/" />
    );
  }
}

export default CompanyList;