import axios from 'axios';
import * as ActionTypes from '../actions';
import { put } from "redux-saga/effects";

const urlProxy = `https://cors-anywhere.herokuapp.com/`;
const apiKey = 'ed7aeb32c44c8e78e7d7c6a9b5379906';

export function* getCurrentWeather(action){
    const cityName = action.payload;
    const url = `api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
    try {
        const response = yield axios({
            method: 'get',
            url: `${urlProxy}${url}`
        });
        yield put(ActionTypes.getCurrentWeatherSuccess(response.data));
    } catch (error) {
        yield put(ActionTypes.getCurrentWeatherError(error));
    }
}

export function* getForecastWeather(action){
    const cityName = action.payload;
    const url = `api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`;
    try {
        const response = yield axios({
            method: 'get',
            url: `${urlProxy}${url}`
        });
        yield put(ActionTypes.getForecastWeatherSuccess(response.data));
    } catch (error) {
        yield put(ActionTypes.getForecastWeatherError(error));
    }
}
