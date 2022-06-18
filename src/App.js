import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import ReactDom from "react-dom";
import Expensetracker from "./components/Expensetracker.js"

export class App extends Component {
  render() {
    return (
    <div className='App'>
      <Expensetracker />

    </div>
  );
}
}

export default App;
