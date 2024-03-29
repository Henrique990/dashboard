import React from 'react';
import "../components/Charts.css"
import { MdNotificationsNone } from 'react-icons/md';
import { FiSearch } from 'react-icons/fi';
import { BiMessageRoundedDetail } from 'react-icons/bi';
import "./Navbar.css"
// import avatar from "../data/avatar.png";



const Navbar = () => {
  return (
    <div className="div navbar">
      <div className="search">
        <FiSearch className='nav-icon' />
      </div>

      <div className="notification">
        <div className="indicator"></div>
        <BiMessageRoundedDetail className='nav-icon' />
      </div>

      <div className="notification">
        <div className="indicator"></div>
        <MdNotificationsNone className='nav-icon' />
      </div>

      <div className="user">
        <span>Elite Developrs</span>
       {/* <img src={avatar} alt="avatar" /> */}
      </div>
    </div>
  )
}

export default Navbar
