import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import {fetchStudentsThunk, removeStudentThunk, addStudentThunk } from "./store/utilities/students";
import {fetchCampusesThunk, removeCampusThunk, addCampusThunk, singleCampusThunk } from "./store/utilities/campuses";

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

  singleCampus = (id) => {
    this.props.singleCampus(id);
  }
  render() {
    const HomeComponent = () => (<HomePage/>);
    const AllCampusesComponent = () => (<AllCampuses campuses=
      {this.props.campuses} removeCampus={this.removeCampus} addCampus={this.addCampus} singleCampus={this.singleCampus}/>);
    const AddCampusComponent = () => (<AddCampus campuses = {this.props.campuses} addCampus={this.addCampus}/>);
    const AddStudentComponent = () => (<AddStudent students = {this.props.students} addStudent={this.addStudent}/>);
    const AllStudentsComponent = () => (<AllStudents students={this.props.students} removeStudent={this.removeStudent} addStudent={this.addStudent} />);
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={HomeComponent} />
          <Route exact path="/allcampuses" render={AllCampusesComponent}/>
          <Route exact path="/addcampus" render={AddCampusComponent}/>
          <Route exact path="/addStudent" render={AddStudentComponent}/>
          <Route exact path="/campus/:id" render={(props)=> <SingleCampus {...props}/>}/>/>
          <Route exact path="/AllStudents" render={AllStudentsComponent}/>
        </Switch>
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
    addCampus: (campus) => dispatch(addCampusThunk(campus)),
    singleCampus: (id) => dispatch(singleCampusThunk(id))
  }
}
export default connect(mapState, mapDispatch)(AppContainer);