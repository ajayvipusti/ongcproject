import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Title, Filler } from 'chart.js';
import DashboardButtons from '../../components/elements/DashboardButtons'
import { Doughnut,Line } from 'react-chartjs-2';
import { ClockLogo } from '../../components/logos/Clock';
import { DownArrow } from '../../components/logos/ChevronDown';
import { ArrowPointingOut } from '../../components/logos/ArrowPointingOut';
import ComingSoon from '../comingsoon/ComingSoon'

ChartJS.register(ArcElement, Tooltip, Legend,  CategoryScale,LinearScale,PointElement,LineElement,Title,Filler);


export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const Linelabels = ['Oct', 'Oct 08', 'Oct 16', 'Oct 20', 'Oct 24', 'Oct 28', 'Nov', 'Nov 05', 'Nov 09', 'Nov 13', 'Nov 17', 'Nov 21', 'Nov 25', 'Nov 29','Dec', 'Dec 07', 'Dec 11', 'Dec 15', 'Dec 19'];

export const lineChartData = {
  labels:Linelabels,
  datasets: [
    {
      fill: true,
      label: 'Visitor',
      data: [7,2,5,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,4,1],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};


const Summary = () => {

  const data = {
    labels: ['Run'],
    datasets: [
      {
        // label: 'Run',
        data: [1586],
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const secondData = {
    labels: ['Exit', 'Failure', 'Success'],
    datasets: [
      {
        // label: 'Succ',
        data: [343,303,1119],
        backgroundColor: [
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 1)',
          'rgba(46, 204, 11, 0.2)',
        ],
        borderColor: [
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 1)',
          'rgba(46, 204, 11, 0.2)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <ComingSoon/>
      {/* <div className='grid 2xl:grid-cols-2 gap-4 p-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1'> */}
        {/* first pie chart */}
        {/* <div className='w-full bg-white p-4 my-2'>
          <div className='p-2 flex items-center justify-between'>
            <div className='flex items-center'>
            <h2 className='flex items-center text-teal-500 font-semibold uppercase'><ClockLogo/>Download Vs Run</h2>
            <span className='text-gray-300 text-sm px-1'>Oct 4, 2022 - Dec 21, 2022</span>
            </div>
            <div className='flex items-center text-gray-300'>
              <DownArrow/>
              <ArrowPointingOut/>
            </div>
          </div>
          <div className='border-t border-gray-200'>
      <Doughnut
        data={data}
      />
          </div>
        </div> */}


        {/* second pie chart */}
        {/* <div className='w-full bg-white p-4 my-2'>
          <div className='p-2 flex items-center justify-between'>
            <div className='flex items-center'>
            <h2 className='flex items-center text-teal-500 font-semibold uppercase'><ClockLogo/>Download Vs Run</h2>
            <span className='text-gray-300 text-sm px-1'>Oct 4, 2022 - Dec 21, 2022</span>
            </div>
            <div className='flex items-center text-gray-300'>
              <DownArrow/>
              <ArrowPointingOut/>
            </div>
          </div>
          <div className='border-t border-gray-200'>
      <Doughnut
        data={secondData}
      />
          </div>
        </div> */}


      {/* </div> */}
    </div>
  )
}

export default Summary