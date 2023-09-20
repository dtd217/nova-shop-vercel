import React, { useState, useEffect } from 'react'
import Layout from '../../components/layout/Layout'
import AdminMenu from '../../components/layout/AdminMenu'
import axios from 'axios'
import moment from "moment";
import { useAuth } from '../../context/auth'
import { Link } from 'react-router-dom'
import { Select } from "antd";

const { Option } = Select;

const AdminOrders = () => {
   const [status, setStatus] = useState(["Not Process", "Processing", "Shipped", "Deliverd", "Cancel"])
   const [open, setOpen] = useState(null)
   const [changeStatus, setChangeStatus] = useState("")
   const [selected, setSelected] = useState("")
   const [orders, setOrders] = useState([]);
   const [auth, setAuth] = useAuth();

   const handleOpen = (index) => {
      setSelected(index)
      setOpen(!open)
   };

   const getOrders = async () => {
      try {
         const { data } = await axios.get(`/api/v1/auth/all-orders`);
         setOrders(data);
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      if (auth?.token) getOrders();
   }, [auth?.token]);

   const handleChange = async (orderId, value) => {
      try {
         const { data } = await axios.put(`/api/v1/auth/order-status/${orderId}`, { status: value });
         getOrders();
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <Layout>
         <div className="max-w-screen-xl lg:px-6 px-4 sm:py-10 py-4 mx-auto flex flex-col md:flex-row">
            <AdminMenu active={'orders'} />
            <div className="px-0 md:px-4 py-6 md:py-0 w-full overflow-x-auto">
               <div className="p-4 pb-10 border-2 border-gray-200 border-dashed rounded-md">
                  <div>
                     <nav className="breadcrumb flex mb-5 text-black">
                        <ol className="items-center inline-flex">
                           <li className='items-center inline-flex'>
                              <Link to="/" className='items-center inline-flex hover:opacity-60'>
                                 <i className="fa-solid fa-house w-5 h-5 mr-1"></i> <span className='text-sm md:text-base'>Home</span>
                              </Link>
                           </li>
                           <li className='ml-2'>
                              <div className='flex items-center'>
                                 <i className="fa-solid fa-chevron-right"></i>
                                 <Link to="/dashboard/user" className='ml-2 hover:opacity-60 text-sm md:text-base'>Dashboard</Link>
                              </div>
                           </li>
                           <li className='ml-2'>
                              <i className="fa-solid fa-chevron-right"></i>
                              <span className='ml-2 text-gray-800 text-sm md:text-base'>Orders</span>
                           </li>
                        </ol>
                     </nav>
                     <h1 className="text-2xl font-semibold leading-7 text-black">Orders History</h1>
                     <p className='text-gray-500 mt-2'>Check the status of recent orders, manage returns, and discover similar products.</p>
                  </div>
                  <div className="mt-8 sm:border sm:rounded-lg border-gray-300 border-y shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
                     <div className='py-4 px-5'>
                        <h2 className='text-lg font-semibold'>All Orders <span className='text-gray-400'>{orders.length}</span></h2>
                     </div>
                     <div className='overflow-x-auto'>
                        <table className='table-auto w-full text-base'>
                           <thead className='text-gray-500 uppercase bg-gray-200 border-t border-gray-200'>
                              <tr>
                                 <th scope="col" className="py-3 px-5 whitespace-nowrap">
                                    <div className="text-left font-semibold">Order</div>
                                 </th>
                                 <th scope="col" className="py-3 px-5 whitespace-nowrap">
                                    <div className="text-left font-semibold">Date</div>
                                 </th>
                                 <th scope="col" className="py-3 px-5 whitespace-nowrap">
                                    <div className="text-left font-semibold">Customer</div>
                                 </th>
                                 <th scope="col" className="py-3 px-5 whitespace-nowrap">
                                    <div className="text-left font-semibold">Total</div>
                                 </th>
                                 <th scope="col" className="py-3 px-5 whitespace-nowrap">
                                    <div className="text-center font-semibold">Items</div>
                                 </th>
                                 <th scope="col" className="py-3 px-5 whitespace-nowrap">
                                    <div className="text-center font-semibold">Status</div>
                                 </th>
                              </tr>
                           </thead>
                           {orders.map((o, i) => (
                              <tbody
                                 className="border-t border-gray-200"
                                 key={o?._id}
                              >
                                 <tr
                                    className='hover:bg-gray-100 cursor-pointer'
                                    onClick={() => {
                                       handleOpen(!open);
                                       setSelected(i)
                                    }}>
                                    <td className='py-3 px-5 whitespace-nowrap'>
                                       <div className='text-left font-medium tracking-tight text-blue-500'>#NOVA00{i + 1}</div>
                                    </td>
                                    <td className='py-3 px-5 whitespace-nowrap'>
                                       <div className='text-left font-medium tracking-tight text-gray-500'>{moment(o?.createdAt).format("DD/MM/YYYY")}</div>
                                    </td>
                                    <td className='py-3 px-5 whitespace-nowrap'>
                                       <div className='text-left font-medium tracking-tighter'>{o?.buyer?.name}</div>
                                    </td>
                                    <td className='py-3 px-5 whitespace-nowrap'>
                                       <div className='text-left font-medium text-green-400'>${o?.payment?.transaction?.amount}</div>
                                    </td>
                                    <td className='py-3 px-5 whitespace-nowrap'>
                                       <div className='text-center font-medium'>{o?.products?.length}</div>
                                    </td>
                                    <td
                                       className='py-3 px-5 whitespace-nowrap'
                                       onClick={(e) => e.stopPropagation()}>
                                       <div className='text-center font-medium rounded-md py-1 border border-gray-400 bg-gray-200'>
                                          <Select
                                             bordered={false}
                                             onChange={(value) => handleChange(o._id, value)}
                                             defaultValue={o?.status}>
                                             {status.map((s, i) => (
                                                <Option key={i} value={s}>
                                                   {s}
                                                </Option>
                                             ))}
                                          </Select>
                                       </div>
                                    </td>
                                 </tr>
                                 {o?.products?.map((p) => (
                                    <tr key={p._id} className={`${(selected === i && open) ? '' : 'hidden'}`}>
                                       <td colSpan={6}>
                                          <div className='p-4 border-t'>
                                             <div className='flex items-center sm:items-start'>
                                                <div className='sm:w-40 sm:h-40 overflow-hidden rounded-lg w-20 h-20'>
                                                   <img
                                                      src={`/api/v1/product/get-product-photo/${p?._id}`}
                                                      alt={p.name}
                                                      className='object-center object-cover w-full h-full' />
                                                </div>
                                                <div className='flex flex-col flex-1 ml-6'>
                                                   <div className='sm:flex sm:justify-between font-semibold'>
                                                      <h5>{p?.name}</h5>
                                                      <p className="sm:mt-0 mt-2">${p?.price}</p>
                                                   </div>
                                                   <p className="hidden text-gray-500 text-sm sm:mt-2 sm:block">{p?.description}</p>
                                                </div>
                                             </div>
                                          </div>
                                       </td>
                                    </tr>
                                 ))}
                              </tbody>
                           ))}
                        </table>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Layout>
   )
}

export default AdminOrders