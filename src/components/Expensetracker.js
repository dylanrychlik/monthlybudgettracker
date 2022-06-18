import React, { Component } from 'react';
import "./Expensetracker.css";
import Total from './Balance.js';
import Income from './Income.js';
import Expense from './Expense.js';
import Title from './Title.js';
import eventBus from "./EventBus";

//This creates a class Component for the Expense tracker
class Expensetracker extends Component {
    //Creates State and constructor props for expense
    state = {
        income: 0,
        expense: 0,
        Balance: 0.0,
        getTotal: 0
    }

    constructor(props) {

        super(props);
        //These are supposed to creates props so we can access the values in them
        this.income = { income: 0 };
        this.expense = { expense: 0 };
        this.Balance = { Balance: 0.0 };
        this.getTotal = { getTotal: 0 };
        this.transactionList = { transactionList: 0 };
        //This creates the state for the transaction list
        this.state = { transactionType: '', title: '', amount: 0 };

        //Intionalize the array of objects so we can organize the data inputs
        let incomeList = [{
            "title": '',
            "amount": 0
        }];


        let expenseList = [{
            "title": '',
            "amount": 0
        }];
        let transactionList = [{
            "transaction type": '',
            "title": '',
            "amount": 0
        }];
        //intionalizes the default length of the arrays so they aren't undefined
        incomeList.length = 0;
        expenseList.length = 0;
        transactionList.length = 0;
        //intionalizes state for the income and expenses
        this.state = { incomeList: incomeList };
        this.state = { expenseList: expenseList };
        //combines the income list and expense to have one large to organize
        this.transactionList = incomeList.concat(expenseList);
        //intionalizes state for the transaction List
        this.state = { transactionList: transactionList };
        //These set up a set state functions for our arrays, Balance, and fields for the arrays.
        //These get binded. 
        this.incomeList = this.setIncome.bind(this);
        this.setExpense = this.setExpense.bind(this);
        this.setBalance = this.setBalance.bind(this);
        this.setTransactionList = this.setTransactionList.bind(this);
        this.setTitle = this.setTitle.bind(this);
        this.setAmount = this.setAmount.bind(this);



    };

