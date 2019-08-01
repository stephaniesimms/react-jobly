import React, { Component } from "react";

class JobCard extends Component {

  render() {
    const job = this.props

    return (
      <div className="JobCard card my-3">
        <div className="card-body">
          <p><strong>{job.title}</strong></p>
          <p>Salary: {job.salary} </p>
          <p>Equity: {job.equity} </p>
        </div>
      </div>
    );
  }
}

export default JobCard;