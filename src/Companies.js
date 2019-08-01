import React, { Component } from "react";
import { Link } from "react-router-dom";

import JoblyApi from "./JoblyApi";
import CompanyCard from "./CompanyCard";
import Search from "./Search";
import "./Companies.scss";

class Companies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: []
    };
    this.filterCompanies = this.filterCompanies.bind(this);
  }

  async componentDidMount() {
    const companies = await JoblyApi.getCompanyList();
    this.setState({ companies });
  }
  /** sets the state for the filtered list of companies based on search terms */
  filterCompanies(companies) {
    this.setState({
      companies: companies
    });

  }

  render() {
    let companies = this.state.companies.map(company =>
      <Link key={company.handle} className="CompanyCard" to={`/companies/${company.handle}`}>
        <CompanyCard
          name={company.name}
          description={company.description}
          logo_url={company.logo_url} />
      </Link>
    );

    return (
      <div>
        <Search search="company" filterCo={this.filterCompanies} />
        {companies}
      </div>
    );
  }

}

export default Companies;