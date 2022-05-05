import useBlogs from '../../hooks/useBlogs';
import PageTitle from '../../Pages/PageTitle/PageTitle';
import Bcard from '../Bcard/Bcard';

const Blog = () => {
    const [blogs] = useBlogs();
    return (
        <div>
            <PageTitle title={'warehouse - Blog'}></PageTitle>
            <h2 className='text-center text-5xl my-12'>Following are some frequently asked <span className='text-red-500'>question's answer</span></h2>
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