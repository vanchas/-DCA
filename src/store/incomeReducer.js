import { ADD_INCOME } from './actions';
import { valueValidator } from '../containers/validator';

const initialState = {
  incomes: [],
  incomesTotalSum: 0
}
let sumNum = 0;

function sum(num) {
  return sumNum += +num;
}

const incomeReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_INCOME:
      if (valueValidator(action.payload.sum)) {
        return Object.assign({}, state, {
          incomes: state.incomes.concat(action.payload),
          incomesTotalSum: sum(action.payload.sum)
        })
      }

    default:
      return state;
  }
}
export default incomeReducer;