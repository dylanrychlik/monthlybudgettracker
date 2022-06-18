import React, { Component } from 'react';
import "./Expense.css";

//This creates a class Component for Expense
class Expense extends React.Component{
    //Creates State and constructor props for expense
    state = {
        expense: 0.0,
    }
    constructor(props) {

        super(props);
        //These are supposed to creates props so we can access the values in them
        this.expense = { expense: 0.0 };
    }
    //Renders and returns html/jsx so we can view the page
    render() {
        return (
            <div className='Expense'>
                <h4> EXPENSE: </h4>
                <label htmlFor="expense">$ {this.props.dataFromParent}</label>
            </div>
        );
    }
}
//This exports the Expense component so we can reteive the component in other files
export default Expense;