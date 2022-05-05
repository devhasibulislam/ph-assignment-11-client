import React from 'react';

const Tcard = (props) => {
    const { _id, name, img, price, qty, email, supplier } = props.item;
    return (
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                {_id}
            </th>
            <td class="px-6 py-4">
                {email}
            </td>
            <td class="px-6 py-4">
                <img src={img} alt="product-icon" className='w-8 rounded' />
            </td>
            <td class="px-6 py-4">
                {name}
            </td>
            <td class="px-6 py-4 font-bold">
                {price}
            </td>
            <td class="px-6 py-4">
                {supplier}
            </td>
            <td class="px-6 py-4">
                {qty}
            </td>
        </tr>
    );
};

export default Tcard;