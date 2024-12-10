import React from 'react'

import '../../css/components/widgetLg.css'
export default function WidgetLg() {
    const Button = ({type}) =>{
        return <Button className={'widgetLgButton' + type}>{type}</Button>
    }
  return (
    <div className='widgetLg'>
        <h3 className="widgetLgTitle">Laster TransActions</h3>
        <table className="widgetLgTable">
            <tr className="widgetLgTr">
                <th className="widgetLgTh">Customer</th>
                <th className="widgetLgTh">Date</th>
                <th className="widgetLgTh">Amout</th>
                <th className="widgetLgTh">Status</th>
            </tr>
            <tr className="widgetLgTr">
                <td className="widgetLgUser">
                    <img src="./images/Blacker.jpg" alt="" />
                    <span className="widgetLgName">Carl Jahnson</span>
                </td>
                <td className="widgetLgData">
                    2 may 1941
                </td>
                <td className="widgetLgAmount">
                    1939.9
                </td>
                <td className="widgetLgStatus">
                    <Button type="Approved"/>
                </td>
            </tr>
        </table>
    </div>
  )
}
