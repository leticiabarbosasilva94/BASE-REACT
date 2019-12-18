import { call, put, takeLatest, all } from 'redux-saga/effects';
import * as actions from './actions';
import * as types from '../types';

function youDontNeedMe(msg = 'Hello') {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(msg);
    }, 3000);
  });
}

function* exampleSagaRequest({ exampleData }) {
  const response = yield call(youDontNeedMe, exampleData);
  yield put(actions.exampleActionSuccess(response));
}

export default all([
  takeLatest(types.EXAMPLE_TYPE_REQUEST, exampleSagaRequest)
]);
