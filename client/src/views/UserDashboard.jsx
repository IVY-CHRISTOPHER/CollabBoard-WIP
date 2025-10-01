import React, {useState, useContext} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { userContext } from '../context/userContext';
import axios from 'axios';
import CreateAndJoinCards from '../components/CreateAndJoinCards'

const UserDashboard = (props) => {
    const { user, setUser } = useContext(userContext)


    return (
        <div className='text-center'>
            <h1 className='text-4xl font-bold'>CollabBoard</h1>
            <h2 className='text-2xl'>WIP</h2>
            <p className='text-2xl'>Welcome, {user.firstName} {user.lastName}!</p>

            <table>
                
            </table>

            <CreateAndJoinCards />

            <p></p>
        </div>
    )
}

export default UserDashboard