import React, { Component } from "react";
import "../css/lab.css";
class Lab extends Component {
  state = {
    id : "",
    name: "Programming Skill Development",
    details: "Mr. Jhon Doe",
    status: "Pending",
  };
  
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="text">
            <p className="labname">{this.state.name}</p>
            <p className="labdetails">{this.state.details}</p>
          </div>
          <p className="status sentback">{this.state.status}</p>
        </div>

        <div className="container">
          <div className="text">
            <p className="labname">{this.state.name}</p>
            <p className="labdetails">{this.state.details}</p>
          </div>
          <p className="status pending">{this.state.status}</p>
        </div>
      </React.Fragment>
    );
  }
}

export default Lab;
