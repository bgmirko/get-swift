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