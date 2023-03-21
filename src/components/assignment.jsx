import React, { Component } from "react";
import "../css/assignment.css";

class Assignment extends Component {
  state = {
    no: "01",
    name: "Assignment Name",
    description: "Assignment Description in short",
    datatime: "Submitted !",
    timerem: "10h: 20m: 30s",
  };
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="name-details">
            <p className="name">
              {this.state.no}. {this.state.name}
            </p>
            <p className="details">{this.state.description}</p>
          </div>
          <div className="submission-details">
            <p className="subdate done">{this.state.datatime}</p>
            <p className="time-rem">{this.state.timerem}</p>
          </div>
        </div>


        <div className="container">
          <div className="name-details">
            <p className="name">
              {this.state.no}. {this.state.name}
            </p>
            <p className="details">{this.state.description}</p>
          </div>
          <div className="submission-details">
            <p className="subdate warning">{this.state.datatime}</p>
            <p className="time-rem">{this.state.timerem}</p>
          </div>
        </div>

        <div className="container">
          <div className="name-details">
            <p className="name">
              {this.state.no}. {this.state.name}
            </p>
            <p className="details">{this.state.description}</p>
          </div>
          <div className="submission-details">
            <p className="subdate red">{this.state.datatime}</p>
            <p className="time-rem">{this.state.timerem}</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Assignment;
