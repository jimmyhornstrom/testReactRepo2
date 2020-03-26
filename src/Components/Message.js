import React, { Component } from "react";

export default class Message extends Component{

    render()
    {
    return(<>
    <h3>{this.props.msg}</h3>
    <p>{this.props.date}</p>
    </>)
    }
}