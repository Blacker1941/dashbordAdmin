import React from 'react'

import '../../css/components/widgetSm.css'

import { MdVisibility } from "react-icons/md";
import { newMembers } from '../../datas';

export default function WidgetSm() {
  return (
    <div className='widgetSm'>
        <span className="widgetSmTitle">
            New Join Member
        </span>
        <ul className="widgetSmList">

            {newMembers.map(user =>(
            <li key={user.id} className="widgetSmListItem">
                <img src={user.img} className='widgetSmImg' />
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">{user.username}</span>
                    <span className="widgetSmUserTitle">{user.title}</span>
                </div>
                <button className="widgetSmButton">
                    <MdVisibility className='widgetSmIcon' />
                </button>
            </li>
            ))}
        </ul>
    </div>
  )
}
