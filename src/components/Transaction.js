import React, { Component } from 'react' 

class Transaction extends Component {
render() {
return (
<div> 
    {this.props.transactions.map(f =>  {
        return (
        <div className = 'trasanction-box'>
            <div className={f.amount > 0 ? 'deposit' : 'withdraw'}>Vendor: {f.vendor}</div>
            <div className={f.amount > 0 ? 'deposit' : 'withdraw'}>Category: {f.category}</div>
            <div className={f.amount > 0 ? 'deposit' : 'withdraw'}>Amount: {f.amount}</div>
        </div>)
    })}
</div>
)}
}

export default Transaction  