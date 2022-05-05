import React from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import PageTitle from '../PageTitle/PageTitle';

const Register = () => {
    const [user] = useAuthState(auth)
    // EP => email & password
    // UP => updating profile

    const [
        updateProfile,
        updating,
        errorUP
    ] = useUpdateProfile(auth);

    const [
        createUserWithEmailAndPassword,
        userEP,
        loadingEP,
        errorEP,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [
        signInWithGoogle,
        userG,
        loadingG,
        errorG
    ] = useSignInWithGoogle(auth);

    const navigate = useNavigate();

    const handleSignup = async (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const photo = event.target.photo.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name, photoURL: photo });

        toast('registration success!');
    };

    if (userEP || userG || user) {
        navigate('/home');
    }

    return (
        <div>
            <PageTitle title={'warehouse - Registration'}></PageTitle>
            <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md mx-auto">
                <h2 className='text-3xl mb-4'>Welcome to registration form!</h2>
                {
                    (loadingEP || updating || loadingG) && <Loading></Loading>
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
                {
                    errorUP && <div className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
                        <span className="font-medium">Error alert!</span> {errorUP?.message}.
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
                                aria-describedby="emailHelp123" placeholder="Enter full name"
                                name='name'
                                required
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
                            placeholder="Enter email address"
                            name='email'
                            required
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
                            placeholder="Enter password"
                            name='password'
                            required
                        />
                    </div>
                    <div className="form-group mb-6">
                        <input type="text" className="form-control block
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
                            placeholder="Enter display photo url (optional)"
                            name='photo'
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
                        ease-in-out"
                        title='by clicking sign up, you are accepting with our terms and conditions'
                    />
                </form>
                <hr className='my-4' />
                <p className="form-check-label text-gray-800 text-center">
                    or, you can try
                    <button className="btn btn-lg btn-block btn-primary bg-red-600 hover:bg-red-700  w-full py-2 text-white rounded mt-2"
                        type="submit" onClick={() => signInWithGoogle()}><i className="fa fa-google" aria-hidden="true"></i> Sign up with google</button>
                </p>
            </div>
        </div>
    );
};

export default Register;