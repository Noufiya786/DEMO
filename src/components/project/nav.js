import React from "react";
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap/dist/css/bootstrap.css'
import './nav.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

function Nav(){
    return(
       <>
     
        <div className="footMainDiv  pt-5 h-100 gap-1 d-flex flex-lg-row col-12 gap-5 flex-column align-text-center ms-5 col-lg-8">
            <div className="col-lg-4 ms-5">
                <div className="d-flex justify-content-start align-items-start">
                <div className="companyLogin  col-lg-8 col-10 mx-auto m-1  pe-2 align-items-start ">
                    <img className="col-lg-8 " src="https://i.postimg.cc/tgvZhYP7/Light-Mode-Logo.jpg"></img>
                    <p className="col-lg-12">"Empower Your Productivity, One Moment at a Time - Track, Manage, Succeed!"</p></div>
                    <div>
                    <p className="mt-5 pb-3 ms-4"><a href='/signup' className="text-decoration-none">SIGN UP</a></p>
                    <p className="mt-2 ms-4"><a href='/login' className="text-decoration-none" >LOGIN</a></p></div>
                </div>
            </div>
            <div className="col-lg-2 col-12 d-flex gap-3">
                    <div className="solutionDiv col-lg-6 col-6">
                        <div className="justify-content-center align-content-center text-center ms-5">
                        <h5 className="ms-4 mx-auto">SOLUTION</h5></div>
                        
                        {/* ***Timekeeping****** */}
<div className="d-flex">
                        <div className="ms-3 col-lg-12 dropdown">
                        <button
                         className="btn dropdown-toggle" type="button"id="dropdownMenuButton"data-mdb-toggle="dropdown" aria-expanded="false">Timekeeping</button>
                        <div className="col-lg-12 dropdownDiv dropdown-menu" aria-labelledby="dropdownMenuButton">
                           <div className="dropDiv d-lg-flex text-start ms-5 gap-3">
                           <div>
                                <h6>Time Clock</h6>
                                <p>Timer App</p>
                                <p>Work Hours Tracker</p>
                                <p>Task Tracking App</p>
                                <p>Time keeping</p>
                                <p>Time Recording App</p>
                            </div>    
                            
                            </div>
                        </div>
                        </div>


                        {/* ***Reporting****** */}

                                                  <div className="ms-5 col-lg-12 g-5 ps-3 dropdown">
                                                <button
                                                className="btn dropdown-toggle" type="button"id="dropdownMenuButton"data-mdb-toggle="dropdown" aria-expanded="false">Reporting</button>
                                                <div className="col-lg-12 dropdownDiv dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <div className="d-lg-flex  text-start justify-content-center gap-3 ">
                                                <div >
                                                        <h6>Time Reporting</h6>
                                                        <p>Productivity Tracker</p>
                                                        <p>Attendance Tracker</p>
                                                        <p>Leave & Vacation Tracker</p>
                                                    </div>   
                                                    </div>
                                                </div>
                                                </div>


                                                </div>

                        {/* ***Management****** */}
<div className="d-flex">
                                <div className="ms-3 col-lg-12 dropdown">
                                <button
                                        className="btn dropdown-toggle " type="button"id="dropdownMenuButton"data-mdb-toggle="dropdown" aria-expanded="false">Management</button>
                                        <div className="col-lg-12 dropdownDiv dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <div className="d-lg-flex justify-content-center gap-2">
                                            <div >
                                                <h6>Employee Scheduling</h6>
                                                <p>Time Management App</p>
                                                <p>Workforce Management</p>
                                                <p>Work Management System</p>
                                            </div>    
                                            </div>
                                        </div>
                                        </div>

                        {/* ***Industry****** */}

                                        <div className="ms-5 col-lg-12 ps-3 dropdown">
                                        <button
                                        className="btn dropdown-toggle" type="button"id="dropdownMenuButton"data-mdb-toggle="dropdown" aria-expanded="false">Industry</button>
                                        <div className="col-lg-12 dropdownDiv dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <div className="d-lg-flex text-start justify-content-center gap-2 ">
                                            <div >
                                                <h6>Employee Time Tracking</h6>
                                                <p>Consultant Time Tracking</p>
                                                <p>Office Team Timesheet</p>
                                                <p>Accounting Time Tracking</p>
                                                <p>Agency Time Tracking</p>
                                            </div>    
                                            </div>
                                        </div>
                                        </div>
                                        </div>
                       
                    </div>
            </div> 
            


{/* *****Company**** */}
                    <div className="d-flex  ps-5 col-lg-5 gap-5 col-9 me-5">
                    <div className="companyDiv ms-5 col-lg-4 col-6">
                        <h5 className="ms-3">COMPANY</h5>
                        <ul><a href="">About us</a></ul>
                        <ul><a href="">Customers</a></ul>
                   </div>

                   <div className="supportDiv ps-4 col-lg-6 col-5">
    <h5 className="ms-5 ps-3">SUPPORT</h5>
    <div className="d-flex">
        <div className=" ">
            <ul className=""><a href="" className="text-decoration-none text-secondary ms-3">Help</a></ul>
            <ul><a href="" className="text-decoration-none ms-3 text-secondary">Blog</a></ul>
        </div>
        <div>
            <ul><a href="" className="text-decoration-none text-secondary">Contact</a></ul>
            <ul><a href="" className="text-decoration-none text-secondary">Tutorials</a></ul>
        </div>
    </div>
</div>
      </div>

        </div>

            {/* **Credits Div**** */}

            <div className="creditsDiv col-10 col-lg-8 pt-5 h-100 gap-4 d-flex flex-lg-row flex-column align-text-center mx-auto">
                    <div className="creditSection  d-flex gap-3 col-lg-6 col-5">
                        <a>© 2024 TickTraq</a>
                        <a href="">Sitemap</a>
                        <a href="">Cookies</a>
                        <a href="">Terms</a>
                        <a href="">Privacy</a>
                        <a href="">Security</a>
                    </div>
                    <div className="col-lg-3 d-lg-flex d-none"></div>
                    <div className="logoSection col-lg-3 d-flex gap-3">
                        <a href="" className=""><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="" className=""><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href="" className=""><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="" className=""><FontAwesomeIcon icon={faYoutube} /></a>
                        <a href="" className=""><FontAwesomeIcon icon={faLinkedin} /></a>
                    </div>
            </div>  
         
        </>
    );
}
 export default Nav

 




 
