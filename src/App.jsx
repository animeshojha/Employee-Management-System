import React, { useContext, useEffect, useState } from "react"
import Login from "./components/Auth/Login"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import { getLocalStorage, setLocalStorage } from "./utils/localStorage"
import { AuthContext } from "./context/AuthProvider"
import { data } from "autoprefixer"
function App() {
  //  useEffect(()=>{
  //  setLocalStorage()
  //  getLocalStorage()
  //  },)

  const [userData,setUserData] = useContext(AuthContext)
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData]=useState(null)
  useEffect(() => {
      const loggedInUser = localStorage.getItem("loggedInUser")
     console.log(loggedInUser);
     if(loggedInUser){
      const userdata=JSON.parse(loggedInUser)
     setUser(userdata.role)
     setLoggedInUserData(userdata.data)  
     }
    
  },[])

   
 
  const handleLogin = (email, password) => {
    if (email == 'admin@me.com' && password == '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))

    }
    else if (userData ) {
      const employee= userData.find((e) => email == e.email && e.password == password)
      if(employee){
       setLoggedInUserData(employee)
        setUser('employee')
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee',data:employee }))
      }
    }
    else {
      alert("Invalid credential")
    }

  } 


  return (
    <>
      {!user ? <Login handleLogin={handleLogin}></Login> : ' '}

      {user == 'admin' ? <AdminDashboard changeUser={setUser}/> : (user=="employee"? <EmployeeDashboard data={loggedInUserData} changeUser={setUser}/>:null)}

    </>
  )
}

export default App
