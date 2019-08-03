import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './EditCampus.css';
    
class EditCampus extends Component {
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
                Edit Campus
                </h1>
                <Link className="leftLink" to={`/campus/${this.state.campus.id}`}>Back</Link>
                <div className="surroundForm">
                    {console.log(this.state.campus)}
                    <form className = "singlecampusForm">
                        <table>
                        <tbody>
                        <tr>
                            <td><img src={this.state.campus.imageUrl} width="150" height="150"></img> </td>    
                            <th className = "heading"> {this.state.campus.name}</th> 
                            <td>
                                <tr>
                                    <td><Link className="save">Save</Link></td>
                                </tr>
                                <tr>
                                    <td><Link className="cancel" to={`/campus/${this.state.campus.id}`}>Cancel</Link></td>
                                </tr>
                            </td>
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
                    </form>
                </div>
            </div>
        );
    }
}
    
export default EditCampus;