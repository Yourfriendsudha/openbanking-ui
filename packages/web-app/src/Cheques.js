import React, { useState, Component } from "react";
import './cheques.css'
import { render } from "@testing-library/react";
import axios from "axios";
import {
  getAccountList,
  getAccountById,
  getAccountBalances,
  createQRcode

} from '@openbanking/ui-data/lib/services/account-service'

import { useDispatch, useSelector } from 'react-redux'

//accounts api list
class Cheques extends Component  {

  constructor(props)
  {

    super(props)

    this.state = {

      payeeName:'',
      payeeAcNum:'',
      payeeSortCode:'',
      beneName:'',
      brand:'',
      beneAcNum:'',
      acPayonly:'',
      beneSortCode:'',
      chequeAmount:'',
      resp:''
    }

  }
  changeHandler =(e) => {
this.setState({[e.target.name]:e.target.value})
  }

  handleSubmit=(e)=> {
    e.preventDefault();
   
    axios.post("http://localhost:8080/open-banking/v3/cheques/QRCheque", this.state).then((response)=>{
        if (response){
          console.log(this.state)
          console.log("response", response)
         let obj = {

            payeeName:'',
            payeeAcNum:'',
            payeeSortCode:'',
            beneName:'',
            brand:'',
            beneAcNum:'',
            acPayonly:false,
            beneSortCode:'',
            chequeAmount:''
          }
          this.setState(obj)
          
        }else if(response.status === 'fail'){
          console.log('fail')
        }
      })
  }

   //dispatch = useDispatch()

  render() {
    const {payeeName,payeeAcNum,payeeSortCode,beneName,brand,beneAcNum,acPayonly,beneSortCode,chequeAmount} = this.state
      return (
        <div  className="container">
             <div>
        <h3>Generate QR - Fill the cheque details</h3>
        
      </div>
           
          
          <form onSubmit={this.handleSubmit}>
          {/* () => createQRcode(dispatch) */}
            <div className="col"><label> Payee Name:  <input type="text" name="payeeName" value={payeeName} onChange={this.changeHandler} /> </label></div>
            <div className="col"><label> Payee Account Number:  <input type="text" name="payeeAcNum" value={payeeAcNum} onChange={this.changeHandler} /> </label></div>
            <div className="col"><label> Payee Sort code:  <input type="text" name="payeeSortCode" value={payeeSortCode} onChange={this.changeHandler} /> </label></div>
            <div className="col"><label> Beneficiary  Name:  <input type="text" name="beneName" value={beneName} onChange={this.changeHandler} /> </label></div>
            <div className="col"><label> Brand:  <input type="text" name="brand" value={brand} onChange={this.changeHandler}/> </label></div>
            <div className="col"><label> Beneficiary Account Number:  <input type="text" name="beneAcNum" value={beneAcNum} onChange={this.changeHandler} /> </label></div>
            <div className="col"><label> Beneficiary Sort code:  <input type="text" name="beneSortCode" value={beneSortCode} onChange={this.changeHandler} /> </label></div>
            <div className="col"><label> cheque Amount  <input type="text" name="chequeAmount" value={chequeAmount} onChange={this.changeHandler}/> </label></div>
            <div className="col"><label> Account Payee only  <input type="checkbox" name="acPayonly" value={acPayonly} onChange={this.changeHandler} /> </label></div>
        
        <button type="submit">Submit!</button>
    	</form>
          <div id="qrCheques">
          </div>
          
          </div>

          
      );
    }
  
}

export default Cheques
