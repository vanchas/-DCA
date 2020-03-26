import React, { Component } from 'react';
import ExpensesService from '../../service/ExpensesService';
import Select from 'react-select';
import './main.scss';
import { Accordion, Card, Button } from 'react-bootstrap';
import { Chart } from './Chart';
import ItemOfListTransaction from './ItemOfListTransaction';

export default class Expenses extends Component {
  constructor(props) {
    super(props);
    this.options = [
      { value: 'food', label: 'Food' },
      { value: 'study', label: 'Study' },
      { value: 'fun', label: 'Fun' },
      { value: 'medicine', label: 'Medicine' },
      { value: 'daily', label: 'Daily' }
    ];
    this.types = [
      { type: 'food', amount: 0 },
      { type: 'study', amount: 0 },
      { type: 'fun', amount: 0 },
      { type: 'medicine', amount: 0 },
      { type: 'daily', amount: 0 }
    ];
    this.state = {
      newExpenseComment: '',
      newExpenseSum: '',
      selectedOption: { value: 'food', label: 'Food' }
    }
    this.onAddingExpenseClick = this.onAddingExpenseClick.bind(this);
  }

  onExpenseSumInput = value => {
    this.setState({ newExpenseSum: value })
  }

  onExpenseCommentInput = value => {
    this.setState({ newExpenseComment: value })
  }

  onAddingExpenseClick = () => {
    if (!this.state.newExpenseSum.length) {
      console.error('Input with sum must be a number and cannot be empty!');
      alert('Enter correct value of sum. It must be a number and cannot be empty');
    } else {
      ExpensesService
        .createExpense(
          this.state.newExpenseSum,
          this.state.newExpenseComment,
          this.state.selectedOption.value
        )
        .then(this.requestAllExpenses);
      this.setState({
        newExpenseComment: '',
        newExpenseSum: ''
      });
    }
    this.props.requestAllExpenses();
  }

  setSelectOption = selectedOption => {
    this.setState({ selectedOption });
  }

  updateList = exType => {
    return this.props.expenses.map(
      exp => (exp.type === exType)
        ? exp.storage.map(e => {
          return <ItemOfListTransaction key={Math.random()} transaction={e} />
        })
        : []
    )
  }

  chartValuesCounter = () => {
    const initialSumsOfTypes = [
      +this.types[0].amount,
      +this.types[1].amount,
      +this.types[2].amount,
      +this.types[3].amount,
      +this.types[4].amount
    ];

    const absoluteMaxNum = initialSumsOfTypes.reduce((a, b) => a + b);

    const [first, second, third, fourth, fifth] = [
      Math.round(initialSumsOfTypes[0] / absoluteMaxNum * 100),
      Math.round(initialSumsOfTypes[1] / absoluteMaxNum * 100),
      Math.round(initialSumsOfTypes[2] / absoluteMaxNum * 100),
      Math.round(initialSumsOfTypes[3] / absoluteMaxNum * 100),
      Math.round(initialSumsOfTypes[4] / absoluteMaxNum * 100)
    ];

    const sumsOfTypesInPercents = [first, second, third, fourth, fifth];

    return sumsOfTypesInPercents;
  }

  updateTypeAmount = exType => {
    let arrOfTypeSums = [];
    this.props.expenses.map(
      exp => (exp.type === exType)
        ? exp.storage.map(e => {
          return arrOfTypeSums.push(+e.sum);
        })
        : []
    )
    this.types.map(tp => (tp.type === exType)
      ? tp.amount = arrOfTypeSums.reduce(
        (a, b) => +a + +b, 0)
      : []
    )
    return arrOfTypeSums.reduce((a, b) => a + b, 0);
  }

  render() {
    return (
      <div className="expenses_block">
        <div className="label-exp-block">Expenses
        </div>
        <div className="expenses_input">
          <input type="number"
            value={this.state.newExpenseSum}
            placeholder="type expense sum$"
            className="expenses_sum_input form-control"
            onChange={(e) => this.onExpenseSumInput(e.target.value)}
          />
          <Select
            className="type-select"
            options={this.options}
            onChange={this.setSelectOption}
            defaultValue={this.state.selectedOption}
          />
          <input type="text"
            className="expenses_commnet_input form-control"
            value={this.state.newExpenseComment}
            placeholder="type comment"
            onChange={(e) => this.onExpenseCommentInput(e.target.value)}
          />
          <button
            className="add btn btn-secondary font-weight-bold"
            onClick={this.onAddingExpenseClick}
          >add</button>
        </div>

        <Accordion className="accordion" defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0"
                className="type-btn text-secondary font-weight-bold">
                Food: &nbsp;
                {this.updateTypeAmount('food')}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse className="card-collapse" eventKey="0">
              <Card.Body className="card-body">
                {this.updateList('food')}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1"
                className="type-btn text-secondary font-weight-bold">
                Study: &nbsp;
                {this.updateTypeAmount('study')}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse className="card-collapse" eventKey="1">
              <Card.Body className="card-body">
                {this.updateList('study')}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="2"
                className="type-btn text-secondary font-weight-bold">
                Fun: &nbsp;
                {this.updateTypeAmount('fun')}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse className="card-collapse" eventKey="2">
              <Card.Body className="card-body">
                {this.updateList('fun')}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="3"
                className="type-btn text-secondary font-weight-bold">
                Medicine: &nbsp;
                {this.updateTypeAmount('medicine')}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse className="card-collapse" eventKey="3">
              <Card.Body className="card-body">
                {this.updateList('medicine')}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="4"
                className="type-btn text-secondary font-weight-bold">
                Daily: &nbsp;
                {this.updateTypeAmount('daily')}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse className="card-collapse" eventKey="4">
              <Card.Body className="card-body">
                {this.updateList('daily')}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>

        <Chart types={this.options} sumsOfTypesInPercents={this.chartValuesCounter()} />
      </div>
    )
  }
}
