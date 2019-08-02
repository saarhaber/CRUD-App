// ACTION TYPES;
const FETCH_CAMPUSES = "FETCH_CAMPUSES";
const REMOVE_CAMPUS = "REMOVE_CAMPUS";
const ADD_CAMPUS = "ADD_CAMPUS";

// ACTION CREATOR;
const fetchCampuses = (campuses) => {
    return {
        type: FETCH_CAMPUSES,
        payload: campuses
    }
}

const removeCampus = (id) => {
    return {
        type: REMOVE_CAMPUS,
        payload: id
    }
}

const addCampus = (campus) => {
    return {
        type: ADD_CAMPUS,
        payload: campus
    }
}

// THUNK CREATOR;
export const fetchCampusesThunk = () => (dispatch) => {
    const arrayOfCampusesFromAPI = [
        {
        "id": 1,
        "name": "HUNTER COLLEGE",
        "imageUrl": "https://d32ogoqmya1dw8.cloudfront.net/images/liberalarts/capstones/hunter/1454363445.v7.jpg",
        
        },
        {
        "id": 1,
        "name": "BARUCH COLLEGE",
        "imageUrl": "https://specials-images.forbesimg.com/imageserve/55ae7abce4b05c2c343212c1/300x300.jpg?fit=scale&background=000000",
        }
    ]

    dispatch(fetchCampuses(arrayOfCampusesFromAPI))
}

export const removeCampusThunk = (id) => (dispatch) => {
    let resolvedActionObject = removeCampus(id); 
    dispatch(resolvedActionObject);
}

export const addCampusThunk = (campus) => (dispatch) => {
    let resolvedActionObject = addCampus(campus); 
    dispatch(resolvedActionObject);
}

// REDUCER FUNCTION;
export default (state = [], action) => {
    switch (action.type) {
        case FETCH_CAMPUSES:
            return action.payload;
        case REMOVE_CAMPUS:
            return state.filter(campus => campus.id !== action.payload);
        case ADD_CAMPUS:
            return [...state, action.payload]
        default:
            return state;
    }
}