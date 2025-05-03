import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[400px] p-4 bg-red-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.date}</h4>
            </div>

            <h2 className='mt-5 text-3xl font-semibold'>{data.title}</h2>

            <p className='text-sm mt-2'>{data.description}</p>

            <div className='mt-20'>
                <button className='bg-red-600 w-full px-2 py-1 rounded'>Failed</button>
            </div>
        </div>
  )
}

export default FailedTask