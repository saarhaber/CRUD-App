import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import {Link} from 'react-router-dom';
import SingleCampus from './SingleCampus';

const AllCampuses = (props) => {
  const { campuses, removeCampus, addCampus} = props;
    return (
      <div className="Content">
          <h1> This is all Campuses page and it works</h1>
          <p><Link to="/">Home</Link></p>
          <p><Link to="/addcampus">Add Campus</Link></p>
          
          {campuses.map(campus => 
          <div>
            <table className = "campusTable">
              <tr>
                <th>{campus.name}</th><img src={campus.imageUrl} width="100" height="100"></img>
              </tr>
                <button >Remove</button>
              <tr>
                <td></td>
              </tr>
            </table>
          </div>
          )}
      </div>
    )
  }


export default AllCampuses;