import * as actionTypes from '../actions/actionTypes';


const initialState = {

}

// const fetchAllTasksSuccess = (state, action) => {
//     return {
//         ...state,
//         tasks: action.tasks
//     }
// }



const reducer = (state = initialState, action) => {
    switch (action.type) {
    //    case actionTypes.GET_CURRENT_WEATHER: return fetchAllTasksSuccess(state, action);
        default: return state;
    }
}


export default reducer;