import React, { useContext, useEffect, useState } from 'react'
import { userContext } from '../context/userContext'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import SingleMilestoneCard from './SingleMilestoneCard';

const MilestoneCards = (props) => {
    const {project_id} = useParams()
    const { milestones, setMilestones } = useContext(userContext) 

    useEffect(() => {
        axios.get('http://localhost:3000/api/milestones', { withCredentials: true })
            .then(res => setMilestones(res.data))
            .catch(err => console.log(err))
    }, [project_id])

    // get only milestones for displayed project. 
    const projectMilestones = milestones.map(milestone => milestone.projectId == project_id ? milestone : null).filter(milestone => milestone)

    return (
        <div className='flex h-2/3 w-full overflow-hidden'>
            <div  className=' flex overflow-x-scroll overscroll-x-contain'>

                    {
                    projectMilestones.map(milestone => (
                        <Link to={`/project/${project_id}/milestone/${milestone.id}`}>
                            <SingleMilestoneCard
                                key={milestone.id}
                                milestone={milestone}
                                />
                        </Link>
                    ))
                    }
                
                <div className='w-[200px] flex-shrink-0 rounded-md ml-4 flex flex-col justify-center items-center'>
                    <Link to={`/project/${project_id}/milestone/create`} className='flex flex-col justify-center items-center'>
                        <img src="\src\assets\PlusGryIcon.svg" alt="Add Icon" />
                        <p className='text-aluminium'>Milestone</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MilestoneCards