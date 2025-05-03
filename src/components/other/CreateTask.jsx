import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext)

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [asignTo, setAsignTo] = useState('')
  const [category, setCategory] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()

    const newTask = {
      title: taskTitle,
      description: taskDescription,
      date: taskDate,
      category: category,
      active: false,
      newTask: true,
      completed: false,
      failed: false
    }

    const updatedUsers = userData.map((user) => {
      if (user.name === asignTo) {
        return {
          ...user,
          tasks: [...user.tasks, newTask],
          taskCount: {
            ...user.taskCount,
            newTask: user.taskCount.newTask + 1
          }
        }
      }
      return user
    })

    setUserData(updatedUsers)
    localStorage.setItem('employees', JSON.stringify(updatedUsers))

    setTaskTitle('')
    setTaskDescription('')
    setTaskDate('')
    setAsignTo('')
    setCategory('')
  }

  return (
    <div>
      <div className="mt-10">
        <form onSubmit={submitHandler} className="flex flex-wrap w-full gap-10">
          <div className="w-full md:w-[48%] space-y-2">
            <div>
              <label className="block mb-2 text-lg font-semibold">Task Title</label>
              <input
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                type="text"
                placeholder="Make a UI design"
                className="w-full rounded-lg px-4 py-3 bg-[#2C2C2C] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-lg font-semibold">Date</label>
              <input
                value={taskDate}
                onChange={(e) => setTaskDate(e.target.value)}
                type="date"
                className="w-full rounded-lg px-4 py-3 bg-[#2C2C2C] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-lg font-semibold">Assign</label>
              <input
                value={asignTo}
                onChange={(e) => setAsignTo(e.target.value)}
                type="text"
                placeholder="Enter employee name"
                className="w-full rounded-lg px-4 py-3 bg-[#2C2C2C] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-lg font-semibold">Category</label>
              <input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                type="text"
                placeholder="design, dev, etc"
                className="w-full rounded-lg px-4 py-3 bg-[#2C2C2C] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          <div className="w-full md:w-[48%]">
            <label className="block mb-2 text-lg font-semibold">Description</label>
            <textarea
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              rows="10"
              placeholder="Describe the task..."
              className="w-full rounded-lg px-4 py-3 bg-[#2C2C2C] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
            ></textarea>
          </div>

          <div className="mb-5 w-full">
            <button
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-700 text-white text-lg font-semibold px-6 py-3 rounded-lg transition duration-300"
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateTask
