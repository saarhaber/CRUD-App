//import React, { Component } from 'react'
import React from 'react'
//import { Redirect } from 'react-router-dom'
import {Link} from 'react-router-dom';
// import SingleCampus from './SingleCampus';
import './AllCampuses.css';
import { itemsFetchData } from './../store/utilities/actions/items';
const AllCampuses = (props) => {
  const { campuses, removeCampus, grabCampus} = props;
    return (
      <div className ="allCampusContainer" key="campuscontainer">
          <h1 className = "headline">All Campuses </h1>
          <div className="Links" key="links">
          <Link className="leftLink" to="/">Home</Link><Link className="rightLink" to="/addcampus">Add Campus</Link>
          </div>
          <div className ="allcampusContainer" key="innercontainer">
            {campuses.map(campus => 
                <div key={campus.id}>
                  <table className = "AcampusTable">
                  <tbody>
                    <tr className="topBar">
                      <td>
                        <img src={campus.imageUrl} width="75" height="75" alt=""></img>
                      </td>
                      <td className="allCampusName">
                        <p>{campus.name}</p>
                      </td>
                      <td>
                        <button className ="remove" onClick={() => removeCampus(campuses, campus.id)}>x</button>
                      </td>
                    </tr>
                    <tr className="address">
                      <td>
                      <Link className="buttonVCampus" onClick={() => grabCampus(campus)} to={`/campus/${campus.id}`}>View</Link>
                      </td>
                      <td>
                      <p>{campus.address}</p>
                      </td>
                      <td className="campusID">
                        ID: {campus.id}
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
                )}
              </div>
          </div>
    )
  }


export default AllCampuses;