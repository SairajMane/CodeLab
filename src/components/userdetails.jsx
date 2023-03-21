import usericon from "../img/nav_usericon.png";
import "../css/navbar.css";
import React, { Component } from "react";

class UserDetails extends Component {
  state = {
    usericon: usericon,
    username: "Username",
    usermail: "user@mail.com",
  };

  render() {
    return (
      <React.Fragment>
        <div className="nav-user-details" tabIndex={999}>
          <img
            src={this.state.usericon}
            alt={this.state.username}
            className="nav-user-icon"
          />
          <div className="user-text-details">
            <p id="username">{this.state.username}</p>
            <p id="usermail">{this.state.usermail}</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default UserDetails;
