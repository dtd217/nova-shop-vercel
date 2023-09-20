import React, { useEffect, useState } from 'react'
import Layout from '../components/layout/Layout'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useCart } from '../context/cart'
import { toast } from 'react-toastify'
import { Prices } from "../components/Prices";
import { Checkbox, Radio } from "antd";

const Home = () => {
  const [cart, setCart] = useCart();
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState([])
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // Get all category
  const getAllCategories = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/category/get-categories`);
      if (data?.success) {
        setCategories(data?.categories);
      }
    }
    catch (error) {
      console.log(error)
      toast.error('Something went wrong in get all categories')
    }
  }

  useEffect(() => {
    getAllCategories()
    getTotal()
  }, [])

  //Get all products
  const getAllProducts = async () => {
    try {
      setLoading(true)
      const { data } = await axios.get(`/api/v1/product/list-product/${page}`);
      setLoading(false)
      setProducts(data.products);
    }
    catch (error) {
      setLoading(false)
      console.log(error);
      toast.error('Something went wrong in get all products');
    }
  };

  // Get total count  
  const getTotal = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/count-product`);
      setTotal(data?.total);
    }
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (page === 1) return;
    loadMore();
    //eslint-disable-next-line
  }, [page])

  // Load more
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/list-product/${page}`);
      setLoading(false);
      setProducts([...products, ...data?.products]);
    }
    catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  // Handle filter by category
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id)
    }
    else {
      all = all.filter(item => item !== id)
    }
    setChecked(all)
  }

  useEffect(() => {
    if (!checked.length || !radio.length) getAllProducts()
    //eslint-disable-next-line
  }, [checked.length, radio.length])

  useEffect(() => {
    if (checked.length || radio.length) {
      getFilteredProducts()
    }
    //eslint-disable-next-line
  }, [checked, radio])

  // Get filtered products
  const getFilteredProducts = async () => {
    try {
      const { data } = await axios.post(`${process.env.REACT_APP_API}/api/v1/product/filter-product`, { checked, radio })
      setProducts(data?.products)
    }
    catch (error) {
      console.log(error)
    }
  }

  return (
    <Layout>
      {/* Hero section */}
      <section className="bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">Giving the best online shopping experience</h1>
            <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-gray-400">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
            <Link to="#" className="inline-flex w-40 items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-primary-900">
              Get started
              <svg className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd">
                </path>
              </svg>
            </Link>
            <Link to="#" className="inline-flex w-40 items-center justify-center px-5 py-3 text-base font-medium text-center border rounded-lg focus:ring-4 text-white border-gray-700 hover:bg-gray-700 focus:ring-gray-800">
              Learn more
            </Link>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={"https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"} alt="mockup" />
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-screen-xl lg:px-6 px-4 sm:py-10 py-4 mx-auto flex flex-col md:flex-row">
        {/* Filter */}
        <div>
          <div className='top-0 z-40 w-full md:w-72 inline-block left-0'>
            <div className='h-full px-3 pb-4 overflow-y-auto text-xl'>
              <div className="filter-style-1">
                <div className="filter-title">
                  <h4 className="font-semibold text-2xl leading-7 text-black">Filter</h4>
                </div>
                <div className="filter-btn">
                  <button
                    className="px-5 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 text-lg"
                    onClick={() => window.location.reload()}
                  >Reset</button>
                </div>
              </div>
              {/* Filter by price */}
              <div className="filter-style-2">
                <div className="filter-title">
                  <h4 className="font-semibold text-2xl leading-7 text-black">Pricing</h4>
                </div>
                <div className="pt-1.5">
                  <Radio.Group onChange={(e) => setRadio(e.target.value)}>
                    {Prices?.map((p) => (
                      <div key={p._id} className='my-2'>
                        <Radio value={p.array}>
                          <label className='font-medium tracking-wide uppercase text-lg'> {p.name}</label>
                        </Radio>
                      </div>
                    ))}
                  </Radio.Group>
                </div>
              </div>
              {/* Filter by category */}
              <div className="filter-style-3">
                <div className="filter-title">
                  <h4 className="font-semibold text-2xl leading-7 text-black">Categories</h4>
                </div>
                <div>
                  <div className="pt-1.5">
                    <ul>
                      {categories?.map((c) => (
                        <li key={c._id}>
                          <div className="mt-2">
                            <Checkbox
                              key={c._id}
                              onChange={(e) => handleFilter(e.target.checked, c._id)}
                              className="w-4 my-5 h-4 border-2 rounded cursor-pointer flex items-center"
                            >
                              <label className='font-medium tracking-wide uppercase text-lg'> {c.name}</label>
                            </Checkbox>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product grid */}
        <div className="px-0 md:px-4 py-6 md:py-0 w-full">
          <div className="px-6 lg:gap-8 xl:grid-cols-3 lg:grid-cols-2 gap-y-10 gap-x-6 grid border-2 border-gray-200 border-dashed rounded-md">
            {products?.map((p) => (
              <div key={p._id}>
                <Link to={`/product/${p.slug}`}>
                  <div className='relative rounded-lg overflow-hidden w-full aspect-[1/1.2]'>
                    <img
                      className="hover:opacity-80 sm:absolute sm:w-full sm:h-full sm:inset-0 object-center object-cover w-full h-full"
                      src={`/api/v1/product/get-product-photo/${p._id}`}
                      alt="Product-img" />
                  </div>
                </Link>
                <div className="px-5 pb-5">
                  <Link to={`/product/${p.slug}`}>
                    <h5 className="hover:opacity-80 hover:text-blue-700 mt-3 text-xl tracking-tight text-gray-900">{p.name.charAt(0).toUpperCase() + p.name.slice(1)}</h5>
                  </Link>
                  <h5 className='text-base mt-1 text-gray-600'>{p.description.charAt(0).toUpperCase() + p.description.substring(0, 20).slice(1) + "..."}</h5>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-xl font-bold text-gray-900">${p.price}</span>
                    <button
                      className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center"
                      onClick={() => {
                        setCart([...cart, p])
                        localStorage.setItem('cart', JSON.stringify([...cart, p]))
                        toast.success('Product added to cart')
                      }}>
                      <i className="fa-solid fa-cart-plus fa-lg mr-1"></i>
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Load more */}
          <div className="flex items-center justify-center border-gray-200 px-4 mt-6 sm:px-6">
            {products && (products.length < total) ? (
              <button
                className='px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 text-xl'
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}>
                {loading ?
                  "Loading..." :
                  (<>
                    {" "} Load more
                  </>)}
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </Layout >
  )
}

export default Home