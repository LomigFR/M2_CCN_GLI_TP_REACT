import React, { Component } from "react";
import "./App.css";
import List from "./List";
import Filter from "./Filter";
import Total from "./Total";
import AddMore from "./AddMore";

let tabObjects = [
  {
    object: "burger",
    price: 5
  },
  {
    object: "bus",
    price: 1.5
  },
  {
    object: "petrol",
    price: 50
  }
];

let tabOwners = ["Toto", "Tutu", "Titi"];

const tabMain = tabObjects.map((obj, i) => ({
  ...obj,
  owner: tabOwners[i]
}));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabOfInfos: tabMain,
      selOwner: ""
    };
  }

  addElement = element => {
    this.setState({
      tabOfInfos: [...this.state.tabOfInfos, element]
    });
    console.log(this.state.tabOwners);
  };

  /**
   * To delete element (i.e. line of the tab) by element
   */
  deleteSingleElement = idToDelete => {
    const { tabOfInfos } = this.state;
    const filteredArray = tabOfInfos.filter(
      (_element, index) => index !== idToDelete
    );
    this.setState({ tabOfInfos: filteredArray });
  };

  /**
   * To delete an element by keyword
   */
  deleteElement = idToDelete => {
    const { tabOfInfos } = this.state;
    const filteredArray = tabOfInfos.filter(
      element => element.owner !== idToDelete
    );
    this.setState({ tabOfInfos: filteredArray });
  };

  calculateTotal = () => {
    const tab = this.state.tabOfInfos;
    return tab
      .map(element => parseFloat(element.price) || 0)
      .reduce((a, b) => a + b, 0);
  };

  getTabOwners = () => {
    const owners = this.state.tabOfInfos.map(element => element.owner);
    return [...new Set(owners)]; // suppression des doublons
  };

  selectOwner = newOwner => {
    this.setState({
      selOwner: newOwner
    });
  };

  getTabInfos = () => {
    return this.state.tabOfInfos.filter(
      element =>
        this.state.selOwner === "" || element.owner === this.state.selOwner
    );
  };

  render() {
    return (
      <div className="mainFrame">
        <Filter
          className="filter"
          onSelectOwner={this.selectOwner}
          tableOfOwners={this.getTabOwners()}
        />
        <List
          id="mainList"
          tabElements={this.getTabInfos()}
          deleteSingleElement={this.deleteSingleElement}
        />
        <AddMore
          classeName="addMore"
          addElement={element => this.addElement(element)}
          deleteElement={this.deleteElement}
        />
        <Total className="total" total={this.calculateTotal()} />
      </div>
    );
  }
}

export default App;
