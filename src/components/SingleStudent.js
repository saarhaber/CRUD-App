import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './SingleStudent.css';
import Axios from 'axios';
    
class SingleStudent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            student : {
                firstName:"",
                lastName:"",
                campus : {
                    name: ""
                }
            }
        }
      }
    async componentDidMount(){
        try{
            let {data} = await Axios.get(`https://crud-ntsj.herokuapp.com/api/students/${this.props.match.params.id}`)
            this.setState({
                student:data
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
                Student Details
                </h1>
                <Link className="leftLink"to="/AllStudents">All Students</Link>
                <div className="surroundTableSingle">
                    <table className = "singlestudentTable">
                        <tbody>
                        <tr>
                            <td><img src={this.state.student.imageUrl} width="150" height="150"></img> </td>    
                            <th className = "heading"> {this.state.student.firstName} {this.state.student.lastName}</th> <Link className="editButton" to={`/student/edit/${this.state.student.id}`}>Edit</Link>  
                        </tr>
                        <tr>
                            <td>
                                <p className="cname">ID: {this.state.student.id}</p>
                            </td>
                            <td>
                                <p className="cname">Attends: {this.state.student.campus.name}</p>
                            </td>
                            <td>
                                <p className="cname">GPA:{this.state.student.gpa}</p>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
    
export default SingleStudent;