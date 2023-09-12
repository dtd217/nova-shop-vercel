import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import Layout from '../components/layout/Layout'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify'
import axios from 'axios'

const CategoryProduct = () => {
   const params = useParams();
   const navigate = useNavigate();
   const [products, setProducts] = useState([]);
   const [category, setCategory] = useState([]);

   useEffect(() => {
      if (params?.slug) getProductByCategory()
      // eslint-disable-next-line
   }, [params?.slug])

   const getProductByCategory = async () => {
      try {
         const { data } = await axios.get(`/api/v1/product/category-product/${params.slug}`);
         setProducts(data?.products);
         setCategory(data?.category);
      }
      catch (error) {
         console.log(error)
         toast.error('Something went wrong')
      }
   }

   return (
      <Layout>
         <div className='max-w-screen-xl lg:px-6 px-4 sm:py-16 py-8 mx-auto'>
            <div className='px-4 mx-auto max-w-screen-sm text-center lg:px-6 mb-8 lg:mb-16'>
               <h2 className='mb-4 text-2xl md:text-4xl tracking-wide font-extrabold uppercase'>{category?.name} Collections</h2>
               <p className='italic text-lg md:text-xl text-gray-500'>{products?.length} product available</p>
            </div>
            <div className="lg:gap-8 lg:grid-cols-3 sm:grid-cols-2 gap-y-10 gap-x-6 grid">
               {products?.map((p) => (
                  <Link to={`/product/${p.slug}`} key={p._id} className='hover:opacity-80'>
                     <div className="relative rounded-lg overflow-hidden w-full aspect-[1/1.2]">
                        <img
                           src={`/api/v1/product/get-product-photo/${p._id}`}
                           className="sm:absolute sm:w-full sm:h-full sm:inset-0 object-center object-cover w-full h-full"
                           alt={p.name} />
                     </div>
                     <div className="mt-4 flex flex-col">
                        <div className='flex items-center  justify-between text-xl text-gray-900'>
                           <h5 className='font-medium tracking-tight'>{p.name.charAt(0).toUpperCase() + p.name.slice(1)}</h5>
                           <span className="font-bold">${p.price}</span>
                        </div>
                        <h3 className='text-base mt-1 text-gray-600'>{p.description.charAt(0).toUpperCase() + p.description.substring(0, 20).slice(1) + "..."}</h3>
                     </div>
                  </Link>
               ))}
            </div>
         </div>
      </Layout>
   )
}

export default CategoryProduct