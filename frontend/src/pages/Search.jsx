import React from "react";
import Layout from "../components/layout/Layout";
import { useSearch } from "../context/search";
import { Link } from "react-router-dom";
const Search = () => {
   window.scrollTo(0, 0)
   const [values, setValues] = useSearch();
   return (
      <Layout title={"Search results"}>
         <div className='max-w-screen-xl lg:px-6 px-4 sm:py-16 py-8 mx-auto'>
            <div className='px-4 mx-auto max-w-screen-sm text-center lg:px-6 mb-8 lg:mb-16'>
               <h2 className='mb-4 text-4xl tracking-tight font-extrabold'>Search results</h2>
            </div>

            <div className="p-10 border-2 border-gray-200 border-dashed rounded-md">
               <h6>
                  {values?.results.length < 1 ?
                     (<>
                        <div className="mx-auto max-w-screen-xl text-center">
                           <h1 className="mb-4 text-8xl tracking-tight font-extrabold lg:text-6xl text-primary-600 ">Products not found</h1>
                           <Link to="/" className="inline-flex hover:text-white text-black hover:bg-black bg-white font-medium rounded-xl border-2 border-black border-solid text-xl px-6 py-3.5 text-center my-4">Back to Homepage</Link>
                        </div>
                     </>)
                     : (<>
                        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
                           {values?.results.map((p) => (
                              <div className="col-span-1 justify-self-center w-full" key={p._id}>
                                 <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow h-full mx-auto sm:w-3/4 lg:w-full w-full">
                                    <Link to={`/product/${p.slug}`} className="h-80">
                                       <img className="mx-auto hover:opacity-80 h-96 w-full" src={`/api/v1/product/get-product-photo/${p._id}`} alt="Product-img" />
                                    </Link>
                                    <div className="px-5 pb-5">
                                       <Link to={`/product/${p.slug}`}>
                                          <h5 className="hover:opacity-80 hover:text-blue-700 mt-3 text-xl md:text-2xl font-semibold tracking-tight text-gray-900">{p.name.charAt(0).toUpperCase() + p.name.slice(1)}</h5>
                                       </Link>
                                       <h5 className='text-lg mt-1 text-gray-600'>{p.description.charAt(0).toUpperCase() + p.description.substring(0, 20).slice(1) + "..."}</h5>
                                       <div className="flex items-center justify-between mt-3 ">
                                          <span className="lg:text-2xl  font-bold text-gray-900 dark:text-white">${p.price}</span>
                                          <Link to="#" className="text-white bg-pink-500 hover:bg-pink-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-4 py-2.5 text-center">
                                             <i className="fa-solid fa-cart-plus fa-lg mr-1"></i>
                                             Add to cart
                                          </Link>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </>)}
               </h6>
            </div>
         </div>
      </Layout >
   );
};

export default Search;