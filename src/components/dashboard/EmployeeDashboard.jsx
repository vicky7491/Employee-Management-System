import React from 'react'
import Header from '../../other/Header'
import TaskListNumber from '../../other/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({data}) => {
  return (
    <div className='p-8 bg-[#1C1C1C] h-screen w-screen'>
   <Header data = {data}/>
   <TaskListNumber data = {data}/>
   <TaskList data = {data}/>
   </div>
  )
}

export default EmployeeDashboard