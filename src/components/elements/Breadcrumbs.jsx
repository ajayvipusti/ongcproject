import React from 'react'
import { useLocation } from 'react-router-dom'
import { breadcrumbs } from '../lib/const/Breadcrumbs'

const Breadcrumbs = () => {
    const {pathname} = useLocation()
    
  return (
    <div className='flex px-4 pb-2 justify-between'>
        {
            breadcrumbs && breadcrumbs?.filter(x=>x?.path===pathname.replace('/admin/',''))?.map((x,index)=>(
                <React.Fragment key={index}>
                <span className='text-xl font-medium text-gray-500'>{x?.title}</span>
                {
                    x?.showRightSide?
                <div>
                    {x?.rightSide}
                </div>
                :null
                }
                </React.Fragment>
            ))
        }
    </div>
  )
}

export default Breadcrumbs