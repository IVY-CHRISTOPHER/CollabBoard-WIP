import React, {useState, useEffect, useContext} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import { userContext } from '../context/userContext';
import axios from 'axios';

function CreateMilestone() {
    const {project_id} = useParams()
    const {project, setproject} = useContext(userContext)
    const navigate = useNavigate()
    const [milestone, setMilestone] = useState({
        milestoneName: "",
        description: ""
    })

    const changeHandler = e => {
        const {name, value} = e.target
        setMilestone(prev => ({...prev, [name]: value}))
    }

    const submitHandler = e => {
        e.preventDefault()
        const newMilestone = {...milestone, projectId: project_id }
        axios.post('http://localhost:3000/api/milestone/create', newMilestone ,{withCredentials: true})
        .then( () => navigate(`/milestone/${project_id}/dashboard`))
        .catch(error => console.log(error))
    }

    return (
        <div className='h-screen flex flex-col items-center justrify-center'>
            <h1 className='text-3xl font-bold'>New Milestone</h1>

            <div className='grid place-items-center h-screen w-screen'>

            <div className='w-2/3 rounded-lg shadow-md '>
                <form className='m-5' onSubmit={submitHandler}>
                    <label htmlFor="milestoneName" className='inline-flex font-bold'>
                        <img src="/src\assets\Folder.svg" alt="folder icon" className='h-5'/> 
                        Name your milestone:
                    </label>
                    <input 
                        type="text" 
                        name="milestoneName" 
                        id="milestoneName" 
                        value={milestone.milestoneName}
                        onChange={changeHandler}
                        placeholder='Name your milestone' 
                        className='w-full border-2 border-mist rounded-md text-cadetGry bg-lotion'
                    />
                    <p className='text-shadowGry'>Choose a clear, descriptive name that your team will easily recognize.</p>

                    <label htmlFor="milestoneDescription" className='font-bold'>
                        Milestone description
                    </label>
                    <textarea 
                        name="milestoneDescription"
                        id='milestoneDescription'
                        value={milestone.milestoneDescription} 
                        onChange={changeHandler}
                        placeholder='Describe the goals, scopeand key objectives of your milestone. This helps  teams understand the bigger picture.'
                        className='w-full border-2 border-mist rounded-md text-cadetGry bg-lotion field-sizing-content'
                    ></textarea>
                        <p className='text-shadowGry'>Describe the goals, scope and key objectives of your milestone. This helps  teams understand the bigger picture.</p>

                    <input 
                        type="submit" 
                        value="Create" 
                        className='w-2/3 rounded-md bg-midnightBlu py-2 px-4 text-white mt-1' 
                    /> 

                    <Link to={`/project/${project_id}/dashboard`}>
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

export default CreateMilestone