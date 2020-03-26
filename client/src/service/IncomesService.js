const moment = require('moment');

export default class IncomesService {
    static apiPath = '/api/v1/incomes'

    static findAllIncomes() {
        return fetch(IncomesService.apiPath)
            .then(response => response.json())
            .catch(error => {
                console.log('error', error);
                return [];
            })
    }

    static createIncome(sum, comment) {
        return fetch(`${IncomesService.apiPath}`, {
            method: 'POST',
            body: JSON.stringify({
              sum,
              comment,
              date: moment().format('MMMM Do YYYY')
            }),
            headers: {"Content-Type": "application/json"}
          });
    }
}