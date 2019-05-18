import { takeEvery, all } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";

import { getCurrentWeather } from './weather';

export function* watchWeatherSaga(action) {
    console.log(action);
    yield all([
        takeEvery(actionTypes.GET_CURRENT_WEATHER, getCurrentWeather)
    ]);
}