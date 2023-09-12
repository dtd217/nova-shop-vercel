import React, { useEffect, useState } from 'react'
import Layout from '../components/layout/Layout'
import { Link } from 'react-router-dom'
import categoriesImg from '../assets/images/member-4.png'
import { toast } from 'react-toastify'
import axios from 'axios'

const Categories = () => {
   const [categories, setCategories] = useState([]);

   // Get all category
   const getAllCategories = async () => {
      try {
         const { data } = await axios.get("/api/v1/category/get-categories");
         if (data?.success) {
            setCategories(data?.categories);
         }
      }
      catch (error) {
         console.log(error)
         toast.error('Something went wrong')
      }
   }

   useEffect(() => {
      getAllCategories()
   }, [])

   return (
      <Layout>
         <div className='max-w-screen-xl lg:px-6 px-4 sm:py-16 py-8 mx-auto'>
            <div className='px-4 mx-auto max-w-screen-sm text-center lg:px-6 mb-8 lg:mb-16'>
               <h2 className='mb-4 text-4xl tracking-tight font-extrabold'>Shop by Categories</h2>
            </div>
            <div className="lg:gap-8 lg:grid-cols-3 sm:grid-cols-2 gap-y-10 gap-x-6 grid">
               {categories.map((c) => (
                  <Link to={`/category/${c.slug}`} key={c._id}>
                     <div className="text-base py-4 hover:bg-gray-300 rounded-lg flex flex-col items-center justify-between bg-gray-200">
                        <h3 className='text-xl'>{c.name.charAt(0).toUpperCase() + c.name.slice(1)}</h3>
                     </div>
                  </Link>
               ))}
            </div>
         </div>
      </Layout>
   )
}

export default Categories