import React, { Component } from "react";
import JoblyApi from "./JoblyApi";
import JobCard from "./JobCard"

class Company extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      companyName: '',
      companyDescription: '',
      isLoading: true
    };
  }

  async componentDidMount() {
    let companyHandle = this.props.match.params.company;
    const response = await JoblyApi.getCompany(companyHandle);
    console.log(response);
    this.setState({
      jobs: response.jobs,
      companyName: response.name,
      companyDescription: response.description,
      isLoading: false
    });
  }


  // render company data at top of page with job cards below
  render() {
    if (this.state.isLoading) {
      return <p>Loading......</p>
    }

    const jobs = this.state.jobs.map(job =>
      <JobCard
        className="card"
        key={job.id}
        title={job.title}
        salary={job.salary}
        equity={job.equity}
      />
    );

    return (
      <div>
        <div>
          <p><strong>{this.state.companyName}</strong></p>
          <p>{this.state.companyDescription}</p>
        </div>
        <div>
          {jobs}
        </div>
      </div>
    )
  }
}

export default Company;