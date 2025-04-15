import React from 'react'
import { useState } from 'react'
// with complex state we learn to intracr with obj and arrays
// in complex state one must maintain the datatype,
// and aslo spread out the initial object {...initial, change} 

const Complexstate = () => {
    const [user, setuser] =useState({
        fullName: "John Doe",
        age: 50,
        job: "Frontend Developer"
    })
    const handleChange =()=>{
     setuser({...user, age: 60, job: "Backend-Developer"})
    }
  return (
    <div>
        <div className='w-[300px] rounded-md shadow-2xl p-1.5 mx-auto my-3'>
           <h1 className="text-2xl"> Employee Card</h1>
           <p> Name:{user.fullName}</p>
           <p>Role:{user.job}</p>
           <p>age:{user.age}</p>
           <button onClick={handleChange} className='my btn'>Change</button>
        </div>
    </div>
  )
}

export default Complexstate