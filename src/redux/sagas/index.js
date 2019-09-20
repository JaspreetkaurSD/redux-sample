import { all } from 'redux-saga/effects';

// index.js
import { authSagas } from './authSagas';
import { settingSagas } from './settingSagas';

export default function* rootSaga() {
  yield all([
    ...authSagas,
    ...settingSagas
  ])
}