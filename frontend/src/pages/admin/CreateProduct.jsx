import React, { useState, useEffect } from "react";
import Layout from '../../components/layout/Layout'
import AdminMenu from '../../components/layout/AdminMenu'
import { useAuth } from '../../context/auth'
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'
import axios from 'axios'
import { Link } from "react-router-dom";
import { Modal } from 'antd';

const CreateProduct = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [visibleCreate, setVisibleCreate] = useState(false);
  const [visibleUpdate, setVisibleUpdate] = useState(false);
  const [name, setName] = useState(""); const [updateName, setUpdateName] = useState("");
  const [description, setDescription] = useState(""); const [updateDescription, setUpdateDescription] = useState("");
  const [price, setPrice] = useState(""); const [updatePrice, setUpdatePrice] = useState("");
  const [category, setCategory] = useState(""); const [updateCategory, setUpdateCategory] = useState("");
  const [quantity, setQuantity] = useState(""); const [updateQuantity, setUpdateQuantity] = useState("");
  const [shipping, setShipping] = useState(""); const [updateShipping, setUpdateShipping] = useState("");
  const [photo, setPhoto] = useState(""); const [updatePhoto, setUpdatePhoto] = useState("");
  const [selected, setSelected] = useState(null);

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
      toast.error('Something went wrong')
    }
  }

  //Get all products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/get-products`);
      if (data?.success) {
        setProducts(data?.products);
      }

    }
    catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  };

  // Handle create
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("category", category);
      productData.append("quantity", quantity);
      productData.append("price", price);
      productData.append("description", description);
      productData.append("photo", photo);
      productData.append("shipping", shipping);
      const { data } = await axios.post(`${process.env.REACT_APP_API}/api/v1/product/create-product`, productData);
      if (data?.success) {
        toast.success(`${name} is created`);
        setVisibleCreate(false);
        getAllProducts();
        setName("");
        setCategory("");
        setQuantity("");
        setPrice("");
        setDescription("");
        setShipping("");
        setPhoto("");
        navigate("/dashboard/admin/create-product");
      } else {
        toast.error("Something went wrong!");
      }
    }
    catch (error) {
      console.log(error)
    }
  }

  // Handle delete product
  const handleDelete = async (pId) => {
    try {
      const { data } = await axios.delete(`/api/v1/product/delete-product/${pId}`);
      if (data?.success) {
        toast.success(`${selected.name} is deleted`);
        getAllProducts();
      } else {
        toast.error("Something went wrong!");
      }
    }
    catch (error) {
      console.log(error)
    }
  }

  // Handle update product
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("name", updateName);
      productData.append("category", updateCategory);
      productData.append("quantity", updateQuantity);
      productData.append("price", updatePrice);
      productData.append("shipping", updateShipping);
      productData.append("description", updateDescription);
      updatePhoto && productData.append("photo", updatePhoto);
      const { data } = await axios.put(`/api/v1/product/update-product/${selected._id}`, productData);

      if (data?.success) {
        toast.success(`${updateName} is updated`);
        setSelected(null);
        setUpdateName("");
        setUpdateCategory("");
        setUpdateQuantity("");
        setUpdatePrice("");
        setUpdateDescription("");
        setUpdatePhoto("");
        setUpdateShipping("");
        setVisibleUpdate(false);
        getAllProducts();
        navigate("/dashboard/admin/create-product");
      } else {
        toast.error("Something went wrong!");
      }
    }
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllCategories();
    getAllProducts();
  }, []);

  return (
    <Layout>
      <div className="max-w-screen-xl lg:px-6 px-4 sm:py-10 py-4 mx-auto flex flex-col md:flex-row">
        <AdminMenu active={'create-product'} />
        <div className="px-0 md:px-4 py-6 md:py-0 w-full">
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-md">
            <div>
              <div className="px-4 sm:px-0 pb-6 pt-2">
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
                        <Link to="/dashboard/admin" className='ml-2 hover:opacity-60 text-sm md:text-base'>Dashboard</Link>
                      </div>
                    </li>
                    <li className='ml-2'>
                      <i className="fa-solid fa-chevron-right"></i>
                      <span className='ml-2 text-gray-800 text-sm md:text-base'>Create Products</span>
                    </li>
                  </ol>
                </nav>
                <h3 className="text-3xl font-semibold leading-7 text-black">All products</h3>
                <div className="flex flex-row mt-6 w-full">
                  <button
                    className="px-5 py-2 mt-4 rounded-lg bg-blue-600 text-white hover:bg-blue-700 text-lg"
                    onClick={() => { setVisibleCreate(true) }}
                  >
                    <i className="fa-solid fa-plus"></i> Add product
                  </button>
                </div>
              </div>

              <div className="flex flex-col w-full">
                <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow rounded-md overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 text-base lg:text-lg font-semibold leading-4 tracking-wide text-left text-black uppercase border-b border-gray-400 bg-gray-200 w-2/6">
                          Name
                        </th>
                        <th className="px-6 py-3 text-base lg:text-lg font-semibold leading-4 tracking-wide text-left text-black uppercase border-b border-gray-400 bg-gray-200 w-1/6">
                          Category
                        </th>
                        <th className="px-6 py-3 text-base lg:text-lg font-semibold leading-4 tracking-wide text-left text-black uppercase border-b border-gray-400 bg-gray-200 w-1/6">
                          Price
                        </th>
                        <th className="px-6 py-3 text-base lg:text-lg font-semibold leading-4 tracking-wide text-left text-black uppercase border-b border-gray-400 bg-gray-200 w-2/6">
                          Actions
                        </th>
                      </tr>
                    </thead>

                    <tbody className="bg-white">
                      {products?.map((p) => (
                        <>
                          <tr key={p._id}>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200"  >
                              <div className="text-sm md:text-base leading-5 text-black uppercase">{p.name}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200" >
                              <div className="text-sm md:text-base leading-5 text-black uppercase">{p.category.name}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200" >
                              <div className="text-sm md:text-base leading-5 text-black uppercase">{p.price}</div>
                            </td>
                            <td className="font-medium leading-5 text-left whitespace-no-wrap border-b border-gray-200 ">
                              <button
                                className='px-5 py-2 text-white hover:bg-blue-700 text-center uppercase md:text-base text-sm bg-blue-600 rounded-lg ml-6 mt-1.5 md:w-24 w-20'
                                onClick={() => {
                                  setVisibleUpdate(true);
                                  setSelected(p);
                                  setUpdateName(p.name);
                                  setUpdateCategory(p.category.name);
                                  setUpdatePrice(p.price);
                                  setUpdateDescription(p.description);
                                  setUpdatePhoto(p.photo);
                                  setUpdateQuantity(p.quantity);
                                  setUpdateShipping(p.shipping);
                                }}
                              >Edit</button>
                              <button
                                className='px-5 py-2 text-white hover:bg-red-700 text-center uppercase md:text-base text-sm bg-red-600 rounded-lg ml-6 xl:ml-1.5 my-1.5 md:w-24 w-20'
                                onClick={() => { setSelected(p); handleDelete(p._id); }}
                              >Delete</button>
                            </td>
                          </tr >
                        </>
                      ))}
                    </tbody>
                  </table>
                </div>
                {/* Create product */}
                <Modal
                  onCancel={() => setVisibleCreate(false)}
                  footer={null}
                  open={visibleCreate}
                >
                  <div className="relative">
                    <div className="pr-5 pb-4 border-b flex items-start justify-between border-gray-300">
                      <h3 className="text-xl font-bold">Add product</h3>
                    </div>
                    <div className="py-4">
                      <form action="#">
                        <div className="grid md:gap-4 gap-2 grid-cols-6">
                          <div className="col-span-6">
                            <label className="block text-base font-medium text-black my-1">Product Name</label>
                            <input
                              type="text"
                              className="text-sm p-2.5 uppercase block w-full rounded-lg border-gray-300 bg-gray-50 shadow-sm focus:border-indigo-200 focus:ring focus:ring-indigo-300 focus:ring-opacity-50"
                              placeholder="Product name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                            />
                          </div>
                          <div className="col-span-6 sm:col-span-3">
                            <label className="block text-base font-medium text-black my-1">Category</label>
                            <select
                              className="text-sm p-2.5 block w-full rounded-lg border-gray-300 bg-gray-50 shadow-sm focus:border-indigo-200 focus:ring focus:ring-indigo-300 focus:ring-opacity-50 uppercase"
                              onChange={(e) => setCategory(e.target.value)}
                            >
                              <option selected>Select a category</option>
                              {categories?.map((c) => (
                                <option key={c._id} value={c._id}>{c.name}</option>
                              ))}
                            </select>
                          </div>
                          <div className="col-span-6 sm:col-span-3">
                            <label className="block text-base font-medium text-black my-1">Shipping</label>
                            <select
                              className="text-sm p-2.5 uppercase block w-full rounded-lg border-gray-300 bg-gray-50 shadow-sm focus:border-indigo-200 focus:ring focus:ring-indigo-300 focus:ring-opacity-50"
                              onChange={(e) => setShipping(e.target.value)}
                            >
                              <option selected>Select shipping</option>
                              <option value="1">Yes</option>
                              <option value="0">No</option>
                            </select>
                          </div>
                          <div className="col-span-6 sm:col-span-3">
                            <label className="block text-base font-medium text-black my-1">Quantity</label>
                            <input
                              type="number"
                              className="text-sm p-2.5 uppercase block w-full rounded-lg border-gray-300 bg-gray-50 shadow-sm focus:border-indigo-200 focus:ring focus:ring-indigo-300 focus:ring-opacity-50"
                              placeholder="Input quantity"
                              value={quantity}
                              onChange={(e) => setQuantity(e.target.value)}
                            />
                          </div>
                          <div className="col-span-6 sm:col-span-3">
                            <label className="block text-base font-medium text-black my-1">Price</label>
                            <input
                              type="number"
                              className="text-sm p-2.5 uppercase block w-full rounded-lg border-gray-300 bg-gray-50 shadow-sm focus:border-indigo-200 focus:ring focus:ring-indigo-300 focus:ring-opacity-50"
                              placeholder="Input price"
                              value={price}
                              onChange={(e) => setPrice(e.target.value)}
                            />
                          </div>
                          <div className="col-span-6">
                            <label className="block text-base font-medium text-black my-1">Description</label>
                            <textarea
                              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                              className="text-sm p-4 block w-full rounded-lg border-gray-300 bg-gray-50 shadow-sm focus:border-indigo-200 focus:ring focus:ring-indigo-300 focus:ring-opacity-50"
                              value={description}
                              onChange={(e) => setDescription(e.target.value)}
                              rows="4">
                            </textarea>
                          </div>
                        </div>
                        <div className="mt-4 flex items-center justify-center flex-col-reverse w-full relative">
                          {photo ?
                            (<div className="flex flex-col mt-4 w-full justify-center items-center">
                              <span className="justify-center items-start flex">{photo.name}</span>
                              <button className="px-3 py-3 justify-end relative items-center flex w-32 mt-1 h-10 rounded-lg bg-blue-600 text-white hover:bg-blue-700 text-sm ">
                                <input
                                  type="file"
                                  name="photo"
                                  accept="image/*"
                                  onChange={(e) => setPhoto(e.target.files[0])}
                                  className="absolute top-0 left-0 opacity-0 cursor-pointer px-4 py-3 w-36 h-12" />
                                Choose image
                              </button>
                            </div>) :
                            (<>
                              <label className="border-dashed border-2 rounded flex z-10 flex-col h-32 w-full cursor-pointer bg-gray-50 hover:bg-gray-100">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6 h-full">
                                  <i className="fa-solid fa-arrow-up-from-bracket text-black fa-2xl mb-6"></i>
                                  <p>Upload an image of product</p>
                                </div>
                                <input
                                  type="file"
                                  name="photo"
                                  accept="image/*"
                                  onChange={(e) => setPhoto(e.target.files[0])}
                                  className="invisible absolute w-full h-full" />
                              </label>
                            </>)}

                          {photo && (
                            <>
                              <div className="flex flex-col">
                                <img
                                  src={URL.createObjectURL(photo)}
                                  alt="product_photo"
                                />
                              </div>
                            </>
                          )}
                        </div>
                      </form>
                    </div>
                    <div className="border-t border-gray-300">
                      <button
                        className="px-5 py-2 mt-4 rounded-lg bg-blue-600 text-white hover:bg-blue-700 text-lg"
                        type="submit"
                        onClick={handleCreate}
                      >
                        Add product
                      </button>
                    </div>
                  </div>
                </Modal>

                {/* Update product */}
                <Modal
                  onCancel={() => setVisibleUpdate(false)}
                  footer={null}
                  open={visibleUpdate}
                >
                  <div className="relative">
                    <div className="pr-5 pb-4 border-b flex items-start justify-between border-gray-300">
                      <h3 className="text-xl font-bold">Update product</h3>
                    </div>
                    <div className="py-4">
                      <form action="#" onSubmit={handleUpdate}>
                        <div className="grid md:gap-4 gap-2 grid-cols-6">
                          <div className="col-span-6">
                            <label className="block text-base font-medium text-black my-1">Product Name</label>
                            <input
                              type="text"
                              className="text-sm p-2.5 uppercase block w-full rounded-lg border-gray-300 bg-gray-50 shadow-sm focus:border-indigo-200 focus:ring focus:ring-indigo-300 focus:ring-opacity-50"
                              placeholder="Product name"
                              value={updateName}
                              onChange={(e) => setUpdateName(e.target.value)}
                            />
                          </div>
                          <div className="col-span-6 sm:col-span-3">
                            <label className="block text-base font-medium text-black my-1">Category</label>
                            <select
                              className="text-sm p-2.5 block w-full rounded-lg border-gray-300 bg-gray-50 shadow-sm focus:border-indigo-200 focus:ring focus:ring-indigo-300 focus:ring-opacity-50 uppercase"
                              value={updateCategory}
                              onChange={(e) => setUpdateCategory(e.target.value)}
                            >
                              <option>Select a category</option>
                              {categories?.map((c) => (
                                <option key={c._id} value={c._id} selected>{c.name}</option>
                              ))}
                            </select>
                          </div>
                          <div className="col-span-6 sm:col-span-3">
                            <label className="block text-base font-medium text-black my-1">Shipping</label>
                            <select
                              className="text-sm p-2.5 uppercase block w-full rounded-lg border-gray-300 bg-gray-50 shadow-sm focus:border-indigo-200 focus:ring focus:ring-indigo-300 focus:ring-opacity-50"
                              value={updateShipping}
                              onChange={(e) => setUpdateShipping(e.target.value)}
                            >
                              <option>Select shipping</option>
                              <option value="1">Yes</option>
                              <option value="0">No</option>
                            </select>
                          </div>
                          <div className="col-span-6 sm:col-span-3">
                            <label className="block text-base font-medium text-black my-1">Quantity</label>
                            <input
                              type="number"
                              className="text-sm p-2.5 uppercase block w-full rounded-lg border-gray-300 bg-gray-50 shadow-sm focus:border-indigo-200 focus:ring focus:ring-indigo-300 focus:ring-opacity-50"
                              placeholder="10"
                              value={updateQuantity}
                              onChange={(e) => setUpdateQuantity(e.target.value)}
                            />
                          </div>
                          <div className="col-span-6 sm:col-span-3">
                            <label className="block text-base font-medium text-black my-1">Price</label>
                            <input
                              type="number"
                              className="text-sm p-2.5 uppercase block w-full rounded-lg border-gray-300 bg-gray-50 shadow-sm focus:border-indigo-200 focus:ring focus:ring-indigo-300 focus:ring-opacity-50"
                              placeholder="Price of product"
                              value={updatePrice}
                              onChange={(e) => setUpdatePrice(e.target.value)}
                            />
                          </div>
                          <div className="col-span-6">
                            <label className="block text-base font-medium text-black my-1">Description</label>
                            <textarea
                              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                              className="text-sm p-4 block w-full rounded-lg border-gray-300 bg-gray-50 shadow-sm focus:border-indigo-200 focus:ring focus:ring-indigo-300 focus:ring-opacity-50"
                              value={updateDescription}
                              onChange={(e) => setUpdateDescription(e.target.value)}
                              rows="4">
                            </textarea>
                          </div>
                        </div>
                        <div className="mt-4 flex items-center justify-center flex-col-reverse w-full relative">
                          {updatePhoto ?
                            (<div className="flex flex-col mt-4 w-full justify-center items-center">
                              <span className="justify-center items-start flex">{updatePhoto.name}</span>
                              <button className="px-3 py-3 justify-end relative items-center flex w-32 mt-1 h-10 rounded-lg bg-blue-600 text-white hover:bg-blue-700 text-sm ">
                                <input
                                  type="file"
                                  name="photo"
                                  accept="image/*"
                                  onChange={(e) => setUpdatePhoto(e.target.files[0])}
                                  className="absolute top-0 left-0 opacity-0 cursor-pointer px-4 py-3 w-36 h-12" />
                                Choose image
                              </button>
                            </div>) :
                            (<>
                              <label className="border-dashed border-2 rounded flex z-10 flex-col h-32 w-full cursor-pointer bg-gray-50 hover:bg-gray-100">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6 h-full">
                                  <i className="fa-solid fa-arrow-up-from-bracket text-black fa-2xl mb-6"></i>
                                  <p>Upload an image of product</p>
                                </div>
                                <input
                                  type="file"
                                  name="photo"
                                  accept="image/*"
                                  onChange={(e) => setUpdatePhoto(e.target.files[0])}
                                  className="invisible absolute w-full h-full" />
                              </label>
                            </>)}

                          {updatePhoto && (
                            <>
                              <div className="flex flex-col">
                                <img
                                  src={URL.createObjectURL(updatePhoto)}
                                  alt="product_photo"
                                />
                              </div>
                            </>
                          )}

                        </div>
                        <div className="border-t border-gray-300 mt-4">
                          <button
                            className="px-5 py-2 mt-4 rounded-lg bg-blue-600 text-white hover:bg-blue-700 text-lg"
                            type="submit"
                            onClick={handleUpdate}
                          >Save change
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </Modal>
              </div>
            </div>
          </div>
        </div >
      </div >
    </Layout >
  )

}

export default CreateProduct