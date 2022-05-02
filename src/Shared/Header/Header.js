import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import CustomLink from '../../Routes/CustomLink/CustomLink';
import Loading from '../Loading/Loading';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const [navbarOpen, setNavbarOpen] = useState(false)
    return (
        <div className='shadow-sm'>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">

                        <CustomLink to="/" className="flex items-center">
                            {
                                loading && <Loading></Loading>
                            }
                            {
                                error && toast(error?.message)
                            }
                            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">warehouse</span>
                        </CustomLink>
                        <button
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <i class="fa fa-bars" aria-hidden="true"></i>
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center justify-end" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium items-center">
                            <li>
                                <CustomLink to="/" className="block py-2 pr-4 pl-3 text-white rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</CustomLink>
                            </li>
                            {
                                user &&
                                <li>
                                    <CustomLink to="/manageItems" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Manage Items</CustomLink>
                                </li>
                            }
                            {
                                user &&
                                <li>
                                    <CustomLink to="/addItems" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Add items</CustomLink>
                                </li>
                            }
                            {
                                user &&
                                <li>
                                    <CustomLink to="/myItems" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">My Items</CustomLink>
                                </li>
                            }
                            <li>
                                <CustomLink to="/blog" className="block py-2 pr-4 pl-3 text-white rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Blog</CustomLink>
                            </li>
                            <li>
                                {
                                    user
                                        ?
                                        <CustomLink to="/login" className="py-2 pr-4 pl-3 text-red-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent flex items-center" onClick={(e) => {
                                            signOut(auth);
                                        }}>
                                            {
                                                user?.photoURL && <img src={user?.photoURL} alt="dp" className='rounded-full w-8 mr-2' />
                                            }
                                            Logout ({user?.displayName})</CustomLink>
                                        :
                                        <CustomLink to="/login" className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</CustomLink>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Header;