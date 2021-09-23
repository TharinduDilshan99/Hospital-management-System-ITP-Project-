import React from "react";
import {RiAdminFill} from 'react-icons/ri'
import {GiHealing} from 'react-icons/gi'
import {FaUserMd,FaPrescriptionBottleAlt,FaUserNurse,FaFileMedical,FaCreditCard,FaBed,FaWheelchair} from 'react-icons/fa'
import {AiOutlineStock} from 'react-icons/ai'
import {ImLab, ImTextColor} from 'react-icons/im'
import { Link } from "react-router-dom";



function Home(){

    return(
        <React.Fragment>
             <div className="fun">
             <span><b>Admin Panel</b></span>
             </div>
            <h1 className='text-center text-danger text-capitalize my-5'>
               
                 Dashboard
            </h1>

            <div className="container-">
                <div className="row" id="home-row">
                    
                    <div className="col">
                    <div class="card" >
                       
                        <div className="card-body">
                        <RiAdminFill size="90px" />
                            <h5 className="card-title" >User Management</h5>
                           
                            <Link className="btn btn-primary" to={'/List' }>Click Here</Link>
                        </div>
                  </div>
                  </div>


                    <div className="col">
                    <div className="card" >
                      
                        <div className="card-body">
                           <FaUserMd size="90px"/>
                            <h5 className="card-title">Doctor Management</h5>
                           
                            <Link className="btn btn-primary" to={'/listDoctor'}>Click Here</Link>
                        </div>
                    </div>
                    </div>
                    

                     <div className="col">
                     <div className="card" color="red" >
                        
                        <div className="card-body">
                        <FaUserNurse size="90px"/>
                            <h5 className="card-title">Nurse Management</h5>
                           
                            <a href="#" className="btn btn-primary">Click Here</a>
                        </div>
                    </div>
                    </div>

                    <div className="col">
                    <div className="card" >
                        
                        <div className="card-body">
                        <FaWheelchair size="90px"/>
                            <h5 className="card-title">Patient Management</h5>
                           
                            <a href="#" className="btn btn-primary">Click Here</a>
                        </div>
                    </div>
                    </div>
                    
                    <div className="col">
                    <div className="card" >
                        
                        <div className="card-body">
                        <FaPrescriptionBottleAlt size="90px"/>
                            <h5 className="card-title"> Prescription Management</h5>
                           
                            <Link to={'/listPres'} className="btn btn-primary">Click Here</Link>
                        </div>
                    </div>
                    </div>




            
                </div>

                 <br></br>
              
                <div className="row">
                    <div className="col">
                    <div class="card" >
                       
                        <div className="card-body">
                        <FaFileMedical size="90px"/>
                            <h5 className="card-title">Appointment Management</h5>
                           
                            <a href="#" className="btn btn-primary">Click Here</a>
                        </div>
                   </div>
                   </div>

                   <div className="col">
                   <div className="card" >
                        
                        <div className="card-body">
                        <FaCreditCard size="90px"/>
                            <h5 className="card-title">Payment Management</h5>
                           
                            <a href="/" className="btn btn-primary">Click Here</a>
                        </div>
                    </div>
                    </div>

                    <div className="col">
                     <div className="card" >
                        
                        <div className="card-body">
                        <AiOutlineStock size="90px"/>
                            <h5 className="card-title">Stock Management</h5>
                           
                            <a href="#" className="btn btn-primary">Click Here</a>
                        </div>
                    </div>
                    </div>

                    <div className="col">
                    <div className="card" >
                        
                        <div className="card-body">
                        <FaBed size="90px"/>
                            <h5 className="card-title">Ward Allocation</h5>
                           
                            <a href="/allwards" className="btn btn-primary">Click Here</a>
                        </div>
                    </div>
                    </div>


                    <div className="col">
                    <div className="card" >
                        
                        <div className="card-body">
                        <ImLab size="90px"/>
                            <h5 className="card-title">Lab</h5>
                           
                            <a href="#" className="btn btn-primary">Click Here</a>
                        </div>
                    </div>
                    </div>

                    
                 </div> 
            </div>
        </React.Fragment>
    );
}
export default Home;