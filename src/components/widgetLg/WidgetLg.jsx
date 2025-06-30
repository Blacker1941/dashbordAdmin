import React from 'react'
import '../../css/components/widgetLg.css';
import { transactions } from '../../datas';

export default function WidgetLg() {
  const StatusButton = ({ type }) => {
    return (
      <button className={'widgetLgButton ' + type}>
        {type}
      </button>
    );
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <thead>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
        </thead>
        <tbody>
            {transactions.map((transaction)=> (
                <tr key={transaction.id} className="widgetLgTr">
                <td className="widgetLgUser">
                  <img src={transaction.img} className="widgetLgImg" />
                  <span className="widgetLgName">{transaction.customer}</span>
                </td>
                <td className="widgetLgData">{transaction.date}</td>
                <td className="widgetLgAmount">{transaction.amount}</td>
                <td className="widgetLgStatus">
                  <StatusButton type={transaction.status} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
