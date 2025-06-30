import React from 'react'
import { FcConferenceCall } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';

function PanelHeader() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/');
    }
    return (
        <nav className="navbar navbar-expand-lg bg-primary fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><FcConferenceCall size={30} /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                             <Link  className="nav-link active text-white" to='/panel1'>Profile</Link>
                        </li>
                         <li className="nav-item">
                            <Link className="nav-link active text-white" to='Task'>Daily Task</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link active text-white" to='/editpage'>Change Password</Link>
                        </li> */}
                        {/* <li className="nav-item">
                            <a className="nav-link active text-dark disabled" href="#">View Attendance</a>
                        </li> */}
                    </ul>
                    <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </nav>
    )
}

export default PanelHeader
