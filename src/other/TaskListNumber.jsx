import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='flex screen mt-10 gap-5'>
        <div className='w-[40%] rounded-xl  bg-blue-400 py-6 px-9'>
        <h2 className="text-3xl font-semibold ">{data.taskCounts.newTask}</h2>
        <h3 className="text-xl font-medium ">New Task</h3>
        </div>
        <div className='w-[40%] rounded-xl  bg-emerald-400 py-6 px-9'>
        <h2 className="text-3xl font-semibold ">{data.taskCounts.completed}</h2>
        <h3 className="text-xl font-medium ">Completed</h3>
        </div>
        <div className='w-[40%] rounded-xl  bg-yellow-400 py-6 px-9'>
        <h2 className="text-3xl text-black font-semibold ">{data.taskCounts.active}</h2>
        <h3 className="text-xl text-black font-medium ">Accepted</h3>
        </div>
        <div className='w-[40%] rounded-xl  bg-red-400 py-6 px-9'>
        <h2 className="text-3xl font-semibold ">{data.taskCounts.failed}</h2>
        <h3 className="text-xl font-medium ">Failed task</h3>
        </div>
    </div>
  )
}

export default TaskListNumber