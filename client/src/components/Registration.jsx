import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { userContext } from '../context/userContext';
import axios from 'axios';

const Registration = (props) => {
    const {user, setUser} = useContext(userContext)
    const navigate = useNavigate()
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const [userErrors, setUserErrors] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const changeHandler = e => {
        const {name, value} = e.target
        setUserData(prev => ({...prev, [name]: value}))
        validateRegistration(name, value)
    }

    const submitHandler = e => {
        e.preventDefault()
        axios.post('http://localhost:3000/api/register',userData, {withCredentials: true})
        .then( res => {
            setUser(res.data)
            navigate('/home')
        })
        .catch(error => console.log(error))
    }

    const validateRegistration = (name, value) => {
        const validations = {
            firstName : value => value.length >= 1 ? true : 'First name is required',
            lastName : value => value.length >= 1 ? true : 'Last name is required',
            email : value => value.match(/[^\s@]+@[^\s@]+\.[^\s@]+/gi) ? true : 'Please enter a valid email address',
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

    return (
        <div className='flex h-screen'>

            <div className='flex flex-col flex-1 items-center justify-center w-full'>

                <div className='w-2/3 bg-disabledGray border-1 rounded-md mb-10'>
                    <button className='w-1/2 '>Register</button>
                    <button className='w-1/2 bg-dkblue rounded-md text-white'>Login</button>
                </div>
            
                <hr />

                <form onSubmit={submitHandler} className='w-2/3'>
                    <label className='block'>
                        First Name
                    </label>
                    <input 
                        type="text" 
                        name='firstName'
                        value={userData.firstName}
                        onChange={changeHandler}
                        placeholder='Type in users name'
                        className='w-full border-2 rounded-md '
                    />
                    <p className='text-errormsg'>{userErrors.firstName}</p>

                    <label className='block mt-2'>
                        Last Name
                    </label>
                    <input 
                        type="text" 
                        name='lastName'
                        value={userData.lastName}
                        onChange={changeHandler}
                        placeholder='Type in users name'
                        className='w-full border-2 rounded-md '
                    />
                    <p className='text-errormsg'>{userErrors.lastName}</p>

                    <label className='block mt-2'>
                        Email
                    </label>
                    <input 
                        type="email"
                        name='email'
                        value={userData.email}
                        onChange={changeHandler}
                        placeholder='Example@email.com'
                        className='w-full border-2 rounded-md '
                    />
                    <p className='text-errormsg'>{userErrors.email}</p>

                    <label className='block mt-2'>
                        Password
                    </label>
                    <input 
                        type="password"
                        name='password'
                        value={userData.password}
                        onChange={changeHandler}
                        placeholder='At least 8 characters'
                        className='w-full border-2 rounded-md '
                    />
                    <p className='text-errormsg'>{userErrors.password}</p>

                    <label className='block mt-2'>
                        Confirm Password
                    </label>
                    <input 
                        type="password"
                        name='confirmPassword'
                        value={userData.confirmPassword}
                        onChange={changeHandler}
                        placeholder='Confirm Password'
                        className='w-full border-2 rounded-md '
                    />
                    <p className='text-errormsg'>{userErrors.confirmPassword}</p>

                    <p className='mt-2'>
                        By signing up you agree to our 
                        <Link to={'/termsOfService'} className='text-blue-500 hover:text-blue-800 underline ml-1'>Terms Of Service</Link>
                    </p>

                    <input type="submit" value="Register" className='w-full rounded-md bg-dkblue py-2 px-4 text-white mt-2' />
                </form>

                <br></br>

                <p>
                    Already have an account?
                    <Link to={'/'} className='text-blue-600 hover:text-blue-800 underline ml-1'>Sign in</Link>
                </p>

            </div>
            <div className='flex-1 h-full'>
                <img src="src\assets\LoginPic.jpg" alt="Login Picture"  className='h-full w-full object-cover'/>
            </div>
        </div>
    )
}

export default Registration