
import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import './branch.css'

function Branch(){
  const containerStyle = {
    background: 'linear-gradient(to right,#1BA098 10%,#a6eee9)',
    minHeight: '100vh',
    padding: '20px', 
  };

  return(
        <div className="container-fluid-branch" style={containerStyle}>

      <div className="row justify-content-between align-items-center">
       

<div class="container">
  <div class="row">
    <div class="col-lg-6">

      <img src="https://i.postimg.cc/cJxC8Hyh/bmu-gg-white-1.png" alt="Branch Logo" class="logo-img mt-5 text-dark" width="200" height="80" />
    </div>
    <div class="col-lg-6 mt-4 d-flex justify-content-end align-items-center pe-3">
   
      <button className="btn custom-button custom-branch">CREATE NEW BRANCH</button>
    </div>
  </div>
</div>


      </div>

 

<div className="card mt-5 ms-4 me-3">
  <div className="card-body p-1">
    <div className="d-flex justify-content-between bg-light text-center mt-3 ">
      <h5 className="text-secondary">Branch</h5>

      <div className="dropdown">
        <button className="btn text-secondary dropdown-toggle me-5" type="button" id="dropdownMenuButton4" data-bs-toggle="dropdown" aria-expanded="false">
          Filter
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton4">
          <li><a className="dropdown-item" href="#">Save as CSV</a></li>
          <li><a className="dropdown-item" href="#">Save as Excel</a></li>
          <li><a className="dropdown-item" href="#">Customize</a></li>
        </ul>
      </div>
    </div>
    <hr />
    <div className="table-responsive p-1">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name of the Branch</th>
            <th>Branch Address</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td><input type="text" className="form-branch" aria-label="Text input with serial number" placeholder="Branch Name" /></td>
            <td><input type="text" className="form-branch" aria-label="Text input with serial number" placeholder="Branch Address" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>


    </div>

  );
}

export default Branch;

