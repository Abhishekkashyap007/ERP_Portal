import React from 'react'
import Headerpage from '../shares/Headerpage'
import Footerpage from '../shares/Footerpage'
import { Outlet } from 'react-router-dom'
import Sidebar from '../shares/Sidebar'

function Employeegraph() {
    return (
        <div className='container-fluid app3'>
            <div className='row'>
                <div className='col-12'>
                    <Headerpage />
                </div>
            </div>
            <div className='row mainpage'>
                <div className='col-md-2 bg-success'>
                    <Sidebar />
                </div>
                <div className='col-md-10'>
                    <Outlet></Outlet>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <Footerpage />
                </div>
            </div>
        </div>
    )
}

export default Employeegraph
