import React, { useState } from 'react'
import DataTables from '../../components/elements/DataTables';
import { ContentSolution } from '../../components/lib/const/ContentSolution';
import {FaRunning} from 'react-icons/fa'
import PopUp from '../../components/elements/PopUp';
import { TbBrandTelegram } from 'react-icons/tb';
import { StackLogo } from '../../components/logos/Stack';
import ComingSoon from '../comingsoon/ComingSoon';

export const RunSolutionRemotlyForm = ({showRowPopup,setShowPopup})=>{
    console.log('row',showRowPopup)
    return(
        <div className='bg-white w-full flex flex-col p-6 py-4 rounded-sm shadow-md'>
        <div className='flex items-center px-2 py-2'>
           <StackLogo/>
            <span className='text-lg font-medium uppercase text-teal-500'>Run Solution</span>
        </div>
        <div className='w-full border-t border-gray-200 p-4'>
            <div className='flex items-center py-2 w-full gap-1'>
                <label className={`basis-2/6 text-right after:content-['*'] after:text-red-500 after:pl-0.5  font-medium text-gray-500`}>Tenant</label>
                <div className=' basis-4/6 px-3'>
                    <select className='w-full border uppercase font-medium border-gray-300 rounded-sm shadow-md text-base p-1'>
                        <option>Please Select</option>
                        <option className='uppercase'>ONGC</option>
                    </select>
                </div>
            </div>
            <div className='flex items-center py-2 w-full gap-1'>
                <label className={`basis-2/6 text-right after:content-['*'] after:text-red-500 after:pl-0.5  font-medium text-gray-500`}>Solution Name</label>
                <div className=' basis-4/6 px-3  w-full'>
                    <span className='border-gray-500 border-dashed border-b-2 flex'>{showRowPopup?.Name}</span>
                </div>
            </div>
            <div className='flex items-center py-2 w-full gap-1'>
                <label className={`basis-2/6 text-right after:content-['*'] after:text-red-500 after:pl-0.5  font-medium text-gray-500`}>User Type</label>
                <div className=' basis-4/6 px-3'>
                    <select className='w-full border border-gray-300 uppercase font-medium rounded-sm shadow-md text-base p-1'>
                        <option>Please Select</option>
                        <option className='uppercase'>Single User</option>
                    </select>
                </div>
            </div>
            <div className='flex items-center py-2 w-full gap-1'>
                <label className={`basis-2/6 text-right after:content-['*'] after:text-red-500 after:pl-0.5  font-medium text-gray-500`}>Username</label>
                <div className=' basis-4/6 px-3'>
                    <input className='flex border-b border-gray-400 w-full focus:border-0 selection:border-0' />
                </div>
            </div>
            <div className='flex items-center py-2 w-full gap-1'>
                <label className={`basis-2/6 text-right after:content-['*'] after:text-red-500 after:pl-0.5  font-medium text-gray-500`}>Hostname</label>
                <div className=' basis-4/6 px-3'>
                    <input className='flex border-b border-gray-400 w-full focus:border-0 selection:border-0 active:border-0' />
                </div>
            </div>
            <div className='flex items-center py-2 w-full gap-1'>
                <label className={`basis-2/6 text-right after:content-['*'] after:text-red-500 after:pl-0.5  font-medium text-gray-500`}>Action Type</label>
                <div className=' basis-4/6 px-3'>
                    <select className='w-full border border-gray-300 uppercase font-medium rounded-sm shadow-md text-base p-1'>
                        <option>Please Select</option>
                        <option className='uppercase'>without message</option>
                    </select>
                </div>
            </div>
            <div className='flex items-center py-2 w-full gap-1'>
                <label className={`basis-2/6 text-right font-medium text-gray-500`}>Validity</label>
                <div className=' basis-4/6 px-3'>
                    <input className='flex border-b border-gray-400 w-full focus:border-0 selection:border-0' />
                    <span className='text-teal-500'><b>Empty</b>- Valid only for today. <b>Not Empty</b>- Valid for today plus validity</span>
                </div>
            </div>
        </div>
        <div className='w-full border-t border-gray-200 p-4'>
            <div className='flex justify-end items-center'>
            <button className='px-4 py-1 bg-teal-400 border border-teal-400 text-white shadow-md font-semibold mr-1'>Save</button>
            <button onClick={()=>setShowPopup(false)} className='px-4 py-1 bg-white border border-black text-black shadow-md font-semibold ml-1'>Cancel</button>
            </div>
        </div>
        </div>
    )
}

const RunSolutionRemotly = () => {
    const [showPopup,setShowPopup] = useState(false)
    const [showRowPopup,setShowRowPopup] = useState('')
        
    const handleButtonClick = (row)=>{
        setShowPopup(!showPopup)
        setShowRowPopup(row)
    }

    const customStyles = {
        row:{
            style:{
                minWidth:'max-content',
                border:'0.5px solid gray',
            }
        },
        headCells:{
            style:{
                border:'0.5px solid gray',
            }
        },
        cells: {
            style: {
                minWidth:'fit',
                border:'0.5px solid gray',
            },
        },
        expanderRow: {
            style: {
                color: "gray",
                backgroundColor: 'red',
            },
        },
    };

    

    const columns = [
        {
            name: "Sr. No",
            sortable:true,
            selector:row=>row?.id,
            width:'8rem',
        },
        {
            name:"Action",
            cell:(row) => 
            <div className='flex items-center'>
            <button onClick={()=>handleButtonClick(row)} className='px-1 mr-1 flex justify-center items-center py-0.5 bg-blue-400 shadow-md font-semibold rounded-sm uppercase text-white'>Edit
            <FaRunning/>
            </button>
            </div>,
            sortable:false,
            width:'6rem',
        },
        {
            name: "Name",
            sortable:true,
            selector:row=>row?.Name,
        },
        {
            name: "Description",
            sortable:false,
            selector:row=>row?.Description,
        },
    ]
  return (
    <div className='flex flex-col gap-4 px-4'>
        <ComingSoon/>
        {/* {
            showPopup?
            <PopUp>
                <RunSolutionRemotlyForm showRowPopup={showRowPopup} setShowPopup={setShowPopup}/>
            </PopUp>
            :null
        }
        <DataTables heading={'Solutions'} showDownloadButton={false} customStyles={customStyles} columns={columns} ContentSolution={ContentSolution}/> */}
    </div>
  )
}

export default RunSolutionRemotly