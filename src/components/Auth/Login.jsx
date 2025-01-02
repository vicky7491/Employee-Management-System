import React, { useState } from 'react'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (event) =>{
    event.preventDefault()
    console.log("email is:", email)
    console.log("password is:", password)
    setEmail("")
    setPassword("")
  }
  
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 p-20 rounded-xl">
        <form onSubmit={(event)=>{
          submitHandler(event)
        }} className="flex flex-col gap-2 items-center justify-center">
          <input value={email} onChange={(e)=>{
            setEmail(e.target.value)
          }} required className="outline-none bg-transparent border-2 border-emerald-600 px-5 py-3 text-xl rounded-full placeholder:text-grey-400" type="email"  placeholder="Enter your email"/>
          <input value={password} onChange={(e)=>{
            setPassword(e.target.value)
          }} required className="outline-none bg-transparent border-2 border-emerald-600 px-5 py-3 text-xl rounded-full mt-3 placeholder:text-white-400" type="password"  placeholder="Enter password"/>
          <button className="text-white outline-none border-none bg-emerald-600 px-5 py-3 text-xl rounded-full mt-5">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login