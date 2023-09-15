import React from 'react'
import {BiBell,BiPowerOff} from 'react-icons/bi'
import {HiBars3} from 'react-icons/hi2'
import { useNavigate } from 'react-router-dom'
import AuthService from '../../services/Authservice'

const Header = ({setShowSideBar,showSideBar}) => {
  const navigate = useNavigate()
  const localData = AuthService.getUser()
  // console.log('localdata',localData)
  return (
    <div>
      <div className={` bg-primary z-50 border-white  sticky inset-x-0 top-0  overflow-visible lg:border-white ${showSideBar? "lg:border-l-[0.5px] delay-200 duration-200":""}   w-full`}>
        <div className="bg-primary h-16 px-4 flex items-center border-b border-gray-200 justify-between">
          <div className="">
            <HiBars3
              size={40}
              className="px-2 cursor-pointer text-white hover:text-sky-500"
              onClick={()=>setShowSideBar(!showSideBar)}
            />
          </div>
          <div className="flex items-center text-white">
            <img src='/ongc1.png'  className="mx-1  w-full h-10"/>
            {/* <img src={localData?.profile_image_url} className="rounded-full border border-white w-10 h-10" /> */}
            <span className="px-1 hover:text-sky-500 cursor-pointer">Admin</span>
            {/* <BiBell size={40} className="px-2 cursor-pointer hover:text-sky-500" /> */}
            <BiPowerOff 
            size={40} 
            className="mx-2 cursor-pointer hover:text-sky-500" 
            onClick={()=>{
              AuthService.logout()
              }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header