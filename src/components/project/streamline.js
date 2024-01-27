import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import './streamline.css'


function Streamline(){
return(
    <>  
<div className=" container-fluid justify-content-center row">
       
       <div className=' row g-3  col-lg-8 '>
           <h2>Streamline Processes</h2>
             <h6>Measure time spent on daily activities to find opportunities for improvements, understand time spent on ad-hoc requests and workload distribution, and improve project efficiency and cost capitalization.</h6>
      </div>
     
   <div className='d-flex row  row-cols-md-3 g-3  col-lg-8'>
        <div class="col">
            <h6>Online Timesheets</h6>
             <p>Fill your weekly timesheet in less than a minute.</p>
        </div>
     
       <div class="col">
            <h6> Timesheet Reminders</h6>
             <p>Get an automatic reminder when you forget to fill your timesheet.</p>
       </div>
     
        <div class="col ps-4">
            <h6>Approval</h6>
            <p>Submit and approve timesheets, and track changes.</p>
        </div>
           </div>
     
     
           <div className='d-flex row  row-cols-md-3 g-3  col-lg-8'>
      <div class="col">
           <h6>Project Status</h6>
           <p>See project progress and improve estimates</p>
      </div>
     
     <div class="col">
         <h6> Manager Role</h6>
          <p>Make someone a manager so they can manage projects and teams.</p>
    </div>
         
        <div class="col ps-4">
           <h6>Custom Fields</h6>
           <p>Add custom fields and information to time entries.</p>
       </div>
           </div>
     
     
   <div className='d-flex row row-cols-md-3 g-3 col-lg-8'>
       <div class="col">
            <h6>API & Webhooks</h6>
             <p>Connect Clockify with other systems and sync data.</p>
       </div>
     
     <div class="col">
            <h6> Import Data</h6>
             <p>Import projects, tasks, and historic time entries from a file.</p>
       </div>

         <div class="col ps-4">
           <h6>Security & Privacy</h6>
            <p>Control who can do what, and log in with your SSO.</p>
         </div>
           </div>
     
           <div className='d-flex row row-cols-md-3 g-3 col-lg-8'>
        <div class="col">
             <h6>Reports</h6>
             <p>See breakdown of all work hours and dig into data.</p>
         </div>
     
     <div class="col">
     <h6> Audit Log </h6>
             <p>Track all changes users make in their timesheets.</p>
           </div>

       <div class="col ps-4">
           <h6>Export</h6>
           <p>Customize and export data from reports (Excel, PDF, CSV).</p>
       </div>
          </div>
            
              </div>


    </>

);

}
export default Streamline
