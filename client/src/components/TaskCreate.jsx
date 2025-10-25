import React, { useContext, useState, useEffect } from 'react'
import { userContext } from '../context/userContext'
import { useNavigate, useParams, Link } from 'react-router-dom'
import axios from 'axios'

const TaskCreate = (props) => {
    const navigate = useNavigate()
    const {project_id, milestone_id} = useParams()
    const {user, setUser} = useContext(userContext)
    const {milestone, setMilestone} = useContext(userContext)
    const [allUsers, setAllUsers] = useState([])
    const [task, setTask] = useState({
        taskName : '',
        description : '',
        createdBy : [user.firstName + ' ' + user.lastName],
        priority : '',
        status : '',
        assignedTo : '',
        dueDate : '',
        attatchments : '',
        comments : ''
    })
    const [taskErrors, setTaskErrors] = useState({
        taskName : '',
        description : '',
        priority : '',
        status : '',
        dueDate : ''
    })

    useEffect(() => {
        axios.get('http://localhost:3000/api/users', { withCredentials: true })
            .then(res => setAllUsers(res.data))
            .catch(err => console.log(err))
    }, [])

    // add logic for Only users that have joined project via project code

    const changeHandler = e => {
        const {name, value} = e.target
        setTask(prev => ({...prev, [name]: value}))
        validateTask(name, value)
    }

    const submitHandler = e => {
        e.preventDefault()
        axios.post('http://localhost:3000/api/task/create', task, {withCredentials: true})
        .then( res => {
            setTask(res.data)
            navigate(`/project/${project_id}/milestone/${milestone_id}`)
        })
        .catch(error => console.log(error))
    }

    const validateTask = (name, value) => {
        const validations = {
            taskName : value => value.length >= 3 ? true : 'Task Name is required and must be at least 3 characters',
            description : value => value.length >= 3 ? true : 'Task description must be at least 3 characters',
            priority : value => value != null ? true : 'must have priority' ,
            status : value => value != null ? true : 'must have status' ,
            dueDate : value => value != null ? true : 'must have due date' 
        }
        setTaskErrors( prev => ({ ...prev, [name]: validations[name](value)}))
}

    return (
        <div className='flex w-full h-full justify-center items-center '>
            <div className='w-3/4' >

                <h1 className='font-bold text-xl'>Create Task</h1>
                
                <form onSubmit={submitHandler} className='w-full'>

                    <label htmlFor="taskName" className='text-cadetGry'>Name</label>
                    <input 
                        type="text" 
                        name="taskName" 
                        id="taskName" 
                        value={task.taskName}
                        onChange={changeHandler}
                        className='border-2 border-mist rounded-md text-black bg-lotion'
                    />
                    <p className='text-strawberry'>{taskErrors.taskName}</p>
                    
                    <label htmlFor="description" className='text-cadetGry'>Description</label>
                    <textarea 
                        name="description" 
                        id="description"
                        value={task.description}
                        onChange={changeHandler}
                        className='border-2 border-mist rounded-md text-black bg-lotion'
                    ></textarea>
                    <p className='text-strawberry'> {taskErrors.description} </p>

                    <div className='flex justify-around'>

                        <div className='flex flex-col'>
                            <label  className='flex text-cadetGry'>
                                <img src="\src\assets\UserIcon.svg" alt="User Icon" />
                                Created By:
                            </label>

                            <input 
                                type="text" 
                                name="createdBy" 
                                id="createdBy"
                                value={task.createdBy}
                                onChange={changeHandler}
                                className='block text-black'
                                readOnly
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="assignedTo" className='flex text-cadetGry'>
                                <img src="\src\assets\UserIcon.svg" alt="User Icon" />
                                Assign to
                            </label>
                            <select 
                                name="assignedTo" 
                                id="assignedTo"
                                value={task.assignedTo}
                                onChange={changeHandler}
                                className='block border-2 border-mist rounded-md text-black'
                                >
                                    <option value="">Select</option>
                                    {
                                        allUsers.map(user => (
                                            <option value={user.id}>{user.firstName} {user.lastName}</option>
                                        ))
                                    }
                            </select>
                        </div>
                        
                        <div>
                            <label htmlFor="dueDate" className='text-cadetGry flex'>
                                <img src="\src\assets\CalendarGray.svg" alt="Calendar Icon" />
                                Due Date
                            </label>
                            <input 
                                type="date" 
                                name="dueDate" 
                                id="dueDate" 
                                onChange={changeHandler}
                                className='block text-black border-2 border-mist rounded-md'
                                />
                            <p className='text-strawberry'>{taskErrors.dueDate}</p>
                        </div>

                    </div>

                    <div className='flex justify-around'>
                        
                        <div>
                            <label htmlFor="priority" className='text-cadetGry flex'>
                                <img src="\src\assets\PriorityGray.svg" alt="Priority Icon" />
                                Priority
                            </label>
                            <select 
                                name="priority" 
                                id="priority"
                                value={task.priority}
                                onChange={changeHandler}
                                className='block text-black border-2 border-mist rounded-md'
                            >
                                <option value="">Select</option>
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </select>
                            <p className='text-strawberry'>{taskErrors.priority}</p>
                        </div>
                        
                        <div>
                            <label htmlFor="status" className='text-cadetGry flex'>
                                <img src="\src\assets\CheckGray.svg" alt="Status Icon" />
                                Status
                            </label>
                            <select 
                                name="status" 
                                id="status"
                                value={task.status}
                                onChange={changeHandler}
                                className='block text-black border-2 border-mist rounded-md'
                            >
                                <option value="">Select</option>
                                <option value="to-do">To do</option>
                                <option value="in-progress">In progress</option>
                                <option value="done">Done</option>
                            </select>
                            <p className='text-strawberry'>{taskErrors.status}</p>
                        </div>

                    </div>

                    <div className='flex justify-around'>
                        <div>
                            <label htmlFor="attatchments" className='text-cadetGry flex'>
                                <img src="\src\assets\AttachmentGray.svg" alt="Attatchment Icon" />
                                Attatchments
                            </label>
                            <input 
                                type="file" 
                                name="attatchments" 
                                id="attatchments" 
                                value={task.attatchments}
                                onChange={changeHandler}
                                className='block text-black'
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="comments" className='text-cadetGry flex'>
                                <img src="\src\assets\CommentsGray.svg" alt="Comment Icon" />
                                Comments
                            </label>
                            <textarea 
                                name="comments" 
                                id="comments"
                                value={task.comments}
                                onChange={changeHandler}
                                className='block text-black border-2 border-mist rounded-md'
                            ></textarea>
                        </div>
                    </div>
            
                    <div>
                        <input 
                            type="submit" 
                            value="Save Task" 
                            className='w-1/4 rounded-md bg-pigmentGreen py-2 px-4 text-white mt-1 ml-10'
                        />

                        <Link to={`/project/${project_id}/milestone/${milestone_id}`}>
                            <button className='w-1/4 rounded-md bg-coralRed py-2 px-4 text-white mt-1 ml-10'>
                                Cancel
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default TaskCreate