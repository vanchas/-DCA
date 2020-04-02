var express = require('express');
const PORT = process.env.PORT || 4000;
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const database = {
    incomes: [],
    incomesTotalSum: 0,
    expenses: [
        { type: 'food', storage: [] },
        { type: 'fun', storage: [] },
        { type: 'medicine', storage: [] },
        { type: 'daily', storage: [] },
        { type: 'study', storage: [] }
    ],
    expensesTotalSum: 0
};

app.get('/api/v1/expenses', (req, res) => {
    let expensesSum = 0;
    database.expenses.map(exp => {
        return exp.storage.map(e => {
            return expensesSum += +e.sum;
        });
    });
    database.expensesTotalSum = expensesSum;
    res.send({
        expenses: database.expenses,
        expensesSum: database.expensesTotalSum
    });
});

app.get('/api/v1/incomes', (req, res) => {
    let incomesSum = 0;
    database.incomes.map(inc => incomesSum += +inc.sum);
    database.incomesTotalSum = incomesSum;
    res.send({
        incomes: database.incomes,
        incomesSum: database.incomesTotalSum
    });
});

app.post('/api/v1/incomes',
    (req, res) => {
        const newIncome = req.body;

        try {
            database.incomes.push(newIncome);
            return res.sendStatus(200);
        } catch (e) {
            console.error(e.message);
            res.status(400).send({ errorMessage: e.message });
        }
    });

app.post('/api/v1/expenses',
    (req, res) => {
        const newExpense = req.body;

        try {
            database.expenses.map(expense => {
                if (expense.type === req.body.type) {
                    expense.storage.push(newExpense);
                }
            });
            return res.sendStatus(200);
        } catch (e) {
            console.error(e.message);
            res.status(400).send({ errorMessage: e.message });
        }
    });

app.listen(PORT, () => {
    console.log('Server is listening on port 4000!');
});