import React, { Component } from 'react';
import './main.scss';
import TotalInfo from './TotalInfo';
import Expenses from './Expenses';
import Income from './Income';

export default class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main className="main">
        <TotalInfo expenses={this.props.expenses} incomes={this.props.incomes} incomesTotalSum={this.props.incomesTotalSum} expensesTotalSum={this.props.expensesTotalSum} />
        <Expenses setNewExpense={this.props.setNewExpense}
          expenses={this.props.expenses}
        />
        <Income setNewIncome={this.props.setNewIncome} incomes={this.props.incomes} />
      </main>
    )
  }
}
