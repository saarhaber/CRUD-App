// import React, { Component } from 'react';
import React from 'react';
import {Link} from 'react-router-dom';
// import SingleStudent from "./SingleStudent";
import './AllStudents.css';
    

const AllStudents = (props) => {
    // const { students, removeStudent, addStudent } = props;
    const { students, removeStudent} = props;
    return (
        <div className="allStudentsContainer">
            <h1 className = "headline">All Students</h1>
            <div className="Links">
            <Link className="leftLink" to="/">Home</Link><Link className="rightLink" to="/addStudent">Add Student</Link>
            </div>
            <div className ="studentContainer">
            {students.map(student => 
                <div>
                  <table className = "studentTable">
                    <tr>
                    <img src={student.imageUrl} width="75" height="75" alt=""></img><th>{student.name}</th>
                    </tr>
                      <td>
                        <button className ="button" onClick={() => removeStudent(student.id)}>Remove</button>
                      </td>
                      <td>
                      <button className ="button" onClick={console.log("THIS SHOULD BE GOING INTO SINGLE STUDENT VIEW")}>View</button>
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

    
export default AllStudents;