import './App.css';
import React from 'react';
// import WalletContainer from '../../containers/WalletContainer';
// import { Provider } from 'react-redux';
// import { store } from '../../store/rootReducer';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Main from '../main/Main';
import ExpensesService from '../../service/ExpensesService';
import IncomesService from '../../service/IncomesService';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      incomes: [],
      expenses: [],
      expensesTotalSum: 0,
      incomesTotalSum: 0
    }
  }

  requestAllExpenses = () => {
    ExpensesService
      .findAllExpenses()
      .then((expensesData => {
        this.setState({
          expenses: expensesData.expenses,
          expensesTotalSum: expensesData.expensesSum
        });
      }));
  }

  requestAllIncomes = () => {
    IncomesService
      .findAllIncomes()
      .then((incomesData => {
        this.setState({
          incomes: incomesData.incomes,
          incomesTotalSum: incomesData.incomesSum
        });
      }));
  }

  componentDidMount() {
    this.requestAllIncomes();
    this.requestAllExpenses();
  }

  render() {
    return (
      // <Provider store={store}>
      <div className="App bg-light h-100 container">
        <Header />
        {/* <WalletContainer state={store.getState()} /> */}
        <Main
          requestAllIncomes={this.requestAllIncomes}
          requestAllExpenses={this.requestAllExpenses}
          state={this.state} />
        <Footer />
      </div>
      // </Provider>
    );
  }
}