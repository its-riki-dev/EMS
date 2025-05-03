import React, { useState } from 'react'

const Login = ({handleLogin}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(email, password)

    setEmail('')
    setPassword('')
  }
  
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl border-emerald-600 p-20'>
            <form onSubmit={submitHandler} className='flex flex-col items-center justify-center'>
                <input value={email} onChange = {(e) => {setEmail(e.target.value)}} required className='outline-none border-2 border-emerald-600 rounded-full py-3 px-5 text-xl' type="email" placeholder='Enter your email' />

                <input value={password} onChange = {(e) => {setPassword(e.target.value)}} required className='outline-none border-2 border-emerald-600 rounded-full py-3 px-5 mt-3 text-xl' type="password" placeholder='Enter password' />

                <button className='w-full outline-none bg-emerald-600 text-white rounded-full py-3 px-5 mt-7 text-xl shadow-md hover:bg-emerald-700 transition-all duration-300'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login