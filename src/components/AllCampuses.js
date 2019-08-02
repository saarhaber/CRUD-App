import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import {Link} from 'react-router-dom';

class AllCampuses extends Component {
  constructor () {
    super()
    this.state = {
      
    }
  }
  render () {
    return (
      <div className="Content">
          <h1> This is all Campuses page and it works</h1>
          <p><Link to="/">Home</Link></p>
          <p><Link to="/addcampus">Add Campus</Link></p>
      </div>
    )
  }
}

export default AllCampuses;