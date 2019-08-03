// Action Type:
const GRAB_CAMPUS = "GRAB_CAMPUS";

// Action Creator:
const grabCampus = (campus) => {
    return {
        type: GRAB_CAMPUS,
        payload: campus
    }
}

// Thunk Creator:
export const grabCampusThunk = (campus) => (dispatch) => {
    let resolvedActionObject = grabCampus(campus); 
    dispatch(resolvedActionObject);
}

// Reducer Function:
export default (state = {}, action) => {
    switch (action.type) {
        case GRAB_CAMPUS:
            return action.payload
        default:
            return state;
    }
}