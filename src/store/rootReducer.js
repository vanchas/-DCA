import { combineReducers } from 'redux';
import expenseReducer from './expenseReducer';
import incomeReducer from './incomeReducer';

export const rootReducer = combineReducers({
  expenseReducer,
  incomeReducer
});