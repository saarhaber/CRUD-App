import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import {fetchStudentsThunk, removeStudentThunk, addStudentThunk } from "./store/utilities/students";
import {fetchCampusesThunk, removeCampusThunk, addCampusThunk, singleCampusThunk } from "./store/utilities/campuses";
import {grabCampusThunk, grabFromIDThunk} from "./store/utilities/singlecampus";

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
    //this.props.grabFromID(this.props.campuses, this)
  }

  removeStudent = (id) => {
    this.props.removeStudent(id);
  }

  addStudent = (student) => {
    this.props.addStudent(student);
  }

  removeCampus = (campuses, id) => {
    this.props.removeCampus(campuses, id);
  }

  addCampus = (campus) => {
    this.props.addCampus(campus)
  }

  singleCampus = (id) => {
    this.props.singleCampus(id);
  }
  grabCampus = (campus) => {
    this.props.grabCampus(campus);
  }
  grabFromID = (campuses, id) => {
    this.props.grabFromID(campuses, id);
  }
  render() {
    const HomeComponent = () => (<HomePage/>);
    const AllCampusesComponent = () => (<AllCampuses campuses={this.props.campuses} removeCampus={this.removeCampus} addCampus={this.addCampus} grabCampus={this.grabCampus} grabFromID = {this.grabFromID}/>);
    const AddCampusComponent = () => (<AddCampus campuses = {this.props.campuses} addCampus={this.addCampus}/>);
    const AddStudentComponent = () => (<AddStudent students = {this.props.students} addStudent={this.addStudent}/>);
    const AllStudentsComponent = () => (<AllStudents students={this.props.students} removeStudent={this.removeStudent} addStudent={this.addStudent} />);
    const SingleCampusComponent = () => (<SingleCampus campuses = {this.props.campuses} grabFromID={this.grabFromID} />);
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={HomeComponent} />
          <Route exact path="/allcampuses" render={AllCampusesComponent}/>
          <Route exact path="/addcampus" render={AddCampusComponent}/>
          <Route exact path="/addStudent" render={AddStudentComponent}/>
          <Route exact path="/campus/:id" render={(props)=> <SingleCampus {...props} fetchAllCampuses = {this.props.fetchAllCampuses} fetchAllStudents = 
          {this.props.fetchAllStudents} campuses ={this.props.campuses} campus ={this.props.singlecampus} grabFromID={this.grabFromID}/>}/>
        
         {/* <Route exact path="/campus/:id" render={SingleCampusComponent}/> */}
          <Route exact path="/AllStudents" render={AllStudentsComponent}/>
        </Switch>
      </Router>
    )
  }
}

const mapState = (state) => {
  return {
    students: state.students,
    campuses: state.campuses,
    singlecampus: state.singlecampus
  }
}

const mapDispatch = (dispatch) => {
  return {
    fetchAllStudents: () => dispatch(fetchStudentsThunk()),
    removeStudent: (id) => dispatch(removeStudentThunk(id)),
    addStudent: (student) => dispatch(addStudentThunk(student)),
    fetchAllCampuses: () => dispatch(fetchCampusesThunk()),
    removeCampus: (campuses, id) => dispatch(removeCampusThunk(campuses, id)),
    addCampus: (campus) => dispatch(addCampusThunk(campus)),
    singleCampus: (id) => dispatch(singleCampusThunk(id)),
    grabCampus: (campus) => dispatch(grabCampusThunk(campus)),
    grabFromID: (campuses, id) => dispatch(grabFromIDThunk(campuses, id))
  }
}
export default connect(mapState, mapDispatch)(AppContainer);