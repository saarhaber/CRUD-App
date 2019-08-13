import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import './AddStudent.css';

class AddStudent extends Component {
  constructor () {
    super()
    this.state = {
      user: {
        firstName: '',
        lastName: ''
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

  handleSubmit = (submit) => {
    submit.preventDefault()
    const studentToAdd = {
      "id": this.props.students.length + 1,
      "firstName": this.state.firstName,
      "lastName": this.state.lastName,
      "imageUrl": "https://picsum.photos/200/300",
      "campus": "none"
    }
    this.props.addStudent(studentToAdd)
    console.log(studentToAdd);
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
            <label htmlFor="firstName">Student First Name: </label>
            <input type="text" name="firstName" onChange={this.handleChangeFirst} value={this.state.firstName} /> <br></br>
            <label htmlFor="lastName">Student Last Name: </label> 
            <input type="text" name="lastName" onChange={this.handleChangeLast} value={this.state.lastName} />
            
          </div>
          <button>Add Student</button>
        </form>
      </div>
    )
  }
}

export default AddStudent;