import React, { Component } from "react";

export default class FruitList extends Component{

    render()
    {
        let listItems = this.props.arr.map((item) => {
        return(<li>{item}</li>)
        });


    return(<ul>{listItems}</ul>);
    }
}