import React, { Component } from "react";
import "../css/lab.css";

class Lab extends Component {
  state = {
    id: "",
    name: "Programming Skill Development",
    details: "Mr. Jhon Doe",
    status: 0,
  };

  render() {
    let statusClasses =
      this.state.status == 0
        ? "substat sentback"
        : this.state.status == 1
        ? "substat pending"
        : "";
    let statusLabel =
      this.state.status === 0
        ? "Sent Back !"
        : this.state.status === 1
        ? "Pending !"
        : "";

    return (
      <div className="container">
        <div className="text">
          <p className="labname">{this.state.name}</p>
          <p className="labdetails">{this.state.details}</p>
        </div>
        <p className={statusClasses}>{statusLabel}</p>
      </div>
    );
  }
}

export default Lab;
