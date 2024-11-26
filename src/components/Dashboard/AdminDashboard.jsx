import React from 'react'
import Header from '../../other/Header'
import CreateTask from '../../other/CreateTask'
import AllTask from '../../other/AllTask'

function AdminDashboard(props) {
    console.log(props);
    
    return (
        <div className='p-7 h-screen w-full'>
            <Header changeUser={props.changeUser}></Header>
            <CreateTask></CreateTask>
            <AllTask></AllTask>
        </div>
    )
}

export default AdminDashboard