    //This handles changes between income and expenses radio buttons
    handleChange = e => {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        });
    };

    //The following is our list of set state methods for our data
    setBalance(e) {
        console.log('Dar dar test', e.target.value);
        this.setState({
            Balance: e.target.value
        });
    }
    setTitle(e) {
        this.setState({
            title: e.target.value
        });
    }
    setAmount(e) {
        this.setState({
            amount: e.target.value
        });
    }

    setTransactiontype(e) {
        if (e.target.value === "income") {
            this.setState({
                transactionType: e.target.value
            });
        } else if (e.target.value === "expense") {
            this.setState({
                transactionType: e.target.value
            });
        }
    }
    setIncome(e) {
        this.setState({
            income: e.target.value
        });
    }

    setExpense(e) {
        this.setState({
            expense: e.target.value
        });
    }
    setTransactionList(e) {
        this.setState({
            transactionList: e.target.value
        });
    }
    //This handles the inputed information for the form
    handleSubmit = (event) => {
        //This cancels the default action that belongs to the event so it run through the function as intented
        event.preventDefault();
        //Create a transaction object that retreive the feilds for Transaction array  
        let transaction = {
            "Transaction type": this.state.transactionType,
            "Title ": this.state.title,
            "Amount ": this.state.amount,
        }
        //'output' is what will be outputted onto the browser
        var output = '';
        //loops through the feilds in the transaction object so it can be added to 'output'
        for (var property in transaction) {
            output += property + ': ' + transaction[property] + '; ';
        }
        //Retreives the state array and pushed the value of 'output' into the transaction list
        this.state.transactionList.push(output);
        //calls the print function so the array can be displayed on the browser
        this.printTransactionlist(this, this.state.transactionList);
        //sets the state of transaction object so it be referenced later
        this.setState({
            transactionType: this.state.transactionType,
            Title: this.state.title,
            Amount: this.state.amount
        })
        //This calls the total Balance function so the values for 'income', 'expense', and 'balance' can be retreived
        let balance, income, expense = this.totalBalance(balance, income, expense);
    }


    //This calculates the values for income, expense, and balance so they can be displayed on browser.
    totalBalance(totalBalance, income, expense) {
        //These if statements determine which item is an income or an expense so the Balances can be calcuated
        if (this.state.transactionType === 'income') {
            //This adds the total for income and balance
            totalBalance = parseFloat(this.Balance.Balance) + parseFloat(this.state.amount);
            income = parseFloat(this.income.income) + parseFloat(this.state.amount);
            //This reteives the value of the income feild and makes it equal to the 'income' paramater
            this.income.income = income;
        } else if (this.state.transactionType === 'expense') {
            //This adds the total for expense and balance
            totalBalance = parseFloat(this.Balance.Balance) - parseFloat(this.state.amount);
            expense = parseFloat(this.expense.expense) + parseFloat(this.state.amount);
            //This reteives the value of the expense feild and makes it equal to the 'income' paramater
            this.expense.expense = expense;
        } else {
            //If unable to get a transaction type, I don't want these values to change. 
            totalBalance = totalBalance;
            income = income;
            expense = expense;

        }
        //Makes Balance equal to totalBalance so it can returned
        this.Balance.Balance = totalBalance;
        //returns the values for totalBalance, income and expense so they can be referenced in the display
        return (totalBalance, income, expense);
    }




    //This functions displays the transaction list so it can be viewed in the browser.
    printTransactionlist(e, arr) {
        //This creates a text variable to act as the display for the Transaction list
        let text = "";

        //This validates that the array isn't null so it can initialized if it is
        if (!this.state.transactionList) {
            //outputs an empty array message
            text += "You currently have no transactions";
            //calls initializeArray so it can initialize the transaction list
            this.initializeArray(this.state.transactionList);
            //If the array is not null, but a length of zero, it informs the user they have no transactions
        } else if (this.state.transactionList.length === 0) {
            text += "You currently have no transactions";
        }
        //Else statement is called whenever array is not empty so it can display the transaction list
        else {
            //This loops through the array so the values of the array can be added to the text string. 
            for (let i = 0; i < this.state.transactionList.length; i++) {
                //if current transaction is not empty, add it to the text string
                if (this.state.transactionList[i] != null) {

                    text += this.state.transactionList[i] + "\n";
                }
                //displays no transactions message in case the indexed value is null and index equals to the length of the array
                //and the text is empty
                //this is simply further validation that there is no empty text displayed to the browser
                else if (this.state.transactionList[i] == null && i == this.state.transactionList.length - 1 && text === "") {
                    text += "You currently have no transactions";
                }
                //all other conditions display no transaction message to the user
                else {
                    text = "You currently have no transactions";
                }
            }

        }
        //return the text string to be displayed on the browser
        return text;
    }
    //initialize array method to create array in case income and expense array is null. 
    initializeArray(arr) {

        //Parameter 'arr' get instatiated as an array 
        arr = new Array(this.income); // create an empty array of length of income
        //loops through the array so expense array can be created
        for (let i = 0; i < arr.length; i++) {
            //indexed value creates new expense array at the length of expense
            arr[i] = new Array(this.expense); // make each element an array
        }
        //returns arr;
        return arr;
    }

    //calls render function so component can be outputted to screen

    render() {


        //Have a 'balance' variable be equal to the current state of Balance
        let total_Balance = this.Balance.Balance;
        //Have an 'Income' variable be equal to the current state of income
        let total_Income = this.income.income;
        //Have an 'Expense' variable be equal to the current state of expense
        let total_Expense = this.expense.expense;
        //Displays the component via jsx

        return (

            <div className='Expensetracker'>

                <h1>Expense Tracker</h1>


                <Total dataFromParent={total_Balance} />


                <table className="center">
                    <tbody>
                        <tr>
                            <th> <Income dataFromParent={total_Income} /> </th>
                            <th> {" "}</th>
                            <th> {" "}</th>
                            <th> {" "}</th>
                            <th> {" "}</th>
                            <th> {" "}</th>
                            <th> {" "}</th>
                            <th> <Expense dataFromParent={total_Expense} /> </th>
                        </tr>


                    </tbody>
                </table>
                <Title />

                <div>
                    <br></br>
                    <div className='Transaction'>
                        {this.printTransactionlist(this, this.tansactionList)}
                    </div>
                    <p>------------------------------------------</p>

                </div>
                <div className='Form'>
                    <h4>Add a new transaction.</h4>
                    <h4>------------------------------------------</h4>

                    <form onSubmit={(event) => this.handleSubmit(event)}>
                        <label>Title: &nbsp;
                            <input placeholder="text" type="text" value={this.title} onChange={(event) => this.setTitle(event)} name="Title" />
                        </label> &nbsp; <br></br>
                        <label>Amount: &nbsp;
                            <input placeholder="text" type="text" value={this.amount} onChange={(event) => this.setAmount(event)} name="Amount" />
                        </label>&nbsp; <br></br>
                        <div className="radioButtons">
                            <label htmlFor="html">
                                <input name="platform" type="radio" id="income" value="income" onChange={this.handleChange} onClick={(e) => this.setTransactiontype(e)} />
                                &nbsp; income</label>
                            <label htmlFor="html">
                                <input name="platform" type="radio" id="expense" value="expense" onChange={this.handleChange} onClick={(e) => this.setTransactiontype(e)} />
                                &nbsp;  expense</label>
                        </div >
                        <br></br>
                        <br></br>
                        <button className="submitBtn" type="submit" > Submit </button>
                    </form>
                </div>
            </div>
        );

    }
}
//This exports the Expensetracker component so we can reteive the component in other files
export default Expensetracker;