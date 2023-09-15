import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  // define state
  const [user, setUser] = useState({ email: "", username:'', password: "", uniqueId:'', confirmPassword:'',operatorName:'' });
  const [error,setError] = useState('')

  // call navigate function
  const navigate = useNavigate()

  const handleSubmit =(e)=>{
    e.preventDefault()
    console.log('user',user)
  }

  // set new title

  return (
    <div className="bg-white 2xl:p-20 xl:p-16 lg:p-16 md:p-12 sm:p-8 p-6  rounded-3xl border-1 border-gray-200">
      <h1 className=" text-4xl font-semibold ">Register</h1>
      <p className=" font-medium text-lg text-gray-500 mt-4 ">
        Kindly enter, Please enter your details
      </p>
      <form onSubmit={(e)=>handleSubmit(e)} className="mt-8 ">
        <div className=" mt-2 ">
          <label className="text-lg font-medium">Username</label>
          <input
            required
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
            type="text"
            name="username"
            placeholder="Enter username"
            className="border block w-full p-1.5 border-primary rounded"
          />
        </div>
        <div className=" mt-2 ">
          <label className="text-lg font-medium">Email</label>
          <input
            required
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
            type="email"
            name="email"
            placeholder="Enter email"
            className="border block w-full p-1.5 border-primary rounded"
          />
        </div>
        <div className=" mt-2 ">
          <label className="text-lg font-medium">Unique Id</label>
          <input
            required
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
            type="text"
            name="uniqueId"
            placeholder="Enter unique id"
            className="border block w-full p-1.5 border-primary rounded"
          />
        </div>
        <div className=" mt-2 ">
          <label className="text-lg font-medium">Operator Name</label>
          <input
            required
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
            type="text"
            name="operatorName"
            placeholder="Enter operator name"
            className="border block w-full p-1.5 border-primary rounded"
          />
        </div>
        <div className="mt-2">
          <label className="text-lg font-medium">Password</label>
          <input
            required
            autoComplete="current-password"
            type="password"
            name="password"
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
            placeholder="Password"
            className="border block w-full p-1.5 border-primary rounded"
          />
        </div>
        <div className="mt-2">
          <label className="text-lg font-medium">Confirm Password</label>
          <input
            required
            autoComplete="current-password"
            type="password"
            name="confirmPassword"
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
            placeholder="Password"
            className="border block w-full p-1.5 border-primary rounded"
          />
        </div>
          {
            error !== ""?
          <p className="p-2 text-pink-500">{error}</p>:null
          }
        <div className=" mt-6  flex justify-center gap-y-4 w-full py-1">
          <button type="submit" className="px-6 py-1.5 border-black border rounded-sm hover:bg-black hover:text-white delay-150 duration-150 shadow-md w-full">
            Register
          </button>
        </div>
        <p className="flex justify-center">Already have account? <button className="px-1 text-teal-500" onClick={()=>navigate('/login')}>Sign In</button></p>
      </form>
    </div>
  );
};

export default RegisterForm;
