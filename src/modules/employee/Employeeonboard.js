import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/Myreduxfunction';


function Employeeonboard() {
    const count = useSelector((state) => state.counter.value)

    const sndfunction = useDispatch();
    const delfunction = useDispatch();
    return (
        <Fragment>
            <h1 style={{ color: "red" }}>Currently Working Employee = {count}</h1><br />
            <button className='btn btn-dark' onClick={() => sndfunction(increment())}>Increment</button>
            <button className='btn btn-danger ms-4' onClick={() => delfunction(decrement())}>Decrement</button>

        </Fragment>
    )
}

export default Employeeonboard
