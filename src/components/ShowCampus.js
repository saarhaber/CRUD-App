import React, {Component} from 'react';

class ShowCampus extends Component {
    render(){
      var campusName = this.data.props.name;
      var campusIMG = this.data.props.imgageUrl;
      var campusID = this.data.props.id
      return (
        <div className ="campus-card">
          <p>{campusName}</p>
          <p>ID: ${campusID} </p>
        </div>
      );
    }
  }



export default ShowCampus;