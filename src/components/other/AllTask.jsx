import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const [userData, setUserData] = useContext(AuthContext)

    return (
        <div className='mt-4 bg-[#1C1C1C] rounded'>
            <div className='text-xl bg-[#2C2C2C] mb-2 px-4 py-2 flex justify-between rounded'>
                <h2 className='text-xl font-medium w-1/5'>Employee Name</h2>
                <h3 className='text-xl font-medium w-1/5'>New Task</h3>
                <h3 className='text-xl font-medium w-1/5'>Active Task</h3>
                <h3 className='text-xl font-medium w-1/5'>Completed</h3>
                <h5 className='text-xl font-medium w-1/5'>Failed</h5>
            </div>

            <div>
                {userData.map(function (elem, idx) {
                    return <div key={idx} className='border-2 border-emerald-500 mb-2 px-4 py-2 flex justify-between rounded'>
                        <h2 className='text-xl font-medium w-1/5'>{elem.name}</h2>
                        <h3 className='text-xl font-medium w-1/5 text-blue-500'>{elem.taskCount.newTask}</h3>
                        <h5 className='text-xl font-medium w-1/5 text-yellow-500'>{elem.taskCount.active}</h5>
                        <h5 className='text-xl font-medium w-1/5 text-green-500'>{elem.taskCount.completed}</h5>
                        <h5 className='text-xl font-medium w-1/5 text-red-500'>{elem.taskCount.failed}</h5>
                    </div>
                })}
            </div>

        </div>
    )
}

export default AllTask