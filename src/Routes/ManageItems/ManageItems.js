import axios from "axios";
import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import PageTitle from "../../Pages/PageTitle/PageTitle";
import Loading from "../../Shared/Loading/Loading";
import Card from "../Card/Card";

const ManageItems = () => {
  const [totalProductCount, setTotalProductCount] = useState(0);
  const [activePage, setActivePage] = useState(0);
  const [viewCount, setViewCount] = useState(10);
  const [products, setProducts] = useState([]);
  const [countAllProduct, setCountAllProduct] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://warehouse-management-wm-server.onrender.com/product?pageNumber=${activePage}&viewItems=${viewCount}`
      )
      .then((res) => {
        setProducts(res?.data);
        setLoading(false);
      });
  }, [activePage, viewCount]);

  useEffect(() => {
    axios.get("https://warehouse-management-wm-server.onrender.com/productCount").then((res) => {
      const overallNumbers = res?.data?.count;
      const defaultTen = Math.ceil(overallNumbers / viewCount);
      setTotalProductCount(defaultTen);
      setCountAllProduct(overallNumbers);
    });
  }, [viewCount]);

  return (
    <div className="py-4 md:px-2 px-2 lg:px-0">
      <PageTitle title={"warehouse - Manage Items"}></PageTitle>
      <h1 className="text-center text-6xl py-4">
        # Our
        <span className="text-blue-600 ml-2">
          <Typewriter
            words={["Products"]}
            loop={false}
            cursor={true}
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
        {loading && (
          <span className="ml-8">
            <Loading></Loading>
          </span>
        )}
      </h1>
      <hr className="w-36 mx-auto border-t-4 border-[#00a1e5]" />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 max-w-7xl mx-auto gap-y-12 md:gap-x-8 py-12 justify-items-center lg:px-4 md:px-4">
        {products
          .map((product) => (
            <Card
              key={product._id}
              product={product}
              enableDelete={false}
            ></Card>
          ))
          .reverse()}
      </div>
      <div className="py-2">
        <nav className="block">
          <ul className="flex pl-0 rounded list-none flex-wrap justify-center">
            {[...Array(totalProductCount).keys()]
              .map((productsPageNumber) => (
                <li key={productsPageNumber}>
                  <span
                    className={
                      productsPageNumber === activePage
                        ? "first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-pink-500 text-white bg-pink-500 cursor-pointer"
                        : "first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-pink-500 bg-white text-pink-500 cursor-pointer hover:scale-110 transition-all"
                    }
                    onClick={() => setActivePage(productsPageNumber)}
                  >
                    {productsPageNumber + 1}
                  </span>
                </li>
              ))
              .reverse()}
          </ul>
          <div className="flex justify-center">
            <div className="my-3 xl:w-96">
              <select
                onChange={(e) => setViewCount(e.target.value)}
                className="
                                    text-center
                                    form-select appearance-none
                                    block
                                    w-full
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding bg-no-repeat
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                "
                aria-label="Default select example"
              >
                <option value="10">
                  Selected default 10 or how much wanna see?
                </option>
                <option value="15">Fifteen</option>
                <option value="20">Twenty</option>
                <option value="30">Thirty</option>
                <option value={countAllProduct}>View All</option>
              </select>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default ManageItems;
