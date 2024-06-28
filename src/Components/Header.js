import { signOut } from 'firebase/auth'
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, USER_AVATAR } from '../utils/constants'
import { toggleGptSearchView } from '../utils/gptSlice'
import { SUPPORTED_LANGUAGE } from '../utils/languageConstants'
import { changeLanguage } from '../utils/configSlice'

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const showGptSearch = useSelector(store => store.gpt.showGptSearch);

    const handleLogout = () => {
        signOut(auth)
            .then(() => { })
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

    const handleGptSearchClick = () => {
        dispatch(toggleGptSearchView());
    };

    const handleLanguageChange = (event) => {
        dispatch(changeLanguage(event.target.value));
    }

    return (
        <div className='absolute px-8 py-2 bg-gradient-to-b from-black w-full z-10 flex flex-col md:flex-row justify-between'>
            <img
                className='w-44 mx-auto md:mx-0'
                src={LOGO}
                alt='Logo'
            />
            {user && (
                <div className='flex items-center justify-evenly'>
                    {showGptSearch && (<select
                        className='p-2 bg-gray-900 text-white m-2'
                        onChange={handleLanguageChange}
                    >
                        {
                            SUPPORTED_LANGUAGE.map(lang =>
                                <option key={lang.identifier} value={lang.identifier}>
                                    {lang.name}
                                </option>)
                        }
                    </select>)}
                    <button className='py-2 px-4 mx-4 my-2 text-white font-bold bg-purple-800 rounded-lg' onClick={handleGptSearchClick}>{showGptSearch ? "Home Page" : "GPT Search"}</button>
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