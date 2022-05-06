import { Typewriter } from 'react-simple-typewriter';
import useBlogs from '../../hooks/useBlogs';
import PageTitle from '../../Pages/PageTitle/PageTitle';
import Loading from '../../Shared/Loading/Loading';
import Bcard from '../Bcard/Bcard';

const Blog = () => {
    const [blogs] = useBlogs();
    return (
        <div>
            <PageTitle title={'warehouse - Blog'}></PageTitle>
            <h2 className='text-center text-5xl my-12'>Following are some frequently asked <span className='text-red-500'>
                <Typewriter
                    words={["question's answer"]}
                    loop={0}
                    cursor={true}
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
                {
                (blogs.length === 0)
                &&
                <h1 className='ml-8'>
                    <Loading></Loading>
                </h1>
            }</span></h2>
            <section className="text-gray-600 body-font">
                <div className="container px-5 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {
                            blogs.map(blog => <Bcard
                                key={blog._id}
                                blog={blog}
                            ></Bcard>)
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;