import React from 'react'
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Button} from '@mui/material';

const AddPopup = ({children,showCancelButton,setClose,close,logo,heading}) => {

  const cancelButtonRef = useRef(null)

  return (
    <Transition.Root show={close} as={Fragment}>
      <Dialog as="div" className="relative z-10 min-h-40" initialFocus={cancelButtonRef} onClose={setClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 min-h-40 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      {logo}
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title as="h3" className=" font-semibold leading-6 text-gray-900 mt-1 text-xl">
                        {heading?heading:'Add Category'}
                      </Dialog.Title>
                      <div className="mt-2 min-h-40 h-45">
                        {
                          children
                        }
                      </div>
                    </div>
                  </div>
                  <Button variant="contained" color="primary" type="button" sx={{marginLeft:'12rem' , marginTop:'-6rem'}} onClick={() => setClose(false)}
                    ref={cancelButtonRef} >
                    cancel
                 </Button>
                
                </div>
               
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default AddPopup