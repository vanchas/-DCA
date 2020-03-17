import React, { Component } from 'react';
import './main.scss';
import Select from 'react-select';
import ItemOfListTransaction from "./ItemOfListTransaction";
import { Accordion, Card, Button } from 'react-bootstrap';

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
      expenseSum: '',
      expenseComment: '',
      expenseType: '',
      selectedOption: { value: 'food', label: 'Food' }
    };
  }

  expensesSumInput = input => {
    this.setState({
      expenseSum: input.value
    });
  }

  expensesCommentInput = input => {
    this.setState({
      expenseComment: input.value
    });
  }

  expensesTypeInput = input => {
    this.setState({
      expenseType: input.value
    });
  }

  onExpenseAdding = () => {
    this.props.setNewExpense(
      this.state.expenseSum,
      this.state.expenseComment,
      this.state.selectedOption.value
    );
    this.setState({
      expenseSum: '',
      expenseComment: '',
      expenseType: ''
    })
    this.updateTypesAmount('food');
    this.updateTypesAmount('fun');
    this.updateTypesAmount('daily');
    this.updateTypesAmount('medicine');
    this.updateTypesAmount('study');
  }

  setSelectOption = (selectedOption) => {
    this.setState({ selectedOption });
  }

  updateTypesAmount = (type) => {
    let amount = 0;
    this.props.expenses.map(exp => {
      if (exp.type === type) {
        exp.storage.map(e => {
          amount += +e.sum;
        })
      }
      this.types.map(_type => {
        if (type == _type.type) {
          _type.amount = amount;
        }
      })
    })
  }

  render() {
    console.log(this.types);
    
    return (
      <div className="expenses_block">
        <label className="interface-toggle-exp">Expenses
          <input type="radio" name="toggle"/>
        </label>
        <div className="expenses_input">
          <input
            className="expenses_sum_input form-control"
            value={this.state.expenseSum}
            onChange={e => this.expensesSumInput(e.target)}
            type="number"
            placeholder="expense sum$" />
          <Select
            options={this.options}
            onChange={this.setSelectOption}
            defaultValue={this.state.selectedOption}
          />
          <input
            onChange={e => this.expensesCommentInput(e.target)}
            className="expenses_commnet_input form-control"
            type="text"
            value={this.state.expenseComment}
            placeholder="commentary"
          />
          <button className="add btn btn-secondary font-weight-bold"
            onClick={this.onExpenseAdding}>add</button>
        </div>

        <Accordion className="accordion" defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0" 
              className="text-secondary font-weight-bold">
                Food: &nbsp; {this.types[0].amount}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                {this.props.expenses.map(exp => {
                  if (exp.type === 'food') {
                    return exp.storage.map(expense => {
                      return <ItemOfListTransaction key={Math.random()} transaction={expense} />
                    })
                  }
                })}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1"
              className="text-secondary font-weight-bold">
                Study: &nbsp; {this.types[1].amount}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                {this.props.expenses.map(exp => {
                  if (exp.type === 'study') {
                    return exp.storage.map(expense => {
                      return <ItemOfListTransaction key={Math.random()} transaction={expense} />
                    })
                  }
                })}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="2"
              className="text-secondary font-weight-bold">
                Fun: &nbsp; {this.types[2].amount}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                {this.props.expenses.map(exp => {
                  if (exp.type === 'fun') {
                    return exp.storage.map(expense => {
                      return <ItemOfListTransaction key={Math.random()} transaction={expense} />
                    })
                  }
                })}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="3"
              className="text-secondary font-weight-bold">
                Medicine: &nbsp; {this.types[3].amount}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                {this.props.expenses.map(exp => {
                  if (exp.type === 'medicine') {
                    return exp.storage.map(expense => {
                      return <ItemOfListTransaction key={Math.random()} transaction={expense} />
                    })
                  }
                })}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="4"
              className="text-secondary font-weight-bold">
                Daily: &nbsp; {this.types[4].amount}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="4">
              <Card.Body>
                {this.props.expenses.map(exp => {
                  if (exp.type === 'daily') {
                    return exp.storage.map(expense => {
                      return <ItemOfListTransaction key={Math.random()} transaction={expense} />
                    })
                  }
                })}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    )
  }
}