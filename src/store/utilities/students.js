import axios from 'axios';
// ACTION TYPES;
const FETCH_STUDENTS = "FETCH_STUDENTS";
const REMOVE_STUDENT = "REMOVE_STUDENT";
const ADD_STUDENT = "ADD_STUDENT";
const SINGLE_STUDENT = "SINGLE_STUDENT"
const EDIT_STUDENT = "EDIT_STUDENT";
// ACTION CREATOR;
const fetchStudents = (students) => {
    return {
        type: FETCH_STUDENTS,
        payload: students
    }
}
const editStudent = (students, firstName, lastName, id) => {
    var temp = [...students]
    for(let i = 0; i < temp.length; i++){
        if(temp[i].id === id){
            temp[i].firstName = firstName;
            temp[i].lastName = lastName
        }
    }
    return {
        type: EDIT_STUDENT,
        payload: temp
    }
}

const removeStudent = (id) => {
    return {
        type: REMOVE_STUDENT,
        payload: id
    }
}

const addStudent = (student) => {
    return {
        type: ADD_STUDENT,
        payload: student
    }
}

const singleStudent = (id) => {
    return {
        type: SINGLE_STUDENT,
        payload: id
    }
}

// THUNK CREATOR;
export const fetchStudentsThunk = () => (dispatch) => {
    axios.get(`https://crud-ntsj.herokuapp.com/api/students`)
    .then(res => {
        console.log(res)
      dispatch(fetchStudents(res.data));
    })
    .catch(err => {
      console.log(err);
    })
}

export const removeStudentThunk = (id) => (dispatch) => {
    let resolvedActionObject = removeStudent(id); 
    dispatch(resolvedActionObject);
}

export const editStudentThunk = (students, firstName, lastName, id) => (dispatch) => {
    let resolvedActionObject = editStudent(students, firstName, lastName, id);
    dispatch(resolvedActionObject);
}

export const addStudentThunk = (student) => (dispatch) => {
    let resolvedActionObject = addStudent(student); 
    dispatch(resolvedActionObject);
}
export const singleStudentThunk = (id) => (dispatch) => {
    let resolvedActionObject = singleStudent(id); 
    dispatch(resolvedActionObject);
}

// REDUCER FUNCTION;
export default (state = [], action) => {
    switch (action.type) {
        case FETCH_STUDENTS:
            return action.payload;
        case REMOVE_STUDENT:
            return state.filter(student => student.id !== action.payload);
        case ADD_STUDENT:
            return [...state, action.payload];
        case SINGLE_STUDENT:
            return state.filter(student => student.id === action.payload);
        case EDIT_STUDENT:
            return action.payload;
        default:
            return state;
    }
}