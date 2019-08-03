import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import './AddStudent.css';

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
    const studentToAdd = {
      "id": this.props.students.length + 1,
      "name": this.state.studentName,
      "imageUrl": "https://i.imgur.com/N9Koe2G.jpg"
    }
    this.props.addStudent(studentToAdd)
    alert("Successfully added Student")
  }

  render () {
    return (
      <div className="Content">
                <h2 className = "headline">Add Student </h2>
          <div>
            <Link className="leftLink" to="/AllStudents">Back to All Students</Link>
          </div>
        <form onSubmit={this.handleSubmit} className="form">
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