export const ADD_EXPENSE = 'ADD_EXPENSE';
export const ADD_INCOME = 'ADD_INCOME';
export const LOAD_INCOME = 'LOAD_INCOME';
export const LOAD_EXPENSE = 'LOAD_EXPENSE';

export const setNewExpense = (sum, comment, type) => {
  return {
    type: ADD_EXPENSE,
    payload: {
      sum,
      comment,
      type
    }
  }
}

export const setNewIncome = (sum, comment, date) => {
  return {
    type: ADD_INCOME,
    payload: {
      sum,
      comment,
      date
    }
  }
}

export const loadIncome = () => {
  return {
    type: LOAD_INCOME
  }
}