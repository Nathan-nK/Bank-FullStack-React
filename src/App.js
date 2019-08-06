import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Transactions from './components/Transactions'
import Operations from './components/Operations';
import Axios from 'axios'
import { async } from 'q';

class App extends Component {
  constructor() {
    super()
    this.state = {
      transactions: [
      //   { amount: 3200, vendor: "Elevation", category: "Salary" },
      //   { amount: -7, vendor: "Runescape", category: "Entertainment" },
      //   { amount: -20, vendor: "Subway", category: "Food" },
      //   { amount: -98, vendor: "La Baguetterie", category: "Food" }
      ],
    }
    this.insertData()
  }
balanceAmount=() =>{
  let sum = 0
  for (let cell of this.state.transactions){
    sum = sum + cell.amount
  }
  return sum
}


insertData = async () => {
  let transactions = await Axios.get('http://localhost:8080/transactions')
  console.log(transactions)
  this.setState({
    transactions: transactions.data
  })
}

// deposit = (amount, vendor, category) => {
//     let transactions = [...this.state.transactions]
//     transactions.push({amount: amount, vendor: vendor, category: category})
//     this.setState({transactions},function(){
//       console.log(transactions)
//     })
    
// }

deposit = async (amount, vendor, category) => {
  let toSave = {amount: amount, vendor: vendor, category: category}
 await Axios.post('http://localhost:8080/transaction', toSave)
 this.insertData()
  }
  


// withdraw = (amount, vendor, category) => {
//   let transactions = [...this.state.transactions]
//   transactions.push({amount: amount, vendor: vendor, category: category})
//   this.setState({transactions},function(){
//     console.log(transactions)
//   })
// }

withdraw = async (amount, vendor, category) => {
  let toSave = {amount: amount, vendor: vendor, category: category}
  if(this.balanceAmount() > 0){
  await Axios.post('http://localhost:8080/transaction', toSave)
  this.insertData()
  }else alert('You do not have enough money to request a withdrawal')
}

  render() {
    return (
        <div className='App'>
          <div id="home-background"></div>
          <div id="main-links">
          </div>

      <div>Balance: {this.balanceAmount()}</div>
      <Operations transactions = {this.state.transactions } deposit = {this.deposit} withdraw = {this.withdraw}/>
      <Transactions transactions = {this.state.transactions } />
        </div>
    );
  }
}
export default App;
