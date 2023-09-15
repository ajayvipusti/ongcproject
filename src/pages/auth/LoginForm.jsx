import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../../services/Authservice";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  // define state
  const [user, setUser] = useState({ email: "", password: "" });
  const [error,setError] = useState('')

  // call navigate function
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit=async(e)=>{
    e.preventDefault()
    try {
      await AuthService.login(user, dispatch,navigate);
    } catch (error) {
      console.error("Error logging in", error);
    }
  }


  const logginUser = AuthService.isLoggedIn();

  // use given below while hitting api to move on dashboard

  // useEffect(()=>{
  //   if(status==="success"){
  //     navigate('/admin')
  //   }
  // },[status,navigate])

  useEffect(() => {
    if (logginUser) {
      navigate('/admin');
    }
  }, [logginUser, navigate]);


  // set new title


  return (
    <div className="bg-white 2xl:p-20 xl:p-16 lg:p-16 md:p-12 sm:p-8 p-6  rounded-3xl border-1 border-gray-200">
      <h1 className=" text-4xl font-semibold ">Login</h1>
      <p className=" font-medium text-lg text-gray-500 mt-4 ">
        Welcome back! Please enter your details
      </p>
      <form onSubmit={handleSubmit} className="mt-8 ">
        <div className=" mt-2 ">
          <label className="text-lg font-medium">Username</label>
          <input
            required
            autoComplete="email"
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
            type="text"
            name="email"
            placeholder="Enter username"
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
          {
            error !== ""?
          <p className="p-2 text-pink-500">{error}</p>:null
          }
        <div className=" mt-6  flex justify-center gap-y-4 w-full py-1">
          <button type="submit" className="px-6 py-1.5 border-black border rounded-sm hover:bg-black hover:text-white delay-150 duration-150 shadow-md w-full">
            Sign In
          </button>
        </div>
        {/* <p className="flex justify-center">Didn't have account? <button onClick={()=>navigate('/register')} className="px-1 text-teal-500">Sign Up</button></p> */}
      </form>
      <div className="mt-6 flex justify-center gap-y-4 w-full py-1">
  <div
    
    className="px-6 py-1.5  cursor-pointer text-lg font-semibold text-center mt-12 animate-pulse w-full"
    onClick={() => {
      const link = document.createElement('a');
      link.href = '/assets/CIPL.exe';
      link.download = 'CIPL.exe';
      link.click();
    }}
  >
    <span className="text-blue-600">Click Here</span> to Download Agent File.
  </div>
</div>
    </div>
  );
};

export default LoginForm;
