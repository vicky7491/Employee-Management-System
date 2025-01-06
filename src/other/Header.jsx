import React from 'react'

const Header = ({data}) => {
 
  return (
    <div className='flex items-end justify-between'>
        <p1 className="text-2xl font-medium">Hello <br /> <span className='font-semibold text-3xl'>{data.firstName}😊</span></p1>
        <button className='bg-red-600 text-lg font-medium px-4 py-2 text-white rounded-sm'>Log Out</button>
    </div>
  )
}

export default Header