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


      componentDidUpdate(){
        if(this.state.campus.id === undefined){
            this.setState({
                campus : this.props.campuses[this.props.match.params.id-1],
                newname : this.props.campuses
                [this.props.match.params.id-1].name,
                newaddress : this.props.campuses
                [this.props.match.params.id-1].address
         })
    }
    }

    campusNameChange =(event)=>{
        this.setState({ newname: event.target.value})
    }
    campusAddressChange =(event)=>{
        this.setState({ newaddress: event.target.value})
    }
    handleEdit = (submit) => {
        console.log("CAMPUSES: ",this.props.campuses," NEW NAME: ",this.state.newname," NEW ADDRESS: ", this.state.newaddress," CURRENT ID: ",this.props.campus.id)
        this.props.editCampus(this.props.campuses, this.state.newname, this.state.newaddress, this.props.campus.id)
        alert("Saved!")
      }
    render(){
        return (
            <div>
                <h1 className ="headline">
                Edit Campus
                </h1>
                <Link className="leftLink" to={`/campus/${this.state.campus.id}`}>Back</Link>
                <div className="surroundForm">
                    {console.log("ALL PROPS ARE HEREEE:",this.props)}
                    <form className = "singlecampusForm">
                        <table>
                        <tbody>
                        <tr>
                            <td><img src={this.state.campus.imageUrl} width="150" height="150" alt=""></img> </td>    
                            <th className = "heading"><input className="campusNameField" value={this.state.newname} onChange={this.campusNameChange} type="text" placeholder={this.state.campus.name}></input></th>
                            <td>
                                <tr>
                                    <td><Link className="save" onClick={this.handleEdit}>Save</Link></td>
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