import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Team = () => {
    return (
        <div>
            <div className="container my-24 px-6 mx-auto">

                <section className="mb-32 text-center lg:text-left">
                    <h2 className="text-3xl font-bold mb-12 text-center">
                        Meet our <u className="text-blue-600">
                            <Typewriter
                                words={["team members"]}
                                loop={0}
                                cursor={true}
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </u>
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6 xl:gap-x-12">
                        <div className="mb-6 lg:mb-0">
                            <div className="relative block rounded-lg shadow-lg bg-white p-6">
                                <div className="lg:flex flex-row items-center">
                                    <div className="grow-0 shrink-0 basis-auto w-full lg:w-5/12 lg:pr-6">
                                        <img
                                            src="https://mdbootstrap.com/img/new/avatars/2.jpg"
                                            alt="Trendy Pants and Shoes"
                                            className="w-full rounded-md mb-6 lg:mb-0"
                                        />
                                    </div>
                                    <div className="grow-0 shrink-0 basis-auto w-full lg:w-7/12">
                                        <h5 className="text-lg font-bold mb-2">Darren Randolph</h5>
                                        <p className="text-gray-500 mb-4">Marketing expert</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-6 lg:mb-0">
                            <div className="relative block rounded-lg shadow-lg bg-white p-6">
                                <div className="lg:flex flex-row items-center">
                                    <div className="grow-0 shrink-0 basis-auto w-full lg:w-5/12 lg:pr-6">
                                        <img
                                            src="https://mdbootstrap.com/img/new/avatars/4.jpg"
                                            alt="Trendy Pants and Shoes"
                                            className="w-full rounded-md mb-6 lg:mb-0"
                                        />
                                    </div>
                                    <div className="grow-0 shrink-0 basis-auto w-full lg:w-7/12">
                                        <h5 className="text-lg font-bold mb-2">Maliha Welch</h5>
                                        <p className="text-gray-500 mb-4">Web designer</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-6 lg:mb-0">
                            <div className="relative block rounded-lg shadow-lg bg-white p-6">
                                <div className="lg:flex flex-row items-center">
                                    <div className="grow-0 shrink-0 basis-auto w-full lg:w-5/12 lg:pr-6">
                                        <img
                                            src="https://mdbootstrap.com/img/new/avatars/12.jpg"
                                            alt="Trendy Pants and Shoes"
                                            className="w-full rounded-md mb-6 lg:mb-0"
                                        />
                                    </div>
                                    <div className="grow-0 shrink-0 basis-auto w-full lg:w-7/12">
                                        <h5 className="text-lg font-bold mb-2">Avaya Hills</h5>
                                        <p className="text-gray-500 mb-4">Copywriter</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default Team;