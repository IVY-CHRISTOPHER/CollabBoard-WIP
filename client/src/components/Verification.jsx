import React, {useState, useContext} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { userContext } from '../context/userContext';
import axios from 'axios';

const Verification = (props) => {
    // will change this as needed when we get to working out the logic.
    const { user, setUser } = useContext(userContext)
    const navigate = useNavigate()
    const [userData, setUserData] = useState({
        verificationCode : ''
    })

    const [userErrors, setUserErrors] = useState({
            verificationCode : ''
        })

    const changeHandler = e => {
    const {name, value} = e.target
    setUserData(prev => ({...prev, [name]: value}))
    validateCode(name, value)
    }

    const validateCode = (name, value) => {
    const validations = {
        verificationCode : value => value.length >= 2 ? true : 'Please use correct code',
    }
}
    // Submit Handler will go here

    return (
        <div className='flex h-screen'>

            <div className='flex-1 h-full'>
                <img src='\src\assets\LoginPic.jpg' alt="Login Picture" className='h-full w-full object-cover' />
            </div>

            <div className='flex flex-col flex-1 items-center md:justify-center w-full'>
                <h1 className='text-2xl font-medium' >Enter Verification Code</h1>

                <p className='text-cadetGry'>
                    A verification code has been sent to example@email.com
                    <br />
                    *Please enter validation code
                </p>

                <form className='w-2/3'>
                    <label htmlFor='password' className='block mt-2'>
                        Verification Code
                    </label>
                    <input
                        type="text"
                        name='verificationCode'
                        id='verificationCode'
                        value={userData.verificationCode}
                        onChange={changeHandler}
                        placeholder='Please Enter Verification Code'
                        className='w-full border-2 border-ghost rounded-md text-cadetGry bg-lotion'
                    />
                    <p className='text-strawberry'>{userErrors.verificationCode}</p>

                    <p className='text-right'>
                        <Link to={'/password/forgot'} className='text-linksBlu hover:text-blue-600 ml-1'>Resend Verification Code</Link>
                    </p>

                    <input
                        type="submit"
                        value="Verify"
                        className='w-full rounded-md bg-midnightBlu py-2 px-4 text-white mt-2'
                    />

                </form>
            </div>
        </div>
    )
}

export default Verification