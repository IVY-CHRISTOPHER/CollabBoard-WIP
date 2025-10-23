
import React, {useState,  useContext, useEffect} from 'react';
import MilestoneCards from '../components/MilestoneCards';
import ProgressTiles from '../components/ProgressTiles';
import { userContext } from '../context/userContext';

const ProjectDashboard = (props) => {
    const { project_id } = useParams()
    const [project, setProject] = useContext(userContext)

    useEffect(() => {
        axios.get(`http://localhost:3000/api/project/${project_id}`, { withCredentials: true })
            .then(res => setProject(res.data))
            .catch(err => console.log(err))
    }, [project_id])
    
    return (
        <div className='h-full'>
            <ProgressTiles/>

            <MilestoneCards/>
        </div>
    )
}

export default ProjectDashboard