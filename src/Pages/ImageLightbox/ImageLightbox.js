import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';

function ImageLightbox() {
    // if toggler is updated when lightbox is closed it will open it
    // if toggler is updated when lightbox is opened it will close it
    const [toggler, setToggler] = useState(false);

    return (
        <>
            {/* <button onClick={() => setToggler(!toggler)}>
                Toggle Lightbox
            </button> */}
            <img src="https://i.ibb.co/1v2bbSb/img-10.jpg" alt="" className='w-12' onClick={() => setToggler(!toggler)} />
            <FsLightbox
                toggler={toggler}
                sources={[
                    'https://i.ibb.co/1v2bbSb/img-10.jpg'
                ]}
            />
        </>
    );
}

export default ImageLightbox;