import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { MdOutlineStreetview, MdOutlineRateReview, MdDelete } from 'react-icons/md'
import { Link } from 'react-router-dom';
import { url } from '../apis/Myapis';


function Employeehome() {

  const [mydata, setdate] = useState([]);

  const myapi = async () => {
    await axios.get(`${url}/alldata`).then((d) => {
      setdate(d.data);
    })
  }

  useEffect(() => {
    myapi();
  }, []);


  const deleterecord = async (id) => {
    await axios.delete(`${url}/removeuser/${id}`).then((d) => {
      console.log(d.data);
      myapi();
    })
  }


  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-12 text-center p-2'>
          <table className='table table-bordered border-primary'>
            <thead>
              <tr>
                <th scope='col'>Sno</th>
                <th scope='col'>FullName</th>
                <th scope='col'>Email</th>
                <th scope='col'>DOB</th>
                <th scope='col'>Password</th>
                <th scope='col'>Gender</th>
                <th scope='col'>Profile Picture</th>
                <th scope='col'>Role</th>
                <th scope='col'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {mydata.map((d, sn = 1) => {
                return (
                  <tr key={d._id}>
                    <th scope='row'>{++sn}</th>
                    <td>{d.fullname}</td>
                    <td>{d.email}</td>
                    <td>{d.dob}</td>
                    <td>{d.pass}</td>
                    <td>{d.gender}</td>
                    <td><img src={d.purl} width={30} /></td>
                    <td>{d.role}</td>
                    <td className='text-end'>
                      <Link to={'detailspage/' + d._id} className='badge text-bg-primary p-2'><MdOutlineStreetview /></Link>
                      <Link to={'editpage/' + d._id} className='badge text-bg-warning ms-2 p-2'><MdOutlineRateReview /></Link>
                      <span className='badge text-bg-danger ms-2 p-2' onClick={() => deleterecord(d._id)}><MdDelete /></span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Employeehome
