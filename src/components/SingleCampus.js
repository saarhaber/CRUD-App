import React, { Component } from 'react';
import {Link} from 'react-router-dom';
    
class SingleCampus extends Component {
    render() {
    return (
        <div className="Content">
            <h1>
            This is the Single Campus page and it works
            </h1>
            <p><Link to="/SingleCampuses">Campus</Link></p>
        </div>
    );
    }
}
    
export default SingleCampus;