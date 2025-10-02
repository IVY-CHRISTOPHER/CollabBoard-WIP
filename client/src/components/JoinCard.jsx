import React, {useState, useContext} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { userContext } from '../context/userContext';
import axios from 'axios';

const JoinCard = (props) => {
        
    return (
            <div className=' w-2/3 rounded-lg text-center shadow-md'>

                <button className='rounded-full bg-salmon text-white text-2xl w-12 h-12 border-white m-4 place-items-center'> 
                    <img src="\src\assets\JoinProjectIcon.svg" alt="Join project icon"/>
                </button>

                <p className='text-xl'>
                    Join A Project
                </p>
                <p className='text-wrap'>
                    Have an invitation code? Join an existing project team
                </p>

                <Link to={'/project/join'}>
                    <button className='w-2/3 rounded-md bg-strawberryLt py-2 px-4 text-salmon border-salmon border mt-2 mb-4'>
                        Join A Project
                    </button>
                </Link>
            </div>
    )
}

export default JoinCard