import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const Reset = () => {
    const [
        sendPasswordResetEmail,
        sending,
        error
    ] = useSendPasswordResetEmail(auth);

    const handleReset = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        await sendPasswordResetEmail(email);

        toast('reset info sent to email!');
    };
    return (
        <div>
            <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm mx-auto">
                <h2 className='text-3xl'>Welcome to reset form!</h2>
                {sending && <Loading></Loading>}
                {
                    error && <div className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
                        <span className="font-medium">Error alert!</span> {error}.
                    </div>
                }
                <form onSubmit={handleReset}>
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
                    <input type="submit" value="Reset" className="
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
                </form>
            </div>
        </div>
    );
};

export default Reset;