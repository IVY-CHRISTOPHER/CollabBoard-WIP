import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { userContext } from '../context/userContext';
import axios from 'axios';

const Registration = (props) => {
    const {user, setUser} = useContext(userContext)
    const navigate = useNavigate()
    const [userData, setUserData] = useState({
        userName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const [userErrors, setUserErrors] = useState({
        userName: "",
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
        axios.post('http://localhost:8004/api/user/register',userData, {withCredentials: true})
        .then( res => {
            setUser(res.data)
            navigate('/home')
        })
        .catch(error => console.log(error))
    }

    const validateRegistration = (name, value) => {
        const validations = {
            userName : value => value.length >= 3 ? true : 'User Name must be at least 3 characters',
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
        <div>
            <h1>Register</h1>
            
            <hr />

            <form>
                <label>
                    User Name
                    <input 
                        type="text" 
                        name='userName'
                        value={userData.userName}
                        onChange={changeHandler}
                        placeholder='Type in users name'
                    />
                </label>
                <p>{userErrors.userName}</p>

                <label>
                    Email
                    <input 
                        type="email"
                        name='email'
                        value={userData.email}
                        onChange={changeHandler}
                        placeholder='Example@email.com'
                    />
                </label>
                <p>{userErrors.email}</p>

                <label>
                    Password
                    <input 
                        type="password"
                        name='password'
                        value={userData.password}
                        onChange={changeHandler}
                        placeholder='At least 8 characters'
                    />
                </label>
                <p>{userErrors.password}</p>

                <label>
                    Confirm Password
                    <input 
                        type="password"
                        name='confirmPassword'
                        value={userData.confirmPassword}
                        onChange={changeHandler}
                        placeholder='Confirm Password'
                    />
                </label>
                <p>{userErrors.confirmPassword}</p>

                <p>
                    By signing up you agree to our 
                    <Link to={'/termsOfService'}>Terms Of Service</Link>
                </p>

                <input type="submit" value="Register"/>
            </form>

            <br></br>

            <p>
                Already have an account?
                <Link to={'/'}>Sign in</Link>
            </p>
        </div>
    )
}

export default Registration