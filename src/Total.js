import React, { Component } from 'react';
import './Total.css';

export class Total extends Component{
    /*constructor(props){
        super(props)
    }*/

    render(){
        return(
            <div>
                <label className="totalText">Total to display : </label>
                <label className="total"></label>
            </div>
        )

    }
}

export default Total;