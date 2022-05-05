import React from 'react';
import useMyItems from '../../hooks/useMyItems';
import Loading from '../../Shared/Loading/Loading';
import Tcard from '../Tcard/Tcard';

const TableView = () => {
    const [myItems] = useMyItems();
    return (
        <div className='container mx-auto'>
            <h1 className='text-center text-4xl my-3 font-bold'>Overall view products {
                (myItems.length === 0)
                &&
                <span className='ml-8'>
                    <Loading></Loading>
                </span>
            }</h1>
            <hr className='w-36 mx-auto border-t-4 mb-8 border-[#00a1e5] rounded' />
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Product ID
                            </th>
                            <th scope="col" class="px-6 py-3">
                                User Email
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Product Image
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Product Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Supplier
                            </th>
                            <th scope="col" class="px-6 py-3">
                                QTY
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myItems.map(item => <Tcard
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