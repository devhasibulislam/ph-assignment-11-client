import React from 'react';
import useMyItems from '../../hooks/useMyItems';
import Card from '../Card/Card';

const MyItems = () => {
    const [myItems] = useMyItems();
    return (
        <div className='bg-gray-400 py-4'>
            <h1 className='text-center text-6xl py-4'># Added items shown here!</h1>
            <hr className='w-36 mx-auto border-t-4 border-[#00a1e5]' />
            <div className='grid grid-cols-3 max-w-7xl mx-auto gap-y-12 py-12'>
                {
                    myItems.map(product => <Card
                        key={product._id}
                        product={product}
                    ></Card>)
                }
            </div>
        </div>
    );
};

export default MyItems;