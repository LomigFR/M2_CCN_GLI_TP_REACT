import React, { Component } from "react";
import Element from "./Element";

export class List extends Component {
  generateElements = () => {
    const { tabElements } = this.props;
    return tabElements.map((elem, i) => (
      <Element
        className="element"
        key={i}
        index={i}
        entry={elem}
        tabOfElements={this.props}
        deleteSingleElement={this.props.deleteSingleElement}
      />
    ));
  };

  render() {
    return (
      <div className="listOfElements">
        <table>
          <tbody>{this.generateElements()}</tbody>
        </table>
      </div>
    );
  }
}

export default List;
