import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import {Link} from 'react-router-dom';

const AllCampuses = (props) => {
  const { campuses, removeCampus, addCampus} = props;

  const campusToAdd = {
    "id": 1,
    "name": "BARUCH COLLEGE",
    "imageUrl": "https://specials-images.forbesimg.com/imageserve/55ae7abce4b05c2c343212c1/300x300.jpg?fit=scale&background=000000",
    }

    return (
      <div className="Content">
          <h1> This is all Campuses page and it works</h1>
          <p><Link to="/">Home</Link></p>
          <p><Link to="/addcampus">Add Campus</Link></p>
          
          {campuses.map(campus => <div><img src={campus.imageUrl} width="100" height="100" onClick={() => addCampus(campusToAdd)}></img></div>)}
      </div>
    )
  }


export default AllCampuses;