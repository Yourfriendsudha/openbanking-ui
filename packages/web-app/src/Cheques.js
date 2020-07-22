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

import Balance from './Balance'


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
      shareImage:'',

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
        this.setState({ resp: response.data.picByte })
        this.setState({shareImage : `${response.data.name}-QRCode.png`})
      }else if(response.status === 'fail'){
        console.log('fail')
      }
    })
  }

  //  config = {
  //   headers: {
  //     'Accept': 'application/json',
  //   'Content-Type': 'application/json'},
  //   params: {
  //     qrImage:this.state.shareImage,
  //     bene:this.state.beneName,
  //     user:this.state.payeeName
  //   }
  // }

  handleShare=(e)=> {
    e.preventDefault();
    axios.get("http://localhost:8080/open-banking/v3/cheques/shareQR",
    {
      headers: {
      //   'Accept': 'application/json',
      // 'Content-Type': 'image/png'
       'Accept': 'application/json',
    'Content-Type': 'application/json'
    },
      params: {
        qrImage:this.state.shareImage,
        bene:this.state.beneName,
        user:this.state.payeeName
      }
    }).then((response)=>{
      if (response){
        console.log('response')
      }else if(response.status === 'fail'){
        console.log('fail')
      }
    })
  }


  render() {
    const {payeeName,payeeAcNum,payeeSortCode,beneName,brand,beneAcNum,acPayonly,beneSortCode,chequeAmount,shareImage} = this.state
      return (
        <div >
             
           <div className="container">
           <div className="container-header">
        <h3>Generate QR - Fill the cheque details</h3>
        
      </div>
          
          <form onSubmit={this.handleSubmit}>
          {/* () => createQRcode(dispatch) */}
            <div className="col"><label> Payee Name:  <input type="text" name="payeeName" value={payeeName} onChange={this.changeHandler} /> </label></div>
            <div className="col"><label> Payee AccountNumber:  <input type="text" name="payeeAcNum" value={payeeAcNum} onChange={this.changeHandler} /> </label></div>
            <div className="col"><label> Payee Sortcode:  <input type="text" name="payeeSortCode" value={payeeSortCode} onChange={this.changeHandler} /> </label></div>
            <div className="col"><label> Beneficiary  Name:  <input type="text" name="beneName" value={beneName} onChange={this.changeHandler} /> </label></div>
            <div className="col"><label> Brand:  <input type="text" name="brand" value={brand} onChange={this.changeHandler}/> </label></div>
            <div className="col"><label> Bene AccountNumber:  <input type="text" name="beneAcNum" value={beneAcNum} onChange={this.changeHandler} /> </label></div>
            <div className="col"><label> Beneficiary Sortcode:  <input type="text" name="beneSortCode" value={beneSortCode} onChange={this.changeHandler} /> </label></div>
            <div className="col"><label> cheque Amount  <input type="text" name="chequeAmount" value={chequeAmount} onChange={this.changeHandler}/> </label></div>
            <div className="col"><label> Account Payee only  <input type="checkbox" name="acPayonly" value={acPayonly} onChange={this.changeHandler} /> </label></div>
        
        <button type="submit">Submit!</button>
    	</form>
      
      </div>

      <div className="container">
      <div className="container-header">
        <h3>Share the cheque With Beneficiary</h3>
        
      </div>
          
          <form onSubmit={this.handleShare }>
          {/* () => createQRcode(dispatch) */}
            <div className="col"><label> Payee Name:  <input type="text" name="payeeName" value={payeeName} onChange={this.changeHandler} /> </label></div>
           <div className="col"><label> Beneficiary  Name:  <input type="text" name="beneName" value={beneName} onChange={this.changeHandler} /> </label></div>
            <div className="col"><label> Check QR image:  <input type="text" name="shareImage" value={shareImage} onChange={this.changeHandler}/> </label></div>
           
        <button type="submit">Share!</button>
    	</form>
      
      </div>
      <div  className="container">
          <img src={`this.state.resp:image/jpeg;,${this.state.resp}`} />
         <span >{this.state.resp}</span> 
          </div>

          <div  className="container">
          <Balance/>
          </div>

          </div>
           
          

          
      );
    }
  
}

export default Cheques
