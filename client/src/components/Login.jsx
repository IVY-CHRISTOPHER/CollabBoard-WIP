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
        axios.post('http://localhost:3000/api/login', userData, {withCredentials: true})
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

            <div className='flex flex-col flex-1 items-center md:justify-center w-full'>

                <img src="src\assets\logo.png" alt="Logo" className='w-2/12 object-fit '/>

                <div className='w-2/3 bg-disabledGray border-1 rounded-md mb-10'>
                    <Link to={'/register'}>
                        <button  className='w-1/2 bg-blueberry rounded-md text-white'>
                            Register
                        </button>
                    </Link>
                    <button className='w-1/2'>Login</button>
                </div>
                
                <hr />

                <form onSubmit={submitHandler} className='w-2/3'>
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
                        className='w-full border-2 rounded-md '
                    />
                    <p className='text-strawberry'>{userErrors.email}</p>
                    
                    <br></br>

                    <label htmlFor='password' className='block mt-2'>
                        Password
                    </label>
                    <input 
                        type="text"
                        name='password'
                        id='password'
                        value={userData.password}
                        onChange={changeHandler}
                        placeholder='at least 8 characters' 
                        className='w-full border-2 rounded-md '
                    />
                    <p className='text-strawberry'>{userErrors.password}</p>

                    <br></br>

                    <p className='text-right'>
                        <Link to={'/forgotPassword'} className='text-blue-400 hover:text-blue-800 underline m-1 '>Forgot Password?</Link>
                    </p>

                    <input 
                        type="submit" 
                        value="Login" 
                        className='w-full rounded-md bg-blueberry py-2 px-4 text-white mt-1' 
                    /> 
                </form>
                

                <div class="relative flex py-5 items-center w-2/3">
                    <hr class="flex-grow border-t border-gray-400"/>
    
                    <span class="flex-shrink mx-4 text-black"> or </span>
    
                    <hr class="flex-grow border-t border-gray-400"/>
                </div>

                <button class="px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-black hover:bg-orangeCream">
                    <img class="w-6 h-6" src="src\assets\google-color.svg" alt="google logo"/>
                    <p>Login with Google</p>
                </button>

                <button class=" mt-2 px-4 py-2 border flex gap-2 border-slate-200  rounded-lg text-black hover:bg-orangeCream">
                    <img class="w-6 h-6" src="src\assets\facebook-official.svg" alt="facebook logo"/>
                    <p>Login with Facebook</p>
                </button>
                
                <p className='mt-2'>Dont have an Account? 
                    <Link to={'/register'} className='text-blue-400 hover:text-blue-600 underline ml-1'>Register</Link>
                </p>

            </div>

            <div className='flex-1 h-full'>
                <img src="\src\assets\LoginPic.jpg" alt="Login Picture"  className='h-full w-full object-cover'/>
            </div>


        </div>
    )
}

export default Login