import React, { Component } from 'react';
import {Link} from 'react-router-dom';
    
class SingleCampus extends Component {
    constructor(props) {
        super(props)
        this.state = {
            campus : {}
        }
      }
    render(){
        return (
            <div className="Content">
                <h1>
                Campus Details
                </h1>
                <p><Link to="/allcampuses">All Campuses</Link></p>
                <div>
                    <p>CURRENT CAMPUS ID IS {this.props.match.params.id}</p>
                </div>
            </div>
        );
    }
}
    
export default SingleCampus;