import React, { useState } from 'react';
import axios from "axios";

export default function AddPayment(){

  

    const [patient_name, setName] = useState("");
    const [patient_nic, setNic] = useState("");
    const [p_num, setNo] = useState("");
    const [amount, setAmount] = useState("");
    const [pay_method, setMethod] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    

    function sendData(e){
      e.preventDefault();
      

      const newPayment ={
        patient_name,
        patient_nic,
        p_num,
        amount,
        pay_method,
        date,
        time
      }

      
       axios.post("http://localhost:8070/payment/add",newPayment).then(()=>{
         alert("Payment Added")

       }).catch((err)=>{
          alert(err)
       })


    }
    

    return(
      
      
      
       
       <div className="add_pay">
         
           <form onSubmit={sendData}> 
           <center><h1>ADD PAYMENT</h1></center>

              <div className="kl-1">
                  <label for="patient_name" className="form-label">Patient Name</label>
                  <input type="text" className="form-control" id="patient_name" placeholder="Enter Patient Name" 
                  onChange={(e)=>{
                    setName(e.target.value);
                  }}/>
              </div>

              <div className="kl-2">
                  <label for="patient_nic" className="form-label">Patient NIC</label>
                  <input type="text" className="form-control" id="patient_nic" placeholder="Enter Patient NIC" 
                  onChange={(e)=>{
                    setNic(e.target.value);
                  }}/>
              </div>

              <div className="kl-3">
                  <label for="p_num" className="form-label">Phone Number</label>
                  <input type="text" className="form-control" id="p_num" placeholder="Enter Phone Number" maxLength="9" pattern="[0-9]{2}[0-9]{7}"
                  onChange={(e)=>{
                    setNo(e.target.value);
                  }}/>
              </div>

              <div className="kl-4">
                  <label for="amount" className="form-label">Amount (Rs :)</label>
                  <input type="text" className="form-control" id="amount" placeholder="Enter Amount" 
                  onChange={(e)=>{
                    setAmount(e.target.value);
                  }}/>
              </div>

              <div className="kl-5">
                  <label for="pay_method" className="form-label">Payment Method</label>
                  <input type="text" className="form-control" id="pay_method" placeholder="Enter Payment Method" 
                  onChange={(e)=>{
                    setMethod(e.target.value);
                  }}/>
              </div>

              <div className="kl-6">
                  <label for="date" className="form-label">Date</label>
                  <input type="text" className="form-control" id="date" placeholder="Enter Date"
                  onChange={(e)=>{
                    setDate(e.target.value);
                  }}/>
              </div>

              <div className="kl-7">
                  <label for="time" className="form-label">Time</label>
                  <input type="text" className="form-control" id="time" placeholder="Enter Time" 
                  onChange={(e)=>{
                    setTime(e.target.value);
                  }}/>
              </div>
              <br></br>
                  <button type="submit" className="btn btn-primary">Add Payment</button><br></br>
                  <button type="submit" className="btn1 btn-primary">Cancel</button>
           </form>
       </div>
      
       
      
  )

}