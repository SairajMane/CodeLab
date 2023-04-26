import React from "react";
import { useState } from "react";
import "../css/sidebar.css";
import loginuser from "../img/login-user.svg";
import logoutuser from "../img/login-lock.svg";

// let menuitems = document.getElementsByClassName('sidebarmenuitem');
// let prevActive = menuitems[0];
// for(const item of menuitems){
//     item.addEventListener('click', function setActive(event){});
// }
// function setActive(event) {
//     event.target.classList.add("sidebarmenuitemactive");
//     prevActive.classList.remove("sidebarmenuitemactive");
//     prevActive = event.target;
// }

export default function Sidebar() {
  //  const [appState, changeState] = useState({
  //     activeObject: null,
  //     objects: [{ id: 1 }],
  //   });
  //   function toggleActive(index) {
  //     changeState({ ...appState, activeObject: appState.objects[index] });
  //   }
    
  //   function toggleActiveStyles(index) {
  //     if (appState.objects[index] === appState.activeObject) {
  //       return "sidebarmenuitem sidebarmenuitemactive";
  //     } else {
  //       return "sidebarmenuitem";
  //     }
  return (
    <div className="sidebarmenu">
      <p className="menu-name">MENU</p>
      <div className="sidebarmeunitem">
         <img src={loginuser} alt="Pict-CodeLab" className="img" />
         <p className="opt-name">LABS</p>
       </div>
      <div className="sidebarmenuitem">
        <img src={loginuser} alt="Pict-CodeLab" className="img" />
        <p className="opt-name">Assignments</p>
      </div>
      <div
        className="sidebarmenuitem"
        onClick={(e) => e.target.classList.toggle("sidebarmenuitemactive")}
      >
        <img src={loginuser} alt="Pict-CodeLab" className="img" />
        <p className="opt-name">Submitted Codes</p>
      </div>
      <div
        className="sidebarmenuitem"
        onClick={(e) => e.target.classList.toggle("sidebarmenuitemactive")}
      >
        <img src={loginuser} alt="Pict-CodeLab" className="img" />
        <p className="opt-name">Study Material</p>
      </div>
      <p className="menu-name">ACCOUNT</p>
      <div
        className="sidebarmenuitem"
        onClick={(e) => e.target.classList.toggle("sidebarmenuitemactive")}
      >
        <img src={loginuser} alt="Pict-CodeLab" className="img" />
        <p className="opt-name">Profile</p>
      </div>
      <div
        className="sidebarmenuitem"
        onClick={(e) => e.target.classList.toggle("sidebarmenuitemactive")}
      >
        <img src={logoutuser} alt="Pict-CodeLab" className="img" />
        <p className="opt-name">Log Out</p>
      </div>
    </div>
  );
}