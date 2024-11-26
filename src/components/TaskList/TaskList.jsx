import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

function TaskList({data}) {
   // console.log(data);
    
    return (
        <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap mt-10 py-5 w-full'>
            {data.tasks.map((elem,idx)=>{
            if(elem.active){
                return <AcceptTask key={idx} data={elem}></AcceptTask>
            }
            else if(elem.newTask){
                return<NewTask key={idx} data={elem}></NewTask>
            }
            else if(elem.completed){
                return <CompleteTask key={idx} data={elem}></CompleteTask>
            }
            else if(elem.failed){
                return <FailedTask key={idx} data={elem}></FailedTask>
            }
            })}
        </div>
    )
}

export default TaskList