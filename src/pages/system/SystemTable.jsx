import React from 'react'
import DataTables from '../../components/elements/DataTables';
import { csatData } from '../../components/lib/const/CSATData';
import { EditLogo } from '../../components/logos/Edit';

const SystemTable = () => {
    const handleButtonClick = ()=>{
        console.log('check click')
    }

    
    const filterData = csatData.map((item) => JSON.parse(item.replace(/NaN/g, "null")));

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
            accessorKey:'_id',
            width:'8rem',
        },
        {
            header:"Status",
            sortable:true,
            accessorKey:'Status'
        },
        {
            header: "Asset Name",
            sortable:true,
            accessorKey:'Asset_Name',
        },
        {
            header: "Stand By Date",
            sortable:true,
            accessorKey:'StandBy_Date',
        },
        {
            header: "Resolve Date",
            sortable:true,
            accessorKey:'Resolve_Date',
        },
        {
            header: "Close Date",
            sortable:true,
            accessorKey:'Close_Date',
        },
        {
            header: "Hold Date",
            sortable:true,
            accessorKey:'Hold_Date',
        },
        {
            header: "Unhold Date",
            sortable:true,
            accessorKey:'Unhold_Date',
        },
        {
            header: "Ticket_No",
            sortable:true,
            accessorKey:'Asset_Name',
        },
        {
            header: "Ticket No",
            sortable:true,
            accessorKey:'Ticket_No',
        },
        {
            header: "Description",
            sortable:true,
            accessorKey:'Description',
        },
        {
            header: "Summary",
            sortable:true,
            accessorKey:'Summary',
        },
        {
            header: "Solution",
            sortable:true,
            accessorKey:'Solution',
        },
        {
            header: "Ticket Method",
            sortable:true,
            accessorKey:'Ticket_Method',
        },
        {
            header: "AMC Warranty",
            sortable:true,
            accessorKey:'AMC_Warranty',
        },
        {
            header: "Assignee",
            sortable:true,
            accessorKey:'Assignee',
        },
        {
            header: "Location",
            sortable:true,
            accessorKey:'Location',
        },
        {
            header: "Shift",
            sortable:true,
            accessorKey:'Shift',
        },
        {
            header: "Zone",
            sortable:true,
            accessorKey:'Zone',
        },
        {
            header: "Opened From (Date)",
            sortable:true,
            accessorKey:'Opened_since_days',
        },
        {
            header: "Comments",
            sortable:true,
            accessorKey:'Comments',
        },
        {
            header: "Star Rating",
            sortable:true,
            accessorKey:'Star_Rating',
        },
        {
            header: "Is Active",
            sortable:true,
            accessorKey:'is_activate',
        },
        {
            header: "Cancel Pressed",
            sortable:true,
            accessorKey:'Cancel_Pressed',
        },
        {
            header: "Caller Name",
            sortable:true,
            accessorKey:'Caller_Name'
        },
    ]

    const tableHeading = [
        {
            label: "Sr. No",
            key:"_id",
        },
        {
            label:"Status",
            key:"Status"
        },
        {
            label: "Asset Name",

            key:"Asset_Name",
        },
        {
            label: "Stand By Date",

            key:"StandBy_Date",
        },
        {
            label: "Resolve Date",

            key:"Resolve_Date",
        },
        {
            label: "Close Date",

            key:"Close_Date",
        },
        {
            label: "Hold Date",

            key:"Hold_Date",
        },
        {
            label: "Unhold Date",

            key:"Unhold_Date",
        },
        {
            label: "Ticket_No",

            key:"Asset_Name",
        },
        {
            label: "Ticket No",

            key:"Ticket_No",
        },
        {
            label: "Description",

            key:"Description",
        },
        {
            label: "Summary",

            key:"Summary",
        },
        {
            label: "Solution",

            key:"Solution",
        },
        {
            label: "Ticket Method",

            key:"Ticket_Method",
        },
        {
            label: "AMC Warranty",

            key:"AMC_Warranty",
        },
        {
            label: "Assignee",

            key:"Assignee",
        },
        {
            label: "Location",

            key:"Location",
        },
        {
            label: "Shift",

            key:"Shift",
        },
        {
            label: "Zone",

            key:"Zone",
        },
        {
            label: "Opened From (Date)",

            key:"Opened_since_days",
        },
        {
            label: "Comments",

            key:"Comments",
        },
        {
            label: "Star Rating",

            key:"Star_Rating",
        },
        {
            label: "Is Active",

            key:"is_activate",
        },
        {
            label: "Cancel Pressed",

            key:"Cancel_Pressed",
        },
        {
            label: "Caller Name",

            key:"Caller_Name"
        },
    ]
  return (
    <div className=''>
        <div className='p-2 py-0 '>
        <DataTables customStyles={customStyles} tableHeader={tableHeading} heading={'System report'} columns={columns} showDownloadButton={true} ContentSolution={filterData}/>
        </div>
    </div>
  )
}

export default SystemTable