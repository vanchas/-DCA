const moment = require('moment');

export default class ExpensesService {
  static apiPath = '/api/v1/expenses'

  static findAllExpenses() {
    return fetch(ExpensesService.apiPath)
      .then(response => response.json())
      .catch(error => {
        console.log('error', error);
        return [];
      })
  }

  static createExpense(sum, comment, type) {
    return fetch(`${ExpensesService.apiPath}`, {
      method: 'POST',
      body: JSON.stringify({
        sum,
        comment,
        type,
        date: moment().format('MMMM Do YYYY')
      }),
      headers: {"Content-Type": "application/json"}
    });
  }
}