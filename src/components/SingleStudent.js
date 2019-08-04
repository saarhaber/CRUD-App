import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './SingleStudent.css';
    
class SingleStudent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            student : this.props.student
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
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
    
export default SingleStudent;