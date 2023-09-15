import React, { useEffect, useState, Fragment } from 'react'
import { makeRequest } from '../../api/https'
import { getToken } from '../../hooks/useLocalStorage'
import DataTables from '../../components/elements/DataTables'
import { EditLogo } from '../../components/logos/Edit'
import PopUp from '../../components/elements/PopUp'
import { Listbox, Transition } from '@headlessui/react'
import { DownArrow } from '../../components/logos/ChevronDown'
import { CheckIcon } from '../../components/logos/CheckIcon'
import { ToastContainer, toast } from 'react-toastify'

const people = [
    { name: '15 minute' },
    { name: '30 minute' },
    { name: '45 minute' },
    { name: '1:15 hours' },
    { name: '1:30 hours' },
    { name: '1:45 hours' },
    { name: '2:00 hours' },
    { name: '2:15 hours' },
    { name: '2:30 hours' },
    { name: '2:45 hours' },
    { name: '3:00 hours' },
    { name: '3:15 hours' },
    { name: '3:30 hours' },
    { name: '3:45 hours' },
    { name: '4:00 hours' },
]


const CloseSetting = () => {
    const token = getToken()
    const [data, setData] = useState('')
    const [showEditPopup, setShowEditPopup] = useState(false)
    const [selected, setSelected] = useState(people[0])
    const [editId,setEditId] = useState('')


    const popsettingApi = async (cell) => {
        const headers = {
            'Authorization': 'Bearer ' + token,
            'Accept': 'js'
        }
        console.log('god');
        const id = cell?.row?.original?.id
        const req = await makeRequest('get', `${import.meta.env.VITE_APP_API_URL}setting/popsettings`, null, headers)
        const res = await req
        if (res?.code === 200) {
          
            setData(res?.data)
        }
    }

    useEffect(() => {
        
     popsettingApi()
       
    }, [])

    const handleEditClick = (row) => {
        setShowEditPopup(true)
        console.log('cell',row?.original?.id)
        setEditId(row?.original?.id)
    }

    const columns = [
        {
            header: "Sr. No",
            Cell: ({ cell, row }) => <div>{parseInt(row?.id) + 1}</div>,
        },
        {
            header: "Durations",
            sortable: true,
            accessorKey: 'value',
        },
        {
            header: "Type",
            sortable: true,
            accessorKey: 'type',
        },
        {
            header: "Action",
            Cell: ({ cell, row }) =>
                <>
                    <button onClick={() => handleEditClick(row)} className='px-1 rounded-lg delay-75 duration-75 bg-blue-700 text-white hover:bg-blue-600 py-2'>
                        <EditLogo />
                    </button>
                </>
        },
    ]

    const handleSubmit =async()=>{
        const response = await fetch(`${import.meta.env.VITE_APP_API_URL}setting/popsettings/${editId}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token,
            },
            body: JSON.stringify({value: selected?.name}),
          });
          const content = await response.json();

          console.log(content);
          if (content.status===1) {
            setShowEditPopup(false)
             setEditId('')
             setData(content?.data)
                 toast.success('Updated Successfull')
            // Handle success
          } 
    }

    return (
        <div className='p-2 w-full h-full'>
            <ToastContainer
            position='top-center'
            />
            <PopUp setClose={setShowEditPopup} close={showEditPopup} showCancelButton={true}>

                <div className="fixed top-16 w-72 h-fit">
                    <h1 className='py-2 text-lg text-gray-800 font-normal'>Select Popup Time</h1>
                    <Listbox value={selected} onChange={setSelected}>
                        <div className="relative mt-1">
                            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                <span className="block truncate">{selected.name}</span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <DownArrow />
                                </span>
                            </Listbox.Button>
                            <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                    {people.map((person, personIdx) => (
                                        <Listbox.Option
                                            key={personIdx}
                                            className={({ active }) =>
                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                                }`
                                            }
                                            value={person}
                                        >
                                            {({ selected }) => (
                                                <>
                                                    <span
                                                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                            }`}
                                                    >
                                                        {person.name}
                                                    </span>
                                                    {selected ? (
                                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                        </span>
                                                    ) : null}
                                                </>
                                            )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                            <button onClick={()=>handleSubmit()} className='m-2 px-5 py-1 bg-indigo-600 border border-indigo-600 text-white rounded-sm hover:text-indigo-600 hover:bg-transparent'>Submit</button>
                        </div>
                    </Listbox>
                </div>
            </PopUp>
            <DataTables showDownloadButton={false} heading={'CSAT Close Setting'} showDatePicker={false} columns={columns} ContentSolution={data?.length > 0 ? data : ''} />
        </div>
    )
}

export default CloseSetting