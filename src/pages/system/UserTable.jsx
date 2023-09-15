import React, { useEffect, useState } from 'react'
import DataTables from '../../components/elements/DataTables'
import {ContentSolution} from '../../components/lib/const/ContentSolution'
import { CrossLogo } from '../../components/logos/Cross'
import { EditLogo } from '../../components/logos/Edit'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { getToken } from '../../hooks/useLocalStorage'
import { BsFillPencilFill } from 'react-icons/bs';
import { AiFillDelete } from 'react-icons/ai';
import Tooltipcopy from '../../components/elements/Tooltipcopy'
import Tooltip from '../../components/elements/Tooltip'




const UserTable = () => {


    const {state} = useLocation()
    // console.log('state',state)
    const [data,setData] = useState('')
    const [showHover,setShowHover] = useState(false)
    const token = getToken()

    // const handleEditClick = (id) => {
    //     setShowHover(true);
    //     console.log('Edit clicked for ID:', id);
    //   };

    //   const handleDeleteRow = (index) => {
    //     const shouldDelete = window.confirm("Are you sure you want to delete this row?");
    //     if (shouldDelete) {
    //       const updatedRows = [...data];
    //       updatedRows.splice(index, 1);
    //       setData(updatedRows);
    //     }
    //   };
    
    //   const handleDeleteRow = (index) => {
    //     const updatedRows = [...data];
    //     updatedRows.splice(index, 1);
    //     setData(updatedRows);
    //   };

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
            setData(response?.data)
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
            sortable:true,
            accessorKey:"id",
            width:'8rem',
            size: '120',
        },
        {
            header: "Hostname",
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
            header: "Agent Version",
            sortable:false,
            accessorKey:"agent_version",
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
       

        //  {
        //     header: 'Action',
        //     accessorKey: 'action',
        //     size: 150,
        //     Cell: ({ row }) => (
        //         <>
        //         <Tooltipcopy title={"Add"} >
        //         <button
        //             className="tableButton mx-1 p-1 bg-gray-400 border  text-white hover:bg-white hover:text-indigo-500"
        //             onClick={() => handleEditClick(row.id)}
        //           >
        //             <BsFillPencilFill size={18}  />
        //           </button>
        //         </Tooltipcopy>

        //         <Tooltipcopy title={"Delete"} >
        //         <button
        //             className="tableButton mx-1 p-1 bg-gray-400 border  text-white hover:bg-white hover:text-indigo-500"
        //           onClick={() => handleDeleteRow(row.id)}
        //           >
        //             <AiFillDelete size={18} />
        //           </button>
        //         </Tooltipcopy>
                
        //         <Tooltip title={'Edit Customer'} setShowHover={setShowHover} showHover={showHover}>
                  
        //         </Tooltip>
        //         </>
        //     )
        //  },
        
        
    ]
  return (
    <div>        
    <div className='p-2 py-0'>
    <DataTables customStyles={customStyles} heading={'User Info report'} columns={columns} showDownloadButton={true} ContentSolution={data}/>
    </div>
</div>
  )
}

export default UserTable