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

function* loginRequest({ exampleData }) {
  const response = yield call(youDontNeedMe, exampleData);
  yield put(actions.loginSuccess(response));
}

export default all([takeLatest(types.LOGIN_REQUEST, loginRequest)]);
