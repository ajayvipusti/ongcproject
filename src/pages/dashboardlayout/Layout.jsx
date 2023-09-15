import React, { useEffect, useState } from 'react'
import Header from '../../components/elements/Header'
import Sidebar from '../../components/elements/Sidebar'
import { Outlet, useNavigate } from 'react-router-dom'
import Breadcrumbs from '../../components/elements/Breadcrumbs'
import AuthService from '../../services/Authservice'

const Layout = () => {
  const user = AuthService.isLoggedIn();
  const navigate = useNavigate();
  const [showSideBar, setShowSideBar] = useState(true)


  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <div className="flex flex-row bg-neutral-100 h-screen w-screen">
      <Sidebar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      <div className="flex flex-col flex-1 w-full h-full">
        <Header showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
        <div className="flex-1 min-h-0 overflow-auto no-scrollbar p-2">
          <Breadcrumbs />
          <Outlet />
        </div>
        {/* <div className='text-center text-base animate-pulse py-2'>
        Design and Develop by Vipusti Solutions
        </div> */}
      </div>
    </div>
  )
}

export default Layout