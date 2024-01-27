import React from "react";
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap/dist/css/bootstrap.css'
// import StarRating from "react-star-rating";
// import YouTube from 'react-youtube';
import './password.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faCrosshairs } from "@fortawesome/free-solid-svg-icons";
import { faCircleDollarToSlot } from "@fortawesome/free-solid-svg-icons";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

export function Password(){
    return(
       <>
       <nav className="navbar navbar-expand-lg navbar-light bg-white">
  <div className="container-fluid">
    <img className="ms-5" src="https://clockify.me/assets/images/brand-assets/clockify-logo-preview.png" width="180rem" />

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
            
        <a className="nav-link " href="#"  role="button" aria-expanded="false">
        WHY TICKTRAQ
          </a>
            <div>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
          </div>
        </li>
        <li className="nav-item">
        <a className="nav-link " href="#"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
        FEATURES
          </a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          DOWNLOAD
          </a>


          
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><a className="dropdown-item Ditem" href="#">Windows</a></li>
            <li><a className="dropdown-item " href="#">Linux</a></li>
            <li><a className="dropdown-item" href="#">iOS</a></li>
            <li><a className="dropdown-item" href="#">Android</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Learn more</a></li>
          </ul>
        </li>
       </ul>

      <form className="d-flex p-2 gap-3">
      <li className="nav-item">
          <Link to='/login' className="text-decoration-none btn navBar_btn  me-3">LOGIN</Link>
      </li>
      <li className="nav-item">
          <Link to='/signup' className="text-decoration-none btn navBar_btn me-3">SIGN UP</Link>
      </li>
      </form>
    </div>
  </div>
</nav>

<div className="mainDiv p-5 container-fluid">
            <div className="parentDiv mx-auto text-center row">
                <div className="col-10 mx-auto ">
                    <h1 className="text-center col-10 heading mx-auto head">The most popular free <span className="headTrack">time tracker</span> for teams</h1>
                    
                    <h5 className="content text-center col-10 mx-auto text-secondary p-2">TickTraq is a time tracker and timesheet app that lets you track work hours <br/> across projects.Unlimited users, sign up now for free.</h5>
                    <div className="text-center mx-auto">
                        <Link to='/login' className="TrackingBtn btn mt-5 col-lg-4 col-5 mx-auto rounded text-light">START TRACKING TIME - IT'S FREE!</Link>
                        <p><a href="" className="mt-1 text-decoration-none"><FontAwesomeIcon icon={faPeopleGroup}/><span>0 people signedup last month</span></a></p>
                    </div>
                    {/* <div className="col-lg-12">
                      <img src={imageUrl} alt="Online Image" />z
                    </div> */}
                    {/* <div className="VideoDiv d-flex justify-content-center align-items-center col-lg-12 col-12 w-100"> */}
                        <img src="https://clockify.me/assets/images/time-tracker-screenshot.svg" className="container-fluid h-50 w-50"/>
                        {/* <button className="border-2"><a href="https://www.youtube.com/watch?v=7Md31JL7N2c&t=11s"><FontAwesomeIcon icon={faPlay}/></a></button>
                        </div> */}
                        {/* <img src = 'https://clockify.me/assets/images/customers-light-gray-4.svg'/> */}
                </div>
            </div>
            </div>
{/* monica */}

<div class="row d-flex align-items-center justify-content-center ">
  <h1 className="text-center">Reports from TickTraq</h1>
  <div class="col-lg-5">
    <img src="https://clockify.me/assets/images/feature-time-reporting-activity.svg" class="img-fluid rounded-start" alt="..."/>
  </div>
  <div class="col-lg-3">
    <h4 className='text-secondary ms-5'>REPORTING</h4>
    <a href='Reports'id='time1' className='text-decoration-none ms-5 reportTXT'>Reports</a>
    <p className='text-secondary ms-5'>Analyze and export tracked time.</p>
    <a href='Activity'id='time1' className="text-decoration-none  ms-5 reportTXT">Activity</a>
    <p className='text-secondary ms-5'>See who works on what.</p>
    <a href='Projects'id='time1' className="text-decoration-none  ms-5 reportTXT">Projects</a>
    <p className='text-secondary ms-5'>Track project estimates and budget.</p>
    <a href='Location'id='time1' className="text-decoration-none ms-5 reportTXT">Location</a>
    <p className='text-secondary ms-5'>See visited sites and routes.</p>

  </div>
</div>
    
{/* //noufi */}
        <h1 className="text-center">Time Tracking Apps</h1>
        <h5 className="text-center text-secondary">TickTraq works across devices. Track time from anywhere — all<br/> data is synced online.</h5>
        
        <div className="row row-cols-1 row-cols-md-2 g-4 gap-4 d-flex justify-content-center mt-3">
  <div className="col-lg-4 ">
    <div className="">
      <img src="https://clockify.me/assets/images/time-tracking-app-desktop@2x.png" className="card-img-top" alt="..."/>
      <div className="card-body p-2">
        <h6 className="card-title text-center">DESKTOP APP</h6>
        <div className="text-center p-3">
  <button style={{marginRight:'5px'}} className="deviceBTN rounded tracking_btn ">Mac</button>
  <button style={{marginRight:'5px'}} className="deviceBTN rounded tracking_btn ">Windows</button>
  <button style={{marginRight:'5px'}} className="deviceBTN rounded tracking_btn ">Linux</button>
</div>
       
      </div>
    </div>
  </div>
  <div className="col-lg-4">
    <div className="container-fluid">
      <img src="https://clockify.me/assets/images/time-tracking-app-web.png" className="card-img-top" alt="..."/>
      <div className="card-body p-2 mt-3">
        <h6 className="card-title text-center">WEB APP</h6>
        <div className="text-center p-3">
  <button style={{marginRight:'5px'}} className=" deviceBTN  rounded tracking_btn">Edge</button>
  <button style={{marginRight:'5px'}} className=" deviceBTN  rounded tracking_btn">Chrome</button>
  <button style={{marginRight:'5px'}} className=" deviceBTN rounded tracking_btn">Firefox</button>
</div>
       
      </div>
    </div>
  </div>
  <div className="col-lg-4">
    <div className="container-fluid">
      <img src="https://clockify.me/assets/images/time-tracking-app-mobile.png" className="card-img-top" alt="..."/>
      <div className="card-body p-2">
        <h6 className="card-title text-center  border-primary">MOBILE APP</h6>

        <div className="text-center p-3">
  <button style={{marginRight:'5px'}} className=" deviceBTN rounded tracking_btn ">Android</button>
  <button style={{marginRight:'5px'}} className=" deviceBTN rounded tracking_btn ">iOS</button>
</div>
       
      </div>
    </div>
  </div>
  <div className="col-lg-4">
    <div className="container-fluid">
      <img src="https://clockify.me/assets/images/time-tracking-app-kiosk@2x.png" className="card-img-top" alt="..."/>
      <div className="card-body p-2">
        <h6 className="card-title text-center border-primary ">KIOSK APP</h6>
        <div className="text-center p-3">
  
  <button style={{marginRight:'5px'}} className="deviceBTN rounded tracking_btn ">Any device</button>
  
</div>
       
      </div>
    </div>
  </div>
</div>
<div className="mt-5 p-3"></div>
{/* sri */}
<h1 className="text-center p-3">Why track time with TickTraq</h1>
<div className="row row-cols-1 row-cols-md-2 g-4 gap-4 d-flex justify-content-center mt-3">
  <div className="col-lg-4">
    <div className="card ">
      <h1 className="card_icon mt-3 ms-3"><FontAwesomeIcon icon={faPeopleGroup} /></h1>
      <div className="card-body">
        <h5 className="card-title">Manage team</h5>
        <p className="card-text text-secondary">Track attendence for payroll and accounting, see who works on what, and manage workload among teams.</p>
        <div className="pt-4">
        <Link to='/manageteam' className=" card_icon text-decoration-none"> Learn more <FontAwesomeIcon icon={faArrowRight}/></Link>
        </div>
      </div>
    </div>
  </div>
  <div className="col-lg-4 ">
    <div className="card">
      <h1 className="mt-3 ms-3 card_icon"><FontAwesomeIcon icon={faClock} /></h1>
      <div className="card-body">
        <h5 className="card-title">Streamline processes</h5>
        <p className="card-text text-secondary">Track time and analyze your company's efficiency across projects, clients, departments, and employees.</p>
        <div className="pt-4">
          <Link to='/streamline' className=" card_icon text-decoration-none">Learn more <FontAwesomeIcon icon={faArrowRight}/></Link>
        </div>
      </div>
    </div>
  </div>
</div>
 <h6 className="text-center mt-5 usecase">MORE USE CASES</h6>
<div className="text-center d-flex gap-2 justify-content-center">
 <div className="col-lg-12"> 
  <button className="card_btn" style={{marginRight:'5px'}}>Time Clock</button>
  <button className="card_btn" style={{marginRight:'5px'}}>Work Hours Tracker</button>
  <button className="card_btn" style={{marginRight:'5px'}}>Employee Time Tracker</button>
  <button className="card_btn" style={{marginRight:'5px'}}>Attendence Tracker</button>
  <button className="card_btn" style={{marginRight:'5px'}}>Task Timer</button>
  <button className="card_btn" style={{marginRight:'5px'}}>Time Card Calculator</button>
  </div> 
</div>
{/* footeragash */}

        {/* **********Create account div ********** */}
        <div className="footDiv d-flex flex-lg-column flex-column col-lg-12 col-12 justify-content-center align-items-center p-5">
            <h1 className="text-center">Start tracking time with TickTraq</h1>
                <div className="d-lg-flex d-none mx-auto col-lg-5 gap-3 text-center justify-content-center">
                    <ul>•</ul>
                    <ul className="col-lg-5">By creating a free account</ul>
                    <ul>•</ul>
                </div>
                <Link to='/signup' className="accountBtn col-lg-2 btn text-decoration-none">CREATE FREE ACCOUNT</Link>
                <a href="" className="mt-1 text-decoration-none cards_icon"><FontAwesomeIcon icon={faPeopleGroup} /><span className="signupDTL"> 0 people signedup last month</span></a>
        </div>

        {/* **********Footer Div ********** */}
        <div className="footMainDiv text-start pt-5 h-100 gap-1 d-flex flex-lg-row col-12 gap-5 flex-column align-text-center mx-auto col-lg-8">
            <div className="col-lg-4">
                <div className="companyLogin text-start col-lg-8 col-10 mx-auto">
                    <img className="col-lg-8" src="https://clockify.me/assets/images/brand-assets/clockify-logo-preview.png"></img>
                    <p className=" col-lg-12">The world's leading time tracker and timesheet software for teams</p>
                    <p className=" mt-5"><Link to='/signup' className="text-decoration-none" href="">SIGN UP FREE</Link></p>
                    <p><Link to='/login' className="text-decoration-none" href="">LOGIN NOW</Link></p>
                </div>
            </div>
            <div className="col-lg-4 col-12 d-flex gap-3">
                    <div className="solutionDiv col-lg-6 col-6">
                        <h5 className="ms-4">SOLUTION</h5>
                        
                        {/* ************Timekeeping***************** */}

                        <div className="ms-3 col-lg-12 dropdown">
                        <button
                         className="btn dropdown-toggle" type="button"id="dropdownMenuButton"data-mdb-toggle="dropdown" aria-expanded="false">Timekeeping</button>
                        <div className="col-lg-12 dropdownDiv dropdown-menu" aria-labelledby="dropdownMenuButton">
                           <div className="dropDiv d-lg-flex text-start justify-content-center gap-3 ">
                           <div >
                                <h6><a href="">Time Clock</a></h6>
                                <h6><a href="">Automatic Time Tracking</a></h6>
                                <p><a href="">Timer App</a></p>
                                <p><a href="">Work Hours Tracker</a></p>
                                <p><a href="">Task Tracking App</a></p>
                                <p><a href="">Time keeping App</a></p>
                                <p><a href="">Time Recording App</a></p>
                            </div>    
                            <div>
                                <h6><a href="">Timesheet Software</a></h6>
                                <p><a href="">Job Tracking</a></p>
                                <p><a href="">Time Entry System</a></p>
                            </div>
                            </div>
                        </div>
                        </div>

                        {/* ************Reporting***************** */}

                        <div className="ms-3 col-lg-12 dropdown">
                                                <button
                                                className="btn dropdown-toggle" type="button"id="dropdownMenuButton"data-mdb-toggle="dropdown" aria-expanded="false">Reporting</button>
                                                <div className="col-lg-12 dropdownDiv dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <div className="d-lg-flex  text-start justify-content-center gap-3 ">
                                                <div >
                                                        <h6><a href="">Time Reporting</a></h6>
                                                        <p><a href="">Productivity Tracker</a></p>
                                                        <p><a href="">Time Tracking Invoicing</a></p>
                                                        <p><a href="">Payroll Hours Tracker</a></p>
                                                    </div>    
                                                    <div>
                                                        <h6><a href="">Leave & Vacation Tracker</a></h6>
                                                        <h6><a href="">Attendance Tracker</a></h6>
                                                        <p><a href="">Activity Log</a></p>
                                                        <p><a href="">Time Billing App</a></p>
                                                        <p><a href="">Time & Expense Tracking</a></p>
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>

                        {/* ************Management***************** */}

                                        <div className="ms-3 col-lg-12 dropdown">
                                        <button
                                        className="btn dropdown-toggle" type="button"id="dropdownMenuButton"data-mdb-toggle="dropdown" aria-expanded="false">Management</button>
                                        <div className="col-lg-12 dropdownDiv dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <div className="d-lg-flex text-start justify-content-center gap-2 ">
                                            <div >
                                                <h6><a href="">Employee Scheduling</a></h6>
                                                <h6><a href="">Project Time Tracker</a></h6>
                                                <p><a href="">Time Management App</a></p>
                                                <p><a href="">Workforce Management</a></p>
                                                <p><a href="">Work Management System</a></p>
                                            </div>    
                                            <div>
                                                <h6><a href="">Project Scheduling</a></h6>
                                                <p><a href="">Goal Tracker</a></p>
                                                <p><a href="">Overtime Tracker</a></p>
                                                <p><a href="">Grant Management</a></p>
                                            </div>
                                            </div>
                                        </div>
                                        </div>

                        {/* ************Industry***************** */}

                                        <div className="ms-3 col-lg-12 dropdown">
                                        <button
                                        className="btn dropdown-toggle" type="button"id="dropdownMenuButton"data-mdb-toggle="dropdown" aria-expanded="false">Industry</button>
                                        <div className="col-lg-12 dropdownDiv dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <div className="d-lg-flex text-start justify-content-center gap-2 ">
                                            <div >
                                                <h6><a href="">Employee Time Tracking</a></h6>
                                                <p><a href="">Consultant Time Tracking</a></p>
                                                <p><a href="">Office Team Timesheet</a></p>
                                                <p><a href="">Accounting Time Tracking</a></p>
                                                <p><a href="">Agency Time Tracking</a></p>
                                            </div>    
                                            <div>
                                                <h6><a href="">Freelance Time Tracking</a></h6>
                                                <p><a href="">Construction Time Tracking</a></p>
                                                <p><a href="">Developer Time Tracking</a></p>
                                                <p><a href="">Team Time Management</a></p>
                                            </div>
                                            </div>
                                        </div>
                                        </div>

                       
                    </div>
            </div> 


{/* **************Company*********** */}
                    <div className="d-flex col-lg-5 gap-5 col-9">
                    <div className="companyDiv col-lg-4 col-6">
                        <h5 className="ms-4">COMPANY</h5>
                        <ul><a href="">About us</a></ul>
                        <ul><a href="">Customers</a></ul>
                   </div>

                   <div className="supportDiv col-lg-6 col-5">
                        <h5 className="ms-4">SUPPORT</h5>
                        <ul><a href="">Help</a></ul>
                        <ul><a href="">Tutorials</a></ul>
                        <ul><a href="">Blog</a></ul>
                        <ul><a href="">Contact</a></ul>   
                    </div>
                    </div>

        </div>

            {/* *********Credits Div*********** */}

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
export default Password