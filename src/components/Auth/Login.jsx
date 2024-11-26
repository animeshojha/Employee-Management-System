import React, { useState } from 'react'

function Login({handleLogin}) {
 //console.log(handleLogin);
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const submitHandler = (e) => {
    e.preventDefault()
    console.log("email is:", email);
    console.log("password is:",password);
    handleLogin(email,password);
    setEmail("")
    setPassword("")

  }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 rounded-xl p-20  border-emerald-600'>
        <form
          onSubmit={(e) => {
            submitHandler(e)
          }}
          className=' flex flex-col items-center justify-center'>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            required className='text-white border-2 border-emerald-600 rounded-full py-3 px-5 text-xl outline-none bg-transparent placeholder:text-gray-400' type='email' placeholder='Enter your email'></input>
          <input 
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
          required className=' text-white border-2 border-emerald-600 rounded-full py-3 px-5 text-xl outline-none mt-3 bg-transparent placeholder:text-gray-400' type='password' placeholder='Enter your password' />
          <button className=' text-white mt-5  placeholder:text-white bg-emerald-600 outline-none border-2 border-emerald-600 text-xl w-full py-3 px-8 rounded-full font-semibold'>Log in</button>
        </form>
      </div>
      
    </div>
  )
}

export default Login