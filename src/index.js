import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { lazy, Suspense } from 'react';
import "./style.css";
import Loginpage from './modules/auth/Loginpage';
import Mylandingpage from './modules/dashboard/Mylandingpage';
import Employeepage from './modules/employee/Employeepage';
import Employeehome from './modules/employee/Employeehome';
import Employeeabout from './modules/employee/Employeeabout';
import Employeecontact from './modules/employee/Employeecontact';
import Employeegraph from './modules/employee/Employeegraph';
import Employeeperformance from './modules/employee/Employeeperformance';
import Employeetime from './modules/employee/Employeetime';
import Employeedetails from './modules/employee/Employeedetails';
import Employeeonboard from './modules/employee/Employeeonboard';
import { Provider } from 'react-redux';
import { mystore } from './modules/redux/Mystoredata';
import Employeeshift from './modules/employee/Employeeshift';
import Panel1 from './EmployeePanel/Panel1'
import PanelList from './EmployeePanel/PanelList';
// import EditProfile from './EmployeePanel/EditProfile';

const Employeehelp = lazy(() => import('./modules/employee/Employeehelp'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={mystore}>
        <Routes>
          <Route path='' element={<Loginpage />}></Route>
          <Route path='registor' element={<Employeeabout />}></Route>
          <Route path='landing' element={<Mylandingpage />}></Route>
          <Route path='landing/employee' element={<Employeepage />}>
            <Route path='' element={<Employeehome />}></Route>
            <Route path='about' element={<Employeeabout />}></Route>
            <Route path='editpage/:id' element={<Employeecontact />}></Route>
            <Route path='detailspage/:id' element={<Employeedetails />}></Route>
            <Route path='editpage/:id' element={<Employeecontact />}></Route>
          </Route>
          <Route path='landing/performance' element={<Employeegraph />}>
            <Route path='' element={<Employeeperformance />}></Route>
          </Route>
          <Route path='landing/help' element={<Employeegraph />}>
            <Route path='' element={<Suspense fallback={<h1 className='mylader'>Loading....</h1>}>
              <Employeehelp />
            </Suspense>}></Route>
          </Route>
          <Route path='landing/time' element={<Employeegraph />}>
            <Route path='' element={<Employeetime />}></Route>
          </Route>
          <Route path='landing/onboard' element={<Employeegraph />}>
            <Route path='' element={<Employeeonboard />}></Route>
          </Route>
          <Route path='landing/schedule' element={<Employeeshift />}></Route>
          <Route path='panel1' element={<Panel1 />}> </Route>
          <Route path='panel1/Task' element={<PanelList />}> </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

