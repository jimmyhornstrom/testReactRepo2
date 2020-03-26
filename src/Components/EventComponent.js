import React, { Component } from "react";

export default class EventComponent extends Component{

    constructor(){
        super()
        this.viewText= this.viewText.bind(this); 
        
    }

    viewText(){
        alert(this.mytext.value);
    }

    render()
    {
        return(<>
            <input type="text" ref={(val) => this.mytext = val}></input>
            <button onClick={this.viewText}>Visa</button>
        </>);
    }

    

    
}