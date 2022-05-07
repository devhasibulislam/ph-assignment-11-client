import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <footer className="text-center text-white bg-[#caced1] mt-12">
            <div className="container p-6 mx-auto hidden lg:block md:block">
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

            <div className='container mx-auto my-4 bg-white rounded-xl py-4 flex justify-center items-center'>
                <h2 className='text-black mr-4 hidden lg:block md:block'>Connect with me there:</h2>
                <div className='grid grid-cols-5'>
                    <SocialIcon target={'_blank'} className='mx-2 hover:scale-[1.2] transition duration-200 ease-in-out' url="https://facebook.com/hasibulislam999.dev/"></SocialIcon>
                    <SocialIcon target={'_blank'} className='mx-2 hover:scale-[1.2] transition duration-200 ease-in-out' url="https://stackoverflow.com/users/16820211/hasibul-islam"></SocialIcon>
                    <SocialIcon target={'_blank'} className='mx-2 hover:scale-[1.2] transition duration-200 ease-in-out' url="https://linkedin.com/in/hasibulislam999/"></SocialIcon>
                    <SocialIcon target={'_blank'} className='mx-2 hover:scale-[1.2] transition duration-200 ease-in-out' url="https://twitter.com/hasibulislam999"></SocialIcon>
                    <SocialIcon target={'_blank'} className='mx-2 hover:scale-[1.2] transition duration-200 ease-in-out' url='https://github.com/hasibulislam999'></SocialIcon>
                </div>
            </div>

            <div className="text-center p-4 bg-black text-white">
                © {year} All right reserved.
                <span className="text-white ml-1">We are there above imaged country!!</span>
            </div>
        </footer>
    );
};

export default Footer;