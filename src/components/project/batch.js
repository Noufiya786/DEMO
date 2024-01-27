


import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './batch.css';

function Batch() {
  const containerStyle = {
    background: 'linear-gradient(to right, #1BA098 10%, #a6eee9)',
    minHeight: '100vh',
    padding: '20px',
  };

  return (
    <div className="container-fluid-batch" style={containerStyle}>
      <div className="row justify-content-between align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src="https://i.postimg.cc/cJxC8Hyh/bmu-gg-white-1.png" alt="Branch Logo" className="logo-img mt-5 text-dark" width="200" height="80" />
            </div>
            <div className="col-lg-6 mt-4 d-flex justify-content-end align-items-center pe-3">
              <button className="btn custom-button custom-batch">CREATE NEW BATCH</button>
            </div>
          </div>
        </div>
      </div>

      <div className="card mt-5 ms-4 me-3">
        <div className="card-body p-1">
          <div className="d-flex justify-content-between bg-light text-center mt-3">
            <h3 className="text-secondary">Batch</h3>
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
                  <th>Batch Number</th>
                  <th>Batch Mode</th>
                  <th>Total Number Of Students</th>
                  <th>Total Number Of Male</th>
                  <th>Total Number Of Female</th>
                  <th>Batch Start Date</th>
                  <th>Batch End Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td><input type="text" className="form-batch" aria-label="Text input with serial number" placeholder="Enter Number" /></td>
                  <td><input type="text" className="form-batch" aria-label="Text input with serial number" placeholder="Batch Mode" /></td>
                  <td><input type="text" className="form-batch" aria-label="Text input with serial number" placeholder="Total Students" /></td>
                  <td><input type="text" className="form-batch" aria-label="Text input with serial number" placeholder="Male Count" /></td>
                  <td><input type="text" className="form-batch" aria-label="Text input with serial number" placeholder="Female Count " /></td>
                  <td><input type="text" className="form-batch" aria-label="Text input with serial number" placeholder="Start Date" /></td>
                  <td><input type="text" className="form-batch" aria-label="Text input with serial number" placeholder="End Date" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Batch;


