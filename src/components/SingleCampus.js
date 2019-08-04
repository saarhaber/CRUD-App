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

      //checks to see if campus is empty (id is undefined)
      //if it is, set it to campusarray's campus at index [URL_ID - 1] 
      //if not, do nothing (to prevent an infinite loop)
      componentDidUpdate(){
        if(this.state.campus.id === undefined){
            this.setState({
                campus : this.props.campuses[this.props.match.params.id-1]
         })
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
                    <table className = "singlecampusTable">
                        <tbody>
                        <tr>
                            <td><img src={this.state.campus.imageUrl} width="150" height="150" alt=""></img></td>    
                            <th className = "heading"> {this.state.campus.name}</th> <Link className="editButton" to={`/campus/edit/${this.state.campus.id}`}>Edit</Link>  
                        </tr>
                        <tr>
                            <td >
                                
                            </td>
                            <td  className="information">
                                <table>
                                    <tbody>
                                <tr >
                                    <p className="addressinfo"> Address: {this.state.campus.address}</p>
                                </tr>
                                </tbody>
                                </table>
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