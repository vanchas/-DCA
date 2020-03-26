import React, { Component } from 'react';
import IncomesService from '../../service/IncomesService';
import ItemOfListTransaction from './ItemOfListTransaction';
import './main.scss';

export default class Incomes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newIncomeComment: '',
      newIncomeSum: '',
      filterValue: ''
    }
    this.onAddingIncomeClick = this.onAddingIncomeClick.bind(this);
  }

  onIncomeCommentInput = value => {
    this.setState({ newIncomeComment: value })
  }

  onIncomeSumInput = value => {
    this.setState({ newIncomeSum: value })
  }

  onAddingIncomeClick = () => {
    if (!this.state.newIncomeSum.length) {
      console.error('Input with sum must be a number and cannot be empty!');
      alert('Enter correct value of sum. It must be a number and cannot be empty');
    } else {
      IncomesService
        .createIncome(
          this.state.newIncomeSum,
          this.state.newIncomeComment
        ).then(this.requestAllIncomes);
      this.setState({
        newIncomeComment: '',
        newIncomeSum: '',
        incomes: this.props.incomes
      })
    }
    this.props.requestAllIncomes();
  }

  updateList = () => {
    if (!this.state.filterValue.length) {
      return this.props.incomes.map(inc => {
        return <ItemOfListTransaction key={Math.random()} transaction={inc} />
      })
    } else {
      let newIncomes = this.props.incomes;
      newIncomes = newIncomes.filter(inc => {
        return inc.comment.toLowerCase().search(this.state.filterValue.toLowerCase()) !== -1;
      });
      return newIncomes.map(inc => {
        return <ItemOfListTransaction key={Math.random()} transaction={inc} />
      })
    }
  }

  setFilterValue = value => {
    this.setState({ filterValue: value })
  }

  render() {
    return (
      <div className="income_block">
        <div className="label-inc-block">Incomes</div>
        <div className="income_input">
          <input type="number"
            className="income_sum_input form-control"
            value={this.state.newIncomeSum}
            placeholder="type income sum$"
            onChange={(e) => this.onIncomeSumInput(e.target.value)}
          />
          <button
            className="add btn-add-income btn btn-secondary font-weight-bold"
            onClick={this.onAddingIncomeClick}>
            add</button>
          <input type="text"
            className="income_comment form-control"
            value={this.state.newIncomeComment}
            placeholder="type comment"
            onChange={(e) => this.onIncomeCommentInput(e.target.value)}
          />
          <input type="text"
            onChange={e => this.setFilterValue(e.target.value)}
            title="filter by commentary"
            className="income_filter form-control" placeholder="filter..." />
        </div>

        <div className="income_list">
          {this.updateList()}
        </div>
      </div>
    )
  }
}
