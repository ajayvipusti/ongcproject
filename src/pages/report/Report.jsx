import React, { useEffect } from 'react'

import DataTables from '../../components/elements/DataTables'
import { ReportData } from '../../components/lib/const/ReportData'
import {FaDownload} from 'react-icons/fa'
import Tooltipcopy from '../../components/elements/Tooltipcopy'


const Category = () => {
 
  useEffect(()=>{
    //   dispatch(getCsatData())
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
       header: "S.No",
       sortable:true,
       accessorKey:'s_no',
       Cell: ({ cell, row }) => <div>{parseInt(row?.id) + 1}</div>,
    },
    {
        header:"File Type",
        sortable:true,
        accessorKey:'file_type'
    },
    {
        header:"Report Download",
        sortable:true,
        accessorKey:'download',
        Cell: ({ row }) => (
                    <>
                    <Tooltipcopy title={"Download"} >
                    <button
                        className="tableButton mx-1 p-1 text-white hover:bg-white hover:text-indigo-500"
                        onClick={() => handleEditClick(row.id)}
                      > 
                      <span className='text-purple-500 flex items-center justify-center gap-1'>
                         <FaDownload size={18}  />
                          Download
                      </span>
                       
                      </button>
                    </Tooltipcopy>
                    </>
        )
    },
  
  ]
return (
  <div className='flex flex-col gap-4 px-4'>
      {/* <Categorydata heading={'Category'} showDownloadButton={true} customStyles={customStyles} columns={columns} ContentSolution={data?.length>0?data:''}/> */}
      <DataTables heading={'Report'} showDownloadButton={false} customStyles={customStyles} columns={columns} ContentSolution={ReportData}/>
  </div>
)
}

export default Category