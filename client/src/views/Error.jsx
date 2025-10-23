import React, {useState} from 'react';
import NavBar from '../components/NavBar';

const Error = (props) => {

    return (
        <div className="h-screen flex items-center justify-center">
            <div className='text-center'>
                <h2 className='text-4xl font-extrabold'>404 Page Not Found</h2>
                <p className='mt-3'>The Page you're looking for does not exist</p>
            </div>
        </div>
)}

export default Error;