import * as actionTypes from './actionTypes';

export const getCurrentWeather = (searchParams) => {
    return{
        type: actionTypes.GET_CURRENT_WEATHER,
        payload: searchParams
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

export const getUWIndex = (lat, lon) => {
    return{
        type: actionTypes.GET_UW_INDEX,
        payload: {
            lat,
            lon
        }
    }
}

export const getUWIndexSuccess = (data) => {
    return{
        type: actionTypes.GET_UW_INDEX_SUCCESS,
        payload: data
    }
}

export const getUWIndexError = (error) => {
    return{
        type: actionTypes.GET_UW_INDEX_ERROR
    }
}