import React, {useState, useContext} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { userContext } from '../context/userContext';
import axios from 'axios';

const ForgotPassword = (props) => {
    // will change this as needed when we get to working out the logic.
    const {user, setUser} = useContext(userContext)
        const navigate = useNavigate()
        const [userData, setUserData] = useState({
            email: ""
        })
        const [userErrors, setUserErrors] = useState({
            email: ""
        })
    
        const changeHandler = e => {
            const {name, value} = e.target
            setUserData(prev => ({...prev, [name]: value}))
            validateLogin(name, value)
        }

        // Submit handler here

    return (
        <div className='flex h-screen'>

            <div className='flex-1 h-full'>
                <img src='\src\assets\LoginPic.jpg' alt="Login Picture"  className='h-full w-full object-cover'/>
            </div>
            
            <div className='flex flex-col flex-1 items-center md:justify-center w-full'>
                <h1 className='text-2xl font-medium' >Forgot Password?</h1>
                <p className='text-cadetGry'>Don't worry, we can help.</p>
                
                <form className='w-2/3'>
                    <label htmlFor='email' className='block'>
                        Email
                    </label>
                    <input 
                        type="email"
                        name='email'
                        id='email'
                        value={userData.email}
                        onChange={changeHandler}
                        placeholder='Email@example.com' 
                        className='w-full border-2 border-strawberryLt rounded-md text-cadetGry bg-lotion '
                    />
                    <p className='text-strawberry'>{userErrors.email}</p>

                    <input 
                        type="submit" 
                        value="Continue" 
                        className='w-full rounded-md bg-salmon py-2 px-4 text-white mt-2' 
                    />

                </form>


                <div className="relative flex py-5 items-center w-2/3">
                    <hr className="flex-grow border-t border-gray-400"/>

                    <span className="flex-shrink mx-4 text-black"> or </span>
                    
                    <hr className="flex-grow border-t border-gray-400"/>
                </div>

                <p>
                    Already have an account?
                    <Link to={'/'} className='text-linksBlu hover:text-blue-600 ml-1'>Sign in</Link>
                </p>
            </div>

        </div>
    )
}

export default ForgotPassword