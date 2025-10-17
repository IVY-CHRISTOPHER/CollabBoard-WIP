import React, {useState, useEffect, useContext} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { userContext } from '../context/userContext';
import axios from 'axios';

function JoinProject() {
    const {user, setUser} = useContext(userContext)
    const navigate = useNavigate()
    const [project, setProject] = useState({
        projectCode: "",
        
    })
    const changeHandler = e => {
        const {name, value} = e.target
        setProject(prev => ({...prev, [name]: value}))

    }

    const submitHandler = e => {
        e.preventDefault()
        const newProject = {...project, userId: user._id }
        axios.post('http://localhost:3000/api/project/add', newProject ,{withCredentials: true})
        .then( () => navigate('/user/dashboard'))
        .catch(error => {setProjectErrors(error)})
    }
    
    return (
        <div className='h-screen flex flex-col items-center justrify-center'>
            <h1 className='text-3xl font-bold'>Join A Project</h1>
            <p>
                Enter the project code shared by your team to join an existing workspace and start collaborating.
            </p>

            <div className='grid place-items-center h-screen w-screen'>

                <div className='w-2/3 rounded-lg shadow-md '>
                    <form className='m-5' onSubmit={submitHandler}>
                        <label htmlFor="projectName" className='inline-flex font-bold'>
                            <img src="/src\assets\Key.svg" alt="key icon" className='h-5' />
                            Enter project code
                        </label>
                        <input
                            type="text"
                            name="projectName"
                            id="projectName"
                            value={project.projectName}
                            onChange={changeHandler}
                            placeholder='Enter Code'
                            className='w-full border-2 border-mist rounded-md text-cadetGry bg-lotion'
                        />
                        <p className='text-shadowGry bg-ghost border-2 rounded-md border-steelBluLt p-2'>
                            <span className='font-bold'>Don’t have a project code?</span> 
                            Ask your team lead or project admin to share project invitation code.</p>
                        <input
                            type="submit"
                            value="Join"
                            className='w-2/3 rounded-md bg-midnightBlu py-2 px-4 text-white mt-1'
                        />

                        <Link to={'/user/dashboard'}>
                            <button className='w-1/4 rounded-md bg-mist py-2 px-4 text-midnightBlu mt-1 ml-10'>
                                Cancel
                            </button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default JoinProject