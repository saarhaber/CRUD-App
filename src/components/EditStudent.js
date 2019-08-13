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
            newgpa : this.props.student.gpa
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
    handleEdit = (submit) => {
        this.props.editStudent(this.props.students, this.state.newfirstname, this.state.newlastName, this.props.student.id)
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
                        </tbody>
                        </table>
                    </form>
                </div>
            </div>
        );
    }
}
    
export default EditStudent;