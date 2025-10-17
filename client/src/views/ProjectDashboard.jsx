
import React, {useState,  useContext} from 'react';
import MilestoneCards from '../components/MilestoneCards';
import ProgressTiles from '../components/ProgressTiles';

const ProjectDashboard = (props) => {
    
    return (
        <div className='h-full'>
            <ProgressTiles />

            <MilestoneCards />
        </div>
    )
}

export default ProjectDashboard