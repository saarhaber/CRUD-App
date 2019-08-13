import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './EditCampus.css';
import axios from 'axios';

class EditCampus extends Component {
    constructor(props) {
        super(props)
        console.log(this.props)
        this.state = {
            campus : this.props.campus,
            newname : this.props.campus.name,
            newaddress : this.props.campus.address
        }
      }

    async componentDidMount(){
        try{
            let {data} = await axios.get(`https://crud-ntsj.herokuapp.com/api/campuses/${this.props.match.params.id}`)
            this.setState({
                campus:data,
                newname:data.name,
                newaddress:data.address
            })
            console.log(data)
        }
        catch(err){
            console.log(err);
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
                        <tr>
                <select>
                    {this.props.students.map(student => 
                    <option value={student.id}>{student.firstName + " " + student.lastName}</option>
                    )}
                </select>
                </tr>
                <tr>
                                <div className="studentList">
                                    {this.state.campus.students ? 
                                    <p className="studentTitle">
                                    {this.state.campus.students.length > 0 ? 
                                    <p className = "studentTitle"> Students:
                                    {this.state.campus.students.map(student => 
                                        <div key={student.id}>
                                            <table className = "AstudentTable">
                                                <tbody>
                                                    <tr className="topBar">
                                                        <td>
                                                            <img src={student.imageUrl} width="75" height="75" alt=""></img>
                                                        </td>
                                                        <td className="allStudentName">
                                                            <p>{student.firstName} {student.lastName}</p>
                                                        </td>
                                                        <td>
                                                            <button className ="remove" /*onClick={() => removeStudent(student.id)}*/>x</button>
                                                        </td>
                                                    </tr>
                                                    <tr className>
                                                        <td>
                                                        <Link className="buttonVStudent" /*onClick={() => grabStudent(student)}*/ to={`/student/${student.id}`}>View</Link>
                                                        </td>
                                                        <td>
                                                        </td>
                                                        <td className="studentID">
                                                            ID: {student.id}
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        )}</p> : <p className="studentTitle">There are no students currently registered to this campus.</p>}
                                        
                                        </p>
                                    : ''} 
                                    </div>
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