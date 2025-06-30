import React from 'react'
import { FcBusinessman } from "react-icons/fc";
import { FcBarChart } from "react-icons/fc";
import { FcReadingEbook } from "react-icons/fc";
import { FcInspection } from "react-icons/fc";
import { FcConferenceCall } from "react-icons/fc";
import { FcCustomerSupport } from "react-icons/fc";
import { FcSmartphoneTablet } from "react-icons/fc";
import { FcCollaboration } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom'

function Mylandingpage() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  }
  return (
    <div className='container mt-3 apps'>
      <div className='row justify-content-center'>
        <div className='col-md-12 p-5 bg-primary rounded shadow'>
          <div className='container-fluid'>
            <div className='row text-white'>
              <div class="row align-items-center pb-3">
                <div class="col-6">
                  <p class="h2 text-center">Hello! Admin</p>
                </div>
                <div class="col-4 text-end">
                  <button class="btn btn-danger" onClick={handleLogout}>Logout</button>
                </div>
              </div>
              <div className='col-md-3 mt-5 text-center'>
                <Link to='employee'>
                  <div className="card p-3 shadow rounded rounded-circle">
                    <p className='h1 text-center'><FcBusinessman size={75} /></p>
                    <div className="card-body">
                      <h5 className="card-title">Employee Database</h5>
                    </div>
                  </div>
                </Link>
              </div>
              <div className='col-md-3 mt-5 text-center'>
                <Link to='onboard'>
                  <div className="card p-3 shadow rounded rounded-circle">
                    <p className='h1 text-center'><FcConferenceCall size={50} /></p>
                    <div className="card-body">
                      <h5 className="card-title">Employee Onboarding</h5>
                    </div>
                  </div>
                </Link>
              </div>
              <div className='col-md-3 mt-5 text-center'>
                <Link to='performance'>
                  <div className="card p-3 shadow rounded rounded-circle">
                    <p className='h1 text-center'><FcBarChart size={50} /></p>
                    <div className="card-body">
                      <h5 className="card-title">Performance Management</h5>
                    </div>
                  </div>
                </Link>
              </div>
              <div className='col-md-3 mt-5 text-center'>
                <Link to='help'>
                  <div className="card p-3 shadow rounded rounded-circle">
                    <p className='h1 text-center'><FcCollaboration size={50} /></p>
                    <div className="card-body">
                      <h5 className="card-title">Attendance Tracker</h5>
                    </div>
                  </div>
                </Link>
              </div>
              <div className='col-md-3 mt-5 text-center'>
                <Link to='time'>
                  <div className="card p-3 shadow rounded rounded-circle">
                    <p className='h1 text-center'><FcInspection size={50} /></p>
                    <div className="card-body">
                      <h5 className="card-title">Timesheets</h5>
                    </div>
                  </div>
                </Link>
              </div>
              <div className='col-md-3 mt-5 text-center'>
                <Link to='help'>
                  <div className="card p-3 shadow rounded rounded-circle">
                    <p className='h1 text-center'><FcReadingEbook size={50} /></p>
                    <div className="card-body">
                      <h5 className="card-title">Learning Management</h5>
                    </div>
                  </div>
                </Link>
              </div>
              <div className='col-md-3 mt-5 text-center'>
                <Link to='schedule'>
                  <div className="card p-3 shadow rounded rounded-circle">
                    <p className='h1 text-center'><FcSmartphoneTablet size={50} /></p>
                    <div className="card-body">
                      <h5 className="card-title">Shift Scheduling</h5>
                    </div>
                  </div>
                </Link>
              </div>
              <div className='col-md-3 mt-5 text-center'>
                <Link to='help'>
                  <div className="card p-3 shadow rounded rounded-circle">
                    <p className='h1 text-center'><FcCustomerSupport size={50} /></p>
                    <div className="card-body">
                      <h5 className="card-title">Help Section</h5>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mylandingpage
