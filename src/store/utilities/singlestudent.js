// Action Type:
const GRAB_STUDENT = "GRAB_STUDENT";

// Action Creator:
const grabStudent = (student) => {
    return {
        type: GRAB_STUDENT,
        payload: student
    }
}

// Thunk Creator:
export const grabStudentThunk = (student) => (dispatch) => {
    let resolvedActionObject = grabStudent(student); 
    dispatch(resolvedActionObject);
}

// Reducer Function:
export default (state = {}, action) => {
    switch (action.type) {
        case GRAB_STUDENT:
            return action.payload
        default:
            return state;
    }
}