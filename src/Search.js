import React, { Component } from "react";
import JoblyApi from "./JoblyApi";

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

  async handleSubmit(e) {
    e.preventDefault();
    const response = await JoblyApi.getCompanyList(this.state);
    this.props.filterCo(response);
  }


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
    );
  }
}

export default Search;