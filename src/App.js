import React, { Component } from 'react';
import './App.css';

import { connect } from "react-redux";
import AppView from "./AppView"
import {fetchStudentsThunk, removeStudentThunk, addStudentThunk } from "./store/utilities/students";


class AppContainer extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  componentDidMount() {
    this.props.fetchAllStudents();
  }

  removeStudent = (id) => {
    this.props.removeStudent(id);
  }

  addStudent = (student) => {
    this.props.addStudent(student);
  }

  render() {
    return (
      <AppView students={this.props.students} removeStudent={this.removeStudent} addStudent={this.addStudent} />
    )
  }
}

const mapState = (state) => {
  return {
    counter: state.counter,
    students: state.students
  }
}

const mapDispatch = (dispatch) => {
  return {
    fetchAllStudents: () => dispatch(fetchStudentsThunk()),
    removeStudent: (id) => dispatch(removeStudentThunk(id)),
    addStudent: (student) => dispatch(addStudentThunk(student))
  }
}
export default connect(mapState, mapDispatch)(AppContainer);
