import React, { Component } from 'react';
import './AddMore.css';

export class AddMore extends Component {
    constructor(props) {
        super(props)
        this.state = {
            emptyObject: {
                object: '',
                price: '',
                owner: '',
            }
        }
    }
 
    addLine = () => {
        this.props.addElement(this.state.emptyObject)
        this.setState({
            emptyObject: {
                object: '',
                price: '',
                owner: '',
            }
        })
    }

    changeTitle = (object) => {
        this.setState({
            emptyObject: {
                ...this.state.emptyObject, object
            }
        })
    }

    changeOwner = (owner) => {
        this.setState({
            emptyObject: {
                ...this.state.emptyObject, owner
            }
        })
    }

    changePrice = (price) => {
        this.setState({
            emptyObject: {
                ...this.state.emptyObject, price
            }
        })
    }

    // Alternative en une seule fonction :
    changeLine = (property, value) => {
        const newLine = { ...this.state.emptyObject }
        newLine[property] = value
        this.setState({
            emptyObject:newLine
        })
    }

    render() {
        return <div>
            <div>Object to add : <input value={this.state.emptyObject.object} placeholder="Object to add" type="text" onChange={(event) => this.changeTitle(event.target.value)} /></div>
            <div>Owner to add : <input value={this.state.emptyObject.owner} placeholder="Owner to add" type="text" onChange={(event) => this.changeOwner(event.target.value)} /></div>
            <div>Price : <input value={this.state.emptyObject.price} placeholder="Price to add" type="text" onChange={(event) => this.changePrice(event.target.value)} /></div>
            <button onClick={() => this.addLine()}>Add</button>
        </div>
    }
}

export default AddMore;