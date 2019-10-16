import React, { Component } from "react";

export class AddMore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emptyObject: {
        object: "",
        price: "",
        owner: ""
      },
      idToDelete: ""
    };
  }

  addLine = () => {
    this.props.addElement(this.state.emptyObject);
    this.setState({
      emptyObject: {
        object: "",
        price: "",
        owner: ""
      }
    });
  };

  changeId = value => {
    this.setState({
      idToDelete: value
    });
  };

  changeTitle = object => {
    this.setState({
      emptyObject: {
        ...this.state.emptyObject,
        object
      }
    });
  };

  changeOwner = owner => {
    this.setState({
      emptyObject: {
        ...this.state.emptyObject,
        owner
      }
    });
  };

  changePrice = price => {
    this.setState({
      emptyObject: {
        ...this.state.emptyObject,
        price
      }
    });
  };

  // Alternative en une seule fonction :
  changeLine = (property, value) => {
    const newLine = { ...this.state.emptyObject };
    newLine[property] = value;
    this.setState({
      emptyObject: newLine
    });
  };

  /*deleteFromMenuAndTab = idToDelete => {
    this.props.deleteFromMenu(idToDelete);
    this.props.deleteElement(idToDelete);
  };*/

  render() {
    return (
      <div className="addDiv">
        <div>
          Object to add :{" "}
          <input
            value={this.state.emptyObject.object}
            placeholder="Object to add"
            type="text"
            onChange={event => this.changeTitle(event.target.value)}
          />
        </div>
        <div>
          Owner to add :{" "}
          <input
            value={this.state.emptyObject.owner}
            placeholder="Owner to add"
            type="text"
            onChange={event => this.changeOwner(event.target.value)}
          />
        </div>
        <div>
          Price :{" "}
          <input
            value={this.state.emptyObject.price}
            placeholder="Price to add"
            type="text"
            onChange={event => this.changePrice(event.target.value)}
          />
        </div>
        <button onClick={() => this.addLine()}>Add a line</button>
        <div>
          <input
            placeholder="Keyword to delete"
            onChange={event => this.changeId(event.target.value)}
          />
          <button
            onClick={() => this.props.deleteElement(this.state.idToDelete)}
          >
            Delete a line by keyword
          </button>
        </div>
      </div>
    );
  }
}

export default AddMore;
