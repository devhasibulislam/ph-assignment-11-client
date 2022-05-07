import React, { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import myself from './myself.png';

const About = () => {
    const [readMore, setReadMore] = useState(false);
    return (
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 container mx-auto my-5'>
            <div className='px-4 w-full'>
                <h1 className='text-6xl'>
                    <span className='text-blue-500'>
                        <Typewriter
                            words={["Hasibul Islam"]}
                            loop={0}
                            cursor={true}
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </h1>
                <article>
                    <p className='my-8'>
                        I want to build a JavaScript library like: React, Vue or Angular e.t.c. As a web developer, my core ambition is now make other developers life easy and flow less so that they can envoy with their own joy and make other happy. Even want to create top level site which can breakthrough others but contribution able interest. Contentional website is my target which I can refill soon. I'm aware about it.
                    </p>
                    {
                        readMore
                            ?
                            <button className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={() => setReadMore(!readMore)}>Read Less</button>
                            :
                            <button className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={() => setReadMore(!readMore)}>Read More</button>
                    }
                    {
                        readMore
                            ?
                            <ol className='mt-3'>
                                <li>Stay persistance with my goal</li>
                                <li>Convenience studiedly strategy</li>
                                <li>Turn leisure time in convention which is ultimatum to acheive my goal</li>
                                <li>Never give up prodigy</li>
                                <li>Listen more knowledgeable person than me</li>
                            </ol>
                            :
                            ''
                    }
                </article>
            </div>
            <div className='w-100 lg:p-0 p-4'>
                <img src={myself} alt="myself" className='max-w-full lg:w-1/2 mx-auto rounded-xl shadow-xl' />
            </div>
        </div>
    );
};

export default About;