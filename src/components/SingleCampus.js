import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './SingleCampus.css';
    
class SingleCampus extends Component {
    constructor(props) {
        super(props)
        this.state = {
            campus : this.props.campus
        }
      }
    render(){
        return (
            <div>
                <h1 className ="headline">
                Campus Details
                </h1>
                <Link className="leftLink"to="/allcampuses">All Campuses</Link>
                <div className="surroundTableSingle">
                    {console.log(this.state.campus)}
                    <table className = "singlecampusTable">
                        <tbody>
                        <tr>
                            <td><img src={this.state.campus.imageUrl} width="150" height="150"></img> </td>    
                            <th className = "heading"> {this.state.campus.name}</th> <Link className="editButton" to={`/campus/edit/${this.state.campus.id}`}>Edit</Link>  
                        </tr>
                        <tr>
                            <td >
                                
                            </td>
                            <td  className="information">
                                <tr >
                                    <p className="addressinfo"> Address: {this.state.campus.address}</p>
                                </tr>
                            
                            </td>
                            <td >
                            
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
    
export default SingleCampus;