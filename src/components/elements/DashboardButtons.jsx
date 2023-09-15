import React, { useEffect } from 'react'
import {UsersLogo} from '../logos/Users'
import { useDispatch, useSelector } from 'react-redux'
import { getDashboardData } from '../../features/actions/dashboard/dashboard';

const DashboardButtons = ({data}) => {

    const {dashboard} = useSelector((state)=>state.dashboard)
    const dispatch = useDispatch()
  
    useEffect(()=>{
      dispatch(getDashboardData())
    },[])

  return (
    <div className='grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-4 grid-cols-2 gap-4 w-full px-2'>
        <div className='border border-gray-200 p-2 bg-white basis-1/4'>
            <h4 className='w-full text-gray-500 uppercase font-semibold'>Installed Agents</h4>
            <div className='flex items-center'>
            <div className='bg-cyan-700 p-2 w-12 h-12'>
            <UsersLogo/>
            </div>
            <div className='p-1 px-3'>
                <h5 className='text-sm font-semibold text-gray-500 uppercase'>Count</h5>
                <p className='text-lg text-gray-500 font-bold'>{dashboard?.install?dashboard?.install:0}</p>
            </div>
            </div>
        </div>
        <div className='border border-gray-200 p-2 bg-white basis-1/4'>
            <h4 className='w-full text-gray-500 uppercase font-semibold'>Online Agents</h4>
            <div className='flex items-center'>
            <div className='bg-emerald-700 p-2 w-12 h-12'>
            <UsersLogo/>
            </div>
            <div className='p-1 px-3'>
                <h5 className='text-sm font-semibold text-gray-500 uppercase'>Count</h5>
                <p className='text-lg text-gray-500 font-bold'>{dashboard?.online?dashboard?.online:0}</p>
            </div>
            </div>
        </div>
        <div className='border border-gray-200 p-2 bg-white basis-1/4'>
            <h4 className='w-full text-gray-500 uppercase font-semibold'>Uninstall Agents</h4>
            <div className='flex items-center'>
            <div className='bg-red-700 p-2 w-12 h-12'>
            <UsersLogo/>
            </div>
            <div className='p-1 px-3'>
                <h5 className='text-sm font-semibold text-gray-500 uppercase'>Count</h5>
                <p className='text-lg text-gray-500 font-bold'>0</p>
            </div>
            </div>
        </div>
        <div className='border border-gray-200 p-2 bg-white basis-1/4'>
            <h4 className='w-full text-gray-500 uppercase font-semibold'>Offline Agents</h4>
            <div className='flex items-center'>
            <div className='bg-rose-700 p-2 w-12 h-12'>
            <UsersLogo/>
            </div>
            <div className='p-1 px-3'>
                <h5 className='text-sm font-semibold text-gray-500 uppercase'>Count</h5>
                <p className='text-lg text-gray-500 font-bold'>0</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default DashboardButtons