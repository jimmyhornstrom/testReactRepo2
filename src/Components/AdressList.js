import React, { Component } from "react";

export default class AdressList extends Component{

    render()
    {
        let listItems = this.props.array.map((person) => {
        return(<div>
            <tr>
                <td>{person.name}</td>
                <td>{person.email}</td>
                <td>{person.phone}</td>
            </tr>
        </div>)
        });


    return(<table>{listItems}</table>);
    }
}