import './App.css';
import React from 'react';
import WalletContainer from '../../containers/WalletContainer';
import { Provider } from 'react-redux';
import { store } from '../../store/rootReducer';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <WalletContainer state={store.getState()} />
        </div>
      </Provider>
    );
  }
}