import React, { Component } from "react";
import "./App.css";
import List from "./List";
import Filter from "./Filter";
import Total from "./Total";
import AddMore from "./AddMore";

let tabObjects = [
  {
    /*id: 1,*/
    object: "burger",
    price: 5
  },
  {
    /*id: 2,*/
    object: "bus",
    price: 1.5
  },
  {
    /*id: 3,*/
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
      total: this.calculateTotal.toString,
      tabOwners: tabOwners
    };
  }

  filterElement = () => {
    this.setState = {
      tabOfInfos: this.state.tabOfInfos.filter(element => {
        element.owner;
      })
    };
    const tempTab = this.state.tabOfInfos;
  };

  addElement = element => {
    this.setState({
      tabOfInfos: [...this.state.tabOfInfos, element],
      tabOwners: [...this.state.tabOwners, element.owner]
    });
    console.log(this.state.tabOwners);
  };

  deleteSingleElement = idToDelete => {
    const { tabOfInfos } = this.state;
    const filteredArray = tabOfInfos.filter(
      (_element, index) => index !== idToDelete
    );
    this.setState({ tabOfInfos: filteredArray });
    this.setState;
  };

  /*deleteFromMenu = idToDelete => {
    const filteredOwnerArray = tabOwners.filter(
      element => element !== idToDelete
    );
    this.setState({ tabOwners: filteredOwnerArray });
  };*/

  deleteElement = idToDelete => {
    const { tabOfInfos } = this.state;
    const filteredArray = tabOfInfos.filter(
      element => element.owner !== idToDelete
    );
    this.setState({ tabOfInfos: filteredArray });
    const filteredOwnerArray = tabOwners.filter(
      element => element !== idToDelete
    );
    this.setState({ tabOwners: filteredOwnerArray });
  };

  /*searchingFor(word){
    return function(e){
      return e.owner.toLowerCase().includes(word.toLowerCase()) || !word
    }
  }*/

  calculateTotal = () => {
    const tempTabOfInfos = this.state.tabOfInfos;
    return tempTabOfInfos.reduce(element => {
      this.state.total += element.price;
    });
  };

  /*createTabOfOwners = () => {
    this.state.tabOfInfos.filter(o =>
      Object.values(o).some(v => v === o.owner)
    );
  };*/

  render() {
    return (
      <div className="mainFrame">
        <Filter className="filter" tableOfOwners={this.state.tabOwners} />
        <List
          id="mainList"
          tabElements={this.state.tabOfInfos}
          deleteSingleElement={this.deleteSingleElement}
        />
        <AddMore
          classeName="addMore"
          addElement={element => this.addElement(element)}
          deleteElement={this.deleteElement}
          /*deleteFromMenu={this.deleteFromMenu}*/
        />
        {/*<Total className="total" displayTotal={this.state.total} />*/}
      </div>
    );
  }
}

export default App;
