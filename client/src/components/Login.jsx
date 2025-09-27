import React, {useState, useContext} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { userContext } from '../context/userContext';
import axios from 'axios';


const Login = (props) => {
    const {user, setUser} = useContext(userContext)
    const navigate = useNavigate()
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })
    const [userErrors, setUserErrors] = useState({
        email: "",
        password: ""
    })

    const changeHandler = e => {
        const {name, value} = e.target
        setUserData(prev => ({...prev, [name]: value}))
        validateLogin(name, value)
    }

    const submitHandler = e => {
        e.preventDefault()
        axios.post('http://localhost:3000/api/user/login', userData, {withCredentials: true})
        .then( res => {
            setUser(res.data)
            navigate('/home')
        })
        .catch(error => {
                setUserErrors(error)
            })
    }

    const validateLogin = (name, value) => {
        const validations = {
            email : value => value.match(/[^\s@]+@[^\s@]+\.[^\s@]+/gi) ? true : 'Please enter a valid email address',
            password : value => value.length >= 8 ? true : 'Password must be at least 8 characters',
        }
        setUserErrors( prev => ({ ...prev, [name]: validations[name](value)}))
    }

    return (
        <div className='flex h-screen' >

            <div className='flex flex-col flex-1 items-center justify-center w-full'>

                <div className='w-2/3 bg-disabledGray border-1 rounded-md mb-10'>
                    <button className='w-1/2 bg-dkblue rounded-md text-white'>Register</button>
                    <button className='w-1/2'>Login</button>
                </div>
                
                <hr />

                <form onSubmit={submitHandler} className='w-2/3'>
                    <label className='block'>
                        Email
                    </label>
                    <input 
                        type="email"
                        name='email'
                        value={userData.email}
                        onChange={changeHandler}
                        placeholder='Email@example.com' 
                        className='w-full border-2 rounded-md '
                    />
                    <p className='text-errormsg'>{userErrors.email}</p>
                    
                    <br></br>

                    <label className='block mt-2'>
                        Password
                    </label>
                    <input 
                        type="text"
                        name='password'
                        value={userData.password}
                        onChange={changeHandler}
                        placeholder='at least 8 characters' 
                        className='w-full border-2 rounded-md '
                    />
                    <p className='text-errormsg'>{userErrors.password}</p>

                    <br></br>
                    
                    <input type="submit" value="Login" className='w-full rounded-md bg-dkblue py-2 px-4 text-white' /> 
                </form>

                <p className='mt-2'>Dont have an Account? 
                    <Link to={'/register'} className='text-blue-600 hover:text-blue-800 underline ml-1'>Register</Link>
                </p>
            </div>

            <div className='flex-1 h-full'>
                <img src="src\assets\LoginPic.jpg" alt="Login Picture"  className='h-full w-full object-cover'/>
            </div>

        </div>
    )
}

export default Login