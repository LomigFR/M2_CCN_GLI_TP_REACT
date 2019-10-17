import React, { Component } from "react";

export class Filter extends Component {
  handleChange = ev => {
    this.props.onSelectOwner(ev.target.value);
  };

  render() {
    console.log(this.props);
    return (
      <div className="filterDiv">
        <label className="selectLabel">Filter by name </label>
        <select
          onChange={this.handleChange}
          className="filterMenu"
          id="selectFilter"
        >
          <option className="mainOption" value="">
            -- Choose a name to filter --
          </option>
          {this.props.tableOfOwners.map(owner => {
            return <option key={owner}>{owner}</option>;
          })}
        </select>
      </div>
    );
  }
}

export default Filter;
