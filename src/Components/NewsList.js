import React, { Component } from "react";

export default class NewsList extends Component{

    
    render()
    {
        let news = this.props.news.map((news) => {
            return <>
            <h3>{news.title}</h3>
            <p>{news.text}</p>
            </>
        });
        
        // let newsBody = this.props.news.map((news) => {
        //     return news.text;
        // });



       return(news);
    }
}