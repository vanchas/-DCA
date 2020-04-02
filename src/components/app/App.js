import './App.css';
import React from 'react';
import WalletContainer from '../../containers/WalletContainer';
import { Provider } from 'react-redux';
// import { loadState, saveState } from '../../store/localStorage';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../../store/rootReducer';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { watcherLoadIncome } from '../../store/sagas';

// const persistedState = loadState();
const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  rootReducer,
  applyMiddleware(logger, sagaMiddleware)
);
sagaMiddleware.run(watcherLoadIncome);
// store.subscribe(() => {
//   saveState(store.getState());
// });

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