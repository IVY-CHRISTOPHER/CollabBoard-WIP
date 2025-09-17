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
        axios.post('http://localhost:8004/api/user/login', userData, {withCredentials: true})
        .then( res => {
            setUser(res.data)
            navigate('/home')
        })
        .catch(error => {
                setUserErrors(error.response.data.message)
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
        <div>
            <h1>Login</h1>
            
            <hr />

            <form onSubmit={submitHandler}>
                <label>
                    Email
                    <input 
                        type="email"
                        name='email'
                        value={userData.email}
                        onChange={changeHandler}
                        placeholder='Email@example.com' 
                        />
                    <p>{userErrors.email}</p>
                </label>
                
                <br></br>

                <label>
                    Password
                    <input 
                        type="text"
                        name='password'
                        value={userData.password}
                        onChange={changeHandler}
                        placeholder='at least 8 characters' 
                        />
                </label>
                <p>{userErrors.password}</p>

                <br></br>
                
                <input type="submit" value="Login" /> 
            </form>

            <p>Dont have an Account?
                <Link to={'/register'}> Register</Link>
            </p>
        </div>
    )
}

export default Login