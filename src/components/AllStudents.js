import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import SingleStudent from "./SingleStudent";
    
class AllStudents extends Component {
    render() {
    return (
        <div className="Content">
            <h1>
            This is the All Students page and it works
            </h1>
            <p><Link to="/">Home</Link></p>
            <p><Link to="/addStudent">Add Student</Link></p>
        </div>
    );
    }
}
    
export default AllStudents;