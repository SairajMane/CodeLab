import React, { Component } from "react";
import "../css/assignment.css";
import { getAssignments } from "../services/assignmentService";

class Assignment extends Component {
  state = {
    assignments: getAssignments(),
  };

  render() {
    return (
      <ul className="assignment-labs-container">
        {this.state.assignments.map((assignment) => (
          <li key={assignment.id}>
            <div className="container">
              <div className="name-details">
                <p className="name">
                  {assignment.id}. {assignment.name}
                </p>
                <p className="details">{assignment.description}</p>
              </div>
              <div className="submission-details">
                <p className={assignment.status === 1 ? "done" : "warning"}>
                  {assignment.status == 0 ? "Pending !" : "Submitted !"}{" "}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default Assignment;
