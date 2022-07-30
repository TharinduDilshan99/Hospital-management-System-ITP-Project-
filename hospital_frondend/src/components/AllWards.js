import React, { useState, useEffect } from 'react';
import axios from "axios";
import {Link} from "react-router-dom";


const AllWards = () =>{
const [wards, setWards] = useState([]);

useEffect(() => {
      loadUsers();
}, []);

const loadUsers = async ()=>{
  const result = await axios.get("http://localhost:8070/ward/allwards");
  setWards(result.data.reverse());
};

const deleteWard = async id =>{
  await axios.delete(`http://localhost:8070/ward/delete/${id}`);
  alert("Ward Deleted")
  loadUsers();
};

return(

  <div>
  
  <div class="admin">
  
<Link to={'/wardadd'} > 
 <button type="submit" className="addvbtn"><b>Add New Ward</b></button>
  </Link>
<div class="search-container">
<form className="search">
  <input type="text" placeholder="Search Ward" name="search" />
<button type="submit">Search</button>
</form>
</div>


    <div className="almo">
        <center><h1>All Wards</h1></center>

        <div className="all_ward">
        <table className="table table-dark table-striped">
        <thead>
           <tr>
             <th scope="col">Ward ID</th>
             <th scope="col">Ward Name</th>
             <th scope="col">Ward Catogory</th>
             <th scope="col">Total Bed Amount</th>
             <th scope="col">Empty Beds Amount</th>
             <th scope="col">Action</th>
           </tr>
        </thead>


        <tbody>

        {wards.map((user, index ) => (
           <tr>
             
             <td>{user._id}</td>
             <td>{user.ward_name}</td>
             <td>{user.ward_catogory}</td>
             <td>{user.total_bed_amount}</td>
             <td>{user.empty_beds}</td>
             <td>
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
             </td>
           </tr>
         ))}
        </tbody>
        </table>
        </div>   
    </div>
    </div>
    </div>

)
}

export default AllWards;