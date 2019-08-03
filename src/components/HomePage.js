import React, { Component } from 'react';
import {Link} from 'react-router-dom';
    
class HomePage extends Component {
    render() {
    return (
        <div className="Content">
            <h1>
            This is the home page and it works
            </h1>
            <p><Link to="/allcampuses">All Campuses</Link></p>
            <p><Link to="/allStudents">All Students</Link></p>
        </div>
    );
    }
}
    
export default HomePage;