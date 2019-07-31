import React, { Component } from "react";
import JoblyApi from "./JoblyApi";
import CompanyCard from "./CompanyCard";
import Search from "./Search";

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
    console.log(companies)
    this.setState({
      companies: companies
    });

  }

  render() {
    //TODO: add search and return it 

    let companies = this.state.companies.map(company =>
      <CompanyCard
        key={company.name}
        name={company.name}
        description={company.description}
        logo={company.logo_url} />
    )
    return (
      <div>
        <Search filterCo={this.filterCompanies} />
        {companies}
      </div>
    );
  }

}

export default Companies;