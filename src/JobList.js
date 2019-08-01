import React, { Component } from "react";
import JoblyApi from "./JoblyApi";
import Search from "./Search";
import JobCard from "./JobCard";

class JobList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: []
    };
    this.filterJobs = this.filterJobs.bind(this);
  }

  async componentDidMount() {
    const jobs = await JoblyApi.getJobList();
    this.setState({ jobs });
  }

  /** sets the state for the filtered list of companies based on search terms */
  filterJobs(jobs) {
    
    this.setState({ jobs });
  }

  render() {
    let jobs = this.state.jobs.map(job =>
        <JobCard
          key={job.id}
          title={job.title}
          salary={job.salary}
          equity={job.equity}
          />
    );
    return (
      <div>
        <Search search="job" searchJobs={this.filterJobs} />
        {jobs}
      </div>
    );
  }
}

export default JobList;
