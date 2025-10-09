import React, {useState, useContext} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { userContext } from '../context/userContext';
import axios from 'axios';

const CreateCard = (props) => {
        
    return (
            <div className=' w-2/3 rounded-lg text-center shadow-md'>

                <button className='rounded-full bg-midnightBlu text-white text-2xl w-12 h-12 border-white m-4 place-items-center'> 
                    <img src="\src\assets\AddIcon.svg" alt="Add icon"/>
                </button>

                <p className='text-xl'>
                    Create New Project
                </p>
                <p className='text-wrap'>
                    Start a new project and invite your team members to collaborate.
                </p>

                <Link to={'/project/create'}>
                    <button className='w-2/3 rounded-md bg-midnightBlu py-2 px-4 text-white mt-2 mb-4'>
                        Create A Project
                    </button>
                </Link>
            </div>
    )
}

export default CreateCard