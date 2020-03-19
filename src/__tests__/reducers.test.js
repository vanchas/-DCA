import { setNewExpense, setNewIncome } from "../store/actions";
import expenseReducer from "../store/expenseReducer";
import incomeReducer from "../store/incomeReducer";

describe('Expenses reducer function', () => {

  it('expenses length should stay to be 5 after add new expense', () => {
    let state = {
      expenses: [
        {
          type: 'fun', storage: [
            { sum: 2, comment: 'test 2', date: '20.03.20' }
          ]
        },
        { type: 'medicine', storage: [] },
        { type: 'daily', storage: [] },
        { type: 'study', storage: [] },
        { type: 'food', storage: [] },
      ]
    }
    const action = setNewExpense(3, 'test 3', 'food');
    const updatedState = expenseReducer(state, action);
    expect(updatedState.expenses.length).toEqual(5);
  })

  it('expense with type fun should increment after adding', () => {
    let state = {
      expenses: [
        { type: 'medicine', storage: [] },
        { type: 'daily', storage: [] },
        {
          type: 'fun', storage: [
            { sum: 2, comment: 'test 2', date: '20.03.20' }
          ]
        },
        { type: 'study', storage: [] },
        { type: 'food', storage: [] },
      ]
    }
    const action = setNewExpense(3, 'test 3', 'fun');
    const updatedState = expenseReducer(state, action);
    expect(updatedState.expenses[2].storage.length).toEqual(2);
  })

  it('expensesTotalSum should be amount of all test action here', () => {
    let state = {
      expenses: [
        { type: 'medicine', storage: [] },
        { type: 'daily', storage: [] },
        { type: 'fun', storage: [] },
        { type: 'study', storage: [] },
        { type: 'food', storage: [] },
      ],
      expensesTotalSum: 0
    }
    const action = setNewExpense(660, 'test', 'fun');
    const updatedState = expenseReducer(state, action);
    expect(updatedState.expensesTotalSum).toEqual(666);
  })
})

describe('Incomes reducer function', () => {
  let state;

  beforeEach(() => {
    state = {
      incomes: [
        { sum: 42, comment: 'salary', date: 'now' }
      ],
      incomesTotalSum: 0
    }
  })

  it('after adding income length should increment', () => {
    const action = setNewIncome(30, 'test', '20.20.20');
    const updatedState = incomeReducer(state, action);
    expect(updatedState.incomes.length).toEqual(2);
  })

  it('after adding income, incomesTotalSum should be amount of all test sums', () => {
    const action = setNewIncome(30, 'test', '20.20.20');
    const updatedState = incomeReducer(state, action);
    expect(updatedState.incomesTotalSum).toEqual(60);
  })
})