import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const ManageItems = () => {
    const [totalProductCount, setTotalProductCount] = useState(0);
    const [activePage, setActivePage] = useState(0);
    const [viewCount, setViewCount] = useState(10);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/product?pageNumber=${activePage}&viewItems=${viewCount}`)
            .then(res => setProducts(res?.data))
    }, [activePage, viewCount]);

    useEffect(() => {
        axios.get('http://localhost:5000/productCount')
            .then(res => {
                const overallNumbers = res?.data?.count;
                const defaultTen = Math.ceil(overallNumbers / viewCount);
                setTotalProductCount(defaultTen);
            })
    }, [viewCount]);

    return (
        <div className='bg-gray-400 py-4 md:px-2 px-2 lg:px-0'>
            <h1 className='text-center text-6xl py-4'># Our Services</h1>
            <hr className='w-36 mx-auto border-t-4 border-[#00a1e5]' />
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 max-w-7xl mx-auto gap-y-12 md:gap-x-8 py-12'>
                {
                    products.map(product => <Card
                        key={product._id}
                        product={product}
                        enableDelete={false}
                    ></Card>)
                }
            </div>
            <div className="py-2">
                <nav className="block">
                    <ul className="flex pl-0 rounded list-none flex-wrap justify-center">
                        {
                            [...Array(totalProductCount).keys()]
                                .map(
                                    productsPageNumber => <li
                                        key={productsPageNumber}
                                    >
                                        <span className={
                                            productsPageNumber === activePage
                                                ?
                                                "first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-pink-500 text-white bg-pink-500 cursor-pointer"
                                                :
                                                "first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-pink-500 bg-white text-pink-500 cursor-pointer"
                                        }
                                            onClick={() => setActivePage(productsPageNumber)}
                                        >
                                            {productsPageNumber + 1}
                                        </span>
                                    </li>
                                )
                        }
                    </ul>
                    <div className="flex justify-center">
                        <div className="my-3 xl:w-96">
                            <select
                                onChange={(e) => setViewCount(e.target.value)}
                                className="
                                    text-center
                                    form-select appearance-none
                                    block
                                    w-full
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding bg-no-repeat
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                "
                                aria-label="Default select example">
                                <option value="10">Selected default 10 or how much wanna see?</option>
                                <option value="15">Fifteen</option>
                                <option value="20">Twenty</option>
                                <option value="30">Thirty</option>
                            </select>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default ManageItems;