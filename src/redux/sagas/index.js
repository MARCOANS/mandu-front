import { all } from 'redux-saga/effects';

import * as DIVISION from './watchers/division'
export default function* rootSaga(){
    yield all([
        DIVISION.divisionWatchSaga(),
    ]);
}