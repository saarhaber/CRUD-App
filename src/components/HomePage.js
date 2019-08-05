import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './HomePage.css'

class HomePage extends Component {
    render() {
    return (
        <div >
            <h1 className="HomePageHeadline">
            Home
            </h1>
            <p className="Mid"><Link className="leftLinkH" to="/allcampuses">All Campuses</Link>Welcome<Link className="rightLinkH"to="/AllStudents">All Students</Link></p>
            <div className="midtext">
            <p>
                On this website you'll be able to view campuses and students where you can add, view, edit, or remove any campus or students.
            </p>
            <p>
                This website will be using Node, Express, React, Redux, PostgreSQL, and Sequelize, to build a RESTful full-stack web application to manage students and campuses.
            </p>
            </div>
        </div>
    );
    }
}
    
export default HomePage;