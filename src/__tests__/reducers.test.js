import expenseReducer from '../store/expenseReducer';
import { setNewExpense, setNewIncome } from '../store/actions';
import moment from 'moment';
import incomeReducer from '../store/incomeReducer';

describe('Redusers functions', () => {

  it('Expenses reducer should return new state with 1 new expense in type\'s storage', () => {
    const initialState = {
      expenses: [
        { type: 'food', storage: [] },
        { type: 'fun', storage: [] },
        { type: 'medicine', storage: [] },
        { type: 'daily', storage: [] },
        { type: 'study', storage: [] }
      ],
      expensesTotalSum: 0
    };
    const action = setNewExpense(20, 'test', 'food');
    expect(expenseReducer(initialState, action)).toEqual({
      expenses: [
        { type: 'food', storage: [{
          sum: 20,
          comment: 'test',
          date: moment().format("MMM Do YY"),
          type: 'food'
        }] },
        { type: 'fun', storage: [] },
        { type: 'medicine', storage: [] },
        { type: 'daily', storage: [] },
        { type: 'study', storage: [] }
      ],
      expensesTotalSum: 20
    });
  })

  it('Incomes reducer should return new state with 1 new income', () => {
    const initialState = {
      incomes: [],
      incomesTotalSum: 0
    }
    const action = setNewIncome(339, 'test', '22.22.22');
    expect(incomeReducer(initialState, action)).toEqual({
      incomes: [
        {
          sum: 339,
          comment: 'test',
          date: '22.22.22'
        }
      ],
      incomesTotalSum: 339
    })
  })

  it('Incomes length should incremen', () => {
    const initialState = {
      incomes: [
        { sum: 11, comment: 'test income', date: '99.22.99' },
        { sum: 777, comment: 'income test', date: '22.99.22' }
      ],
      incomesTotalSum: 788
    }
    const action = setNewIncome(33, 'test', '22.22.22');
    const newState = incomeReducer(initialState, action);
    expect(newState.incomes.length).toEqual(3);
  })
})