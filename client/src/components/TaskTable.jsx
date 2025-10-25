import React, { useContext, useState, useEffect } from 'react'
import { userContext } from '../context/userContext'
import { useNavigate, useParams, Link } from 'react-router-dom'
import axios from 'axios'

const TaskTable = (props) => {
    const { project_id, milestone_id} = useParams()
    const { milestone, setMilestone } = useContext(userContext)
    const {tasks, setTasks} = useState([{}])
    
    useEffect(() => {
        axios.get(`http://localhost:3000/api/milestone/${milestone_id}`, { withCredentials: true })
            .then(res => setMilestone(res.data))
            .catch(err => console.log(err))

        setTasks(milestone.tasks)

    }, [project_id, milestone_id])

    useEffect(() => {

        setTasks(milestone.tasks)

    },[])
    console.log(tasks)
    
    return (
        <div className='w-full'>
            <h1 className='font-bold text-xl'>All Tasks</h1>

            <div className='p-10 text-center '>
                <div className='w-full rounded-md border border-2 '>
                <table className='w-full'>
                    <thead>
                        <tr className='border'>
                            <th>
                                Tasks
                            </th>
                            <th>
                                Status
                            </th>
                            <th>
                                Priority
                            </th>
                            <th>
                                Asignee
                            </th>
                            <th>
                                Due Date
                            </th>
                            <th>
                                Edit
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks.map(task => (
                                <tr key={task.id} className='border'>
                                    
                                        <td >
                                            <Link to={`/project/${project_id}/milestone/${milestone_id}/task/${task.id}`}>
                                                {task.taskName}
                                            </Link>
                                        </td>
                                        <td className=''>
                                            <p className={`m-auto ${task.status == 'to-do' ? 'bg-paleAqua text-yaleBlue' : task.status == 'done' ? 'bg-magicMint text-parsley' : task.status == 'in-progress' ? 'bg-lemonLt text-peanut' : ''} rounded-md w-1/3 text-center`} >
                                                {task.status}
                                            </p>
                                        </td>
                                        <td>
                                            <p className={` m-auto ${task.priority == 'High' ? 'bg-mistyRose text-faluRed' : task.priority == 'Medium' ? 'bg-magicMint text-parsley' : task.priority == 'Low' ? 'bg-lemonLt text-peanut' : ''} rounded-md w-1/3 `} >
                                                {task.priority}
                                            </p>
                                        </td>
                                        <td  >{task.assignedTo}</td>
                                        <td >{task.dueDate}</td>
                                        <td >
                                            <Link to={`/project/${project_id}/milestone/${milestone_id}/task/update/${task.id}`}>
                                                ...
                                            </Link>
                                        </td>
                                    
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    )
}

export default TaskTable