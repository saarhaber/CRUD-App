import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './SingleCampus.css';
    
class SingleCampus extends Component {
    constructor(props) {
        super(props)
        this.state = {
            campus : this.props.campus,
            students : this.props.students,
            realstudents : []
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
    if(this.state.realstudents.length === 0){
        console.log("fired off");
        let temp = [...this.props.students];
        temp.filter(student => this.state.campus.id === student.campusId);
        console.log(temp.filter(student => this.state.campus.id !== student.campusId));
        this.setState({
            realstudents : temp.filter(student => this.state.campus.id !== student.campusId)
     })
}
    }

    test(){
        if(this.state.realstudents.length === 0){
            console.log("fired off");
            let temp = [...this.props.students];
            temp.filter(student => this.state.campus.id === student.campusId);
            console.log(temp.filter(student => this.state.campus.id !== student.campusId));
            this.setState({
                realstudents : temp.filter(student => this.state.campus.id === student.campusId)
         })
    }
    }
    render(){
        console.log(this.state.students)
        this.test();
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


            <div className ="studentContainer">
            {this.state.realstudents.map(student => 
                <div>
                  <table className = "studentTable">
                    <tr>
                    <img src={student.imageUrl} width="75" height="75"></img>
                    <th className="allStudentName"> Name: {student.firstName} {student.lastName}</th>
                    <th className="studentID">ID: {student.id}</th>
                    {student.campusId}
                    </tr>
                      {/* <td>
                        <button className ="button" onClick={() => removeStudent( student.id)}>Remove</button>
                      </td>
                      <td>
                      <Link className="buttonV" onClick={() => grabStudent(student)} to={`/student/${student.id}`}>View</Link>
                      </td>
                    <tr>
                      <td></td>
                    </tr> */}
                  </table>
                </div>
                )}
              </div>

            </div>
        );
    }
}
    
export default SingleCampus;