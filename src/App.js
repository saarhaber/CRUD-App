import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import {fetchStudentsThunk, removeStudentThunk, addStudentThunk, singleStudentThunk, editStudentThunk } from "./store/utilities/students";
import {fetchCampusesThunk, removeCampusThunk, addCampusThunk, singleCampusThunk, editCampusThunk} from "./store/utilities/campuses";
import {grabCampusThunk} from "./store/utilities/singlecampus";
import {grabStudentThunk} from "./store/utilities/singlestudent";
import { itemsFetchData } from './store/utilities/actions/items';
//PAGE IMPORTS

import HomePage from './components/HomePage';
import AllCampuses from './components/AllCampuses';
import AddCampus from './components/AddCampus';
import SingleCampus from './components/SingleCampus';
import AllStudents from './components/AllStudents';
import AddStudent from './components/AddStudent';
import EditCampus from './components/EditCampus';
import SingleStudent from './components/SingleStudent';
import EditStudent from './components/EditStudent';


class AppContainer extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  componentDidMount() {
    this.props.fetchAllStudents();
    this.props.fetchAllCampuses();
    this.props.fetchData(`https://crud-ntsj.herokuapp.com/api/campuses`);
  }

  editCampus =(campuses, name, address, id)=> {
    this.props.editCampus(campuses, name, address, id);
  }
  editStudent =(students, firstName, lastName, id)=> {
    this.props.editStudent(students, firstName, lastName, id);
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
  singleStudent = (id) => {
    this.props.singleStudent(id);
  }
  grabStudent = (student) => {
    this.props.grabStudent(student);
  }
  render() {
    const HomeComponent = () => (<HomePage/>);
    const AllCampusesComponent = () => (<AllCampuses students={this.props.students} campuses={this.props.campuses} removeCampus={this.removeCampus} addCampus={this.addCampus} grabCampus={this.grabCampus}/>);
    const AddCampusComponent = () => (<AddCampus campuses = {this.props.campuses} addCampus={this.addCampus}/>);
    const AddStudentComponent = () => (<AddStudent students = {this.props.students} addStudent={this.addStudent}/>);
    const AllStudentsComponent = () => (<AllStudents students={this.props.students} removeStudent={this.removeStudent} addStudent={this.addStudent} grabStudent={this.grabStudent}/>);
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={HomeComponent} />
          <Route exact path="/allcampuses" render={AllCampusesComponent}/>
          <Route exact path="/addcampus" render={AddCampusComponent}/>
          <Route exact path="/addStudent" render={AddStudentComponent}/>
          <Route exact path="/campus/:id" render={(props)=> <SingleCampus {...props} students={this.props.students} campuses={this.props.campuses} campus ={this.props.singlecampus} 
          removeStudent={this.removeStudent} addStudent={this.addStudent} grabCampus={this.grabCampus}/>}/>
          <Route exact path="/student/:id" render={(props)=> <SingleStudent {...props} student ={this.props.singlestudent}/>}/>
          <Route exact path="/AllStudents" render={AllStudentsComponent}/>
          <Route exact path="/campus/edit/:id" render={(props)=> <EditCampus {...props} campus ={this.props.singlecampus} campuses ={this.props.campuses} editCampus={this.editCampus}/>}/>
         <Route exact path="/student/edit/:id" render={(props)=> <EditStudent {...props} student ={this.props.singlestudent} students ={this.props.students} editStudent={this.editStudent}/>}/>
        </Switch>
      </Router>
    )
  }
}

const mapState = (state) => {
  return {
    students: state.students,
    campuses: state.campuses,
    singlecampus: state.singlecampus,
    singlestudent: state.singlestudent,
    items: state.items,
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading
  }
}

const mapDispatch = (dispatch) => {
  return {
    editCampus: (campuses, name, address, id) => dispatch(editCampusThunk(campuses, name, address, id)),
    editStudent: (students, firstName, lastName, id) => dispatch(editStudentThunk(students, firstName, lastName, id)),
    fetchAllStudents: () => dispatch(fetchStudentsThunk()),
    removeStudent: ( id) => dispatch(removeStudentThunk( id)),
    addStudent: (student) => dispatch(addStudentThunk(student)),
    fetchAllCampuses: () => dispatch(fetchCampusesThunk()),
    removeCampus: (campuses, id) => dispatch(removeCampusThunk(campuses, id)),
    addCampus: (campus) => dispatch(addCampusThunk(campus)),
    singleCampus: (id) => dispatch(singleCampusThunk(id)),
    grabCampus: (campus) => dispatch(grabCampusThunk(campus)),
    singleStudent: (id) => dispatch(singleStudentThunk(id)),
    grabStudent: (student) => dispatch(grabStudentThunk(student)),fetchData: (url) => dispatch(itemsFetchData(url))
    ,
  }
}
export default connect(mapState, mapDispatch)(AppContainer);