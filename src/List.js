import React, { Component } from 'react';
import Element from './Element';

export class List extends Component {
    
    /*constructor(props){
        super(props)
    }*/

    generateElements = () => {
        const { tabElements } = this.props;
        return tabElements.map((elem, i) => <Element key={i} entry={elem}/>)
    }

    render(){
        return(
            <div className="listOfElements">
                <table><tbody>{this.generateElements()}</tbody></table>
            </div>
        )
    };
}

export default List;