import React, { useState } from 'react';
import axios from "axios";
import {useHistory, useParams} from 'react-router-dom';


 function EditWard(){

  let history = useHistory();
  const {id} = useParams();
  const [users,setUsers]= useState({
    ward_name: "",
    ward_catogory: "",
    total_bed_amount: "",
    empty_beds: ""
  });
    
  const{ward_name, ward_catogory, total_bed_amount, empty_beds} = users;
  const onInputChange = e =>{
    setUsers({...users, [e.target.name]:e.target.value});
  };
    
     
     /*  useEffect(() =>{
     loadUser();
  }, []);    */

    const onSubmit = async e =>{
    e.preventDefault();

    await axios.put(`http://localhost:8070/ward/updateward/${id}`,users)
      history.push('/allwards');

      };


      const loadUser = async () =>{

        const result = await axios.get(`http://localhost:8070/ward/get/${id}`);
        setUsers(result.data);
      };

    

    return(
      <div classname="edit"> 
           

       
           <form onSubmit={e => onSubmit(e)}>
           <center><h1>Update Ward</h1></center>
              
              <div className="add-pay">
                  <label for="exampleInputID" className="form-label">Ward ID</label>
                  <input type="text" className="form-control"  placeholder="Update Ward ID" name="id" value ={id} onChange={(e)=>onInputChange(e)} readOnly required />
              </div>

              <div className="add-pay">
                  <label for="ward_name" className="form-label">Ward Name</label>
                  <input type="text"  className="form-control"  placeholder="Update Ward Name" name="ward_name" value ={ward_name}  onChange={(e)=>onInputChange(e)} required/>
              </div>

              <div className="add-pay">
                  <label for="ward_catogory" className="form-label">Ward Catogory</label>
                  <input type="text"  className="form-control"  placeholder="Update Ward Catogory" name="ward_catogory" value ={ward_catogory}  onChange={(e)=>onInputChange(e)} required/>
              </div>

              <div className="add-pay">
                  <label for="total_bed_amount" className="form-label">Ward Bed Amount</label>
                  <input type="text"  className="form-control"  placeholder="Update Amount" name="total_bed_amount" value ={total_bed_amount}  onChange={(e)=>onInputChange(e)} required/>
              </div>

              <div className="add-pay">
                  <label for="empty_beds" className="form-label">Empty Beds</label>
                  <input type="text"  className="form-control"  placeholder="Empty Beds" name="empty_beds" value ={empty_beds}  onChange={(e)=>onInputChange(e)} required/>
              </div>

              <br></br>
                  <button type="submit" className="btn btn-primary">Update Ward</button><br></br>
                  <a href="/allwards"><button type="submit" className="btn1 btn-primary">Cancel</button></a>
           </form>
       </div>

       
    
    );


}

export default  EditWard;