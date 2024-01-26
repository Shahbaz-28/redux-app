import React, { useEffect, useRef, useState } from "react";

const UseRef = () => {
  const [name, setname] = useState("");
//   const [count, setcount] = useState(0);

  //UseRef Use is to create a mutable variable without causing rerender
  const ref = useRef(0);

  useEffect(() => {
    ref.current = ref.current + 1;

    // setcount((prev)=> prev+1)
  });

  // Second use access Dom Elment
    
  const inputVal = useRef()
   
  const handleClick=()=>{
     console.log(inputVal)
     inputVal.current.style.width= "300px"
  }

  return (
    <div>
      <input ref={inputVal} onChange={(e) => setname(e.target.value)}></input> <br/> <br/>

       <button onClick={handleClick}  className="btn btn-primary ">Click</button>
      <h2>Name: {name}</h2>
      <h2>Count: {ref.current}</h2>
    </div>
  );
};

export default UseRef;
