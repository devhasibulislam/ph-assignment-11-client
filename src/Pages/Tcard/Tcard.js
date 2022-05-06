import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import { useNavigate } from 'react-router-dom';

const Tcard = (props) => {
    const { _id, name, img, price, qty, email, supplier } = props?.item;
    const [toggler, setToggler] = useState(false);
    const navigate = useNavigate();

    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                <span className='cursor-pointer' onClick={() => navigate(`/inventory/${_id}`)}>{_id}</span>
            </th>
            <td className="px-6 py-4">
                {email}
            </td>
            <td className="px-6 py-4">
                <img src={img} alt="product-icon" className='w-8 rounded cursor-pointer' onClick={() => setToggler(!toggler)} />
                <FsLightbox
                    toggler={toggler}
                    sources={[img]}
                />
            </td>
            <td className="px-6 py-4">
                {name}
            </td>
            <td className="px-6 py-4 font-bold">
                ${price}
            </td>
            <td className="px-6 py-4">
                {supplier}
            </td>
            <td className="px-6 py-4">
                {qty}
            </td>
        </tr>
    );
};

export default Tcard;