import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import {Link} from 'react-router-dom';
import SingleCampus from './SingleCampus';
import './AllCampuses.css';

const AllCampuses = (props) => {
  const { campuses, removeCampus, addCampus} = props;
    return (
      <div className ="allCampusContainer">
          <h1> This is all Campuses page and it works</h1>
          <p><Link to="/">Home</Link></p>
          <p><Link to="/addcampus">Add Campus</Link></p>
          <div className ="campusContainer">
            {campuses.map(campus => 
                <div>
                  <table className = "campusTable">
                    <tr>
                    <img src={campus.imageUrl} width="75" height="75"></img><th>{campus.name}</th>
                    </tr>
                      <td>
                        <button className ="button" onClick={() => removeCampus(campus.id)}>Remove</button>
                      </td>
                      <td>
                      <button className ="button" onClick={console.log("THIS SHOULD BE GOING INTO SINGLE CAMPUS VIEW")}>View</button>
                      </td>
                    <tr>
                      <td></td>
                    </tr>
                  </table>
                </div>
                )}
              </div>
          </div>
    )
  }


export default AllCampuses;