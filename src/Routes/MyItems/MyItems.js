import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import auth from '../../firebase.init';
import PageTitle from '../../Pages/PageTitle/PageTitle';
import Loading from '../../Shared/Loading/Loading';
import Card from '../Card/Card';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if (user?.providerData[0]?.providerId !== 'google.com') {
            const getOrders = async () => {
                const url = `https://secure-woodland-83351.herokuapp.com/order?email=${user?.email}`;
                try {
                    const { data } = await axios.get(url, {
                        headers: {
                            authorization: `Bearer ${localStorage.getItem('token')}`
                        }
                    });
                    setOrders(data);
                    setLoading(false);
                } catch (error) {
                    console.log(error.message);
                    if (error.response.status === 401 || error.response.status === 403) {
                        signOut(auth);
                        navigate('/login');
                    }
                }
            };
            getOrders();
        } else {
            const getOrders = async () => {
                const url = `https://secure-woodland-83351.herokuapp.com/item?email=${user?.email}`;
                const { data } = await axios.get(url);
                setOrders(data);
                setLoading(false);
            };
            getOrders();
        }
    }, [user, orders, navigate]);

    return (
        <div className='py-4 md:px-2 px-2 lg:px-0'>
            <PageTitle title={'warehouse - My Items'}></PageTitle>
            <h1 className='text-center text-6xl py-4'># Your
                <span className="text-blue-600 ml-2">
                    <Typewriter
                        words={["Products"]}
                        loop={false}
                        cursor={true}
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </span>
                {
                    loading
                    &&
                    <span className='ml-8'>
                        <Loading></Loading>
                    </span>
                }</h1>
            <hr className='w-36 mx-auto border-t-4 border-[#00a1e5]' />
            {
                orders.length === 0
                &&
                <div id="alert-2" className="container mx-auto mt-16 flex p-4 mb-4 bg-red-100 rounded-lg dark:bg-red-200" role="alert">
                    <svg className="flex-shrink-0 w-5 h-5 text-red-700 dark:text-red-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
                    <div className="ml-3 text-sm font-medium text-red-700 dark:text-red-800">
                        <Typewriter
                            words={["Hey, dude! You don't have any custom product included here!"]}
                            loop={false}
                            cursor={true}
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </div>
                    <Link to={'/addItems'} className="ml-auto -mx-1.5 -my-1.5 bg-red-100 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300 flex items-center">
                        <span className='font-bold'>Click to add</span>
                        <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </Link>
                </div>
            }
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 max-w-7xl mx-auto gap-y-12 md:gap-x-8 py-12 justify-items-center lg:px-4 md:px-4'>
                {
                    orders.map(order => <Card
                        key={order._id}
                        product={order}
                        enableDelete={true}
                    ></Card>)
                }
            </div>
        </div>
    );
};

export default MyItems;