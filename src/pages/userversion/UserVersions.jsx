import React from 'react'
import DashboardButtons from '../../components/elements/DashboardButtons'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';
import { DownArrow } from '../../components/logos/ChevronDown';
import { ArrowPointingOut } from '../../components/logos/ArrowPointingOut';
import { ClockLogo } from '../../components/logos/Clock';
import { GraphBarLogo } from '../../components/logos/Graph';
import ComingSoon from '../comingsoon/ComingSoon';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);



const UserVersions = () => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
        },
    };

    const labels = ['Oct', 'Oct 08', 'Oct 16', 'Oct 20', 'Oct 24', 'Oct 28', 'Nov', 'Nov 05', 'Nov 09', 'Nov 13', 'Nov 17', 'Nov 21', 'Nov 25', 'Nov 29', 'Dec', 'Dec 07', 'Dec 11', 'Dec 15', 'Dec 19'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Active',
                data: [7, 2, 5, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ],
    };

    return(
        <ComingSoon/>
    )

    // return (
    //     <div className='flex flex-col'>
    //         <DashboardButtons />
    //         <div className='w-full m-2 border-gray-400 bg-white p-4 my-2'>
    //             <div className='p-2 flex items-center justify-between'>
    //                 <div className='flex items-center'>
    //                     <h2 className='flex items-center text-teal-500 font-semibold uppercase'><GraphBarLogo />hostname count vs last activity</h2>
    //                     <span className='text-gray-300 text-sm px-1'>Oct 4, 2022 - Dec 21, 2022</span>
    //                 </div>
    //                 <div className='flex items-center text-gray-300'>
    //                     <DownArrow />
    //                     <ArrowPointingOut />
    //                 </div>
    //             </div>
    //             <div className='border-t p-4 border-gray-200'>
    //                 <Line options={options} data={data} />
    //             </div>
    //         </div>
    //     </div>
    // )
}

export default UserVersions