import React from 'react'

import '../../css/components/sidebar.css'

import { MdLineStyle } from "react-icons/md";
import { MdOutlineTimeline } from "react-icons/md";
import { IoIosTrendingUp } from "react-icons/io";
import { MdPermIdentity } from "react-icons/md";
import { MdOutlineStorefront } from "react-icons/md";
import { MdAttachMoney } from "react-icons/md";
import { MdBarChart } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { MdDynamicFeed } from "react-icons/md";
import { MdChatBubbleOutline } from "react-icons/md";
import { MdWorkOutline } from "react-icons/md";
import { MdReport } from "react-icons/md";

import { Link } from 'react-router-dom';

export default function SideBar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebartitle">Dashboard</h3>
                <ul className="sidebarList">
                    <Link className='link' to={"/"}>
                        <li className="sidebarListItem active">
                            <MdLineStyle className='sidebarIcon' />
                            Home
                        </li>
                    </Link>
                    <li className="sidebarListItem">
                        <MdOutlineTimeline className='sidebarIcon' />
                        Analytice
                    </li>
                    <li className="sidebarListItem">
                        <IoIosTrendingUp className='sidebarIcon' />
                        Sales
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebartitle">Quick Menu</h3>
                <ul className="sidebarList">
                    <Link className='link' to={"/users"}>
                        <li className="sidebarListItem">
                            <MdPermIdentity className='sidebarIcon' />
                            Users
                        </li>
                    </Link>
                    <Link className='link' to={"/newUsers"}>
                        <li className="sidebarListItem">
                            <MdPermIdentity className='sidebarIcon' />
                            New Users
                        </li>
                    </Link>
                    <Link className='link' to={"/products"}>
                        <li className="sidebarListItem">
                            <MdOutlineStorefront className='sidebarIcon' />
                            products
                        </li>
                    </Link>
                    <li className="sidebarListItem">
                        <MdAttachMoney className='sidebarIcon' />
                        transaction
                    </li>
                    <li className="sidebarListItem">
                        <MdBarChart className='sidebarIcon' />
                        Reports
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebartitle">Notifcations</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <IoMailOutline className='sidebarIcon' />
                        Mail
                    </li>
                    <li className="sidebarListItem">
                        <MdDynamicFeed className='sidebarIcon' />
                        Feedback
                    </li>
                    <li className="sidebarListItem">
                        <MdChatBubbleOutline className='sidebarIcon' />
                        Messages
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebartitle">Staff</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <MdWorkOutline className='sidebarIcon' />
                        Manage
                    </li>
                    <li className="sidebarListItem">
                        <MdOutlineTimeline className='sidebarIcon' />
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <MdReport className='sidebarIcon' />
                        Report
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
