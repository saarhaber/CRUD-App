import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import {Link} from 'react-router-dom';
import SingleCampus from './SingleCampus';
import './AllCampuses.css';

const AllCampuses = (props) => {
  const { campuses, removeCampus, grabCampus} = props;
    return (
      <div className ="allCampusContainer">
          <h1 className = "headline">All Campuses </h1>
          <div className="Links">
          <Link className="leftLink" to="/">Home</Link><Link className="rightLink" to="/addcampus">Add Campus</Link>
          </div>
          <div className ="campusContainer">
            {campuses.map(campus => 
                <div>
                  <table className = "campusTable">
                    <tr>
                    <img src={campus.imageUrl} width="75" height="75"></img><th>{campus.name}</th>
                    </tr>
                    <tr>
                      <td>
                        <button className ="button" onClick={() => removeCampus(campus.id)}>Remove</button>
                      </td> 
                      <td>
                      <Link className="buttonV" onClick={() => grabCampus(campus)} to={`/campus/${campus.id}`}>View</Link>
                      </td>
                    </tr>
                  </table>
                </div>
                )}
              </div>
          </div>
    )
  }


export default AllCampuses;