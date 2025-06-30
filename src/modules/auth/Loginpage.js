import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { url } from '../apis/Myapis';

function Loginpage() {


    const mynav = useNavigate();
    const [myform, setmyform] = useState({
        email: "",
        pass: ""
    });

    const chaninput = (e) => {
        const { name, value } = e.target;
        setmyform((uu) => ({
            ...uu,
            [name]: value
        }))
    }

    const userlogin = async () => {
        const { email, pass } = myform;
        const datares = await fetch(`${url}/loginpage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email, pass
            })
        });
        const resdata = await datares.json();
        if (resdata.status === 460) {
            toast.error("email not found");
        }
        if (resdata.status === 466) {
            toast.error("record not found", { autoClose: 2000, theme: "dark" });
        }
        if (resdata.status === 240) {
            toast.success("Welcome to successfully login", { autoClose: 2000, theme: "dark" });
            console.log(resdata);
            localStorage.setItem('user', JSON.stringify(resdata));
            setTimeout(() => {
                if (resdata.role === 'admin') {
                    mynav(`/landing`);
                }
                else {
                    mynav(`/panel1`)
                }
            }, 2000)
        }
    }

    const fst = 30;

    return (
        <div className='container mt-3'>
            <div className='row justify-content-center'>
                <div className='col-12 p-5 bg-dark rounded'>
                    <div className='container-fluid d-flex'>
                        <div className='row text-white justify-content-center  m-5'>
                            <div className='col-6 pb-3 text-center'>
                                <img src='https://icon-library.com/images/icon-users/icon-users-15.jpg' width={80} height="80" alt='mylogo' className='rounded-circle'></img>
                                <p style={{ textShadow: '2px 2px 5px black', fontSize: `${fst}px` }}> LOGIN PAGE</p>
                            </div>
                            <div className='col-12'>
                                <div className="mb-3">
                                    <label className="form-label">Email address</label>
                                    <input type="text" className="form-control" name="email" value={myform.email} onInput={chaninput} />
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input type="text" className="form-control" name="pass" value={myform.pass} onInput={chaninput} />
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" />
                                    <label className="form-check-label">Remember Me</label>
                                </div>
                            </div>
                            <div className='col-12 text-center'>
                                <div className="mb-3">
                                    <button type="button" className='btn btn-success shadow' onClick={userlogin}>User Login</button>
                                    <Link className='btn btn-outline-danger shadow ms-5' to='registor'>New Registor</Link>
                                </div>
                            </div>

                        </div>
                        <div className='col-6'>
                            <div className="mb-3">
                                <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-inner rounded">
                                        <div class="carousel-item active">
                                            <img src="https://th.bing.com/th/id/OIP.gxDyGP1AvowH6Gf_jp4eMAAAAA?cb=iwp2&rs=1&pid=ImgDetMain" class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src="https://th.bing.com/th/id/OIP.gxDyGP1AvowH6Gf_jp4eMAAAAA?cb=iwp2&rs=1&pid=ImgDetMain" class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src="https://th.bing.com/th/id/OIP.gxDyGP1AvowH6Gf_jp4eMAAAAA?cb=iwp2&rs=1&pid=ImgDetMain" class="d-block w-100" alt="..." />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer position="top-right" autoClose={6000} />
        </div>
        // </form>
    )
}
export default Loginpage
