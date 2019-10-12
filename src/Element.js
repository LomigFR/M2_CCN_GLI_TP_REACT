import React, { Component } from 'react';
import './Element.css';

export class Element extends Component {
    /*constructor(props) {
        super(props)
    }*/

    render() {
        const { entry } = this.props
        return (
            <tr key={entry.object}><td>{entry.object}</td><td>{entry.owner}</td><td>{entry.price}</td></tr>
        )
    }
}

export default Element;