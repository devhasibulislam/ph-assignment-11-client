import React, { useState } from 'react';
import useMyItems from '../../hooks/useMyItems';
import useProducts from '../../hooks/useProducts';
import Loading from '../../Shared/Loading/Loading';
import Tcard from '../Tcard/Tcard';

const TableView = () => {
    const [myItems] = useMyItems();
    const [products] = useProducts();
    const [tableOption, setTableOption] = useState('default');

    const visibleVar = tableOption === 'default' ? products : myItems;
    // console.log(visibleVar);

    return (
        <div className='container mx-auto'>
            <h1 className='text-center text-4xl my-3 font-bold'>{
                tableOption === 'custom'
                    ?
                    'Overall custom products for all users'
                    :
                    'Default products shown as single user'
            } {
                (myItems.length === 0)
                &&
                <span className='ml-8'>
                    <Loading></Loading>
                </span>
            }</h1>
            <hr className='w-36 mx-auto border-t-4 mb-8 border-[#00a1e5] rounded' />
            <div className="flex justify-center mb-4">
                <div className="mb-3 xl:w-96">
                    <select className="form-select appearance-none
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
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example"
                        onChange={e => setTableOption(e.target.value)}
                    >
                        <option value="default" selected>All products shown as single user</option>
                        <option value="custom">All user with their custom product</option>
                    </select>
                </div>
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Product ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                User Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product Image
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Supplier
                            </th>
                            <th scope="col" className="px-6 py-3">
                                QTY
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            visibleVar.map(item => <Tcard
                                key={item._id}
                                item={item}
                            ></Tcard>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default TableView;