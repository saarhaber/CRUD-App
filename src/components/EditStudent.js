import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './EditStudent.css';
    
class EditStudent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            student : this.props.student,
            newfirstname : this.props.student.firstName,
            newlastName : this.props.student.lastName
        }
      }
    studentFirstNameChange =(event)=>{
        this.setState({ newfirstname: event.target.value})
    }
    studentLastNameChange =(event)=>{
        this.setState({ newlastName: event.target.value})
    }
    handleEdit = (submit) => {
        this.props.editStudent(this.props.students, this.state.newfirstname, this.state.newlastName, this.props.student.id)
        alert("Saved!")
      }
    render(){
        return (
            <div>
                <h1 className ="headline">
                Edit Student
                </h1>
                <Link className="leftLink" to={`/student/${this.state.student.id}`}>Back</Link>
                <div className="surroundForm">
                    <form className = "singlestudnetForm">
                        <table>
                        <tbody>
                        <tr>
                            <td><img src={this.state.student.imageUrl} width="150" height="150"></img> </td>    
                            <th className = "firstName">
                                <input className="studentfirstNameField" value={this.state.newfirstname} onChange={this.studentFirstNameChange} type="text" placeholder={this.state.student.firstName}></input>
                                </th>
                                <th>
                                <input className="studentlastNameField" value={this.state.newlastname} onChange={this.studentLastNameChange} type="text" placeholder={this.state.student.lastName}></input>
                                </th>
                            <td>
                                <tr>
                                    <td><Link className="save" onClick={this.handleEdit}>Save</Link></td>
                                </tr>
                                <tr>
                                    <td><Link className="cancel" to={`/student/${this.state.student.id}`}>Cancel</Link></td>
                                </tr>
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
    
export default EditStudent;