import { takeEvery, put, call } from 'redux-saga/effects';
import { LOAD_INCOME, setNewIncome } from './actions';

function fetchIncome() {
  return fetch('/api/v1/incomes')
    .then(response => response.json())
    .catch(error => {
      console.log('error', error);
      return [];
    })
}

export function* watcherLoadIncome() {
  yield takeEvery(LOAD_INCOME, workerLoadIncome);
}

function* workerLoadIncome() {
  const data = yield call(fetchIncome);

  yield put(setNewIncome(data));
}