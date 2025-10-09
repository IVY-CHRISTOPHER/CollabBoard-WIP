import React, {useState, useEffect, useContext} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { userContext } from '../context/userContext';
import axios from 'axios';
import CreateCard from '../components/CreateCard'
import JoinCard from '../components/JoinCard';

const UserDashboard = (props) => {
    const { user, setUser } = useContext(userContext)
    const {allProjects, setAllProjects} = useContext(userContext)

    useEffect(() => {
        axios.get('http://localhost:3000/api/projects', {withCredentials: true})
            .then(res => setAllProjects(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            {
                allProjects.length >=1 
                ?
                    <div className='text-center h-screen flex flex-col items-center justrify-center'>
                        <h1 className='text-3xl font-bold'>CollabBoard</h1>
                        <h2 className='text-xl'>WIP</h2>
                        <p className='text-xl'>Welcome, {user.firstName} {user.lastName}!</p>

                        <div className='h-1/2 w-2/3 mb-2'>
                            <div className="overflow-auto h-full">
                                <table className='w-full rounded-lg '>
                                    <caption className='bg-midnightBlu text-white sticky top-0 '>Current Projects</caption>
                                    <thead className='sticky top-6 border bg-strawberryLt'>
                                        <tr >
                                            <th>Project</th>
                                            <th >Role</th>
                                            <th># of Tasks</th>
                                        </tr>
                                    </thead>
                                    <tbody > 
                                        {
                                            allProjects.map(project => (
                                                <tr key={project.id} className='border'>
                                                    <td>{project.projectName}</td>
                                                    {/* <td>{project.userId.id}</td>
                                                    <td>{project.tasks.length}</td> */}
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='flex justify-around w-2/3'>
                            
                                <CreateCard/>
                            
                            <JoinCard/>
                            
                        </div>
                    </div>
                :
                    <div className='text-center h-screen flex flex-col items-center justrify-center'>
                        <h1 className='text-3xl font-bold'>CollabBoard</h1>
                        <h2 className='text-xl'>WIP</h2>
                        <p className='text-xl'>Welcome, {user.firstName} {user.lastName}!</p>
                        <p>
                            Ready to collaborate and manage your projects efficiently? 
                            <br />
                            Choose how you’d like to get  started.
                        </p>
                        <CreateCard />
                        <JoinCard/>
                        
                    </div>
            }
        </div>    
    )
}

export default UserDashboard