import React, { Component } from "react";

export class Filter extends Component {
  /*loadNames = () => {
    this.props.tableOfOwners.map((owner, i) => {
      <option key={i}>{owner}</option>;
    });
  };*/

  render() {
    return (
      <div className="filterDiv">
        <label className="selectLabel">Filter by name </label>
        <select className="filterMenu" id="selectFilter">
          <option className="mainOption" value="chooseName">
            -- Choose a name to filter --
          </option>
          {this.props.tableOfOwners.map(owner => {
            return <option key={owner}>{owner}</option>;
            {
            }
          })}
        </select>
      </div>
    );
  }
}

export default Filter;
