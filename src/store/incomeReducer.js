import { ADD_INCOME } from './actions';
import { valueValidator } from '../validators/validator';

const initialState = {
  incomes: [],
  incomesTotalSum: 0
}

const incomeReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_INCOME:
      if (valueValidator(action.payload.sum)) {
        return Object.assign({}, state, {
          incomes: state.incomes.concat(action.payload)
        })
      }
      return state;

    default:
      return state;
  }
}
export default incomeReducer;