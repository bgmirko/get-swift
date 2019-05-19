import { takeEvery, all } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";

import { getCurrentWeather, getForecastWeather } from './weather';

export function* watchWeatherSaga(action) {
    yield all([
        takeEvery(actionTypes.GET_CURRENT_WEATHER, getCurrentWeather),
        takeEvery(actionTypes.GET_FORECAST_WEATHER, getForecastWeather)
    ]);
}