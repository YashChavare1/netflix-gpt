import React, { useState } from 'react'
import Header from './Header';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    return (
        <div>
            <Header />
            <img
                className='absolute'
                src='https://assets.nflxext.com/ffe/siteui/vlv3/058eee37-6c24-403a-95bd-7d85d3260ae1/e10ba8a6-b96a-4308-bee4-76fab1ebd6ca/IN-en-20240422-POP_SIGNUP_TWO_WEEKS-perspective_WEB_db9348f2-4d68-4934-b495-6d9d1be5917e_large.jpg'
                alt='background poster'
            />
            <form className='absolute w-3/12 mx-auto my-36 p-12 right-0 left-0 bg-black text-white rounded-lg bg-opacity-80'>
                <h1 className='text-3xl font-bold py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && (<input
                    type="text"
                    placeholder='Full Name'
                    className='p-4 my-4 w-full bg-gray-700'
                />)}
                <input
                    type="text"
                    placeholder='Email Address'
                    className='p-4 my-4 w-full bg-gray-700'
                />
                <input
                    type="password"
                    placeholder='Password'
                    className='p-4 my-4 w-full bg-gray-700'
                />
                <button className='p-4 my-6 bg-red-700 w-full font-bold text-lg rounded-sm'>
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                <p className='cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}</p>
            </form>
        </div>
    )
}

export default Login;