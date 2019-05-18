import { takeEvery, all } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";

import { getCurrentWeather } from './weather';

export function* watchWeatherSaga() {
    yield all([
        takeEvery(actionTypes.GET_CURRENT_WEATHER, getCurrentWeather),
    ]);
}