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
    return {
        type: EDIT_STUDENT,
        payload: students
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
export const fetchStudentsThunk = () => async (dispatch) => {
    await axios.get(`https://crud-ntsj.herokuapp.com/api/students`)
    .then(res => {
        console.log(res)
      dispatch(fetchStudents(res.data));
    })
    .catch(err => {
      console.log(err);
    })
}

export const removeStudentThunk = (id) => async (dispatch) => {
    await axios.delete(`https://crud-ntsj.herokuapp.com/api/students/${id}`)
    axios.get(`https://crud-ntsj.herokuapp.com/api/students`)
    .then(res => {
        console.log(res)
      dispatch(removeStudent(res.data));
    })
    .catch(err => {
      console.log(err);
    })
}

export const editStudentThunk = (students, firstName, lastName, id) => async (dispatch) => {
    let response = await axios.put(`https://crud-ntsj.herokuapp.com/api/students/${id}`, {
        firstName,
        lastName,
    });
    console.log(response.status)
    axios.get(`https://crud-ntsj.herokuapp.com/api/students`)
    .then(res => {
        console.log(res)
      dispatch(editStudent(res.data));
    })
    .catch(err => {
      console.log(err);
    })
}

export const addStudentThunk = (student) => async (dispatch) => {
    await axios.post('https://crud-ntsj.herokuapp.com/api/students', {
        firstName: student.firstName,
        lastName: student.lastName,
        imageUrl: student.imageUrl,

          })
          await axios.get(`https://crud-ntsj.herokuapp.com/api/students`)
          .then(res => {
           console.log(res)
           dispatch(addStudent(res.data));
          })
          .catch(err => {
          console.log(err);
          })
      
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
            return action.payload;
        case ADD_STUDENT:
            return action.payload;
        case SINGLE_STUDENT:
            return state.filter(student => student.id === action.payload);
        case EDIT_STUDENT:
            return action.payload;
        default:
            return state;
    }
}