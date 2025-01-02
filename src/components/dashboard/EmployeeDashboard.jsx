import React from 'react'
import Header from '../../other/Header'
import TaskListNumber from '../../other/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='p-8 bg-[#1C1C1C] h-screen w-screen'>
   <Header />
   <TaskListNumber />
   <TaskList/>
   </div>
  )
}

export default EmployeeDashboard