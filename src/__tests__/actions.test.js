import {
  setNewExpense,
  setNewIncome,
  ADD_EXPENSE,
  ADD_INCOME
} from "../store/actions";

describe('Action creator functions', () => {

  it('setNewExpense should add an action object', () => {
    expect(setNewExpense(20, 'test', 'food')).toEqual({
      type: ADD_EXPENSE,
      payload: {
        sum: 20,
        comment: 'test',
        type: 'food'
      }
    });
  })

  it('setNewIncomes should add an action object', () => {
    expect(setNewIncome(20, 'test', '00.00.00')).toEqual({
      type: ADD_INCOME,
      payload: {
        comment: 'test',
        date: '00.00.00',
        sum: 20
      }
    });
  })
})