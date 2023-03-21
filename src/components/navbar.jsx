import React, { Component } from "react";
import navlogo from "../img/nav-logo.svg";
import "../css/navbar.css";
import UserDetails from "./userdetails";

class Navbar extends Component {
  state = {
    logo: navlogo,
  };
  render() {
    return (
      <div className="nav">
        <div className="logo">
          <img src={this.state.logo} alt="Pict-CodeLab" className="navlogo" />
        </div>
        <UserDetails />
      </div>
    );
  }
}

export default Navbar;
