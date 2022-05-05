import React, { useEffect, useState } from 'react';
import auth from '../../firebase.init';
import Card from '../../Routes/Card/Card';
import { useAuthState } from 'react-firebase-hooks/auth';
import axios from 'axios';

const Order = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get(`https://secure-woodland-83351.herokuapp.com/order?email=${user?.email}`)
            .then(res => setOrders(res?.data))
    }, [user]);

    return (
        <div className='bg-gray-400 py-4 md:px-2 px-2 lg:px-0'>
            <h1 className='text-center text-6xl py-4'># Your Products</h1>
            <hr className='w-36 mx-auto border-t-4 border-[#00a1e5]' />
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 max-w-7xl mx-auto gap-y-12 md:gap-x-8 py-12'>
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

export default Order;