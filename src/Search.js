import React, { Component } from "react";
import JoblyApi from "./JoblyApi";
// import Button from "react-bootstrap/Button";
// import InputGroup from "react-bootstrap/InputGroup";
// import Form from "react-bootstrap/Form";
// import FormControl from "react-bootstrap/FormControl";



class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  // TODO: pass data up to parent component and make api calls there
  async handleSubmit(e) {
    e.preventDefault();
    let response;
    if (this.props.search === "job") {
      response = await JoblyApi.getJobList(this.state);
      this.props.searchJobs(response);
    }
    else {
      response = await JoblyApi.getCompanyList(this.state);
      this.props.filterCo(response);
    }
  }

  // FIXME: normalize CSS styling to remove React Bootstrap here and use regular Bootstrap
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="search"
            className="form-control"
            value={this.state.search}
            onChange={this.handleChange}
          />
          <button
            type="submit"
            className="btn btn-primary">
            Submit
        </button>
        </form>
      </div>
      // <div>
      //   <Form onSubmit={this.handleSubmit}>
      //     <InputGroup className="my-5">
      //       <FormControl
      //         name="search"
      //         value={this.state.search}
      //         placeholder="Enter search term"
      //         aria-label="Enter search term"
      //       />
      //       <InputGroup.Append>
      //         <Button variant="info">Submit</Button>
      //       </InputGroup.Append>
      //     </InputGroup>
      //   </Form>
      // </div>
    );
  }
}

export default Search;

