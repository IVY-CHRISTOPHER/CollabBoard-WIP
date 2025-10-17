import MilestoneCards from '../components/MilestoneCards';
import ProgressTiles from '../components/ProgressTiles';

const ProjectDashboard = (props) => {
    
    return (
        <div className='h-screen '>        
            <ProgressTiles />

            <MilestoneCards />

        </div>
    )
}

export default ProjectDashboard