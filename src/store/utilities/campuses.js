// ACTION TYPES;
import axios from 'axios';
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
    axios.get(`https://crud-ntsj.herokuapp.com/api/campuses`)
    .then(res => {
        console.log(res)
      dispatch(fetchCampuses(res.data));
    })
    .catch(err => {
      console.log(err);
    })
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