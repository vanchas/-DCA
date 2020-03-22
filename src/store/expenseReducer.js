import { ADD_EXPENSE } from './actions';
import { valueValidator } from '../validators/validator';
import moment from 'moment';

const initialState = {
  expenses: [
    { type: 'food', storage: [] },
    { type: 'fun', storage: [] },
    { type: 'medicine', storage: [] },
    { type: 'daily', storage: [] },
    { type: 'study', storage: [] }
  ],
  expensesTotalSum: 0
}
let sumNum = 0;

function sum(num) {
  return sumNum += +num;
}

export const expenseReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_EXPENSE:
      if (valueValidator(action.payload.sum)) {
        return {
          ...state,
          expensesTotalSum: sum(action.payload.sum),
          expenses: state.expenses.map(exp => {
            if (exp.type !== action.payload.type) {
              return exp;
            }
            return {
              ...exp,
              storage: exp.storage.concat({
                sum: action.payload.sum,
                comment: action.payload.comment,
                type: action.payload.type,
                date: moment().format("MMM Do YY")
              })
            }
          })
        }
      }
      return state;

    default:
      return state;
  }
}
export default expenseReducer;