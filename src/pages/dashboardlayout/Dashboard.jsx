import React, { useEffect } from 'react'

import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Title, Filler } from 'chart.js';
import { FaDatabase, FaDownload, FaUserPlus, FaUsers } from 'react-icons/fa';
import {RiRadioButtonLine} from 'react-icons/ri'
import { BsArrowRightCircleFill, BsFiles } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDashboardData } from '../../features/actions/dashboard/dashboard';

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

const Dashboard = () => {

  const {dashboard} = useSelector((state)=>state.dashboard)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getDashboardData())
  },[])

  const navigate = useNavigate()

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

      const DASHBOARD_LINKS = [
        // {
        //     number:170,
        //     title:"Total Companies",
        //     icon:<AiFillHome className="lg:text-8xl opacity-30"/>,
        //     cardBackgroundColor:'bg-[#128799]',
        //     buttonColor:'bg-[#0e6a78]',
        //     buttonHoverColor:'hover:bg-[#0a515c]',
        //     link:'/'
        //   },
        
        {
          number:dashboard?.install?dashboard?.install:0,
          title:"Installed Agents",
          key:'view_jobs',
          icon:<FaDownload className="lg:text-6xl opacity-30 "/>,
          cardBackgroundColor:'bg-sky-300 hover:bg-cyan-800 duration-100 delay-100',
          buttonColor:'bg-sky-600 delay-100 duration-100',
          buttonHoverColor:'hover:bg-cyan-500',
          link:'/admin/userinfo',
          data:'installed',
        },
        {
          number:dashboard?.online?dashboard?.online:0,
          title:"Online Agents",
          key:'add_job_applications',
          icon:<RiRadioButtonLine className="lg:text-6xl opacity-30 animate-pulse"/>,
          cardBackgroundColor:'bg-sky-300 hover:bg-cyan-800 duration-100 delay-100',
          buttonColor:'bg-sky-600 delay-100 duration-100',
          buttonHoverColor:'hover:bg-cyan-500',
          link:'/admin/userinfo',
          data:'online',
        },
          {
            number:data?.onlineexam?data?.onlineexam:0,
            title:"Uninstall Agents",
            icon:<FaUsers className="md:text-5xl opacity-30"/>,
            key:'view_exam',
            cardBackgroundColor:'bg-sky-300',
            buttonColor:'bg-sky-600',
            buttonHoverColor:'hover:bg-green-800',
            link:'/admin/userinfo',
            data:'uninstall',
          },
          {
            number:data?.totalApplications?data?.totalApplications:0,
            title:"Offline Agents",
            key:'view_job_applications',
            icon:<BsFiles className="lg:text-6xl opacity-30"/>,
            cardBackgroundColor:'bg-sky-300',
            buttonColor:'bg-sky-600',
            buttonHoverColor:'hover:bg-[#a67f0a]',
            link:'/admin/userinfo',
            data:'offline',
          },
        //   {
        //     number:data?.totalHired?data?.totalHired:0,
        //     title:"Total Hired",
        //     key:'add_job_applications',
        //     icon:<FaUserPlus className="lg:text-7xl opacity-30"/>,
        //     cardBackgroundColor:'bg-sky-300',
        //     buttonColor:'bg-sky-600',
        //     buttonHoverColor:'hover:bg-[#147d5e]',
        //     link:'/admin/filterjobapplication',
        //     data:'hired'
        //   },
        //   {
        //     number:data?.totalRejected?data?.totalRejected:0,
        //     title:"Total Rejected",
        //     key:'add_job_applications',
        //     icon:<IoMdCloseCircle className="lg:text-7xl opacity-30"/>,
        //     cardBackgroundColor:'bg-sky-300',
        //     buttonColor:'bg-sky-600',
        //     buttonHoverColor:'hover:bg-[#8f252f]',
        //     link:'/admin/filterjobapplication',
        //     data:'rejected'
        //   },
          // {
          //   number:data?.newApplications?data?.newApplications:0,
          //   title:"New Applications",
          //   key:'add_job_applications',
          //   icon:<IoMdSearch className="lg:text-7xl opacity-30"/>,
          //   cardBackgroundColor:'bg-sky-300',
          //   buttonColor:'bg-sky-600',
          //   buttonHoverColor:'hover:bg-[#43484d]',
          //   link:'/admin/filterjobapplication',
          //   data:'applied'
          // },
        //   {
        //     number:data?.interviewround1?data?.interviewround1:0,
        //     title:"Interview Round 1",
        //     key:'view_schedule',
        //     icon:<IoMdCheckmarkCircleOutline className="lg:text-7xl opacity-30"/>,
        //     cardBackgroundColor:'bg-sky-300',
        //     buttonColor:'bg-sky-600',
        //     buttonHoverColor:'hover:bg-[#500fba]',
        //     link:'/admin/interviewschedule',
        //     data:'interview round 1'
        //   },
        //   {
        //     number:data?.interviewround2?data?.interviewround2:0,
        //     title:"Interview Round 2",
        //     key:'view_schedule',
        //     icon:<IoMdVideocam className="lg:text-7xl opacity-30"/>,
        //     cardBackgroundColor:'bg-sky-300',
        //     buttonColor:'bg-sky-600',
        //     buttonHoverColor:'hover:bg-[#b05910]',
        //     link:'/admin/interviewschedule',
        //     data:'interview round 2'
        //   }
      ]
    
      return (
        <div>
                  <div className="lg:px-4 lg:py-0 px-2 w-full">
        <div className="grid  grid-cols-2 lg:gap-4 gap-2 lg:grid-cols-4">
          {DASHBOARD_LINKS &&
            DASHBOARD_LINKS.map((dashboard, index) => (
              <div
                key={index}
                className={`w-full flex shadow flex-col h-36 bg-sky-400 group  rounded-lg`}
              >
                <div className="lg:p-4 p-2 flex-1 items-center group-hover:bg-gray-50 group-hover:opacity-30 justify-between">
                  <div className="lg:flex items-center justify-between">
                    <div className="text-white group-hover:text-gray-800 lg:text-left text-center h-24">
                      <span className="block lg:text-4xl lg:text-left text-center text-4xl font-bold py-1">
                        {dashboard.number}
                      </span>
                      <span className="text-sm text-white group-hover:text-gray-800 lg:py-1 py-0 lg:text-left text-center">{dashboard.title}</span>
                    </div>
                    <div className="lg:block hidden cursor-pointer ">{dashboard.icon}</div>
                  </div>
                </div>
                <button
                onClick={()=>navigate(dashboard?.link,{state:dashboard?.data})}
                  className={`flex rounded-b-lg text-white justify-center bg-sky-600 hover:bg-sky-700  w-full items-center`}
                >
                  <span className="px-2">More info </span>
                  <span>
                    <BsArrowRightCircleFill />
                  </span>
                </button>
              </div>
            ))}
        </div>
        </div>
          {/* <DashboardButtons/>
          <div className='grid 2xl:grid-cols-2 gap-4 p-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1'>
            
            <div className='w-full bg-white p-4 my-2'>
              <div className='p-2 flex items-center justify-between'>
                <div className='flex items-center'>
                <h2 className='flex items-center text-teal-500 font-semibold uppercase'><ClockLogo/>Ticket Created Vs Resolve</h2>
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
            </div>
    
    
            
            <div className='w-full bg-white p-4 my-2'>
              <div className='p-2 flex items-center justify-between'>
                <div className='flex items-center'>
                <h2 className='flex items-center text-teal-500 font-semibold uppercase'><ClockLogo/>Ticket Created Vs Resolve</h2>
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
            </div>
    
    
            
            <div className='w-full col-span-2 bg-white p-4 my-2'>
              <div className='p-2 flex items-center justify-between'>
                <div className='flex items-center'>
                <h2 className='flex items-center text-teal-500 font-semibold uppercase'><ClockLogo/>Visitor vs downloads</h2>
                <span className='text-gray-300 text-sm px-1'>Oct 4, 2022 - Dec 21, 2022</span>
                </div>
                <div className='flex items-center text-gray-300'>
                  <DownArrow/>
                  <ArrowPointingOut/>
                </div>
              </div>
              <div className='border-t border-gray-200'>
          <Line options={options} 
            data={lineChartData}
          />
              </div>
            </div>
    
    
          </div> */}
        </div>
      )
}

export default Dashboard