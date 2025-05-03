import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
  if (!data || !data.tasks) {
    return <div>No tasks available.</div>;
  }

  return (
    <div id='tasklist' className='h-[60%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10'>
      {data.tasks.map((elem, index) => (
        <React.Fragment key={index}>
          {elem.newTask && <NewTask data={elem} />}
          {elem.active && <AcceptTask data={elem} />}
          {elem.completed && <CompleteTask data={elem} />}
          {elem.failed && <FailedTask data={elem} />}
        </React.Fragment>
      ))}
    </div>
  )
}

export default TaskList
