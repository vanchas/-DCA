import './App.css';
import React from 'react';
import WalletContainer from './containers/WalletContainer';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import rootReducer from './store/rootReducer';

// const store = createStore(rootReducer);

export default class App extends React.Component {
  render() {
    return (
      // <Provider store={store}>
        <div className="App">
          <WalletContainer />
        </div>
      // </Provider>
    );
  }
}