import React from 'react'

const ProgressTiles = (props) => {

    
    
    return (
        <div className='flex gap-4 m-3'>
            <div className='flex bg-electricBlu rounded-md w-1/4 text-white items-start mt-2 p-2'>
                <img src="\src\assets\TasksIcon.svg" alt="Task Icon" className='mt-1 mr-2'/>
                <div>
                    <p className='text-lg'> # Total Milestones</p>
                    <p className='text-sm'>Active Milestones</p>
                </div>
            </div>
            <div className='flex bg-lemonLt rounded-md w-1/4 text-black items-start mt-2 p-2'>
                <img src="\src\assets\ProgressIcon.svg" alt="Progress Icon" className='mt-1 mr-2'/>
                <div>
                    <p className='text-lg'> # In Progress</p>
                    <p className='text-sm'>Currently Active</p>
                </div>
            </div>
            <div className='flex bg-magicMint rounded-md w-1/4 text-black items-start mt-2 p-2'>
                <img src="\src\assets\CompleteIcon.svg" alt="Complete Icon" className='mt-1 mr-2'/>
                <div>
                    <p className='text-lg'> # Complete</p>
                    <p className='text-sm'>#% Complete</p>
                </div>
            </div>
            <div className='flex bg-mistyRose rounded-md w-1/4 text-black items-start mt-2 p-2'>
                <img src="\src\assets\WarningIcon.svg" alt="Warning Icon" className='mt-1 mr-2'/>
                <div>
                    <p className='text-lg'> # Overdue</p>
                    <p className='text-sm'>needs Attention</p>
                </div>
            </div>
        </div>
    )
}

export default ProgressTiles