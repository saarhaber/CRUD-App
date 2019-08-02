import React, { Component } from 'react';
import './App.css';

import { connect } from "react-redux";
import AppView from "./AppView"
import {fetchStudentsThunk, removeStudentThunk, addStudentThunk } from "./store/utilities/students";
import {fetchCampusesThunk, removeCampusThunk, addCampusThunk } from "./store/utilities/campuses";

class AppContainer extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  componentDidMount() {
    this.props.fetchAllStudents();
    this.props.fetchAllCampuses();
  }

  removeStudent = (id) => {
    this.props.removeStudent(id);
  }

  addStudent = (student) => {
    this.props.addStudent(student);
  }

  removeCampus = (id) => {
    this.props.removeCampus(id);
  }

  addCampus = (campus) => {
    this.props.addCampus(campus)
  }

  render() {
    return (
      <AppView students={this.props.students} removeStudent={this.removeStudent} addStudent={this.addStudent} campuses=
      {this.props.campuses} removeCampus={this.removeCampus} addCampus={this.addCampus} />
    )
  }
}

const mapState = (state) => {
  return {
    counter: state.counter,
    students: state.students,
    campuses: state.campuses
  }
}

const mapDispatch = (dispatch) => {
  return {
    fetchAllStudents: () => dispatch(fetchStudentsThunk()),
    removeStudent: (id) => dispatch(removeStudentThunk(id)),
    addStudent: (student) => dispatch(addStudentThunk(student)),
    fetchAllCampuses: () => dispatch(fetchCampusesThunk()),
    removeCampus: (id) => dispatch(removeCampusThunk(id)),
    addCampus: (campus) => dispatch(addCampusThunk(campus))
  }
}
export default connect(mapState, mapDispatch)(AppContainer);