import React, {useState, useEffect, useContext} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { userContext } from '../context/userContext';
import axios from 'axios';

function CreateProject() {
    const {user, setUser} = useContext(userContext)
    const navigate = useNavigate()
    const [project, setProject] = useState({
        projectName: "",
        projectDescription: ""
    })
    const [projectErrors, setProjectErrors] = useState({
        projectName: '',
        projectDescription: ""
    })

    const changeHandler = e => {
        const {name, value} = e.target
        setProject(prev => ({...prev, [name]: value}))
        validateProject(name, value)
    }

    const submitHandler = e => {
        e.preventDefault()
        const newProject = {...project, userId: user._id }
        axios.post('http://localhost:3000/api/project/add', newProject ,{withCredentials: true})
        .then( () => navigate('/user/dashboard'))
        .catch(error => {setProjectErrors(error)})
    }

    const validateProject = (name, value) => {
        const validations = {
            projectName : value => value.length >= 1 ? true : 'Enter Project Name',
            projectDescription : value => value ? true : true,
        }
        setProjectErrors( prev => ({ ...prev, [name]: validations[name](value)}))
    }

    return (
        <div className='h-screen flex flex-col items-center justrify-center'>
            <h1 className='text-3xl font-bold'>Welcome to your workspace!</h1>
            <p>
                Let’s get you started by creating your first project. This will be your central hub for managing tasks and collaborating with your team.
            </p>

            <div className='grid place-items-center h-screen w-screen'>

            <div className='w-2/3 rounded-lg shadow-md '>
                <form className='m-5' onSubmit={submitHandler}>
                    <label htmlFor="projectName" className='inline-flex font-bold'>
                        <img src="/src\assets\Folder.svg" alt="folder icon" className='h-5'/> 
                        Name your project:
                    </label>
                    <input 
                        type="text" 
                        name="projectName" 
                        id="projectName" 
                        value={project.projectName}
                        onChange={changeHandler}
                        placeholder='Name your project' 
                        className='w-full border-2 border-mist rounded-md text-cadetGry bg-lotion'
                    />
                    <p className='text-strawberry'>{projectErrors.projectName}</p>
                    <p className='text-shadowGry'>Choose a clear, descriptive name that your team will easily recognize.</p>

                    <label htmlFor="projectDescription" className='font-bold'>
                        What is your project about?
                    </label>
                    <textarea 
                        name="projectDescription"
                        id='projectDescription'
                        value={project.projectDescription} 
                        onChange={changeHandler}
                        placeholder='Describe the goals, scopeand key objectives of your project. This helps  teams understand the bigger picture.'
                        className='w-full border-2 border-mist rounded-md text-cadetGry bg-lotion field-sizing-content'
                        ></textarea>
                        <p className='text-shadowGry'>Optional: Provide context and goals to help your team stay aligned.</p>

                    <input 
                        type="submit" 
                        value="Create" 
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

export default CreateProject