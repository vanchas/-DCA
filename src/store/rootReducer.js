import { combineReducers, createStore } from 'redux';
import expenseReducer from './expenseReducer';
import incomeReducer from './incomeReducer';
import { loadState, saveState } from './localStorage';

export const rootReducer = combineReducers({
  expenseReducer,
  incomeReducer
})

const persistedState = loadState();
export const store = createStore(
  rootReducer, 
  persistedState
);

store.subscribe(() => {
  saveState(store.getState());
})