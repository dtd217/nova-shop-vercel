import React, { useState, useEffect } from 'react'
import Layout from '../../components/layout/Layout'
import AdminMenu from '../../components/layout/AdminMenu'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Users = () => {
   const [users, setUsers] = useState([])

   const getUsers = async () => {
      try {
         const { data } = await axios.get("/api/v1/auth/all-users");
         setUsers(data);
      } catch (error) {
         console.log(error);
      }
   }

   useEffect(() => {
      getUsers();
   }, [])

   return (
      <Layout>
         <div className="max-w-screen-xl lg:px-6 px-4 sm:py-10 py-4 mx-auto flex flex-col md:flex-row active">
            <AdminMenu active={'users'} />
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
                     <div className='overflow-x-auto'>
                        <table className='table-auto w-full text-base'>
                           <thead className='text-gray-500 uppercase bg-gray-200 border-t border-gray-200'>
                              {/* {JSON.stringify(users, null, 4)} */}
                              <tr>
                                 <th scope="col" className="py-3 px-5 whitespace-nowrap">
                                    <div className="text-left font-semibold">Name</div>
                                 </th>
                                 <th scope="col" className="py-3 px-5 whitespace-nowrap">
                                    <div className="text-left font-semibold">Role</div>
                                 </th>
                                 <th scope="col" className="py-3 px-5 whitespace-nowrap">
                                    <div className="text-left font-semibold">Email</div>
                                 </th>
                                 <th scope="col" className="py-3 px-5 whitespace-nowrap">
                                    <div className="text-left font-semibold">Phone</div>
                                 </th>
                                 <th scope="col" className="py-3 px-5 whitespace-nowrap">
                                    <div className="text-left font-semibold">Address</div>
                                 </th>
                              </tr>
                           </thead>
                           {users.map((u) => (
                              <tbody
                                 className="border-t border-gray-200"
                                 key={u?._id}
                              >
                                 <tr>
                                    <td className='py-3 px-5 whitespace-nowrap'>
                                       <div className='text-left font-medium tracking-tight'>{u?.name}</div>
                                    </td>
                                    <td className='py-3 px-5 whitespace-nowrap'>
                                       <div className='text-left font-medium tracking-tight text-gray-500'>
                                          {u?.role === 1 ?
                                             <div className='bg-red-500 text-gray-100 w-full px-2 py-1 rounded-md'><i class="fa-solid fa-gear" style={{ color: "#f3f4f6" }}></i> Admin</div> :
                                             <div className='bg-blue-500 text-gray-100 w-full px-2 py-1 rounded-md'><i class="fa-solid fa-user" style={{ color: "#f3f4f6" }}></i> User</div>
                                          }
                                       </div>
                                    </td>
                                    <td className='py-3 px-5 whitespace-nowrap'>
                                       <div className='text-left font-medium tracking-tight'>{u?.email}</div>
                                    </td>
                                    <td className='py-3 px-5 whitespace-nowrap'>
                                       <div className='text-left font-medium'>{u?.phone}</div>
                                    </td>
                                    <td className='py-3 px-5 whitespace-nowrap'>
                                       <div className='text-left font-medium tracking-tight'>{u?.address}</div>
                                    </td>
                                 </tr>
                              </tbody>
                           )).sort((a, b) => (a.role < b.role ? 1 : -1))}
                        </table>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Layout>
   )
}

export default Users