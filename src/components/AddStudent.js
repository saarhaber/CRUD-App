import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import './AddStudent.css';
import axios from 'axios';

class AddStudent extends Component {
  constructor () {
    super()
    this.state = {
      user: {
        firstName: '',
        lastName: '',
        gpa: 0
      },
      redirect: false
    }
  }

  handleChangeFirst = (change) => {
    this.setState({firstName: change.target.value})
  }
  handleChangeLast = (change) => {
    this.setState({lastName: change.target.value})
  }
  handleChangeGPA = (change) => {
    this.setState({gpa: change.target.value})
  }

  handleSubmit = (submit) => {
    submit.preventDefault()
    const studentToAdd = {
      "firstName": this.state.firstName,
      "lastName": this.state.lastName,
      "imageUrl": `https://picsum.photos/id/${this.props.students[this.props.students.length-1].id}/300/300`,
      "gpa": this.state.gpa,
      "campus": "none"
    }
    this.props.addStudent(studentToAdd)
    console.log(studentToAdd);
    alert("Successfully added Student")
  }

  render () {
    axios.get('https://picsum.photos/200/300')
    .then(res=> {
      console.log(res)
    })
    return (
      <div className="Content">
                <h2 className = "headline">Add Student </h2>
          <div>
            <Link className="leftLink" to="/AllStudents">Back to All Students</Link>
          </div>
        <form onSubmit={this.handleSubmit} className="form">
          <div>
            <label htmlFor="firstName">Student First Name: </label>
            <input type="text" name="firstName" onChange={this.handleChangeFirst} value={this.state.firstName} /> <br></br>
            <label htmlFor="lastName">Student Last Name: </label> 
            <input type="text" name="lastName" onChange={this.handleChangeLast} value={this.state.lastName} /> <br></br>
            <label htmlFor="lastName">Student GPA: </label> 
            <input type="number" step="0.1" name="gpa" onChange={this.handleChangeGPA} value={this.state.gpa} />
            
          </div>
          <button>Add Student</button>
        </form>
      </div>
    )
  }
}

export default AddStudent;