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

  handleChange = (change) => {
    this.setState({campusName: change.value})
  }

  handleSubmit = (submit) => {
    submit.preventDefault()
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
            <input type="text" name="campusName" onChange={this.handleChange} value={this.state.campusName} />
          </div>
          <button>Add Campus</button>
        </form>
      </div>
    )
  }
}

export default AddCampus;