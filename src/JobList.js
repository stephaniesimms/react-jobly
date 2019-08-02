import React, { Component } from "react";
import JoblyApi from "./JoblyApi";
import Search from "./Search";
import JobCard from "./JobCard";
import UserContext from "./userContext";
import { Redirect } from "react-router-dom";

class JobList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: []
    };
    this.filterJobs = this.filterJobs.bind(this);
  }
  static contextType = UserContext;

  async componentDidMount() {
    const jobs = await JoblyApi.getJobList();
    this.setState({ jobs });
  }

  /** sets the state for the filtered list of companies based on search terms */
  filterJobs(jobs) {
    this.setState({ jobs });
  }

  render() {
    const currUser = this.context;

    let jobs = this.state.jobs.map(job =>
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
          <Search search="job" searchJobs={this.filterJobs} />
          {jobs}
        </div>
      );
    }
    return (
      <Redirect to="/" />
    );
  }
}

export default JobList;
