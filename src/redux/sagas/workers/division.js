import { call, put } from 'redux-saga/effects'

import {
  CREATE_DIVISION_ERROR_ACTION,
  LIST_DIVISIONS_SUCCESS_ACTION,
  
  LIST_DIVISIONS_ERROR_ACTION,
} from '../../actions/division'

import * as Api from '../../../services/division.service'

import { getCustomError } from '../../../utils/Api-helper'



export function* list() {
  try {
    const resp = yield call(Api.list)
    yield put(LIST_DIVISIONS_SUCCESS_ACTION(resp.data))
  } catch (error) {
    yield put(LIST_DIVISIONS_ERROR_ACTION(getCustomError(error)))
  }
}

export function* create(action) {
  try {
    const payload = action.payload

    const resp = yield call(Api.create, payload)

    yield* list()

    console.log(resp)
  } catch (error) {
    yield put(CREATE_DIVISION_ERROR_ACTION(getCustomError(error)))
  }
}
