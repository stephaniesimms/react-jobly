import React, { Component } from "react";
import JoblyApi from "./JoblyApi";
import JobCard from "./JobCard";
import UserContext from "./userContext";
import {Redirect} from "react-router-dom";

class Company extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      companyName: "",
      companyDescription: "",
      isLoading: true
    };
  }

  static contextType = UserContext;

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
    const currUser = this.context;

    const jobs = this.state.jobs.map(job =>
      <JobCard
        key={job.id}
        title={job.title}
        salary={job.salary}
        equity={job.equity}
      />
    );
    if (Object.keys(currUser).length !== 0) {
      if (this.state.isLoading) {
        return <p>Loading......</p>
      }
    return (
      <div>
        <div className="my-5">
          <h5>{this.state.companyName}</h5>
          <p>{this.state.companyDescription}</p>
        </div>
        <div>
          {jobs}
        </div>
      </div>
    )
  }
    return (
      <Redirect to="/" />
    );
}

}

export default Company;