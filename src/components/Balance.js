
import React, { Component } from 'react';
import "./Balance.css"

//This creates a class Component for the Balance
class Balance extends Component {
  //Creates State and constructor prop for Balance, Income, and Expense
  state = {
    Balance: 0.0,
    Income: 0,
    Expense: 0
  }
  constructor(props) {

    super(props);
    //These are supposed to creates props so we can access the values in them
    this.Balance = { Balance: 10 };
    this.Income = { Income: 5 };
    this.Expense = { Expense: 5 };


  }

  //Renders and returns html/jsx so we can view the page
  render() {
    return (
      <div className='Balance'>
        <h4>YOUR BALANCE: </h4>
        <label htmlFor="balance">$  {this.props.dataFromParent}</label>
      </div>
    );
  }
}
//This exports the Balance so we can reteive the component in other files
export default Balance;