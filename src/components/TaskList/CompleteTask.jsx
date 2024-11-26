import React from 'react'

function CompleteTask({data}) {
  return (
    <div className=' flex-shrink-0 h-full p-5 w-[300px] bg-green-400 rounded-xl'>
    <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 px-3 py-1 text-sm rounded'>{data.category}</h3>
        <h4 className='text-sm'>{data.taskDate}</h4>
    </div>
    <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
    <p className='text-sm mt-2 '>{data.taskDescription}
    </p>
    <div className='mt-2 '>
       <button className='w-full bg-slate-800 px-2 py-1'>Completed</button>
    </div>
</div>
  )
}

export default CompleteTask