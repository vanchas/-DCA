import React, { Component } from 'react';
import Header from '../components/header/Header';
import Main from '../components/main/Main';
// import { setNewExpense } from '../store/actions'
// import { connect } from 'react-redux';
import { valueValidator } from './validator';

class WalletContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: [
        { type: 'food', storage: [] },
        { type: 'fun', storage: [] },
        { type: 'medicine', storage: [] },
        { type: 'daily', storage: [] },
        { type: 'study', storage: [] }
      ],
      incomes: [],
      incomesTotalSum: 0,
      expensesTotalSum: 0
    }
  }

  setNewExpense = newExpense => {
    new Promise(res => {
      if (valueValidator(newExpense.sum)) {
        this.state.expenses.map(e => {
          if (e.type === newExpense.type) {
            e.storage.push({
              sum: newExpense.sum,
              comment: newExpense.comment,
              type: newExpense.type,
              date: new Date()
            });
          }
        })
      }
      res();
    }).then(() => {
      let amount = 0;
      this.state.expenses.map(exp => {
        exp.storage.map(e => {
          amount += +e.sum
        })
      })
      this.setState({ expensesTotalSum: amount });
    })
  }

  setNewIncome = newIncome => {
    new Promise(res => {
      if (valueValidator(newIncome.sum)) {
        this.setState({
          incomes: [
            ...this.state.incomes,
            newIncome
          ]
        })
      }
    res();
    }).then(() => {
      let amount = 0;
      this.state.incomes.map(inc => {
        amount += +inc.sum;
      })
      this.setState({ incomesTotalSum: amount })
    })
  }

  render() {
    return (
      <div>
        <Header />
        <Main
          setNewExpense={this.setNewExpense}
          setNewIncome={this.setNewIncome}
          expenses={this.state.expenses}
          incomes={this.state.incomes}
          incomesTotalSum={this.state.incomesTotalSum}
          expensesTotalSum={this.state.expensesTotalSum}
        />
      </div>
    )
  }
}
export default WalletContainer;
// const setStateToProps = state => {
//   return {
//     wallet: state.wallet.
//   }
// }
// const setDispatchToProps = {
//   setNewExpense
// }

// export default connect(setStateToProps, setDispatchToProps)(WalletContainer);
