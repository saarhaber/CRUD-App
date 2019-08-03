import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import AppView from "./AppView"
import {fetchStudentsThunk, removeStudentThunk, addStudentThunk } from "./store/utilities/students";
import {fetchCampusesThunk, removeCampusThunk, addCampusThunk } from "./store/utilities/campuses";

//PAGE IMPORTS

import HomePage from './components/HomePage';
import AllCampuses from './components/AllCampuses';
import AddCampus from './components/AddCampus';
import SingleCampus from './components/SingleCampus';
import AllStudents from './components/AllStudents';
import AddStudent from './components/AddStudent';

console.log(Route)
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
    const HomeComponent = () => (<HomePage/>);
    const AllCampusesComponent = () => (<AllCampuses campuses=
      {this.props.campuses} removeCampus={this.removeCampus} addCampus={this.addCampus}/>);
    const AddCampusComponent = () => (<AddCampus campuses = {this.props.campuses} addCampus={this.addCampus}/>);
    const AddStudentComponent = () => (<AddStudent />);
    const SingleCampusComponent = () => (<SingleCampus />);
    const AllStudentsComponent = () => (<AllStudents />);

    return (
      <Router basename ="/reactrouter">
        <Route exact path="/" render={HomeComponent} />
        <Route exact path="/allcampuses" render={AllCampusesComponent}/>
        <Route exact path="/addcampus" render={AddCampusComponent}/>
        <Route exact path="/addStudent" render={AddStudentComponent}/>
        <Route exact path="/SingleCampus" render={SingleCampusComponent}/>
        <Route exact path="/AllStudents" render={AllStudentsComponent}/>
      </Router>
    )
  }
}

const mapState = (state) => {
  return {
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