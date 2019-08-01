import React, { Component } from "react";
import "./CompanyCard.css";

class Company extends Component {

  render() {
    const company = this.props

    // TODO: figure out why company logo URLs not working
    // format individual card with company logo, name, description
    return (
      <div className="CompanyCard card">
        <div className="card-body">
          <p className="card-title"><strong>{company.name}</strong></p>
          <p> {company.description} </p>
          <img
            src={company.logo_url}
            alt={company.name} />
        </div>
      </div>
    );
  }

}

export default Company;