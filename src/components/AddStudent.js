import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class AddStudent extends Component {
  constructor () {
    super()
    this.state = {
      user: {
        studentName: ''
      },
      redirect: false
    }
  }

  handleChange = (change) => {
    this.setState({studentName: change.value})
  }

  handleSubmit = (submit) => {
    submit.preventDefault()
    console.log("Submit works, Student with name ",this.state.studentName," would have been added.")
  }

  render () {
    return (
      <div className="Content">
          <div>
            <Link to="/AllStudents">Back to All Students</Link>
          </div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="studentName">Student Name: </label>
            <input type="text" name="studentName" onChange={this.handleChange} value={this.state.studentName} />
          </div>
          <button>Add Student</button>
        </form>
      </div>
    )
  }
}

export default AddStudent;