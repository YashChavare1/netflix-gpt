import { signOut } from 'firebase/auth'
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, USER_AVATAR } from '../utils/constants'

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);

    const handleLogout = () => {
        signOut(auth)
            .then(() => {})
            .catch(() => {
                navigate("/error-page") // Create Error Page    
            });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user;
                dispatch(
                    addUser({
                        uid: uid,
                        email: email,
                        displayName: displayName,
                    })
                );
                navigate("/browse");
            }
            else {
                dispatch(removeUser());
                navigate("/");
            }
        })

        // Unsubscribe when component Unmount.
        return () => unsubscribe();
    }, []);

    return (
        <div className='absolute px-8 py-2 bg-gradient-to-b from-black w-full z-10 flex justify-between'>
            <img
                className='w-44'
                src={LOGO}
                alt='Logo'
            />
            {user && (
                <div className='flex p-2'>
                    <img
                        className='w-10 h-10 z-10'
                        src={USER_AVATAR}
                        alt="usericon"
                        onClick={handleLogout}
                    />
                </div>
            )}
        </div>
    )
}

export default Header;