import * as actionTypes from '../actions/actionTypes';


const initialState = {
    currentWeather: null,
    forecastWeather: null,
    error: false
}

const getCurrentWeather = (state) => {
    return {
        ...state,
        currentWeather: null,
        dataLoading: true
    }
}

const getCurrentWeatherSuccess = (state, action) => {
    return {
        ...state,
        currentWeather: action.payload,
        dataLoading: false
    }
}

const getCurrentWeatherError = (state) => {
    return {
        ...state,
        currentWeather: null,
        dataLoading: false
    }
}

const getForecastWeather = (state) => {
    return {
        ...state,
        forecastWeather: null,
        dataLoading: true
    }
}

const getForecastWeatherSuccess = (state, action) => {
    return {
        ...state,
        forecastWeather: action.payload,
        dataLoading: false
    }
}

const getForecastWeatherError = (state) => {
    return {
        ...state,
        forecastWeather: null,
        dataLoading: false
    }
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_CURRENT_WEATHER: return getCurrentWeather(state);
        case actionTypes.GET_CURRENT_WEATHER_SUCCESS: return getCurrentWeatherSuccess(state, action);
        case actionTypes.GET_CURRENT_WEATHER_ERROR: return getCurrentWeatherError(state);
        case actionTypes.GET_FORECAST_WEATHER: return getForecastWeather(state);
        case actionTypes.GET_FORECAST_WEATHER_SUCCESS: return getForecastWeatherSuccess(state, action);
        case actionTypes.GET_FORECAST_WEATHER_ERROR: return getForecastWeatherError(state);
        default: return state;
    }
}


export default reducer;