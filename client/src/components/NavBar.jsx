import React, { useState, useContext } from 'react';
import { userContext } from '../context/userContext';
import { useLocation } from 'react-router-dom';

const NavBar = (props) => {
    const { user, setUser } = useContext(userContext)
    const location = useLocation()

    // Path logic so it doesnt appeat on these routes but it will elsewhere
    if(
        location.pathname == '/' || 
        location.pathname == '/register' || 
        location.pathname == '/password/forgot' ||
        location.pathname == '/password/update' ||
        location.pathname == '/password/complete' ||
        location.pathname == '/verification' ||
        location.pathname == '/user/dashboard' ||
        location.pathname == '/project/create' ||
        location.pathname == '/project/join' 

    ){
        return (
            <div></div>
        )
    }

    return (
        <nav className={` bg-ghost w-full h-10 flex justify-between `}>
            <form className='flex items-center rounded-md  ml-2 ' >
                <div className='flex bg-white rounded-md items-center p-1'>
                    <img src="\src\assets\SearchIcon.svg" alt="Search Icon" className='h-3' />
                    <input
                        type="text"
                        name="search"
                        id="serch"
                        className='rounded-md h-5'
                    />
                </div>
            </form>
            <div className='flex items-center mr-4'>
                <img src="\src\assets\UserIcon.svg" alt="User Icon" className='mr-3' />
                <div className='mr-3'>
                    <p className='text-lg '>First Last</p>
                    {/* <p>{user.firstName} {user.lastName}</p> */}
                    <p className='text-xs -mt-2'>Project Role </p>
                </div>
                
                <img src="\src\assets\VectorIconBlk.svg" alt="Vector Icon" />
            </div>
        </nav>
    )
}

export default NavBar