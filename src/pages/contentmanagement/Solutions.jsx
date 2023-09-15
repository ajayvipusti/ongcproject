import React, { useRef, useState } from 'react'
import UploadingExcel from '../../components/elements/UploadingExcel'
import DataTables from '../../components/elements/DataTables'
import {EditLogo} from '../../components/logos/Edit'
import {CrossLogo} from '../../components/logos/Cross'
import {ContentSolution} from '../../components/lib/const/ContentSolution' 
import { useDispatch } from 'react-redux'
import { uploadCsatApi } from '../../features/actions/csat/csat'
import axios from 'axios'
import { getToken } from '../../hooks/useLocalStorage'
import { ToastContainer, toast } from 'react-toastify'

const Solutions = () => {

    const content1 = "[Incident Id, Severity, Subject, Location, Region, User Name, System ID, Engineer Name, Status, Resolution Date]";
    const title = "[Upload CSAT Data]"; 

    const [file,setFile] = useState(null)
    const formRef = useRef()
    const dispatch = useDispatch()

    const handleFileChange = (event) => {
        console.log(event.target)
        setFile(event.target.files[0]);
      };

    const token = getToken()

    console.log('images',file)
    const handleUpload  = async()=>{
        console.log('images',file)
        if(file !== null ||undefined||"")
        {
            // console.log('file',file)
            try {
                const formData= new FormData()
                formData.append('import_file',file)
                const request = await axios.post(`${import.meta.env.VITE_APP_API_URL}csat/import`,formData,{
                    headers:{
                        'Authorization':'Bearer '+ token,
                        'Content-Type': 'multipart/form-data',
                        'Accept': 'js'
                    }
                }) 
                const response = await request.data
                if(response?.code ===200){
                    toast.success('Upload Succesfull..!')
                    setFile(null);
                    formRef.current.reset();
                    // const fileInput = document.getElementById('file-input');
                    // if (fileInput) {
                    //   fileInput.value = '';
                    // }
                }
                if(response?.error){
                    const errors = Object.values(response?.error)
                    console.error('Errors', errors)
                    errors.map((x) => (
                      toast.error(`${x}`)
                    ))
                  }
                
            } catch (error) {
                console.error('error', error)
                    if (error?.response?.data?.error) {
                    const errors = Object.values(error?.response?.data?.error)
                    console.error('Errors', errors)
                    errors.map((x) => (
                      toast.error(`${x}`)
                    ))
                    }
                    if (error?.response?.data?.message) {
                    if (error?.response?.data?.error) {
                      const errors = Object.values(error?.response?.data?.error)
                      console.error('Errors', errors)
                      errors.map((x) => (
                        toast.error(`${x}`)
                      ))
                    }
                    if (error?.response?.data?.data) {
                      toast.error(`${error?.response?.data?.data}`)
                    }
                    }
                    // if (error?.response?.data?.data)
            }
        
        }
    }

    const handleButtonClick = ()=>{
        console.log('check click')
    }

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
            accessorKey:'id',
            width:'8rem',
        },
        {
            header:"Action",
            cell:({cell}) => 
            <div className='flex items-center'>
            <button onClick={handleButtonClick} className='px-1 mr-1 flex justify-center items-center py-0.5 bg-blue-400 shadow-md font-semibold rounded-sm uppercase text-white'>Edit
            <EditLogo/>
            </button>
            <button onClick={handleButtonClick} className='px-1 ml-1 flex justify-center items-center py-0.5 bg-red-600 shadow-md font-semibold rounded-sm uppercase text-white'>Delete
            <CrossLogo/>
            </button>
            </div>,
            sortable:false,
            width:'12rem',
        },
        {
            header: "Name",
            sortable:true,
            accessorKey:'Name',
        },
        {
            header: "Description",
            sortable:false,
            accessorKey:'Description',
        },
    ]
  return (
    <div className='flex flex-col gap-4 px-4'>
        <ToastContainer position='top-center' />
        <UploadingExcel title={title}  content={content1} formRef={formRef} handleFileChange={handleFileChange} handleUpload={handleUpload} setFile={setFile} file={file}/>
        {/* <DataTables customStyles={customStyles} showDownloadButton={true} heading={'CSAT Data'} columns={columns} ContentSolution={ContentSolution}/> */}
    </div>
  )
}

export default Solutions