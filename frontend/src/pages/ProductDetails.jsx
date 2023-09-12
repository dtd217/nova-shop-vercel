import React, { useState, useEffect } from 'react'
import Layout from '../components/layout/Layout'
import { toast } from 'react-toastify';
import axios from 'axios';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useCart } from '../context/cart';

const ProductDetails = () => {
   window.scrollTo(0, 0)
   const params = useParams()
   const [cart, setCart] = useCart();
   const [product, setProduct] = useState({})
   const [relatedProducts, setRelatedProducts] = useState([])

   useEffect(() => {
      if (params?.slug) getProduct()
      // eslint-disable-next-line
   }, [params?.slug])

   //Get all products
   const getProduct = async () => {
      try {
         const { data } = await axios.get(`/api/v1/product/get-product/${params.slug}`);
         setProduct(data?.product);
         getRelatedProducts(data?.product?._id, data?.product?.category._id)
      }
      catch (error) {
         console.log(error);
         toast.error('Something went wrong');
      }
   };

   // Get similar product
   const getRelatedProducts = async (pid, cid) => {
      try {
         const { data } = await axios.get(`/api/v1/product/related-product/${pid}/${cid}`);
         setRelatedProducts(data?.products);
      }
      catch (error) {
         console.log(error);
         toast.error('Something went wrong');
      }
   }

   return (
      <Layout>
         <div className='max-w-screen-xl lg:px-6 px-4 sm:py-16 py-8 mx-auto'>
            <div className='grid lg:auto-rows-min lg:grid-cols-12 lg:gap-8'>
               <div className='lg:col-span-5 lg:col-start-8'>
                  <div className="flex flex-col">
                     <h1 className='text-3xl font-semibold mt-2 uppercase'>{product.name}</h1>
                     <p className='text-2xl font-medium mt-2'>${product.price}</p>
                  </div>
                  <div className="mt-4">
                     <h2 className="rating">Reviews</h2>
                     <div className="flex items-center">
                        <p className='text-lg'>
                           4.0
                           <span className="rating">Out of 5 stars</span>
                        </p>
                        <div className="flex items-center ml-1">
                           <i className="fa-solid fa-star text-yellow-300"></i>
                           <i className="fa-solid fa-star text-yellow-300"></i>
                           <i className="fa-solid fa-star text-yellow-300"></i>
                           <i className="fa-solid fa-star text-yellow-300"></i>
                           <i className="fa-solid fa-star text-gray-300"></i>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="mt-8 lg:mt-0 lg:row-start-1 lg:row-span-3 lg:col-start-1 lg:col-span-7">
                  <h2 className="rating">Images</h2>
                  <div className="lg:gap-8 lg:grid-rows-2 lg:grid-cols-2 grid-cols-1 grid">
                     <img
                        src={`/api/v1/product/get-product-photo/${product._id}`}
                        alt="Back of women's Basic Tee in black."
                        className="lg:row-span-2 lg:col-span-2 rounded-lg w-full h-full" />
                  </div>
               </div>

               <div className="lg:col-span-5 mt-4 lg:mt-0 ">
                  <form>
                     <div>
                        <h2 className='text-xl'>Color</h2>
                        <div
                           className='mt-2'
                           id="headlessui-radiogroup-10"
                           role="radiogroup"
                           aria-labelledby="headlessui-label-5"
                        >
                           <label
                              className="rating"
                              id="headlessui-label-5"
                              role="none"
                           >
                              Choose a color
                           </label>
                           <div className="flex items-center" role='none'>
                              <div
                                 className='bg-black w-10 h-10 rounded-full focus:ring-offset-2 focus:ring-black focus:ring cursor-pointer'
                                 id="headlessui-radiogroup-option-7"
                                 role="radio"
                                 aria-checked="true"
                                 tabIndex="0"
                                 data-headlessui-state="checked"
                                 aria-labelledby="headlessui-label-6"
                              >
                                 <span className="rating" id="headlessui-label-6">Black</span>
                                 <span aria-hidden="true" className="h-8 w-8 rounded-full"></span>
                              </div>
                              <div
                                 className='bg-gray-400 w-10 h-10 rounded-full focus:ring-offset-2 focus:ring-gray-400 focus:ring cursor-pointer ml-2'
                                 id="headlessui-radiogroup-option-7"
                                 role="radio"
                                 aria-checked="true"
                                 tabIndex="0"
                                 data-headlessui-state="checked"
                                 aria-labelledby="headlessui-label-6"
                              >
                                 <span className="rating" id="headlessui-label-6">Black</span>
                                 <span aria-hidden="true" className="h-8 w-8 rounded-full"></span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="mt-8">
                        <div className="flex items-center">
                           <h2 className='text-xl'>Size</h2>
                        </div>
                        <div className="mt-2"
                           id="headlessui-radiogroup-24"
                           role="radiogroup"
                           aria-labelledby="headlessui-label-11"
                        >
                           <label className="rating" id="headlessui-label-11" role="none">Choose a size</label>
                           <div className="grid grid-cols-3 gap-3 lg:grid-cols-6" role="none">
                              <div
                                 className="cursor-pointer focus:ring-blue-700 focus:ring focus:bg-blue-700 focus:text-white flex items-center justify-center rounded-md border p-3 text-base uppercase sm:flex-1"
                                 id="headlessui-radiogroup-option-13"
                                 role="radio"
                                 aria-checked="false"
                                 tabIndex="-1"
                                 data-headlessui-state=""
                                 aria-labelledby="headlessui-label-12">
                                 <span id="headlessui-label-12">3XL</span>
                              </div>
                              <div
                                 className="cursor-pointer focus:ring-blue-700 focus:ring focus:bg-blue-700 focus:text-white flex items-center justify-center rounded-md border p-3 text-base uppercase sm:flex-1"
                                 id="headlessui-radiogroup-option-15"
                                 role="radio"
                                 aria-checked="false"
                                 tabIndex="-1"
                                 data-headlessui-state=""
                                 aria-labelledby="headlessui-label-14">
                                 <span id="headlessui-label-14">2XL</span>
                              </div>
                              <div
                                 className="cursor-pointer focus:ring-blue-700 focus:ring focus:bg-blue-700 focus:text-white flex items-center justify-center rounded-md border p-3 text-base uppercase sm:flex-1"
                                 id="headlessui-radiogroup-option-17"
                                 role="radio"
                                 aria-checked="false"
                                 tabIndex="-1"
                                 data-headlessui-state=""
                                 aria-labelledby="headlessui-label-16">
                                 <span id="headlessui-label-16">XL</span>
                              </div>
                              <div
                                 className="cursor-pointer focus:ring-blue-700 focus:ring focus:bg-blue-700 focus:text-white flex items-center justify-center rounded-md border p-3 text-base uppercase sm:flex-1"
                                 id="headlessui-radiogroup-option-19"
                                 role="radio"
                                 aria-checked="false"
                                 tabIndex="-1"
                                 data-headlessui-state=""
                                 aria-labelledby="headlessui-label-18">
                                 <span id="headlessui-label-18">L</span>
                              </div>
                              <div className="cursor-pointer focus:ring-blue-700 focus:ring focus:bg-blue-700 focus:text-white flex items-center justify-center rounded-md border p-3 text-base uppercase sm:flex-1"
                                 id="headlessui-radiogroup-option-21"
                                 role="radio"
                                 aria-checked="true"
                                 tabIndex="0"
                                 data-headlessui-state="checked"
                                 aria-labelledby="headlessui-label-20">
                                 <span id="headlessui-label-20">M</span>
                              </div>
                              <div
                                 className="cursor-pointer focus:ring-blue-700 focus:ring focus:bg-blue-700 focus:text-white flex items-center justify-center rounded-md border p-3 text-base uppercase sm:flex-1"
                                 id="headlessui-radiogroup-option-23"
                                 role="radio"
                                 aria-checked="false"
                                 aria-disabled="true"
                                 tabIndex="-1"
                                 data-headlessui-state="disabled"
                                 aria-labelledby="headlessui-label-22">
                                 <span id="headlessui-label-22">S</span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <button
                        onClick={(e) => {
                           e.preventDefault()
                           setCart([...cart, product])
                           localStorage.setItem('cart', JSON.stringify([...cart, product]))
                           toast.success('Product added to cart')
                        }}
                        className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent px-8 py-3 text-white text-xl font-semibold bg-blue-700 hover:bg-blue-800">
                        Add to cart
                     </button>
                  </form>
                  <div className="mt-10">
                     <h2 className='text-xl'>Description</h2>
                     <div className="mt-4">
                        {/* <p className='text-gray-600'>The Basic tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit. They are hand cut and sewn locally, with a special dye technique that gives each tee it's own look.</p> */}
                        <p className='text-gray-600'>{product.description}</p>
                     </div>
                  </div>
               </div>
            </div>
            <section className='mt-16 sm:mt-24'>
               <h2 className="text-xl">Recent reviews</h2>
               <div className="mt-6 mb-10 border-y">
                  <div className="lg:gap-x-8 lg:grid-cols-12 lg:grid py-10">
                     <div className="flex lg:items-start lg:flex-col lg:mt-0 lg:row-start-1 lg:col-span-4 text-base items-center">
                        <p>Risako M</p>
                        <time dateTime="2023-08-17" className="ml-4 border-l pl-4 lg:ml-0 lg:mt-2 lg:border-0 lg:pl-0">August 17, 2023</time>
                     </div>
                     <div className="col-start-5 col-span-8">
                        <div className="flex items-center">
                           <div className="flex items-center">
                              <i className="fa-solid fa-star text-yellow-300"></i>
                              <i className="fa-solid fa-star text-yellow-300"></i>
                              <i className="fa-solid fa-star text-yellow-300"></i>
                              <i className="fa-solid fa-star text-yellow-300"></i>
                              <i className="fa-solid fa-star text-yellow-300"></i>
                           </div>
                           <p className='text-base ml-3'>5.0</p>
                        </div>
                        <div className="lg:mt-2 mt-4">
                           <h3 className='text-base'>Can't say enough good things</h3>
                           <div className="text-sm mt-3">
                              <p>I was really pleased with the overall shopping experience. My order even included a little personal, handwritten note, which delighted me!</p>
                              <p className='mt-6'>The product quality is amazing, it looks and feel even better than I had anticipated. Brilliant stuff! I would gladly recommend this store to my friends. And, now that I think of it... I actually have, many times!</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="lg:gap-x-8 lg:grid-cols-12 lg:grid py-10 border-y">
                     <div className="flex lg:items-start lg:flex-col lg:mt-0 lg:row-start-1 lg:col-span-4 text-base items-center">
                        <p>Jackie H</p>
                        <time dateTime="2023-06-17" className="ml-4 border-l pl-4 lg:ml-0 lg:mt-2 lg:border-0 lg:pl-0">June 17, 2023</time>
                     </div>
                     <div className="col-start-5 col-span-8">
                        <div className="flex items-center">
                           <div className="flex items-center">
                              <i className="fa-solid fa-star text-yellow-300"></i>
                              <i className="fa-solid fa-star text-yellow-300"></i>
                              <i className="fa-solid fa-star text-yellow-300"></i>
                              <i className="fa-solid fa-star text-yellow-300"></i>
                              <i className="fa-solid fa-star text-yellow-300"></i>
                           </div>
                           <p className='text-base ml-3'>5.0</p>
                        </div>
                        <div className="lg:mt-2 mt-4">
                           <h3 className='text-base'>Very comfy and looks the part</h3>
                           <div className="text-sm mt-3">
                              <p>After a quick chat with customer support, I had a good feeling about this shirt and ordered three of them.</p>
                              <p className='mt-6'>Less than 48 hours later, my delivery arrived. I haven't worn anything else since that day! These shirts are so comfortable, yet look classy enough that I can wear them at work or even some formal events. Winning!</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="lg:gap-x-8 lg:grid-cols-12 lg:grid py-10 border-y">
                     <div className="flex lg:items-start lg:flex-col lg:mt-0 lg:row-start-1 lg:col-span-4 text-base items-center">
                        <p>Jackie H</p>
                        <time dateTime="2023-06-17" className="ml-4 border-l pl-4 lg:ml-0 lg:mt-2 lg:border-0 lg:pl-0">June 17, 2023</time>
                     </div>
                     <div className="col-start-5 col-span-8">
                        <div className="flex items-center">
                           <div className="flex items-center">
                              <i className="fa-solid fa-star text-yellow-300"></i>
                              <i className="fa-solid fa-star text-yellow-300"></i>
                              <i className="fa-solid fa-star text-yellow-300"></i>
                              <i className="fa-solid fa-star text-yellow-300"></i>
                              <i className="fa-solid fa-star text-gray-300"></i>
                           </div>
                           <p className='text-base ml-3'>4.0</p>
                        </div>
                        <div className="lg:mt-2 mt-4">
                           <h3 className='text-base'>The last shirts I may ever need</h3>
                           <div className="text-sm mt-3">
                              <p>I bought two of those comfy cotton shirts, and let me tell you: they're amazing! I have been wearing them almost every day. Even after a dozen of washes, that still looks and feel good as new. Will definitely order a few more... If I ever need to!</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section className='sm:mt-24 mt-16'>
               <h2 className="text-xl">{relatedProducts.length === 0 ? "No related products" : "Related products"}</h2>
               <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
                  {relatedProducts?.map((p) => (
                     <div className="relative" key={p._id}>
                        <div className="w-full overflow-hidden hover:opacity-80 lg:static lg:pb-0 lg:h-80 rounded-lg">
                           <Link to={`/product/${p.slug}`}>
                              <img
                                 src={`/api/v1/product/get-product-photo/${p._id}`}
                                 alt="Product-img."
                                 className="h-full w-full object-cover static object-center lg:h-full lg:w-full" />
                           </Link>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                           <Link to={`/product/${p.slug}`}>
                              <h3 className='text-xl font-semibold m-0 hover:opacity-80'>{p.name.charAt(0).toUpperCase() + p.name.slice(1)}</h3>
                           </Link>
                           <p className='text-lg font-semibold'>${p.price}</p>
                        </div>
                        <p className='mt-1 text-gray-600'>{p.description.charAt(0).toUpperCase() + p.description.substring(0, 20).slice(1) + "..."}</p>
                     </div>
                  ))}
               </div>
            </section>
         </div >
      </Layout >

   )
}

export default ProductDetails