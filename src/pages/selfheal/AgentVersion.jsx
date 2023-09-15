import React, { useEffect, useState } from 'react'
import DashboardButtons from '../../components/elements/DashboardButtons'
import { CrossLogo } from '../../components/logos/Cross'
import DataTables from '../../components/elements/DataTables'
import { ContentSolution } from '../../components/lib/const/ContentSolution'
import { getToken } from '../../hooks/useLocalStorage'
import axios from 'axios'

const AgentVersion = () => {
    const [data,setData] = useState('')
    const token = getToken()


    const api = async()=>{
        const request = await axios.get(`${import.meta.env.VITE_APP_API_URL}userinfo`,{
            headers:{
                'Authorization':'Bearer '+ token,
                'Content-Type': 'multipart/form-data',
                'Accept': 'js'
            }
        })
        const response = await request?.data
        if(response?.code ===200)
        {
            setData(response?.data?.map((x)=>({systemid:x?.systemid, userid:x?.userid, ipaddress:x?.ipaddress, mac_address:x?.mac_address, location:x?.location, status:x?.status})))
        }
    }

    // console.log('data',data)

    useEffect(()=>{
        api()
    },[])

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
            header: "Sr. No",
            Cell:({cell,row})=><div>{parseInt(row?.id)+1}</div>,
        },
        {
            header: "System ID",
            sortable:true,
            accessorKey:"systemid",
        },
        {
            header: "User ID",
            sortable:true,
            accessorKey:"userid",
        },
        {
            header: "IP Address",
            sortable:false,
            accessorKey:"ipaddress",
        },
        {
            header: "MAC Address",
            sortable:false,
            accessorKey:"mac_address",
        },
        {
            header: "Location",
            sortable:false,
            accessorKey:"location",
        },
        {
            header: "Status",
            sortable:false,
            accessorKey:"status",
        },
    ]

  return (
    <div>
        <DashboardButtons/>
        <div className='p-2 py-4'>
        <DataTables customStyles={customStyles} showDownloadButton={true} heading={'User Info report'} columns={columns} ContentSolution={data?.length>0?data:''}/>
        </div>
    </div>
  )
}

export default AgentVersion