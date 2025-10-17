import React, { useContext, useEffect, useState } from 'react'
import { userContext } from '../context/userContext'
import {Link, useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';

const MilestoneCards = (props) => {
    const {project_id} = useParams()
    const { milestones, setMilestones } = useContext(userContext)

    useEffect(() => {
        axios.get('http://localhost:3000/api/milestones', {withCredentials: true})
            .then(res => setMilestones(res.data))
            .catch(err => console.log(err))
    }, [])


    return (
        <div className='flex h-2/3 w-full overflow-hidden'>
            <div className=' flex overflow-x-scroll overscroll-x-contain'>

                {
                    milestones.map(milestone => (
                        <div className=' w-[200px] flex-shrink-0 rounded-md bg-iceberg ml-4' key={milestone.id}>
                            <h2 className='font-bold'>{milestone.milestoneName}</h2>

                            <div>
                                {milestone.tasks.map(task => (
                                    <div key={task.id}>
                                        <input type="checkbox" name="task" id="task" className='appearance-none rounded-full border border-black w-3 h-3 checked:bg-midnightBlu' />
                                        <label htmlFor="task">{task.task}</label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                }
                <div className='w-[200px] flex-shrink-0 rounded-md ml-4 flex flex-col justify-center items-center'>
                    <Link to={`/project/${project_id}/milestone/create`} className='flex flex-col justify-center items-center'>
                        <img src="\src\assets\PlusGryIcon.svg" alt="Add Icon"/>
                        <p className='text-aluminium'>Milestone</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MilestoneCards