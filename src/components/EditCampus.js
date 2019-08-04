import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './EditCampus.css';
    
class EditCampus extends Component {
    constructor(props) {
        super(props)
        this.state = {
            campus : this.props.campus,
            newname : this.props.campus.name,
            newaddress : this.props.campus.address
        }
      }
    campusNameChange =(event)=>{
        this.setState({ newname: event.target.value})
    }
    campusAddressChange =(event)=>{
        this.setState({ newaddress: event.target.value})
    }
    render(){
        return (
            <div>
                <h1 className ="headline">
                Edit Campus
                </h1>
                <div className="surroundForm">
                    {console.log(this.state.campus)}
                    <form className = "singlecampusForm">
                        <table>
                        <tbody>
                        <tr>
                            <td><img src={this.state.campus.imageUrl} width="150" height="150"></img> </td>    
                            <th className = "heading"><input className="campusNameField" value={this.state.newname} onChange={this.campusNameChange} type="text" placeholder={this.state.campus.name}></input></th>
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
                                    <p className="addressinfo"> Address: <input className="campusAddressField" value={this.state.newaddress} onChange={this.campusAddressChange} type="text" placeholder={this.state.campus.address}></input></p>
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