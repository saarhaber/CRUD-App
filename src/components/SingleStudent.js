import React, { Component } from 'react';
import {Link} from 'react-router-dom';
    
class SingleStudent extends Component {
    render() {
    return (
        <div className="Content">
            <h1>
            This is the Single Student page and it works
            </h1>
            <p><Link to="/SingleStudents">Student</Link></p>
        </div>
    );
    }
}
    
export default SingleStudent;