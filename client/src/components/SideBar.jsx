import React, {useState, useContext} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { userContext } from '../context/userContext';
import axios from 'axios';

const SideBar = (props) => {
    const [taskOverviewOpen, setTaskOverviewOpen] = useState(true)
    const [quickActionsOpen, setQuickActionsOpen] = useState(true)

    const handleMouseEnter = () => {
        props.setSidebarOpen(false)
    }

    const handleMouseLeave = () => {
        props.setSidebarOpen(true)
    }

    // Path logic so it doesnt appear on these routes but it will elsewhere
    if(
        location.pathname == '/' || 
        location.pathname == '/register' || 
        location.pathname == '/password/forgot' ||
        location.pathname == '/password/update' ||
        location.pathname == '/password/complete' ||
        location.pathname == '/verification' ||
        location.pathname == '/user/dashboard' ||
        location.pathname == '/project/create' ||
        location.pathname == '/project/join' ||
        location.pathname == '/error'
    ){
        return (
            null
        )
    }
    

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className=' flex transition-all duration-300 ease-in-out'
            >

            {
                props.sidebarOpen ? 

                <nav className='h-full flex-col justify-center bg-midnightBlu w-full'>
                    
                    <img src="\src\assets\SidebarButton.svg" alt="Sidebar button"  className='mt-5'/>
                    
                    <ul className='p-2'>
                        <li className='mt-3'>
                            <img src="\src\assets\HomeIcon.svg" alt="Home Icom" />
                        </li>
                        <li className='mt-5'>
                            <img src="\src\assets\ListIcon.svg" alt="List Icon" />
                        </li>
                        <li className='mt-5'>
                            <img src="\src\assets\CalendarIcon.svg" alt="Calendar Icon" />
                        </li>
                        <li className='mt-5'>
                            <img src="\src\assets\AnalyticsIcon.svg" alt="Graph Icon" />
                        </li>
                        <li className='mt-5'>
                            <img src="\src\assets\InboxIcon.svg" alt="Mail Icon" />
                        </li>
                        <li className='mt-5'>
                            <img src="\src\assets\TasksIcon.svg" alt="Task Icon" />
                        </li>
                        <li className='mt-5'>
                            <img src="\src\assets\SettingsIcon.svg" alt="Settings Icon" />
                        </li>
                    </ul>
                </nav>

                : 

                <nav className='h-full w-64 flex-col bg-midnightBlu'>
                    
                    <h1 className='text-center font-bold text-white mt-5'>PBM APP</h1>
                    
                    <ul className='p-4'> 
                        <li className='flex items-center text-white mt-3 gap-2'>
                            <img src="\src\assets\HomeIcon.svg" alt="Home Icom" />
                            <Link to={'/user/dashboard'}>
                                Dashboard
                            </Link>
                        </li>
                        <li className='flex items-center text-white mt-3 gap-2'>
                            <img src="\src\assets\ListIcon.svg" alt="List Icon" />
                            <Link>
                                List View
                            </Link>
                        </li>
                        <li className='flex items-center text-white mt-3 gap-2'>
                            <img src="\src\assets\CalendarIcon.svg" alt="Calendar Icon" />
                            <Link>
                                Calander
                            </Link>
                        </li>
                        <li className='flex items-center text-white mt-3 gap-2'>
                            <img src="\src\assets\AnalyticsIcon.svg" alt="Graph Icon" />
                            <Link>
                                Analytics
                            </Link>
                        </li>
                        <li className='flex items-center text-white mt-3 gap-2'>
                            <img src="\src\assets\InboxIcon.svg" alt="Mail Icon" />
                            <Link>
                                Inbox
                            </Link>
                        </li>
                        <li className='flex-col items-center text-white mt-3'>
                            <button
                                onClick={() => setTaskOverviewOpen(!taskOverviewOpen)} 
                                className='flex gap-2'
                            >
                                <img src="\src\assets\TasksIcon.svg" alt="Task Icon" />
                                Task OverView
                                <img src="\src\assets\VectorIcon.svg" alt="Vector Icon" />
                            </button>
                            {
                                taskOverviewOpen ? '' :  
                                <ul className='grid overflow-hidden transition-all duration-300 ease-in-out grid-rows-[1fr] opacity-100 mt-3 ml-4'>
                                    <li className='mt-1'>Total Milestones</li>
                                    <li className='mt-1'>In Progress</li>
                                    <li className='mt-1'>Complete</li>
                                    <li className='mt-1'>Overdue</li>
                                </ul>
                            }
                        </li>
                        <li className='flex-col items-center text-white mt-3'>
                            <button 
                                onClick={() => setQuickActionsOpen(!quickActionsOpen)}
                                className='flex gap-2'
                            >
                                <img src="\src\assets\SettingsIcon.svg" alt="Settings Icon" />
                                Quick Actions
                                <img src="\src\assets\VectorIcon.svg" alt="Vector Icon" />
                            </button>
                            {
                                quickActionsOpen ? '' : 
                                <ul className='grid overflow-hidden transition-all duration-300 ease-in-out grid-rows-[1fr] opacity-100 mt-3 ml-4'>
                                    <li className='mt-1'>Filter Tasks</li>
                                    <li className='mt-1'>Team Members</li>
                                    <li className='mt-1'>Settings</li>
                                </ul>
                            }
                        </li>
                    </ul>
                </nav>
            }
        </div>
    )
}

export default SideBar
