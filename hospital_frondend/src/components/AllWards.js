import React, { useState, useEffect } from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import swal from 'sweetalert';


const AllWards = () =>{
const [wards, setWards] = useState([]);

useEffect(() => {
      loadUsers();
}, []);

const loadUsers = async ()=>{
  const result = await axios.get("http://localhost:8070/ward/allwards");
  setWards(result.data.reverse());
};

function deleteWard(id) {
  axios.delete(`http://localhost:8070/ward/deleteward/${id}`).then(() => {
   /* alert("Delete Successfully"); */
    swal({

      title: "Success",

      text: "Payment Delete Successfully!",

      icon: "success",

      button: "OK"

    });
  }).catch((err) => {
    console.log(err);
  })
  window.location.reload();
}
/*
const deleteWard = async id =>{
  await axios.delete(`http://localhost:8070/ward/deleteward/${id}`);
  alert("Ward Deleted")
  loadUsers();
};

*/


return(


  <div>

      <div className="fun">

      <span>Ward Management</span>

      </div>
  
  
  <div class="admin">

  <Link to={'/dashbord'} >
        <button type="submit" className="addvbtn"><b>Back</b></button>
      </Link>
  
<Link to={'/wardadd'} > 
 <button type="submit" className="addvbtn"><b>+Add New Ward</b></button>
  </Link>

<div class="search-container">
<form className="search">
  <input type="text" className="search123" placeholder="Search Ward" name="search" />
  <Link to={'/getward/:id'} >
<button className="btn13" type="submit">Search</button>
</Link>
</form>
</div>


    
        

        <div className="all_ward"> 

        <center><h1>ALL WARDS</h1></center>
        <table className="table table-dark table-striped">
        <thead>
           <tr>
             {/* <th scope="col">Ward ID</th> */}
             <th scope="col">Ward ID</th>
             <th scope="col">Ward Name</th>
             <th scope="col">Ward Catogory</th>
             <th scope="col">Total Bed Amount</th>
             <th scope="col">Empty Beds Amount</th>
             {/*th scope="col">Action</th>*/}
             <th scope="col"></th>
              <th scope="col">Action</th>
              <th scope="col"></th>
           </tr>
        </thead>


        <tbody>

        {wards.map((user, index ) => (
           <tr>
             
             {/* <td>{user._id}</td> */}
             <td>{user.ward_id}</td>
             <td>{user.ward_name}</td>
             <td>{user.ward_catogory}</td>
             <td>{user.total_bed_amount}</td>
             <td>{user.empty_beds}</td>
             <td><Link className="view" to={`/viewwar/${user._id}`}>
                      <button type="submit" className="btn10 btn-primary">Views</button>
                    </Link>
                </td>
                <td><Link className="edit" to={`/updateward/${user._id}`}>
                      <button type="submit" className="btn11 btn-primary">Update</button>
                    </Link>
                </td>
                <td><Link className="delete" onClick={()=> deleteWard(user._id)}>
                <button type="submit" name="delete_btn" className="btn12 btn-primary">Delete</button>
              </Link>
                </td>
             {/* <td>
             <th scope="col">
                    <Link className="view" to={`/viewwar/${user._id}`}>
                      <button type="submit" className="btn10 btn-primary">View</button>
                    </Link></th>
                  <th></th>
              <th scope="col">
              <Link className="edit" to={`/updateward/${user._id}`}>
                <button type="submit" className="btn11 btn-primary">Update</button>
              </Link>
                </th>
              <th></th>
              <th scope="col">
              <Link className="delete" onClick={()=> deleteWard(user._id)}>
                <button type="submit" name="delete_btn" className="btn12 btn-primary">Delete</button>
              </Link>
                </th>
             </td> */}
           </tr>
         ))}
        </tbody>
        </table>
        </div>   
    </div>
    
    </div>

)
}

export default AllWards;