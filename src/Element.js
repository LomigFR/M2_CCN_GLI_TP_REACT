import React, { Component } from "react";

export class Element extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { entry, index } = this.props;
    return (
      <tr>
        <td>{entry.object}</td>
        <td>{entry.owner}</td>
        <td>{entry.price}</td>
        <td>
          <button onClick={() => this.props.deleteSingleElement(index)}>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default Element;
