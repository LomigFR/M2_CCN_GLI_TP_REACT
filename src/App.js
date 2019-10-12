import React, { Component } from 'react';
import './App.css';
import List from './List';
import Filter from './Filter';
import Total from './Total';
import AddMore from './AddMore';

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

let tabMain = [
  {
    object: tabObjects[0].object,
    owner: tabOwners[0],
    price: tabObjects[0].price
  },
  {
    object: tabObjects[1].object,
    owner: tabOwners[1],
    price: tabObjects[1].price
  },
  {
    object: tabObjects[2].object,
    owner: tabOwners[2],
    price: tabObjects[2].price
  }
];

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      tabOfInfos: tabMain,
      listOfElements: this.displayListOfElements(this.tabOfInfos),
      tabOfOwners: this.createTabOfOwners(this.state.tabOfInfos, this.state.tabOfInfos.owner),
    }
  }

  /*filterElement = () => {
    this.setState({
      keyWord: event.target.value})
    //const filtered = this.listOfElements.filter(element => this.tabOfInfos.object === Filter.props.keyWord);
  }*/

  addElement = (element) => {
    this.setState({
      tabOfInfos: [...this.state.tabOfInfos, element]
    })
  }

  /*searchingFor(word){
    return function(e){
      return e.owner.toLowerCase().includes(word.toLowerCase()) || !word
    }
  }*/

  calculateTotal = () => {
  }

  displayListOfElements = (tab) => <List tabElements={tab} />

  createTabOfOwners = (tab, property) => {
    tab.filter((element) => property)
  }

  render() {
    return (
      <div className="mainFrame">
        <Filter className="filter" namesOfOwners={this.state.tabOfOwners} />
        <List className="list" tabElements={this.state.tabOfInfos} />
        <AddMore classeName="addmore" addElement={(element) => this.addElement(element)} />
        <Total className="total" />
      </div>
    );
  }
}

export default App;
