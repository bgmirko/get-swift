import { takeEvery, all } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";

import { getCurrentWeather, getForecastWeather, getUWIndex } from './weather';

export function* watchWeatherSaga(action) {
    yield all([
        takeEvery(actionTypes.GET_CURRENT_WEATHER, getCurrentWeather),
        takeEvery(actionTypes.GET_FORECAST_WEATHER, getForecastWeather),
        takeEvery(actionTypes.GET_UW_INDEX, getUWIndex)
    ]);
}