import * as actionTypes from './actionTypes';

export const getCurrentWeather = (city) => {
    return{
        type: actionTypes.GET_CURRENT_WEATHER,
        payload: city
    }
};

export const getCurrentWeatherSuccess = (data) => {
    return{
        type: actionTypes.GET_CURRENT_WEATHER_SUCCESS,
        payload: data
    }
};

export const getCurrentWeatherError = (error) => {
    return{
        type: actionTypes.GET_CURRENT_WEATHER_ERROR
    }
};

export const getForecastWeather = (city) => {
    return{
        type: actionTypes.GET_FORECAST_WEATHER,
        payload: city
    }
};

export const getForecastWeatherSuccess = (data) => {
    return{
        type: actionTypes.GET_FORECAST_WEATHER_SUCCESS,
        payload: data
    }
};

export const getForecastWeatherError = (error) => {
    return{
        type: actionTypes.GET_FORECAST_WEATHER_ERROR
    }
};