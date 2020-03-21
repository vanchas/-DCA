import './App.css';
import React from 'react';
import WalletContainer from '../../containers/WalletContainer';
import { Provider } from 'react-redux';
import { store } from '../../store/rootReducer';
import Header from '../header/Header';
import Footer from '../footer/Footer';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App bg-light h-100">
          <Header />
          <WalletContainer state={store.getState()} />
          <Footer />
        </div>
      </Provider>
    );
  }
}