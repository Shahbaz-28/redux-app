import React, { useState } from 'react'

const InputHandle = () => {
     const [details, setdetails] = useState({
        name: "",
        email:"",
        password:""
     })

     const handleChange = (e)=>{
        const {name, value} = e.target;
        setdetails((prev)=>{
            return {...prev, [name]:value}
        })

     }

     const handleSubmit = (e)=>{
        e.preventDefault();
          console.log(details)
    }

  return (
    <div> 
      <form onSubmit={handleSubmit} >
        <h2>Input Practises</h2>
        <h3>Name :</h3><input type='text' name='name' onChange={handleChange} placeholder='Your Name'/>
        <h3>Email :</h3><input type='email' name='email' onChange={handleChange} placeholder='Your Email'/>
        <h3>Password :</h3>{""}
        <input type='password' name='password' onChange={handleChange} placeholder='Your Password'/><br/> <br/>
        <button type='submit' className='btn btn-primary'>Submit</button>

        </form>
    </div>
  )
}

export default InputHandle