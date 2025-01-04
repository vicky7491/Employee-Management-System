import React, { useContext, useEffect, useState } from 'react';
import Login from "./components/Auth/Login.jsx";
import AdminDashboard from "./components/dashboard/AdminDashboard.jsx";
import EmployeeDashboard from "./components/dashboard/EmployeeDashboard.jsx";
import { AuthContext } from './context/AuthProvider.jsx';
import { setLocalStorage } from './utils/LocalStorage';

function App() {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const authData = useContext(AuthContext)
  
  // useEffect(() => {
  //   console.log('Auth Data:', authData);
  //   if(authData){
  //     const loggedInUser = localStorage.getItem("loggedInUser")
  //     if(loggedInUser){
  //       setUser(loggedInUser.role)
  //     }
  //   }
  // }, [authData]);
  

  const handleLogin = (email,password) => {
    if(email == 'admin@me.com' && password =='123'){
    setUser('admin')
    localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }else if(authData){
      const employee = authData.employees.find((e)=>email == e.email && e.password == password)
      if(employee){
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))
      }
    }
    else{
      alert("invalid credentials")
    }
  }
 
  return (
   <>
   {!user ? <Login handleLogin={handleLogin}/> : ''}
   {user == 'admin' ? <AdminDashboard /> : (user == 'employee' ? <EmployeeDashboard data = {loggedInUserData} /> : null ) }
   </> 
  ); 
}
export default App
