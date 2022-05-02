import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <footer className="text-center text-white bg-[#caced1] mt-12">
            <div className="container p-6 mx-auto">
                <div className="grid lg:grid-cols-6 md:grid-cols-3 gap-4">
                    <div className="lg:mb-0 mb-6">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp"
                            className="w-full rounded-md shadow-lg"
                            alt=''
                        />
                    </div>
                    <div className="lg:mb-0 mb-6">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/new/fluid/city/111.webp"
                            className="w-full rounded-md shadow-lg"
                            alt=''
                        />
                    </div>
                    <div className="lg:mb-0 mb-6">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/new/fluid/city/112.webp"
                            className="w-full rounded-md shadow-lg"
                            alt=''
                        />
                    </div>
                    <div className="lg:mb-0 mb-6">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/new/fluid/city/114.webp"
                            className="w-full rounded-md shadow-lg"
                            alt=''
                        />
                    </div>
                    <div className="lg:mb-0 mb-6">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/new/fluid/city/115.webp"
                            className="w-full rounded-md shadow-lg"
                            alt=''
                        />
                    </div>
                    <div className="lg:mb-0 mb-6">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/new/fluid/city/116.webp"
                            className="w-full rounded-md shadow-lg"
                            alt=''
                        />
                    </div>
                </div>
            </div>

            <div className="text-center p-4 bg-[rgba(0, 0, 0, 0.2)]">
                © {year} All right reserved.
                <span className="text-black ml-1">We are there above imaged country!!</span>
            </div>
        </footer>
    );
};

export default Footer;