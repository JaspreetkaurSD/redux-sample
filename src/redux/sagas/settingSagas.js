import { put, takeLatest, all, call } from 'redux-saga/effects';

import * as API from '../services';

function* asyncSetting(payload) {

    const service = yield call(API.settings, payload.params);
    
    if(service.response) {
        yield put({ type: 'SETTING_FULLFILLED', response: service.response })
    } else {
        yield put({ type: 'SETTING_REJECTED', error: service.error })
    }

}

export const settingSagas = [
    takeLatest('SETTING_PENDING', asyncSetting )
]
