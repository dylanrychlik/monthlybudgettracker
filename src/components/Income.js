import React, { Component } from 'react';
import ReactDom from "react-dom";
import "./Income.css"




class Income extends Component {
    //Creates State and constructor props for income
    state = {
        income: 0,
        }

        constructor(props) {
            super(props);
            //These are supposed to creates props so we can access the values in them
            this.expense = { expense: 0.0 };
          
        }
            //Renders and returns html/jsx so we can view the page
    render() {
        let income = this.state.income;
        return (

            <div className='Income'>
           
                <h4> INCOME: </h4>
                <label htmlFor="income ">$ {this.props.dataFromParent}</label>
            </div>
        );
    }
}
//This exports the Expense component so we can reteive the component in other files
export default Income;