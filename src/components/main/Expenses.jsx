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
      { type: 'daily', amount: 0 },
      { type: 'medicine', amount: 0 },
      { type: 'study', amount: 0 },
      { type: 'fun', amount: 0 }
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
    this.props.setNewExpense({
      sum: this.state.expenseSum,
      comment: this.state.expenseComment,
      type: this.state.selectedOption.value
    });
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
    return (
      <div className="expenses_block">
        <div className="expenses_input">
          <input
            className="expenses_sum_input"
            value={this.state.expenseSum}
            onChange={e => this.expensesSumInput(e.target)}
            type="number"
            placeholder=" expense sum$" />
          <Select
            options={this.options}
            onChange={this.setSelectOption}
            defaultValue={this.state.selectedOption}
          />
          <input
            onChange={e => this.expensesCommentInput(e.target)}
            className="expenses_commnet_input"
            type="text"
            value={this.state.expenseComment}
            placeholder=" commentary"
          />
          <button className="add"
            onClick={this.onExpenseAdding}>add</button>
        </div>

        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Food: &nbsp; {this.types.map(t => {
                  if (t.type === 'food') return t.amount;
                })}
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
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Study: &nbsp; {this.types.map(t => {
                  if (t.type === 'study') return t.amount;
                })}
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
              <Accordion.Toggle as={Button} variant="link" eventKey="2">
                Fun: &nbsp; {this.types.map(t => {
                  if (t.type === 'fun') return t.amount;
                })}
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
              <Accordion.Toggle as={Button} variant="link" eventKey="3">
                Medicine: &nbsp; {this.types.map(t => {
                  if (t.type === 'medicine') return t.amount;
                })}
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
              <Accordion.Toggle as={Button} variant="link" eventKey="4">
                Daily: &nbsp; {this.types.map(t => {
                  if (t.type === 'daily') return t.amount;
                })}
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