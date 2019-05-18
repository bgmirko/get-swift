import * as actionTypes from '../actions/actionTypes';


const initialState = {

}

const getCurrentWeatherSuccess = (state, action) => {
    return {
        ...state,
        currentWeather: action.payload
    }
}



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_CURRENT_WEATHER_SUCCESS: return getCurrentWeatherSuccess(state, action);
        default: return state;
    }
}


export default reducer;