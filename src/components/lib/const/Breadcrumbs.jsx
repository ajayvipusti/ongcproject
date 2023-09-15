import { CalenderLogo } from '../../logos/Calender'
import { DownArrow } from '../../logos/ChevronDown'
import {PlusLogo} from '../../logos/Plus'
export const breadcrumbs = [
    {
        id:1,
        path:'runsolutionremotly',
        title:'Run Solution Remotely',
        showRightSide:false,
    },
    {
        id:2,
        path:'solutions',
        title:'Solution Management (ongc)',
        showRightSide:true,
        rightSide:
        <div className='flex items-center'>
        <button className='flex justify-center items-center uppercase mr-1 border border-black text-black text-xs shadow-md rounded-sm px-2 py-0.5'><PlusLogo/> Solution</button>
        <button className='flex justify-center items-center uppercase ml-1 border border-black text-black text-xs shadow-md rounded-sm px-2 py-0.5'><PlusLogo/> EXE</button>
        </div>
    },
    {
        id:2,
        path:'summary',
        title:'Summary (ongc)',
        showRightSide:true,
        // rightSide:
        // <div className='flex items-center justify-center'>
        // <button className='flex justify-center items-center uppercase mr-1 border border-teal-500 text-white bg-teal-500 text-base shadow-md rounded-sm px-2 py-1'><CalenderLogo/> October 4, 2022 - December 21, 2022 <DownArrow/> </button>
        // </div>
    },
    {
        id:3,
        path:'proactivesolution',
        title:'Proactive Solution Management',
        showRightSide:true,
        rightSide:
        <div className='flex items-center justify-center'>
        <button className='flex justify-center items-center uppercase mr-1 border border-black text-black text-xs shadow-md rounded-sm px-2 py-1'><PlusLogo/> proactive Solution</button>
        </div>
    },
    {
        id:4,
        path:'feedback',
        title:'User Feedback Analytics(ongc)',
        showRightSide:true,
        // rightSide:
        // <div className='flex items-center justify-center'>
        // <button className='flex justify-center items-center uppercase mr-1 border border-teal-500 text-white bg-teal-500 text-base shadow-md rounded-sm px-2 py-1'><CalenderLogo/> October 4, 2022 - December 21, 2022 <DownArrow/> </button>
        // </div>
    },
    // {
    //     id:4,
    //     path:'userversions',
    //     title:'App Version Analytics',
    //     showRightSide:true,
    //     rightSide:
    //     <div className='flex items-center justify-center'>
    //     <button className='flex justify-center items-center uppercase mr-1 border border-teal-500 text-white bg-teal-500 text-base shadow-md rounded-sm px-2 py-1'><CalenderLogo/> October 4, 2022 - December 21, 2022 <DownArrow/> </button>
    //     </div>
    // },
]