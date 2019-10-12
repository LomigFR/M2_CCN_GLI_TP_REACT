import React, { Component } from 'react';

export class Filter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            keyWord: '',
            namesOfOwners: this.props.namesOfOwners
        }
    }

    loadNames = () => {
        const newTabOfNames = this.props
        //console.log("Tableau dans component filter :" + newTabOfNames)
        newTabOfNames.map((owner, i) => <option key={i} value={owner}>{owner}</option>)
        return newTabOfNames
    }

    handleChange = (event) => this.setState({ keyWord: event.target.value })

    render() {
        return <div className="filterDiv">
            <label className="selectLabel">Filter by name </label>
            <select className="filterMenu" id="selectFilter">
                <option value="chooseName">-- Choose a name to filter --</option>
                {this.loadNames()}
            </select>
        </div>
    }
}

export default Filter;