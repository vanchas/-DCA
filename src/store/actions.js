export const ADD_EXPENSE = 'ADD_EXPENSE';
export const ADD_INCOME = 'ADD_INCOME';

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

// export const LOAD_STATE_EXPENSES_ACTION = 'LOAD_STATE_EXPENSES_ACTION';
// export const LOAD_STATE_INCOMES_ACTION = 'LOAD_STATE_INCOMES_ACTION';

// export const loadStateIncomesAction = incomes => {
//   return {
//     type: LOAD_STATE_INCOMES_ACTION,
//     payload: incomes
//   }
// }

// export const loadStateExpensesAction = expenses => {
//   return {
//     type: LOAD_STATE_EXPENSES_ACTION,
//     payload: expenses
//   }
// }