import React, { useEffect } from 'react'
import DataTables from '../../components/elements/DataTables'
import { FaRunning } from 'react-icons/fa'
import { ContentSolution } from '../../components/lib/const/ContentSolution'
import { useDispatch, useSelector } from 'react-redux'
import { getCsatData } from '../../features/actions/csat/csat'

const UserFeedback = () => {
            
    const handleButtonClick = (row)=>{
        setShowPopup(!showPopup)
        setShowRowPopup(row)
    }

    const dispatch = useDispatch()
    const {csat} = useSelector((state)=>state.csat)
    const data = csat?.length>0 && csat.map((x)=>({system_id:x?.system_id, user_id:x?.user_id, feedback_rating:x?.feedback_rating, feedback_comment:x?.feedback_comment}))

    useEffect(()=>{
        dispatch(getCsatData())
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
            header:"Hostname",
            sortable:true,
            accessorKey:'system_id'
        },
        {
            header:"Userid",
            sortable:true,
            accessorKey:'user_id'
        },
        {
            header: "Rating",
            sortable:true,
            accessorKey:'feedback_rating'
        },
        {
            header: "Comment",
            sortable:true,
            accessorKey:'feedback_comment'
        },
    ]
  return (
    <div className='flex flex-col gap-4 px-4'>
        <DataTables heading={'Feedbacks'} showDownloadButton={true} customStyles={customStyles} columns={columns} ContentSolution={data?.length>0?data:''}/>
    </div>
  )
}

export default UserFeedback