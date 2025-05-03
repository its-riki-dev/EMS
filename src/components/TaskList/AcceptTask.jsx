import React from 'react'

const AcceptTask = ({data}) => {
    return (
        <div className='flex-shrink-0 h-full w-[400px] p-4 bg-yellow-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.date}</h4>
            </div>

            <h2 className='mt-5 text-3xl font-semibold'>{data.title}</h2>

            <p className='text-sm mt-2'>{data.description}</p>

            <div className='mt-15'>
                <button className='bg-green-600 w-full px-2 py-1 rounded'>Mark as Completed</button>
                <button className='bg-red-600 w-full mt-2 px-2 py-1 rounded'>Mark as Failed</button>
            </div>
        </div>
    )
}

export default AcceptTask