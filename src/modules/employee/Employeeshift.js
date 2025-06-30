import React, { Fragment } from 'react'
import Headerpage from '../shares/Headerpage'
import Footerpage from '../shares/Footerpage'
import { FcBusinessman } from "react-icons/fc";

function Employeeshift() {
    return (
        <Fragment>
            <Headerpage />
            <div className='mainpage' style={{ marginTop: "0px", minHeight: "85vh" }}>
                <div className='container-fluid mt-5 py-5 apps1'>
                    <div className='row'>
                        <div className='col-md-3 p-5'>
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title text-center bg-info">Team 1</h4>
                                    <h3 className='text-center'>15 Employee<FcBusinessman size={25} color='skyblue' /></h3>
                                    <h5 className='text-center'>Morning Shift</h5>
                                    <p className="card-text text-center">These shift types are the result of different industry and operational needs, employee preferences, and laws and regulations related to shift scheduling and time off.</p>
                                    <button type="button" className="btn btn-outline-primary">Get Started</button>
                                    <button type="button" className="btn btn-outline-danger ms-3">Change Shift</button>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 p-5 '>
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title text-center bg-warning">Team 2</h4>
                                    <h3 className='text-center'>25 Employee<FcBusinessman size={25} color='yellow' /></h3>
                                    <h5 className='text-center'>Day Shift</h5>
                                    <p className="card-text text-center">These shift types are the result of different industry and operational needs, employee preferences, and laws and regulations related to shift scheduling and time off.</p>
                                    <button type="button" className="btn btn-outline-warning">Get Started</button>
                                    <button type="button" className="btn btn-outline-danger ms-3">Change Shift</button>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 p-5 '>
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title text-center bg-info">Team 3</h4>
                                    <h3 className='text-center'>20 Employee<FcBusinessman size={25} color='skyblue' /></h3>
                                    <h5 className='text-center'>Evening Shift</h5>
                                    <p className="card-text text-center">These shift types are the result of different industry and operational needs, employee preferences, and laws and regulations related to shift scheduling and time off.</p>
                                    <button type="button" className="btn btn-outline-primary">Get Started</button>
                                    <button type="button" className="btn btn-outline-danger ms-3">Change Shift</button>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 p-5 '>
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title text-center bg-warning">Team 4</h4>
                                    <h3 className='text-center'>10 Employee<FcBusinessman size={25} color='yellow' /></h3>
                                    <h5 className='text-center'>Night Shift</h5>
                                    <p className="card-text text-center">These shift types are the result of different industry and operational needs, employee preferences, and laws and regulations related to shift scheduling and time off.</p>
                                    <button type="button" className="btn btn-outline-warning">Get Started</button>
                                    <button type="button" className="btn btn-outline-danger ms-3">Change Shift</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footerpage />
        </Fragment>
    )
}

export default Employeeshift
