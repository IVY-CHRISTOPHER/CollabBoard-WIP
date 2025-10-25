import React, { useContext, useState, useEffect } from 'react'
import { userContext } from '../context/userContext'
import { useNavigate, useParams, Link } from 'react-router-dom'
import axios from 'axios'
import { formatDate, MonthDayFormat, monthDayYearFormat } from '../util/formatDate'

const TaskDetails = (props) => {
    const { project_id, milestone_id, task_id } = useParams()
    const { user, setUser } = useContext(userContext)
    const { milestone, setMilestone } = useContext(userContext)
    const {task, setTask} = useContext(userContext)

    useEffect(() => {
        axios.get(`http://localhost:3000/api/task/${task_id}`, { withCredentials: true })
            .then(res => setTask(res.data))
            .catch(err => console.log(err))

    }, [project_id, task_id, milestone_id])

    return (
        <div className='flex w-full h-full justify-center items-center '>
            <div className='w-3/4' >

                <h1 className='font-bold text-xl'>{task.taskName}</h1>
                
                <p className='text-black'> {task.description} </p>

                <div className='flex justify-around'>

                    <div className='flex flex-col'>
                        <p className='flex text-cadetGry'>
                            <img src="\src\assets\UserIcon.svg" alt="User Icon" />
                            Created By:
                        </p>
                        <p className='text-black'>{task.createdBy}</p>
                    </div>

                    <div>
                        <p htmlFor="assignedTo" className='flex text-cadetGry'>
                            <img src="\src\assets\UserIcon.svg" alt="User Icon" />
                            Assign to
                        </p>
                        <p>{task.assignedTo}</p>
                    </div>

                    <div>
                        <p htmlFor="dueDate" className='text-cadetGry flex'>
                            <img src="\src\assets\CalendarGray.svg" alt="Calendar Icon" />
                            Due Date
                        </p>
                        <p className='text-black'>{monthDayYearFormat(task.dueDate)}</p>
                    </div>

                </div>

                <div className='flex justify-around'>

                    <div>
                        <p htmlFor="priority" className='text-cadetGry flex'>
                            <img src="\src\assets\PriorityGray.svg" alt="Priority Icon" />
                            Priority
                        </p>
                        <p className='text-black'>{task.priority}</p>
                    </div>

                    <div>
                        <p htmlFor="status" className='text-cadetGry flex'>
                            <img src="\src\assets\CheckGray.svg" alt="Status Icon" />
                            Status
                        </p>
                        
                        <p className='text-black'>{task.status}</p>
                    </div>

                </div>

                <div className='flex justify-around'>
                    <div>
                        <p htmlFor="attatchments" className='text-cadetGry flex'>
                            <img src="\src\assets\AttachmentGray.svg" alt="Attatchment Icon" />
                            Attatchments
                        </p>
                        <a>{task.attatchments}</a>
                    </div>

                    <div>
                        <p htmlFor="comments" className='text-cadetGry flex'>
                            <img src="\src\assets\CommentsGray.svg" alt="Comment Icon" />
                            Comments
                        </p>
                        <p>{task.comments}</p>
                    </div>
                </div>

                <div className='flex items-center justify-center h-[40px]m mt-3'>
                    <div className='w-full h-full'>
                        <Link to={`/project/${project_id}/milestone/${milestone_id}/task/update/${task_id}`}>
                            <button className='w-3/4 rounded-md bg-midnightBlu text-white ml-10 h-[40px]'>
                                Cancel
                            </button>
                        </Link>

                        <Link to={`/project/${project_id}/milestone/${milestone_id}`}>
                            <button className='w-1/8 rounded-md bg-maxRed text-white ml-10 h-[40px] py-3 px-4'>
                                <img src="\src\assets\Trashcan.svg" alt="Trash can Icon" />
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TaskDetails