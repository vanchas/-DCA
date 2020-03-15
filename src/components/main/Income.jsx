import React, { Component } from 'react';
import './main.scss';
import ItemOfListTransaction from './ItemOfListTransaction';

export default class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      incomeSum: '',
      incomeComment: ''
    };
  }

  incomeSumInput = input => {
    this.setState({
      incomeSum: input.value
    })
  }

  incomeCommentInput = input => {
    this.setState({
      incomeComment: input.value
    })
  }

  onIncomeAdding = () => {
    new Promise(res => {
      this.props.setNewIncome({
        sum: this.state.incomeSum,
        comment: this.state.incomeComment,
        date: new Date
      });
      res()
    }).then(() => {
      this.setState({
        incomeSum: '',
        incomeComment: ''
      })
    })
  }

  render() {
    return (
      <div className="income_block">
        <div className="income_input">
          <input className="income_sum_input"
            onChange={e => this.incomeSumInput(e.target)}
            value={this.state.incomeSum}
            type="number" placeholder=" income sum$" />
          <button onClick={this.onIncomeAdding}>add</button>
          <input className="income_comment" type="text"
            onChange={e => this.incomeCommentInput(e.target)}
            value={this.state.incomeComment}
            placeholder=" commentary" />
        </div>
        <div className="income_list">
          {this.props.incomes.map(inc => {
            return <ItemOfListTransaction key={Math.random()} transaction={inc} />
          })}
        </div>
      </div>
    )
  }
}
