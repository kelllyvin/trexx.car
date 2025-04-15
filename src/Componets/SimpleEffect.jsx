import React, { useEffect } from 'react'
import { useState } from 'react'
// re-render can be cause when there is a state change
// use effect is side effect (initial laoding the page or whwn there is componet change)
// use effect takes in callback function with opetional array list

const SimpleEffect = () => {
   const [count, setcount] = useState(1)
   const [num,setnum] =useState(20)
    useEffect(() =>{
        console.log("useeffect ran");
        
    },[count,num])
  return (
    <div className="text-center">
      <h1 className="text-center text-3xl my-3">Use Effect Basics</h1>
      <h1 className="text-3xl">{count}</h1>
      <button className="mybtn" onClick={() => setcount(count + 1)}>
        Change
      </button>

      <h1 className="text-3xl">{num}</h1>
      <button className="mybtn" onClick={() => setnum(num + 1)}>
        Change
      </button>
    </div>
  );
}

export default SimpleEffect