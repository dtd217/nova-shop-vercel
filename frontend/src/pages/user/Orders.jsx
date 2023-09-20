import React, { useState, useEffect } from 'react'
import Layout from '../../components/layout/Layout'
import UserMenu from '../../components/layout/UserMenu'
import axios from 'axios'
import moment from "moment";
import { useAuth } from '../../context/auth'
import { Link } from 'react-router-dom'

const Orders = () => {
  const [orders, setOrders] = useState([])
  const [auth] = useAuth()

  const getOrders = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/auth/orders`)
      setOrders(data)
    }
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (auth?.token) getOrders()
  }, [auth?.token])

  return (
    <Layout>
      <div className="max-w-screen-xl lg:px-6 px-4 sm:py-10 py-4 mx-auto flex flex-col md:flex-row">
        <UserMenu active={'orders'} />
        <div className="px-0 md:px-4 py-6 md:py-0 w-full">
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
            {orders.map((o, i) => {
              return (
                <div className="mt-8 sm:border sm:rounded-lg border-gray-300 border-y" key={o?._id}>
                  <div className="sm:p-4 sm:gap-6 sm:grid sm:grid-cols-3 p-4 flex items-center">
                    <dl className='lg:col-span-2 sm:grid-cols-3 sm:col-span-3 text-sm gap-6 grid-cols-2 grid'>
                      <div>
                        <dt className='font-semibold'>Order number</dt>
                        <dd className='mt-1 text-gray-500'>#NOVA00{i + 1}</dd>
                      </div>
                      <div className="sm:block hidden">
                        <dt className='font-semibold'>Date placed</dt>
                        <dd className="mt-1 text-gray-500"><time dateTime="2023-08-30">{moment(o?.createdAt).format("DD/MM/YYYY")}</time></dd>
                      </div>
                      <div>
                        <dt className='font-semibold'>Total price</dt>
                        <dd className="mt-1 text-black">${o?.payment?.transaction?.amount}</dd>
                      </div>
                    </dl>
                  </div>
                  <ul>
                    {o?.products?.map((p, i) => (
                      <li className='p-4 border-t' >
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
                            <p className="hidden text-gray-500 text-sm sm:mt-2 sm:block">Are you a minimalist looking for a compact carry option? The Micro Backpack is the perfect size for your essential everyday carry items. Wear it like a backpack or carry it like a satchel for all-day use.</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Layout >
  )
}

export default Orders