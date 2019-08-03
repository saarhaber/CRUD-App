import React, { Component } from 'react'
import {Link} from 'react-router-dom';

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
      "id": this.props.campuses.length,
      "name": this.state.campusName,
      "imageUrl": "https://c8.alamy.com/comp/D0XA1N/college-students-walking-and-playing-guitar-on-campus-in-autumn-D0XA1N.jpg"
    }
    this.props.addCampus(campusToAdd)
    console.log("Submit works, Campus with name ",this.state.campusName," would have been added.")
  }

  render () {
    return (
      <div className="Content">
          <div>
            <Link to="/AllCampuses">Back to All Campuses</Link>
          </div>
        <form onSubmit={this.handleSubmit}>
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