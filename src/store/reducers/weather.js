import * as actionTypes from '../actions/actionTypes';


const initialState = {
    currentWeather: null,
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


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_CURRENT_WEATHER: return getCurrentWeather(state);
        case actionTypes.GET_CURRENT_WEATHER_SUCCESS: return getCurrentWeatherSuccess(state, action);
        case actionTypes.GET_CURRENT_WEATHER_ERROR: return getCurrentWeatherError(state);
        default: return state;
    }
}


export default reducer;