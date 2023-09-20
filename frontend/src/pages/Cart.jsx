import React, { useEffect, useState } from 'react'
import Layout from '../components/layout/Layout'
import { Link, useNavigate } from 'react-router-dom'
import { Tooltip } from 'antd';
import { useAuth } from '../context/auth';
import { useCart } from '../context/cart';
import "braintree-web"
import DropIn from "braintree-web-drop-in-react";
import axios from 'axios';
import { toast } from 'react-toastify';

const Cart = () => {
   const [auth] = useAuth();
   const [cart, setCart] = useCart();
   const [clientToken, setClientToken] = useState("");
   const [instance, setInstance] = useState("");
   const [loading, setLoading] = useState(false);
   const navigate = useNavigate();

   // Total price
   const getTotal = () => {
      try {
         let total = 0;
         cart?.map((item) => (total += item.price));
         return total;
      }
      catch (error) {
         console.log(error)
      }
   }

   // Delete item in cart
   const removerCartItem = (pid) => {
      try {
         let myCart = [...cart]
         let index = myCart.findIndex((item) => item._id === pid);
         myCart.splice(index, 1);
         setCart(myCart);
         localStorage.setItem("cart", JSON.stringify(myCart));
      } catch (error) {
         console.log(error)
      }
   }

   // Get payment gateway token
   const getToken = async () => {
      try {
         const { data } = await axios.get(`/api/v1/product/braintree/token`);
         setClientToken(data?.clientToken);
      }
      catch (error) {
         console.log(error)
      }
   }

   useEffect(() => {
      getToken();
      // eslint-disable-next-line
   }, [auth?.token])

   // Handle payment
   const handlePayment = async () => {
      try {
         setLoading(true);
         const { nonce } = await instance.requestPaymentMethod();
         const { data } = await axios.post(`/api/v1/product/braintree/payment`, { cart, nonce });
         setLoading(false);
         localStorage.removeItem("cart");
         setCart([]);
         navigate("/dashboard/user/orders");
         toast.success("Payment Completed Successfully ");
      } catch (error) {
         console.log(error);
         setLoading(false);
      }
   }

   return (
      <Layout>
         <form action="">
            <div className='max-w-screen-xl lg:px-6 px-4 sm:py-16 py-8 mx-auto'>
               <h1 className="font-bold sm:text-4xl tracking-tight">Shopping Cart</h1>
               <div className='lg:gap-12 lg:grid lg:items-start lg:grid-cols-12 mt-12'>
                  <section className='lg:col-span-7'>
                     <ul className='border-y border-gray-200'>
                        {cart?.map((item) => (
                           <li className='flex sm:py-10 py-6' key={item._id}>
                              <div className="shrink-0">
                                 <img
                                    src={`api/v1/product/get-product-photo/${item._id}`}
                                    alt={item.name}
                                    className='sm:w-48 sm:h-48 object-center object-cover rounded-md w-24 h-24' />
                              </div>
                              <div className="sm:ml-6 flex flex-col justify-between flex-1 ml-4">
                                 <div className="sm:pr-0 sm:gap-6 sm:grid-cols-2 sm:grid pr-9 relative">
                                    <div className='text-lg'>
                                       <div className="flex justify-between">
                                          <h3 className='hover:text-blue-600 text-xl'>
                                             <Link to="#">{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</Link>
                                          </h3>
                                       </div>
                                       <div className="flex mt-1 text-gray-400 leading-4 font-normal">
                                          <p>{item.description.charAt(0).toUpperCase() + item.description.substring(0, 15).slice(1) + "..."}</p>
                                       </div>
                                       <p className="mt-1">${item.price}</p>
                                    </div>
                                    <div className="sm:pr-9 sm:mt-0 mt-1">
                                       <div className="top-0 right-0 absolute">
                                          <button
                                             className='p-2 inline-flex -m-2 cursor-pointer hover:opacity-50'
                                             onClick={() => removerCartItem(item._id)}
                                          >
                                             <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                                className="w-7 h-7">
                                                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z">
                                                </path>
                                             </svg>
                                          </button>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </li>
                        ))}
                     </ul>
                  </section>
                  <section className='lg:p-8 lg:mt-0 lg:col-span-5 sm:p-6 py-6 px-4 rounded-lg mt-16 bg-gray-100'>
                     <h2 className='text-xl'>Order Summary</h2>
                     <div className="mt-6 text-base">
                        <div className="flex items-center justify-between">
                           <dt className="text-gray-500">Subtotal</dt>
                           <dd>${getTotal()}</dd>
                        </div>
                        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-300">
                           <dt className='text-gray-500'>
                              <span>Shipping estimate</span>
                              <Tooltip placement="topLeft" title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}>
                                 <div className='inline-flex cursor-help'>
                                    <i className="fa-solid fa-circle-question hover:text-blue-700 shrink-0 ml-2"></i>
                                 </div>
                              </Tooltip>
                           </dt>
                           <dd>$5</dd>
                        </div>
                        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-300">
                           <dt className='text-gray-500'>
                              <span>Tax estimate</span>
                              <Tooltip placement="topLeft" title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}>
                                 <div className='inline-flex cursor-help'>
                                    <i className="fa-solid fa-circle-question hover:text-blue-700 shrink-0 ml-2"></i>
                                 </div>
                              </Tooltip>
                           </dt>
                           <dd>$8</dd>
                        </div>
                        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-300 text-lg font-medium">
                           <dt>Order total</dt>
                           <dd>${getTotal() + 5 + 8}</dd>
                        </div>
                     </div>
                     <div className="mt-6">
                        {auth?.token ?
                           (<><button type='submit' className='w-full py-3 px-4 border-transparent border bg-blue-600 hover:bg-blue-700 text-white rounded-md'>Checkout</button></>)
                           : (<>
                              <button
                                 type='submit'
                                 className='w-full py-3 px-4 border-transparent border bg-gray-600 hover:bg-gray-700 text-white rounded-md'
                                 onClick={() => {
                                    navigate('/login')
                                 }}>
                                 Please login to checkout</button>
                           </>)}
                     </div>
                     <div className="mt-2">
                        {!clientToken || !auth?.token || !cart?.length ? (
                           ""
                        ) : (
                           <>
                              <DropIn
                                 options={{
                                    authorization: clientToken,
                                    paypal: {
                                       flow: "vault",
                                    },
                                 }}
                                 onInstance={(instance) => setInstance(instance)}
                              />
                              <button
                                 className='w-full py-3 px-4 border-transparent border bg-blue-600 hover:bg-blue-700 text-white rounded-md'
                                 onClick={handlePayment}
                                 disabled={loading || !instance}
                              >
                                 {loading ? "Processing..." : "Make Payment"}
                              </button>
                           </>
                        )}
                     </div>
                  </section>
               </div>
            </div>
         </form >
      </Layout >
   )
}

export default Cart