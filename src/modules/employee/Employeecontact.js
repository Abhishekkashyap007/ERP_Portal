import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { url } from '../apis/Myapis';

function Employeecontact() {

  const { id } = useParams();

  const customnavigate = useNavigate();

  const [myform, setmyform] = useState({
    email: "",
    fullname: "",
    dob: "",
    gender: "",
    pass: "",
    purl: "",
  });


  const chaninput = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setmyform((uu) => ({
      ...uu,
      [name]: value
    }))
  }

  const singleremocard = () => {
    axios.get(`${url}/singlereocrd/${id}`).then((d) => {
      console.log(d.data);
      setmyform(d.data);
    })
  }

  useEffect(() => {
    singleremocard();
  }, []);

  const submiteditpage = async () => {
    await axios.patch(`${url}/edituser/${id}`, myform).then((d) => {
      console.log(d.data);
      customnavigate('/landing/employee');
    })
  }


  return (
    <div className='container-fluid mt-3'>
      <div className='row justify-content-center'>
        <div className='col-md-6 bg-light p-4 shadow'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-12 p-3 text-center'>
                <img src='https://icon-library.com/images/icon-users/icon-users-15.jpg' width={80} height="80" alt='mylogo' className='rounded-circle'></img>
                <h2 className='mt-3'>User Edit Page</h2>
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
                  <label className='form-label'>FullName</label>
                  <input type='text' className='form-control' name='fullname' value={myform.fullname} onInput={chaninput} />
                </div>
              </section>
              <section className='col-md-6'>
                <div className='mb-3'>
                  <label className='form-label'>DOB</label>
                  <input type='date' className='form-control' name='dob' value={myform.dob} onChange={chaninput} />
                </div>
              </section>
              <section className='col-md-6'>
                <div className='mb-3'>
                  <label className='form-label'>Gender</label><br />
                  <div className='form-check form-check-inline'>
                    <input className='form-check-input' type='radio' name='gender' value='Male' defaultValue={myform.gender} onChange={chaninput} />
                    <label className='form-check-label'>Male</label>
                  </div>
                  <div className='form-check form-check-inline'>
                    <input className='form-check-input' type='radio' name='gender' value='Female' defaultValue={myform.gender} onChange={chaninput} />
                    <label className='form-check-label'>Female</label>
                  </div>
                </div>
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
            </div>
            <div className='row'>
              <div className='col-12 p-3 text-center'>
                <button className='btn btn-success' type='button' onClick={submiteditpage}>Update</button>
                <button className='btn btn-danger ms-3'>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Employeecontact
