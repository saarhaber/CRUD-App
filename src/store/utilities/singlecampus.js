// Action Type:
const GRAB_CAMPUS = "GRAB_CAMPUS";
const GRAB_FROM_ID = "GRAB_FROM_ID";

// Action Creator:
const grabCampus = (campus) => {
    return {
        type: GRAB_CAMPUS,
        payload: campus
    }
}

const grabFromID = (campuses, id) => {
    const temp = [...campuses]
    return {
        type: GRAB_FROM_ID,
        payload: temp.filter(campus => campus.id === id)[0]
    }
}
// Thunk Creator:
export const grabCampusThunk = (campus) => (dispatch) => {
    let resolvedActionObject = grabCampus(campus); 
    dispatch(resolvedActionObject);
}

export const grabFromIDThunk  = (campuses, id) => (dispatch) => {
    let resolvedActionObject = grabFromID(campuses, id); 
    dispatch(resolvedActionObject);
}

// Reducer Function:
export default (state = {}, action) => {
    switch (action.type) {
        case GRAB_CAMPUS:
            return action.payload
        case GRAB_FROM_ID:
            return action.payload
        default:
            return state;
    }
}