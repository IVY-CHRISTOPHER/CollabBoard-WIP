import React, {useState, useContext} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { userContext } from '../context/userContext';
import axios from 'axios';

const NewPassword = (props) => {
    // will change this as needed when we get to working out the logic.
    const {user, setUser} = useContext(userContext)
    const navigate = useNavigate()
    const [userData, setUserData] = useState({
        password: "",
        confirmPassword: ""
    })
    const [userErrors, setUserErrors] = useState({
        password: "",
        confirmPassword: ""
    })

    const changeHandler = e => {
        const {name, value} = e.target
        setUserData(prev => ({...prev, [name]: value}))
        validateNewPassword(name, value)
    }

    const validateNewPassword = (name, value) => {
    const validations = {
        password : value => value.length >= 8 ? true : 'Password must be at least 8 characters',
        confirmPassword : (value) => { 
            if ( name == 'confirmPassword' ){ return userData.password === value ? true : "Passwords do not match" }
            if (name == 'password'){ return userData.confirmPassword === value ? true : 'Passwords do not match'}
        },
    }
    if (name == 'password'){
        setUserErrors( prev => ({ ...prev, confirmPassword: validations['confirmPassword'](value)})) 
    }
    setUserErrors( prev => ({ ...prev, [name]: validations[name](value)}))
}

    // Submit handler will go here
        
    return (
        <div className='flex h-screen'>
        
                    <div className='flex-1 h-full'>
                        <img src='\src\assets\LoginPic.jpg' alt="Login Picture"  className='h-full w-full object-cover'/>
                    </div>
                    
                    <div className='flex flex-col flex-1 items-center md:justify-center w-full'>
                        <h1 className='text-2xl font-medium' >Enter New Password</h1>

                        <p className='text-cadetGry'>
                            Please enter your new password.
                            <br />
                            After resetting your password, please log in againwith the new password.
                            <br />
                            *Password must be at least 8 characters long
                        </p>
                        
                        <form className='w-2/3'>
                            <label htmlFor='password' className='block mt-2'>
                                New Password
                            </label>
                            <input 
                                type="password"
                                name='password'
                                id='password'
                                value={userData.password}
                                onChange={changeHandler}
                                placeholder='At least 8 characters'
                                className='w-full border-2 border-ghost rounded-md text-cadetGry bg-lotion'
                            />
                            <p className='text-strawberry'>{userErrors.password}</p>

                            <label htmlFor='confirmPassword' className='block mt-2'>
                                Confirm New Password
                            </label>
                            <input 
                                type="password"
                                name='confirmPassword'
                                id='confirmPassword'
                                value={userData.confirmPassword}
                                onChange={changeHandler}
                                placeholder='Confirm Password'
                                className='w-full border-2 border-ghost rounded-md text-cadetGry bg-lotion'
                            />
                            <p className='text-strawberry'>{userErrors.confirmPassword}</p>
        
                            <input 
                                type="submit" 
                                value="Reset Password" 
                                className='w-full rounded-md bg-midnightBlu py-2 px-4 text-white mt-2' 
                            />
        
                        </form>
                    </div>
                </div>
    )
}

export default NewPassword