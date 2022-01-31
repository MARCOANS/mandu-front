import { takeLatest } from 'redux-saga/effects';

import * as WORKERS from "../workers/division";
import {divisionActionTypes } from '../../action-types/division';

export function* divisionWatchSaga(){
    yield takeLatest(divisionActionTypes.CREATE_DIVISION_REQUESTED,WORKERS.create);
    yield takeLatest(divisionActionTypes.LIST_DIVISIONS_REQUESTED,WORKERS.list);
   
}