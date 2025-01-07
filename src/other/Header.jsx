import React, { useState } from "react";
import { setLocalStorage } from "../utils/LocalStorage";

const Header = () => {
// const [username, setuserName] = useState('')
// if(!data){
//   setuserName('Admin')
// }else{
//   setuserName(data.firstName)
// }
const logOutUser = () =>{
  localStorage.setItem('loggedInUser','')
  window.location.reload()
} 
  return (
    <div className='flex items-end justify-between'>
        <p1 className="text-2xl font-medium">Hello <br /> <span className='font-semibold text-3xl'>username😊</span></p1>
        <button onClick={logOutUser} className='bg-red-600 text-lg font-medium px-4 py-2 text-white rounded-sm'>Log Out</button>
    </div>
  )
}

export default Header