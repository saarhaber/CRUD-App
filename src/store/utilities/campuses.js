// ACTION TYPES;
const FETCH_CAMPUSES = "FETCH_CAMPUSES";
const REMOVE_CAMPUS = "REMOVE_CAMPUS";
const ADD_CAMPUS = "ADD_CAMPUS";
const SINGLE_CAMPUS = "SINGLE_CAMPUS"
const EDIT_CAMPUS = "EDIT_CAMPUS";
// ACTION CREATOR;
const fetchCampuses = (campuses) => {
    return {
        type: FETCH_CAMPUSES,
        payload: campuses
    }
}

const editCampus = (campuses, name, address, id) => {
    var temp = [...campuses]
    for(let i = 0; i < temp.length; i++){
        if(temp[i].id === id){
            temp[i].name = name;
            temp[i].address = address;
        }
    }
    return {
        type: EDIT_CAMPUS,
        payload: temp
    }
}
const removeCampus = (campuses, id) => {
    var temp = [...campuses]
    temp = temp.filter(campus => campus.id !== id)
    for(let i = id-1; i < temp.length; i++){
        temp[i].id--;
    }
    return {
        type: REMOVE_CAMPUS,
        payload: temp
    }
}

const addCampus = (campus) => {
    return {
        type: ADD_CAMPUS,
        payload: campus
    }
}

const singleCampus = (id) => {
    return {
        type: SINGLE_CAMPUS,
        payload: id
    }
}
// THUNK CREATOR;
export const fetchCampusesThunk = () => (dispatch) => {
    const arrayOfCampusesFromAPI = [
        {
        "id": 1,
        "name": "HUNTER COLLEGE",
        "imageUrl": "https://d32ogoqmya1dw8.cloudfront.net/images/liberalarts/capstones/hunter/1454363445.v7.jpg",
        "address":"695 Park Ave, New York, NY 10065"
        
        },
        {
        "id": 2,
        "name": "BARUCH COLLEGE",
        "imageUrl": "https://specials-images.forbesimg.com/imageserve/55ae7abce4b05c2c343212c1/300x300.jpg?fit=scale&background=000000",
        "address":"695 Park Ave, New York, NY 10065"
        },
        {
            "id": 3,
            "name": "FAKE HUNTER COLLEGE",
            "imageUrl": "https://d32ogoqmya1dw8.cloudfront.net/images/liberalarts/capstones/hunter/1454363445.v7.jpg",
            "address":"695 Park Ave, New York, NY 10065"
            
        },
        {
            "id": 4,
            "name": "BETTER HUNTER COLLEGE",
            "imageUrl": "https://d32ogoqmya1dw8.cloudfront.net/images/liberalarts/capstones/hunter/1454363445.v7.jpg",
            "address":"695 Park Ave, New York, NY 10065"
            
        },
        {
            "id": 5,
            "name": "ANTI SOCIAL COLLEGE",
            "imageUrl": "https://d32ogoqmya1dw8.cloudfront.net/images/liberalarts/capstones/hunter/1454363445.v7.jpg",
            "address":"695 Park Ave, New York, NY 10065"
            
        }
    ]

    dispatch(fetchCampuses(arrayOfCampusesFromAPI))
}

export const removeCampusThunk = (campuses, id) => (dispatch) => {
    let resolvedActionObject = removeCampus(campuses, id); 
    dispatch(resolvedActionObject);
}

export const editCampusThunk = (campuses, name, address, id) => (dispatch) => {
    let resolvedActionObject = editCampus(campuses, name, address, id);
    dispatch(resolvedActionObject);
}
export const addCampusThunk = (campus) => (dispatch) => {
    let resolvedActionObject = addCampus(campus); 
    dispatch(resolvedActionObject);
}

export const singleCampusThunk = (id) => (dispatch) => {
    let resolvedActionObject = singleCampus(id); 
    dispatch(resolvedActionObject);
}

// REDUCER FUNCTION;
export default (state = [], action) => {
    switch (action.type) {
        case FETCH_CAMPUSES:
            return action.payload;
        case REMOVE_CAMPUS:
            return action.payload;
        case ADD_CAMPUS:
            return [...state, action.payload];
        case SINGLE_CAMPUS:
            return state.filter(campus => campus.id === action.payload);
        case EDIT_CAMPUS:
            return action.payload;
        default:
            return state;
    }
}