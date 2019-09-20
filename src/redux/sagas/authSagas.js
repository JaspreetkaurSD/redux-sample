import { put, takeLatest, all, call } from 'redux-saga/effects';

import * as API from '../services';

function* asyncLogin(payload) {

    const service = yield call(API.login, payload.params);

    if(service.response) {
        yield put({ type: 'AUTH_FULLFILLED', response: service.response })
    } else {
        yield put({ type: 'AUTH_REJECTED', error: service.error })
    }

}

export const authSagas = [
    takeLatest('AUTH_PENDING', asyncLogin )
]
    