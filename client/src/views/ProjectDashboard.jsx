
import React, {useState,  useContext} from 'react';
import UserDashboard from './UserDashboard'
import SideBar from '../components/SideBar'
import NavBar from '../components/NavBar'
import MilestoneCards from '../components/MilestoneCards';
import ProgressTiles from '../components/ProgressTiles';

const ProjectDashboard = (props) => {
    const [sidebarOpen, setSidebarOpen] = useState(true)
    
    return (
        <div className='h-screen '>
            <div className='flex h-full'>
                <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                
                <div className='flex-col w-full h-full overflow-hidden'>
                    <NavBar />
                    
                    <ProgressTiles />

                    <MilestoneCards />
                </div>
            </div>
        </div>
    )
}

export default ProjectDashboard