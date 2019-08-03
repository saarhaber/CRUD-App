import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './SingleCampus.css';
    
class SingleCampus extends Component {
    constructor(props) {
        super(props)
        this.state = {
             campus : this.props.campus
        }
      }

      componentDidMount() {
        // this.props.fetchAllStudents();
        // this.props.fetchAllCampuses();
          console.log(this.props.campuses)
        this.setState({
            // campus: this.props.grabFromID(this.props.campuses, this.props.match.params.id)
        })
    }

    test() {
        console.log(this.props.campuses)
        this.setState({
            //campus: this.props.grabFromID(this.props.campuses, this.props.match.params.id)
        })
    }
    render(){

        return (
            <div>
                <h1 className ="headline">
                Campus Details
                </h1>
                <Link className="leftLink"to="/allcampuses">All Campuses</Link>
                <div className="surroundTable">
                    {console.log(this.state.campus)}
                    {console.log(this.props.match.params.id)}
                    <table className = "singlecampusTable">
                        <tr>
                            <td><img src={this.state.campus.imageUrl} width="150" height="150"></img> </td>    
                            <th className = "heading"> {this.state.campus.name}</th>  
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}
    
export default SingleCampus;