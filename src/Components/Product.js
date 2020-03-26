import React, { Component } from "react";

export default class Product extends Component{

    render()
    {
    return(<>
    <h3>{this.props.children}</h3>
    </>)
    }
}