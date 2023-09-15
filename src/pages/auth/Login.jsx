import React from 'react'
import Form from './LoginForm'

const Login = () => {
  return (
    <div className="flex w-full h-screen">
        <div className=' w-full  flex items-center justify-center 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-2/3 sm:w-2/3'>
            <Form/>
        </div>
        <div className="bg-gray-200 relative h-full hidden w-1/2 2xl:flex xl:flex md:flex lg:flex items-center justify-center">
        <div className=" w-60 h-60 bg-gradient-to-tr from-primary to-secondary animate-bounce rounded-full"></div>
        <div className="w-full absolute h-1/2 bottom-0 bg-white/10 backdrop-blur-lg"></div>
      </div>
    </div>
  )
}

export default Login