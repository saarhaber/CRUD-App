import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import SingleStudent from "./SingleStudent";
import './AllStudents.css';
    

const AllStudents = (props) => {
    const { students, removeStudent, grabStudent } = props;
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
                    <img src={student.imageUrl} width="75" height="75"></img>
                    <th className="allStudentName"> Name: {student.firstName} {student.lastName}</th>
                    <th className="studentID">ID: {student.id}</th>
                    </tr>
                      <td>
                        <button className ="button" onClick={() => removeStudent( student.id)}>Remove</button>
                      </td>
                      <td>
                      <Link className="buttonV" onClick={() => grabStudent(student)} to={`/student/${student.id}`}>View</Link>
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