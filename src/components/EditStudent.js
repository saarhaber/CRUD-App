import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './EditStudent.css';
import axios from 'axios';
    
class EditStudent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            student : this.props.student,
            newfirstname : this.props.student.firstName,
            newlastname : this.props.student.lastName,
            newgpa : this.props.student.gpa,
            newcampus : this.props.student.CampusId
        }
      }
    studentFirstNameChange =(event)=>{
        this.setState({ newfirstname: event.target.value})
    }
    studentLastNameChange =(event)=>{
        this.setState({ newlastname: event.target.value})
    }
    studentGPAChange =(event)=>{
        this.setState({ newgpa: event.target.value})
    }
    studentCampusChange =(event)=>{
        console.log("THIS IS RUNNING RUNNNNNING",event.target.value)
        this.setState({ newcampus : event.target.value})
    }
    handleEdit = (submit) => {
        submit.preventDefault()
        const studentToEdit = {
          "firstName": this.state.newfirstname,
          "lastName": this.state.newlastname,
          "gpa": this.state.newgpa,
          "id": this.state.student.id,
          "campusId": this.state.newcampus
        }
        this.props.editStudent(studentToEdit)
        alert("Saved!")
      }
      async componentDidMount(){
        try{
            let {data} = await axios.get(`https://crud-ntsj.herokuapp.com/api/students/${this.props.match.params.id}`)
            this.setState({
                student:data,
                newfirstname:data.firstName,
                newlastname:data.lastName,
                newgpa:data.gpa
                
            })
            console.log(data)
        }
        catch(err){
            console.log(err);
        }
    }
    render(){
        return (
            <div>
                <h1 className ="headline">
                Edit Student
                </h1>
                <Link className="leftLink" to={`/student/${this.state.student.id}`}>Back</Link>
                <div className="surroundForm">
                    <form className = "singlestudentForm">
                        <table>
                        <tbody>
                        <tr>
                            <td><img src={this.state.student.imageUrl} width="150" height="150"></img> </td>    
                            <th className = "firstName">
                                First Name: <input className="studentfirstNameField" value={this.state.newfirstname} onChange={this.studentFirstNameChange} type="text" placeholder={this.state.student.firstName}></input>
                                </th>
                                <th>
                                Last Name: <input className="studentlastNameField" value={this.state.newlastname} onChange={this.studentLastNameChange} type="text" placeholder={this.state.student.lastName}></input>
                                </th>
                                <th>
                                GPA: <input type="number" className="studentGPAField" value={this.state.newgpa} onChange={this.studentGPAChange} type="text" placeholder={this.state.student.gpa}></input>
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
                        <tr>
                            <td>

                            </td>
                            {this.state.student.campus ? <div> Attending: {this.state.student.campus.name} ID: {this.state.student.campus.id} </div>: "Not Enrolled"}
                            <td>
                        <select onChange={this.studentCampusChange}>
                            {this.props.campuses.map(campus => 
                            <option value={campus.id}>{campus.name + " ID:" + campus.id}</option>
                            )}
                            <option value={0}>None</option>
                        </select>
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