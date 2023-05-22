import React from "react";
import { MdVideoLabel } from "react-icons/md";
import { MdAssignment } from "react-icons/md";
import { MdOutlineDoneOutline } from "react-icons/md";
import { MdOutlineMenuBook } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { TbLogout } from "react-icons/tb";

import { useState } from "react";
import "../css/sidebar.css";
import loginuser from "../img/login-user.svg";
import logoutuser from "../img/login-lock.svg";

export default function Sidebar() {
  const [active, setActive] = useState('LABS');
  const setActiveClick = (id) => () => setActive(id);

  return (
    <div className="sidebarmenu">
      <p className="menu-name">MENU</p>
      <div
        className={`sidebarmenuitem${active === 'Labs' ? 'sidebarmenuitem sidebarmenuitemactive' : ''}`}
        onClick={setActiveClick('LABS')}
      >
         <MdVideoLabel size={22}/>
         <p className={`opt-name${active === 'LABS' ? 'opt-name opt-name-active' : ''}`}
        onClick={setActiveClick('LABS')}>LABS</p>
       </div>
      <div
        className={`sidebarmenuitem${active === 'Assignments' ? ' sidebarmenuitemactive' : ''}`}
        onClick={setActiveClick('Assignments')}
      >
        <MdAssignment size={22}/>
        <p className={`opt-name${active === 'Assignments' ? 'opt-name opt-name-active' : ''}`}
        onClick={setActiveClick('Assignments')}>Assignments</p>
      </div>
      <div
        className={`sidebarmenuitem${active === 'Submitted Codes' ? ' sidebarmenuitemactive' : ''}`}
        onClick={setActiveClick('Submitted Codes')}
      >
        <MdOutlineDoneOutline size={22}/>
        <p className={`opt-name${active === 'Submitted Codes' ? 'opt-name opt-name-active' : ''}`}
        onClick={setActiveClick('Submitted Codes')}>Submitted Codes</p>
      </div>
      <div
        className={`sidebarmenuitem${active === 'Study Material' ? ' sidebarmenuitemactive' : ''}`}
        onClick={setActiveClick('Study Material')}
      >
        <MdOutlineMenuBook size={22}/>
        <p className={`opt-name${active === 'Study Material' ? 'opt-name opt-name-active' : ''}`}
        onClick={setActiveClick('Study Material')}>Study Material</p>
      </div>
      <p className="menu-name">ACCOUNT</p>
      <div
        className={`sidebarmenuitem${active === 'Profile' ? ' sidebarmenuitemactive' : ''}`}
        onClick={setActiveClick('Profile')}
      >
        <CgProfile size={22}/>
        <p className={`opt-name${active === 'Profile' ? 'opt-name opt-name-active' : ''}`}
        onClick={setActiveClick('Profile')}>Profile</p>
      </div>
      <div
        className={`sidebarmenuitem${active === 'Log Out' ? ' sidebarmenuitemactive' : ''}`}
        onClick={setActiveClick('Log Out')}
      >
        <TbLogout size={22}/>
        <p className={`opt-name${active === 'Log Out' ? 'opt-name opt-name-active' : ''}`}
        onClick={setActiveClick('Log Out')}>Log Out</p>
      </div>
    </div>
  );
}