import React, { Component } from "react";

class JobCard extends Component {

  render() {
    let job = this.props
    
    return (
      <div className="JobCard">
        <p><strong>{job.title}</strong></p>
        <p>Salary: {job.salary} </p>
        <p>Equity: {job.equity} </p>
      </div>
    );
  }
}

export default JobCard;