import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

function AllTask() {
   const [userData, setUserData]= useContext(AuthContext)
  return (
    <div className='bg-[#1c1c1c] p-5 mt-5  rounded '>
     <div className='bg-red-400 mb-2 py-2 flex rounded justify-between px-4'>
            <h2 text-lg font-medium className='w-1/5 '>Employee Name</h2>
            <h3 text-lg font-medium className='w-1/5 '>New Taks</h3>
            <h5 text-lg font-medium className='w-1/5 '>Active Task</h5>
            <h5 text-lg font-medium className='w-1/5 '>Completed Task</h5>
            <h5 text-lg font-medium className='w-1/5 '>Failed Task</h5>
        </div>
        {/* className='h-[80%] overflow-auto' */}
     <div className=''>
        
      {userData.map((elem,idx)=>{
          return <div key={idx} className= ' border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className=' text-lg font-medium w-1/5 '>{elem.firstName}</h2>
            <h3 className=' text-lg font-medium w-1/5 text-blue-600'>{elem.taskNumbers.newTask}</h3>
            <h5 className=' text-lg font-medium w-1/5 text-yellow-400'>{elem.taskNumbers.active}</h5>
            <h5 className=' text-lg font-medium w-1/5 text-white'>{elem.taskNumbers.completed}</h5>
            <h5 className=' text-lg font-medium w-1/5 text-red-600'>{elem.taskNumbers.failed}</h5>
        </div>
      })}
     </div>
    </div>
  )
}

export default AllTask