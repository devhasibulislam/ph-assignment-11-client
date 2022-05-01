import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    // EP => email & password
    // UP => updating profile

    const [updateProfile, updating, errorUP] = useUpdateProfile(auth);
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        userEP,
        loadingEP,
        errorEP,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const handleSignup = async (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });

        // console.log(name, email, password, 'finding done!');
        toast('registration success!');
    };

    if (errorEP || errorUP) {
        console.log(errorEP, 'occurs!');
    }

    if (userEP) {
        // toast('user created successfully!')
        // console.log(userEP, 'founded!');
        navigate('/home')
    }

    // if (!userEP) {
    //     toast('error in creating user!')
    //     console.log('user not found');
    // }

    return (
        <div>
            <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md mx-auto">
                <h2 className='text-3xl mb-4'>Welcome to registration form!</h2>
                {
                    (loadingEP || updating) && <Loading></Loading>
                }
                {
                    errorEP && <div className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
                        <span className="font-medium">Error alert!</span> {errorEP}.
                    </div>
                }
                <form onSubmit={handleSignup}>
                    <div>
                        <div className="form-group mb-6">
                            <input type="text" className="form-control
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
                                aria-describedby="emailHelp123" placeholder="Full name"
                                name='name'
                            />
                        </div>
                    </div>
                    <div className="form-group mb-6">
                        <input type="email" className="form-control block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput125"
                            placeholder="Email address"
                            name='email'
                        />
                    </div>
                    <div className="form-group mb-6">
                        <input type="password" className="form-control block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput126"
                            placeholder="Password"
                            name='password'
                        />
                    </div>
                    <div className="form-group form-check text-center mb-6">
                        <p className="text-gray-800 mt-6 text-center">Not a member?
                            <Link className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out ml-2" to={'/login'}>Login</Link>
                        </p>
                    </div>
                    <input type="submit" value="Sign up" className="
                        w-full
                        px-6
                        py-2.5
                        bg-blue-600
                        text-white
                        font-medium
                        text-xs
                        leading-tight
                        uppercase
                        rounded
                        shadow-md
                        hover:bg-blue-700 hover:shadow-lg
                        focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                        active:bg-blue-800 active:shadow-lg
                        transition
                        duration-150
                        ease-in-out" />
                </form>
            </div>
        </div>
    );
};

export default Register;