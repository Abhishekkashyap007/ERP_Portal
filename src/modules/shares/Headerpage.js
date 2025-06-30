import React from 'react'
import { Link } from 'react-router-dom'
import { FcConferenceCall } from "react-icons/fc";


function Headerpage() {
    return (
        <nav className="navbar navbar-expand-lg bg-primary fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#" ><FcConferenceCall size={30} /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="alldata">All Data</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="about">New User</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link disabled" to="contact">Contact Us</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle disabled" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Career
                            </a>
                            <ul className="dropdown-menu ">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <Link to="/landing" className='btn btn-danger'>Back</Link>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Headerpage
