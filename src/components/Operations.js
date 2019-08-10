import React, { Component } from 'react' 

class Operations extends Component {
    constructor() {
        super()
        this.state = {
            Amount: "", 
            Vendor: "", 
            Category: "", 
        }
    }

    updateAmount = (event) => {
        this.setState({
          Amount: event.target.value
        })
      }

      updateVendor = (event) => {
        this.setState({
            Vendor: event.target.value
        })
      }

      updateCatagory = (event) => {
        this.setState({
            Category: event.target.value
        })
      }

      deposit = () => {
          let Amount = parseInt(this.state.Amount)
          let Vendor = this.state.Vendor
          let Category = this.state.Category
          this.props.deposit(Amount, Vendor, Category)
      }

      withdraw = () => {
        let Amount = parseInt(this.state.Amount)*-1
        let Vendor = this.state.Vendor
        let Category = this.state.Category
        this.props.withdraw(Amount, Vendor, Category)
    }
render() {
return (
<div> 
    <input className='input' placeholder='Amount' value={this.state.Amount} onChange={this.updateAmount}></input>
    <input className='input' placeholder='Vendor' value={this.state.Vendor} onChange={this.updateVendor}></input>
    <input className='input' placeholder='Category' value={this.state.Catagory} onChange={this.updateCatagory}></input>
    <br></br>
    <button className='DepositB' onClick={this.deposit}>Deposit</button>
    <button className='WithdrawB' onClick={this.withdraw}>Withdraw</button>

</div>
)}
}

export default Operations