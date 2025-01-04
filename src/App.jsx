import React, { useContext, useEffect, useState } from 'react';
import Login from "./components/Auth/Login.jsx";
import AdminDashboard from "./components/dashboard/AdminDashboard.jsx";
import EmployeeDashboard from "./components/dashboard/EmployeeDashboard.jsx";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage.jsx";
import { AuthContext } from './context/AuthProvider.jsx';

function App() {

  const [user, setUser] = useState(null)
  const authData = useContext(AuthContext)
  

  const handleLogin = (email,password) => {
    if(email == 'admin@gmail.com' && password =='123')
    setUser('admin')
   else if(authData && authData.employees.find((e)=>email == e.email && e.password == password)){
    setUser('employee')
    } 
    else{
      alert("invalid credentials")
    }
  }
 
  return (
   <>
   {!user ? <Login handleLogin={handleLogin}/> : ''}
   {user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}
   </>
  );
}
export default App
