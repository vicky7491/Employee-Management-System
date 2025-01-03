import React from 'react'

const CreateTask = () => {
  return (
    <div className='p-5 rounded mt-5 bg-[#1c1c1c]'>
            <form className='flex w-full flex-wrap items-start justify-between '>
                <div className='w-1/2'>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Task title</h3>
                    <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type='text' placeholder="Make a ui design" />
                </div>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                    <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" />
                    </div>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                    <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Employee name'/>
                </div>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Catagory</h3>
                    <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Design,Dev,etc'/>
                </div>
                </div>
                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id="" cols="30" rows="10"></textarea>
                    <button className='bg-emerald-500 rounded py-3 px-5 hover:bg-emerald-600 w-4/5 mt-4 text-sm'>Create task</button>
                </div>
               
            </form>
        </div>
  )
}

export default CreateTask