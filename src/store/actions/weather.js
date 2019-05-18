import * as actionTypes from './actionTypes';

export const getCurrentWeather = () => {
    return{
        type: actionTypes.GET_CURRENT_WEATHER
    }
};