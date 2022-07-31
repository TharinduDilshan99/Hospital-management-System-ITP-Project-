import React, { useState, useEffect } from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

const AllPayments = () =>{
const [payments, setPayments] = useState([]);

useEffect(() => {
      loadUsers();
}, []);

const loadUsers = async ()=>{
  const result = await axios.get("http://localhost:8070/payment/");
  setPayments(result.data.reverse());
};

function deletePayment(id) {
  axios.delete(`http://localhost:8070/payment/delete/${id}`).then(() => {
    alert("Delete Successfully");
  }).catch((err)=>{
    console.log(err);
})
}
/* const deletePayment = async id =>{
  await axios.delete(`http://localhost:8070/payment/delete/${id}`);
  alert("Payment Deleted")
  loadUsers();
};  */

return(

  
  
  <div class="epay">
  
<Link to={'/add'} > 
 <button type="submit" className="addvbtn"><b>Add New Payment</b></button>
  </Link>
<div class="search-container">
<form className="search">
  <input type="text" placeholder="Search Payment" name="search1" />
<button type="submit">Search</button>
</form>
</div>


    <div className="all_pay">
        <center><h1>All Payments</h1></center>

        <table className="table table-dark table-striped">
        <thead>
           <tr>
           <th scope="col">Bill ID</th>
             <th scope="col">Patint Name</th>
             <th scope="col">Patient Nic</th>
             <th scope="col">Phone No</th>
             <th scope="col">Amount (Rs:)</th>
             <th scope="col">Pay Method</th>
             <th scope="col">Date</th>
             <th scope="col">Time</th>
             <th scope="col">Action</th>
           </tr>
        </thead>


        <tbody>

        {payments.map((user, index ) => (
           <tr>
             
             <td>{user._id}</td>
             <td>{user.patient_name}</td>
             <td>{user.patient_nic}</td>
             <td>{user.p_num}</td>
             <td>{user.amount}</td>
             <td>{user.pay_method}</td>
             <td>{user.date}</td>
             <td>{user.time}</td>
             <td>
              <th scope="col">
              <Link className="edit" to={`/update/${user._id}`}>
                <button type="submit" className="btn11 btn-primary">Update</button>
              </Link></th>
              <th></th>
              <th scope="col">
              <Link className="delete" onClick={()=> deletePayment(user._id)}>
                <button type="submit" name="delete_btn" className="btn12 btn-primary">Delete</button>
              </Link>
                </th>
             </td>
           </tr>
         ))}
        </tbody>
        </table>
    </div>
    </div>
    
     
)
}

export default AllPayments;
