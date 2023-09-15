import React, { useEffect , useState} from 'react'

import Locationdata from '../../components/elements/Locationdata'
import { useDispatch, useSelector } from 'react-redux'

import axios from 'axios'


const Location = () => {
 
  const dispatch = useDispatch()
  const {csat} = useSelector((state)=>state.csat)
//   const data = csat?.length>0 && csat.map((x)=>({system_id:x?.system_id, user_id:x?.user_id, feedback_rating:x?.feedback_rating, feedback_comment:x?.feedback_comment}))
  

  const [data , setData] = useState([])

  const handleEditClick = (id) => {
    console.log('Edit clicked for ID:', id);
  };

  const handleDeleteClick = (id) => {
    console.log('Delete clicked for ID:', id);
  };

//   useEffect(()=>{
//       // dispatch(getCsatData())
//   },[])

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get('http://localhost:3000/users')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

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
        size:120, 
        Cell: ({ cell, row }) => <div>{parseInt(row?.id) + 1}</div>,
      },
      {
          header: "Category",
         sortable:true,
         accessorKey:'category',
         
         
      },
      {
          header:"Sub Category",
          sortable:true,
          accessorKey:'sub_category'
      },
      {
          header:"Location",
          sortable:true,
          accessorKey:'location'
      }
    // {
    //     header: 'Action',
    //     accessorKey: 'action',
    //     size: 150,
    //     cellComponent: ({ row }) => (
    //       <>
            
    //           <button
    //             className="tableButton mx-1 bg-indigo-500 border border-indigo-600 text-white hover:bg-white hover:text-indigo-500"
    //             onClick={() => handleEditClick(row.id)}
    //           >
    //             <BsFillPencilFill />
    //           </button>
            
           
    //           <button
    //             className="tableButton mx-1 bg-danger border border-danger text-white hover:bg-white hover:text-danger"
    //             onClick={() => handleDeleteClick(row.id)}
    //           >
    //             <AiFillDelete />
    //           </button>
            
    //       </>
    //     ),
    //   },
  
  ]
return (
  <div className='flex flex-col gap-4 px-4'>
   <Locationdata heading={'Location'} fetchData={fetchData} showDownloadButton={true} customStyles={customStyles} columns={columns} ContentSolution={data?.length>0?data:''}/>
   {/* <Categorydata heading={'Sub Category'} showDownloadButton={true} customStyles={customStyles} columns={columns} ContentSolution={DataCategory}/> */}
  </div>
)
}

export default Location