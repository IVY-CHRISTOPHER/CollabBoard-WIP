import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ResetComplete = (props) => {

    return (
        <div className='flex h-screen'>

            <div className='flex-1 h-full'>
                <img src='\src\assets\LoginPic.jpg' alt="Login Picture" className='h-full w-full object-cover' />
            </div>

            <div className='flex flex-col flex-1 items-center md:justify-center w-full'>
                <h1 className='text-2xl font-medium' >Password Reset Complete</h1>

                <p className='text-slate-500'>
                    Password reset has been completed.
                    <br />
                    Please login with your new password
                </p>

                <Link to={'/'} className='w-1/3 rounded-md bg-blueberry py-2 px-4 text-white mt-1 text-center mt-10' >
                    <button>Return to Login</button>
                </Link>

            </div>
        </div>
    )
}

export default ResetComplete