import React from 'react'

const CompleteTask = () => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-emerald-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>02 jan 2025</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold '>Make a Youtube video</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sint aliquid ab iste libero!</p>
            
            <div className='mt-4'>
                <button className='flex py-1 px-2 bg-green-500 w-full'>Completed</button>
            </div>
        </div>
  )
}

export default CompleteTask