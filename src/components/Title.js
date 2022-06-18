import React, { Component } from 'react';
import ReactDom from "react-dom";
import "./Title.css";

//This creates a class Component for Title
class Title extends Component {
    //Renders and returns html/jsx so we can view the header for transaction history
    render() {
        return (

            <div className='Title'>
                <h1>Transaction History:</h1>

            </div>
        );
    }
}
//This exports the Title component so we can reteive the component in other files
export default Title;