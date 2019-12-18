import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import exampleSaga from './exampleModule/sagas';

export default function* rootSaga() {
  return yield all([exampleSaga, auth]);
}
