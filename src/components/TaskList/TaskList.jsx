import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
    console.log(data)
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto w-full mt-10 py-5 flex items-center justify-start gap-5 flex-nowrap'>
        {data.tasks.map((elem, idx)=>{
            if(elem.active){
                return <AcceptTask key={idx} data={data}/>
            }
            if(elem.newTask){
                return <NewTask  key={idx} data={data}/>
            }
            if(elem.completed){
                return <CompleteTask  key={idx} data={data}/>
            }
            if(elem.failed){ 
                return <FailedTask  key={idx} data={data}/>
            }
        })}
    </div>
  )
}

export default TaskList