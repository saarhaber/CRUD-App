import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import './AddCampus.css';

class AddCampus extends Component {
  constructor () {
    super()
    this.state = {
      user: {
        campusName: ''
      },
      redirect: false
    }
  }

  handleChange = (event) => {
    this.setState({campusName: event.target.value})
  }

  
  handleSubmit = (submit) => {
    submit.preventDefault()
    const campusToAdd = {
      "id": this.props.campuses.length + 1,
      "name": this.state.campusName,
      "imageUrl": "https://c8.alamy.com/comp/D0XA1N/college-students-walking-and-playing-guitar-on-campus-in-autumn-D0XA1N.jpg",
      "address":"695 Park Ave, New York, NY 10065"
    }
    this.props.addCampus(campusToAdd)
    alert("Successfully added Campus")
  }

  render () {
    return (
      <div className="Content">
        <h1 className = "headline">Add Campus </h1>
          <div>
            <Link className="leftLink" to="/AllCampuses">Back to All Campuses</Link>
          </div>
        <form onSubmit={this.handleSubmit} className="form">
          <div>
            <label htmlFor="campusName">Campus Name: </label>
            <input type="text" name="campusName" onChange={this.handleChange} />
          </div>
          <button>Add Campus</button>
        </form>
      </div>
    )
  }
}

export default AddCampus;