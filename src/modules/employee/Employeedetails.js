import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { url } from '../apis/Myapis';

function Employeedetails() {

    const { id } = useParams();

    const [date, setdate] = useState({});

    const myapi = async () => {
        await axios.get(`${url}/singlereocrd/${id}`).then((d) => {
            console.log(d.data);
            setdate(d.data);
        })
    }

    useEffect(() => {
        myapi();
    }, []);

    return (
        <div className='container-fluid mt-5'>
            <div className='row'>
                <div className='col-md-8'>
                    <h2 style={{ color: "purple" }}>Employee Name = {date.fullname}</h2>
                    <h2>Date of Birth = {date.dob}</h2>
                    <h2 style={{ color: "purple" }}>Gender = {date.gender}</h2>
                    <h2>Email = {date.email}</h2>

                </div>
                <div className='col-md-4'>
                    <img src={date.purl} alt='mydetail' className='img-fluid' />
                </div>
            </div>
        </div>
    )
}

export default Employeedetails
