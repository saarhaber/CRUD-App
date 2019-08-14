import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import './AddCampus.css';

class AddCampus extends Component {
  constructor () {
    super()
    this.state = {
      campusName: '',
      campusAddress: '',
      campusImageurl: `https://picsum.photos/id/${Math.floor(Math.random() * 200)}/300/300`,
      redirect: false
    }
  }

  handleChangeName = (event) => {
    this.setState({campusName: event.target.value})
  }
  handleChangeAddress = (event) => {
    this.setState({campusAddress: event.target.value})
  }

  handleSubmit = (submit) => {
    submit.preventDefault()
    const campusToAdd = {
      "name": this.state.campusName,
      "imageUrl": this.state.campusImageurl,
      "address": this.state.campusAddress
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
            <input type="text" name="campusName" onChange={this.handleChangeName} />
          </div>
          <div>
            <label htmlFor="campusAddress">Campus Address: </label>
            <input type="text" name="campusAddress" onChange={this.handleChangeAddress} />
          </div>
          <button>Add Campus</button>
        </form>
      </div>
    )
  }
}

export default AddCampus;