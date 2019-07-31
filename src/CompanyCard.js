import React, { Component } from "react";
import "./CompanyCard.css";

class Company extends Component {

  render() {
    let company = this.props

    // TODO: figure out why company logo URLs not working
    // format individual card with company logo, name, description
    return (
      <div className="CompanyCard">
        <p><strong>{company.name}</strong></p>
        <p> {company.description} </p>
        <img
          src={company.logo}
          alt={company.name} />
      </div>
    );
  }

}

export default Company;