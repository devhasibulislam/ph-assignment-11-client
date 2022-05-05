import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useMyItems from '../../hooks/useMyItems';
import useProducts from '../../hooks/useProducts';

const Inventory = () => {
    const { id } = useParams();
    const [products] = useProducts();
    const [myItems] = useMyItems();
    const [stock, setStock] = useState(0);

    const [updateForm, setUpdateForm] = useState(false);

    const matchedProducts = products.filter(product => product?._id === id);
    const matchedItems = myItems.filter(item => item?._id === id);
    let finalMatch, slug;

    if (matchedItems.length > 0) {
        finalMatch = matchedItems;
        slug = 'myItems';
    }
    else {
        finalMatch = matchedProducts;
        slug = 'product';
    }

    const handleUpdateInfo = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const price = event.target.price.value;
        const img = event.target.photo.value;

        const product = { img, name, price };

        axios.put(`https://secure-woodland-83351.herokuapp.com/${slug}/${id}`, product)
            .then(res => {
                toast('item updated!');
                event.target.reset();
            })
    };

    const handleItemReduce = () => {
        const qty = parseInt(finalMatch[0]?.qty) - 1;
        const product = { qty };

        if (product.qty > 0) {
            axios.put(`https://secure-woodland-83351.herokuapp.com/${slug}/${id}`, product)
                .then(res => {
                    toast('item delivered!');
                })
        }
    };

    const handleItemIncrease = () => {
        let qty, product;
        if (stock > 0) {
            qty = parseInt(finalMatch[0]?.qty) + parseInt(stock);
            product = { qty };

            axios.put(`https://secure-woodland-83351.herokuapp.com/${slug}/${id}`, product)
                .then(res => {
                    toast('item restocked!');
                })
        } else {
            toast('Negative or Empty input not allow!!');
        }
    };

    return (
        <div>
            <div className="antialiased bg-gray-200 text-gray-900 font-sans p-6">
                <div className="container mx-auto">
                    <div className="flex flex-wrap justify-center -mx-4">
                        <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
                            <div className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                                <div className="relative pb-48 overflow-hidden">
                                    <img className="absolute inset-0 h-full w-full object-cover object-top" src={finalMatch[0]?.img} alt="" />
                                </div>
                                <div className="p-4">
                                    <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">{finalMatch[0]?._id}</span>
                                    <h2 className="mt-2 mb-2  font-bold">{finalMatch[0]?.name}</h2>
                                    <p className="text-sm">{finalMatch[0]?.desc}</p>
                                    <div className="mt-3 flex items-center">
                                        <span className="text-sm font-semibold">Price:</span>&nbsp;<span className="font-bold text-xl">{finalMatch[0]?.price}</span>&nbsp;<span className="text-sm font-semibold">$</span>
                                    </div>
                                </div>
                                <div className="p-4 border-t border-b text-xs text-gray-700">
                                    <span className="flex items-center mb-1">
                                        <i className="fa fa-clock-o mr-1" aria-hidden="true"></i> <b className='mr-1'>QTY:</b><span className='bg-indigo-500 text-white rounded p-1'>{finalMatch[0]?.qty}</span>
                                    </span>
                                    <span className="flex items-center">
                                        <i className="fa fa-unlock mr-1" aria-hidden="true"></i> <b className='mr-1'>SUPPLIER:</b>{finalMatch[0]?.supplier}
                                    </span>
                                </div>
                                <div className="p-4 flex items-center text-sm text-gray-600"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 fill-current text-yellow-500">
                                    <path
                                        d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z">
                                    </path>
                                </svg><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current text-yellow-500">
                                        <path
                                            d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z">
                                        </path>
                                    </svg><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current text-yellow-500">
                                        <path
                                            d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z">
                                        </path>
                                    </svg><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current text-yellow-500">
                                        <path
                                            d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z">
                                        </path>
                                    </svg><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current text-gray-400">
                                        <path
                                            d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z">
                                        </path>
                                    </svg><span className="ml-2">Top Rated</span>
                                </div>
                            </div>
                            <div className='mt-4 border-t-2 border-black flex justify-between'>
                                <button className="text-sky-500 border border-sky-500 hover:bg-sky-500 hover:text-white active:bg-sky-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 mt-4 ease-linear transition-all duration-150" type="button"
                                    onClick={() => {
                                        setUpdateForm(!updateForm);
                                    }}
                                >
                                    Update item
                                </button>
                                <button className="text-red-500 border border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 mt-4 ease-linear transition-all duration-150" type="button"
                                    onClick={handleItemReduce}
                                >
                                    Deliver item
                                </button>
                            </div>
                            <div className="my-6">
                                <input name='stock' type="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-center" placeholder="Enter Stock Number" required onChange={e => setStock(e.target.value)} />
                                <button className="text-emerald-500 border border-emerald-500 hover:bg-emerald-500 hover:text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 block w-full mt-4" type="button"
                                    onClick={handleItemIncrease}
                                >
                                    Restock item
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* update form stay here! */}
                    {
                        updateForm
                        &&
                        <form className=' w-2/4 mx-auto' onSubmit={handleUpdateInfo}>
                            <div className="mb-6">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">New name</label>
                                <input name='name' type="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={`i.e. ${finalMatch[0]?.name}`} required />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">New price</label>
                                <input name='price' type="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={`i.e. $ ${finalMatch[0]?.price}`} required />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="photo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">New photo url</label>
                                <input name='photo' type="photo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={`i.e. ${finalMatch[0]?.img}`} required />
                            </div>
                            <input type="submit" value="Update info" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer" style={{ display: 'block', width: '100%' }} />
                        </form>
                    }
                </div>
            </div>
        </div>
    );
};

export default Inventory;