import React, { Component } from 'react';

export class Total extends Component {

    render() {
        return (
            <div className="totalDiv">
                <label className="totalText">Total to display : </label>
                <label className="total">{this.props.displayTotal}</label>
            </div>
        )
    }
}

export default Total;