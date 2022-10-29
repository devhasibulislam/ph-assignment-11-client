import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import axios from 'axios';
import PageTitle from '../PageTitle/PageTitle';

const Login = () => {
    const [user] = useAuthState(auth);

    // EP => email & password
    // G => google
    const [
        signInWithEmailAndPassword,
        userEP,
        loadingEP,
        errorEP,
    ] = useSignInWithEmailAndPassword(auth);

    const [
        signInWithGoogle,
        userG,
        loadingG,
        errorG
    ] = useSignInWithGoogle(auth);

    const [grayout, setGrayout] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";

    const handleLogin = async (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        await signInWithEmailAndPassword(email, password);
        const { data } = await axios.post('https://warehouse-management-wm-server.onrender.com/login', { email });
        localStorage.setItem('token', data.token);
        // navigate(from, { replace: true });

        event.target.reset();
    };

    const handleSignInWithGoogle = () => {
        signInWithGoogle();
    };

    if (userG || user) {
        navigate(from, { replace: true });
    }

    if (userG || userEP) {
        userG && console.log(userG);
        userEP && console.log(userEP);
    }

    return (
        <div>
            <PageTitle title={'warehouse - Login'}></PageTitle>
            <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm mx-auto">
                <h2 className='text-3xl mb-4'>Welcome to login form!</h2>
                {
                    (loadingG || loadingEP) && <Loading></Loading>
                }
                {
                    errorEP && <div className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
                        <span className="font-medium">Error alert!</span> {errorEP?.message}.
                    </div>
                }
                {
                    errorG && <div className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
                        <span className="font-medium">Error alert!</span> {errorG?.message}.
                    </div>
                }
                <form onSubmit={handleLogin}>
                    <div className="form-group mb-6">
                        <label htmlFor="exampleInputEmail2" className="form-label inline-block mb-2 text-gray-700">Email address</label>
                        <input type="email" className="form-control
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
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEmail2"
                            aria-describedby="emailHelp" placeholder="Enter email"
                            name='email'
                            required
                        />
                    </div>
                    <div className="form-group mb-6">
                        <label htmlFor="exampleInputPassword2" className="form-label inline-block mb-2 text-gray-700">Password</label>
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
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputPassword2"
                            placeholder="Enter password"
                            name='password'
                            required
                        />
                    </div>
                    <div className="flex justify-between items-center mb-6">
                        <div className="form-group form-check">
                            <input type="checkbox"
                                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                id="exampleCheck2" onChange={() => setGrayout(!grayout)} />
                            <label className="form-check-label inline-block text-gray-800" htmlFor="exampleCheck2">Remember me</label>
                        </div>
                        <Link to="/reset"
                            className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">Forgot
                            password?</Link>
                    </div>
                    <input type="submit" value="Log in" disabled={!grayout} className="
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
                                ease-in-out"
                    />
                    <p className="text-gray-800 mt-6 text-center">Not a member?
                        <Link className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out ml-2" to={'/register'}>Register</Link>
                    </p>
                </form>
                <hr className='my-4' />
                <button className="btn btn-lg btn-block btn-primary bg-red-600 hover:bg-red-700  w-full py-2 text-white rounded"
                    type="submit" onClick={handleSignInWithGoogle}><i className="fa fa-google" aria-hidden="true"></i> Sign in with google</button>
            </div>

        </div>
    );
};

export default Login;