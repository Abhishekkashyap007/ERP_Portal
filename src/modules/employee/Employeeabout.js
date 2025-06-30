import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import { url } from '../apis/Myapis';

function Employeeabout() {

  const customnavigate = useNavigate();

  const [myform, setmyform] = useState({
    email: "",
    fullname: "",
    dob: "",
    gender: "",
    pass: "",
    purl: "",
    role: ""
  });
  console.log(myform);


  const chaninput = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;
    setmyform((uu) => ({
      ...uu,
      [name]: value
    }))
  }


  const submitdata = async () => {
    await axios.post(`${url}/registor`, myform).then((d) => {
      // console.log(d);
      toast.success('New User Added...');
      setTimeout(() => {
        customnavigate('/');
      }, 1000);
    })
  }

  return (
    <div className='container-fluid mt-3'>
      <div className='row justify-content-center'>
        <div className='col-md-6 bg-dark text-white p-4 shadow'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-12 p-3 text-center'>
                <img src='https://icon-library.com/images/icon-users/icon-users-15.jpg' width={80} height="80" alt='mylogo' className='rounded-circle'></img>
                <h2 className='mt-3'>User Registor Page</h2>
              </div>
            </div>
            <div className='row'>
              <section className='col-md-6'>
                <div className='mb-3'>
                  <label className='form-label'>Email address</label>
                  <input type='email' className='form-control' name='email' value={myform.email} onInput={chaninput} />
                </div>
              </section>
              <section className='col-md-6'>
                <div className='mb-3'>
                  <label className='form-label'>Full Name</label>
                  <input type='text' className='form-control' name='fullname' value={myform.fullname} onInput={chaninput} />
                </div>
              </section>
              <section className='col-md-6'>
                <div className='mb-3'>
                  <label className='form-label'>Date of Birth</label>
                  <input type='date' className='form-control' name='dob' value={myform.dob} onChange={chaninput} />
                </div>
              </section>
              <section className='col-md-6'>
                <div className='mb-3'>
                  <label className='form-label'>Gender</label><br />
                  <div className='form-check form-check-inline'>
                    <input className='form-check-input' type='radio' name='gender' value='Male' defaultValue={myform.gender} checked={myform.gender === "Male" ? true : false} onChange={chaninput} />
                    <label className='form-check-label'>Male</label>
                  </div>
                  <div className='form-check form-check-inline'>
                    <input className='form-check-input' type='radio' name='gender' value='Female' defaultValue={myform.gender} checked={myform.gender === "Female" ? true : false} onChange={chaninput} />
                    <label className='form-check-label'>Female</label>
                  </div>
                </div>
                <ToastContainer autoClose={2000} />
              </section>
              <section className='col-md-6'>
                <div className='mb-3'>
                  <label className='form-label'>Password</label>
                  <input type='password' className='form-control' name='pass' value={myform.pass} onInput={chaninput} />
                </div>
              </section>
              <section className='col-md-6'>
                <div className='mb-3'>
                  <label className='form-label'>Profile Picture Url</label>
                  <input type='text' className='form-control' name='purl' value={myform.purl} onInput={chaninput} />
                </div>
              </section>
              <section className='col-md-6'>
                <div className='mb-3'>
                  <label className='form-label'>Role/Designation</label>
                  <select className='form-control' name='role' value={myform.role} onChange={chaninput}>
                    <option value=''>Select Role</option>
                    <option value='admin'>Admin</option>
                    <option value='employee'>Employee</option>
                  </select>
                </div>

              </section>
            </div>
            <div className='row'>
              <div className='col-12 p-3 text-center'>
                <button className='btn btn-success' type='button' onClick={submitdata}>Registor</button>
                <Link to="/" className='btn btn-outline-danger ms-3'>Back</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Employeeabout
