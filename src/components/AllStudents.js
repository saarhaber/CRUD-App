// import React, { Component } from 'react';
import React from 'react';
import {Link} from 'react-router-dom';
// import SingleStudent from "./SingleStudent";
import './AllStudents.css';

const AllStudents = (props) => {
    const { students, removeStudent, grabStudent } = props;
    console.log(props, "OIAWHDCOIAWHCDOIAWH");
    
    return (
      <div className ="allStudentContainer" key="studentcontainer">
      <h1 className = "headline">All Students </h1>
      <div className="Links" key="links">
      <Link className="leftLink" to="/">Home</Link><Link className="rightLink" to="/addstudent">Add Student</Link>
      </div>
      <div className ="allstudentContainer" key="innercontainer">
        {students.map(student => 
            <div key={student.id}>
              {console.log(student.campus)}
              <table className = "AstudentTable">
              <tbody>
                <tr className="topBar">
                  <td>
                    <img src={student.imageUrl} width="75" height="75" alt=""></img>
                  </td>
                  <td className="allStudentName">
                    <p>{student.firstName} {student.lastName}</p>
                  </td>
                  <td>
                    <button className ="remove" onClick={() => removeStudent(student.id)}>x</button>
                  </td>
                </tr>
                <tr className="address">
                  <td>
                  <Link className="buttonVStudent" onClick={() => grabStudent(student)} to={`/student/${student.id}`}>View</Link>
                  </td>
                  <td>
                    {student.campus ? student.campus.name : "No Campus Assigned"}
                  </td>
                  <td className="studentID">
                    ID: {student.id}
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

    
export default AllStudents;