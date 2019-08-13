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
    return {
        type: EDIT_CAMPUS,
        payload: campuses
    }
}
const removeCampus = (campuses, id) => {
    return {
        type: REMOVE_CAMPUS,
        payload: campuses
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

export const removeCampusThunk = (campuses, id) => async (dispatch) => {
    await axios.delete(`https://crud-ntsj.herokuapp.com/api/campuses/${id}`)
    await axios.get(`https://crud-ntsj.herokuapp.com/api/campuses`)
    .then(res => {
        console.log(res)
      dispatch(removeCampus(res.data));
    })
    .catch(err => {
      console.log(err);
    })
}

export const editCampusThunk = (campuses, name, address, id) =>  async (dispatch) => {
    let response = await axios.put(`https://crud-ntsj.herokuapp.com/api/campuses/${id}`, {
        name,
        address
    });
    console.log(response.status)
    axios.get(`https://crud-ntsj.herokuapp.com/api/campuses`)
    .then(res => {
        console.log(res)
      dispatch(editCampus(res.data));
    })
    .catch(err => {
      console.log(err);
    })
}

    export const addCampusThunk = (campus) => async (dispatch) => {   
      await axios.post('https://crud-ntsj.herokuapp.com/api/campuses', {
      name: campus.name,
      imageUrl: campus.imageUrl,
      address: campus.address
        })
        await axios.get(`https://crud-ntsj.herokuapp.com/api/campuses`)
        .then(res => {
         console.log(res)
         dispatch(addCampus(res.data));
        })
        .catch(err => {
        console.log(err);
        })
    
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
            return action.payload;
        case SINGLE_CAMPUS:
            return state.filter(campus => campus.id === action.payload);
        case EDIT_CAMPUS:
            return action.payload;
        default:
            return state;
    }
}