import React, { Component } from 'react';
import './main.scss';
import ItemOfListTransaction from './ItemOfListTransaction';
import moment from 'moment';

export default class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      incomeSum: '',
      incomeComment: '',
      blockClasses: 'income_block',
      blockMessage: ''
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
    this.props.setNewIncome(
      this.state.incomeSum,
      this.state.incomeComment,
      moment().format("MMM Do YY")
    );
    this.setState({
      incomeSum: '',
      incomeComment: ''
    })
  }

  showBlock = () => {
    this.setState({
      blockMessage: 'double-click to hide',
      blockClasses: `${this.state.blockClasses} choose-inc`
    })
  }

  hideBlock = () => {
    this.setState({
      blockMessage: '',
      blockClasses: 'income_block'
    })
  }

  render() {
    return (
      <div className={this.state.blockClasses}
        onDoubleClick={this.hideBlock}
        onClick={this.showBlock}
      >
        <label className="interface-toggle-inc">
          <span className="font-weight-light float-left">
            {this.state.blockMessage}</span>
          Incomes
          <input
            type="radio" name="toggle"
          />
        </label>
        <div className="income_input">
          <input
            className="income_sum_input form-control"
            onChange={e => this.incomeSumInput(e.target)}
            value={this.state.incomeSum}
            type="number"
            placeholder="income sum$"
          />
          <button className="btn-add-income btn btn-secondary font-weight-bold"
            onClick={this.onIncomeAdding}>
            add
          </button>
          <input
            className="income_comment form-control"
            type="text"
            onChange={e => this.incomeCommentInput(e.target)}
            value={this.state.incomeComment}
            placeholder="commentary"
          />
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
