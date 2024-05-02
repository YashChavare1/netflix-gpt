import React, { useRef, useState } from 'react'
import Header from './Header';
import { validateSignIn, validateSignUp } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const toggleSignInForm = (event) => {
        event.target.closest('form').reset();
        setIsSignInForm(!isSignInForm);
    }

    const handleButtonClick = async (event) => {
        event.preventDefault();
        try {
            const errorMessage = isSignInForm
                ? await validateSignIn(email.current.value, password.current.value)
                : await validateSignUp(name.current.value, email.current.value, password.current.value);
            setErrorMessage(errorMessage);
            if (errorMessage) return;

            // Sign-In & Sign-Up Logic
            if (!isSignInForm) {
                createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                    .then((userCredential) => {
                        const user = userCredential.user;
                        console.log(user);
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        setErrorMessage(errorCode + "-" + errorMessage);
                    });
            }
            else {
                signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                    .then((userCredential) => {
                        const user = userCredential.user;
                        console.log(user);
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        setErrorMessage(errorCode + "-" + errorMessage);
                    });
            }
        }
        catch (error) {
            console.error("Error:", error);
            setErrorMessage("An error occurred during validation.");
        }

    };


    return (
        <div>
            <Header />
            <img
                className='absolute'
                src='https://assets.nflxext.com/ffe/siteui/vlv3/058eee37-6c24-403a-95bd-7d85d3260ae1/e10ba8a6-b96a-4308-bee4-76fab1ebd6ca/IN-en-20240422-POP_SIGNUP_TWO_WEEKS-perspective_WEB_db9348f2-4d68-4934-b495-6d9d1be5917e_large.jpg'
                alt='background poster'
            />
            <form
                className='absolute w-3/12 mx-auto my-36 p-12 right-0 left-0 bg-black text-white rounded-lg bg-opacity-80'
            >
                <h1 className='text-3xl font-bold py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && (
                    <input
                        type="text"
                        ref={name}
                        placeholder='Full Name'
                        className='p-4 my-4 w-full bg-gray-700'
                    />
                )}
                <input
                    type="text"
                    ref={email}
                    placeholder='Email Address'
                    className='p-4 my-4 w-full bg-gray-700'
                />
                <input
                    type="password"
                    ref={password}
                    placeholder='Password'
                    className='p-4 my-4 w-full bg-gray-700'
                />
                <p className='text-red-500 font-bold text-lg'>{errorMessage}</p>
                <input
                    type='submit'
                    className='p-4 my-6 bg-red-700 w-full font-bold text-lg rounded-sm'
                    onClick={handleButtonClick}
                    value={isSignInForm ? "Sign In" : "Sign Up"}
                />
                <p
                    className='cursor-pointer'
                    onClick={toggleSignInForm}
                >
                    {isSignInForm ?
                        <span>New to Netflix?
                            <span className='hover:text-white no-underline hover:underline p-1 font-bold'> Sign Up Now</span>
                        </span>
                        :
                        <span>Already registered?
                            <span className='hover:text-white no-underline hover:underline p-1 font-bold'> Sign In Now</span>
                        </span>

                    }
                </p>
            </form>
        </div>
    )
}

export default Login;