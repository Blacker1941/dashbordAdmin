import React from 'react'
import '../../css/components/topbar.css'
import { IoLogoReact } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdLanguage } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">

        <div className="topLeft">
          <span className="Logo">
            Parsa Farivash <IoLogoReact />
          </span>
        </div>

        <div className="topRight">
          <div className="topbarIconContainer">
            <IoMdNotificationsOutline />
            <span className='topIconBadge'>2</span>
          </div>
          <div className="topbarIconContainer">
            <MdLanguage />
            <span className='topIconBadge'>2</span>
          </div>
          <div className="topbarIconContainer">
            <IoMdSettings />
          </div>
          <img src="./images/blank-avatar-1-450x450.png" className='topAvatar' />
        </div>
      </div>
    </div>
  )
}
