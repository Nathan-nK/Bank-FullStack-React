import React, { Component } from 'react' 
import Transaction from './Transaction';

class Transactions extends Component {
render() {
return (
<div> 
    <Transaction  transactions = {this.props.transactions}/>
</div>
)}
}

export default Transactions