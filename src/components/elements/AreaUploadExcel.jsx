import React from 'react'
import {TbBrandTelegram} from 'react-icons/tb'
import {FaDownload} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const AreaUploadExcel = ({handleFileChange, handleUpload, file,formRef}) => {

    const navigate = useNavigate();

  return (
    <div className='bg-white w-full flex flex-col p-6 py-4 rounded-sm shadow-md'>
        <div className='flex items-center justify-between px-2 py-2'>
            <div className='flex items-center justify-center'>
        <TbBrandTelegram className='text-teal-500 mx-1' size={20}/>
            <span className='text-lg font-medium uppercase text-teal-500'>Upload Area Data</span>
            </div>
            <a href={('/assets/ExportArea.xlsx')} download={"ExportArea.xlsx"} >
                <button className='bg-teal-500 rounded-sm shadow-md text-white hover:bg-transparent hover:text-teal-500 border border-teal-500 px-3 py-1 delay-150 duration-150 transition-all flex justify-center items-center'>
                    <FaDownload size={20} className='mx-1'/>
                Download Template File
                </button>
                </a>
        </div>
        <div className='w-full border-t border-gray-200'>
            {/* <div className='border p-2 px-4 border-indigo-100 bg-indigo-50 shadow-md mt-4 rounded-sm w-full'>
                <span className='text-base font-semibold text-indigo-500'>Note: All existing EXE based solutions will be removed and nre solutions added after Excel upload. <br/>
                Only EXE based solutions are allowed.
                </span>
            </div> */}
            <div className='border p-2 px-4 border-teal-100 bg-teal-50 shadow-md mt-4 rounded-sm w-full'>
                <span className='text-base text-teal-500'>Excel file must follow below format:</span>
                <br/>
                <span className='text-base font-semibold text-teal-500'>
                [ID , Entity Type , Display Label , Phase ID , Category_c , IMPMCategory_c]
                </span>
            </div>
            <div className='flex justify-center py-6 text-base'>
                <label>File Upload</label>
                <div className='px-4'>
                    <label>
                        <span className='px-4 shadow-md py-1.5 border-red-500 rounded-sm uppercase cursor-pointer text-xs text-red-500 border-[1.5px] font-semibold'>{!file?`Select File`:file?.name}</span>
                        {/* Input file */}
                        <form ref={formRef}>
                        <input onChange={handleFileChange} type='file' className=' hidden' />
                        </form>
                    </label>
                    <div className='py-4 flex items-center'>
                        <span className='uppercase px-2 shadow-md font-bold text-white text-xxs py-0 bg-teal-500'>Note</span>
                        <br/>
                        <span className='px-2 font-normal'>File must be a XLS or XLSX</span>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center p-2'>
            <button onClick={()=>handleUpload()} className='uppercase border border-teal-500 hover:bg-transparent hover:text-teal-500 delay-100 duration-100 transition-all font-semibold px-4 py-1.5 shadow-md rounded-sm bg-teal-500 text-white mr-4'>upload</button>
            <button  onClick={() => navigate('/admin/areainfo')}  className='uppercase border border-teal-500 hover:bg-transparent hover:text-teal-500 delay-100 duration-100 transition-all font-semibold px-4 py-1.5 shadow-md rounded-sm bg-teal-500 text-white'>Back</button> 
              
               {/* <a href={('/assets/sample-sheet.xlsx')} download={"sample-sheet.xlsx"} >
                <button className='bg-teal-500 rounded-sm shadow-md text-white hover:bg-transparent hover:text-teal-500 border border-teal-500 px-3 py-1 delay-150 duration-150 transition-all flex justify-center items-center'>
                    <FaDownload size={20} className='mx-1'/>
                Download Sample
                </button>
                </a> */}
            </div>
        </div>
        {/* <div className='flex border-t border-gray-200 justify-end py-2'>
            <button onClick={()=>handleUpload()} className='uppercase font-semibold px-4 py-1.5 shadow-md rounded-sm bg-teal-500 text-white'>upload</button>
        </div> */}
    </div>
  )
}

export default AreaUploadExcel