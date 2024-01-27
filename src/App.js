import logo from './logo.svg';
// import './App.css';

import Time from './components/project/time.js';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import Branch from './components/project/branch.js';
import YourComponent from './components/project/branch.js';
import Streamline from './components/project/streamline.js';
import Password from './components/project/password.js';
import Log from './components/project/log.js';
import New from './components/project/new.js';
import Nav from './components/project/nav.js';
import StudentAttendance from './components/project/StudentAttendance.js';
import Category from './components/category.js';
import Batch from './components/project/batch.js';
import Mode from './components/project/mode.js';




function App() {
  return (
    <>
     {/* <Log/>  */}
     {/* <New/> */}
    {/* <Password/> */}
    {/* <Nav/> */}
    {/* <StudentAttendance/> */}
    <Branch/> 
     <Category/> 
     <Batch/>
    <Mode/>

    </>
  );
}

export default App;