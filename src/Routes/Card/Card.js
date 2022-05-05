import React from 'react';
import { Link } from 'react-router-dom';
import { TrashIcon } from '@heroicons/react/outline';
import axios from 'axios';
import { toast } from 'react-toastify';

const Card = ({ product, enableDelete }) => {
    const { _id, name, img, desc, price, qty, supplier } = product;

    const handleDeleteProduct = (id) => {
        const yes = window.confirm('Want to delete this item?');
        if (yes) {
            axios.delete(`https://secure-woodland-83351.herokuapp.com/myItems/${id}`)
                .then(res => {
                    console.log(res.data);
                    toast('item deleted!');
                    window.location.reload();
                })
        }
    };
    return (

        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 relative">
            <img className="rounded-t-lg" src={img} alt="product-img" />
            <div className="p-5 absolute bottom-0 left-0 w-full">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white bg-white">{name}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{desc}</p>
                <hr className='my-4' />
                <div className='flex justify-between items-center my-4'>
                    <p className='flex items-center'>$<span className='ml-1 text-2xl text-green-600 bg-white px-2'>{price}</span></p>
                    <p className='flex items-center bg-slate-300 px-2 rounded-3xl'>QTY: <span className='ml-1 text-2xl text-indigo-600'>{qty}</span></p>
                </div>
                <h5 className="mb-2 text-xl tracking-tight text-gray-900 dark:text-white flex items-center"><span className='text-sm mr-1'>Supplier: </span>{supplier}</h5>
                <div className='flex items-center justify-between mt-4'>
                    <Link to={`/inventory/${_id}`} className="mt-0 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Manage Stock
                        <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </Link>
                    {
                        enableDelete && <TrashIcon onClick={() => handleDeleteProduct(_id)} className="text-white bg-red-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-14"></TrashIcon>
                    }
                </div>
            </div>
        </div>

    );
};

export default Card;