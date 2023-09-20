import React, { useState, useEffect } from 'react'
import Layout from '../../components/layout/Layout'
import AdminMenu from '../../components/layout/AdminMenu'
import CategoryForm from '../../components/form/CategoryForm'
import { toast } from 'react-toastify'
import axios from 'axios'
import { Modal } from 'antd';
import { Link } from 'react-router-dom'

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const [updatedName, setUpdatedName] = useState("");

  // Handle form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`/api/v1/category/create-category`, { name });
      if (data?.success) {
        toast.success(`${name} is created`);
        getAllCategories();
      } else {
        toast.error("Something went wrong!");
      }
    }
    catch (error) {
      console.log(error)
    }
  }

  // Get all category
  const getAllCategories = async () => {
    try {
      const { data } = await axios.get(`/api/v1/category/get-categories`);
      if (data?.success) {
        setCategories(data?.categories);
      }
    }
    catch (error) {
      console.log(error)
      toast.error('Something went wrong')
    }
  }

  // Handle update
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(`/api/v1/category/update-category/${selected._id}`, { name: updatedName });
      if (data?.success) {
        toast.success(`${updatedName} is updated`);
        setSelected(null);
        setUpdatedName("");
        setVisible(false);
        getAllCategories();
      } else {
        toast.error("Something went wrong!");
      }
    }
    catch (error) {
      console.log(error)
    }
  }

  // Handle delete
  const handleDelete = async (pId) => {
    try {
      const { data } = await axios.delete(`/api/v1/category/delete-category/${pId}`);
      if (data?.success) {
        toast.success(`${selected.name} is deleted`);
        getAllCategories();
      } else {
        toast.error("Something went wrong!");
      }
    }
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllCategories()
  }, [])

  return (
    <Layout>
      <div className="max-w-screen-xl lg:px-6 px-4 sm:py-10 py-4 mx-auto flex flex-col md:flex-row">
        <AdminMenu active={'create-category'} />
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
                      <span className='ml-2 text-gray-800 text-sm md:text-base'>Create Category</span>
                    </li>
                  </ol>
                </nav>
                <h3 className="text-3xl font-semibold leading-7 text-black">Create Category</h3>
                <div className="flex flex-row mt-6 w-full">
                  <CategoryForm handleSubmit={handleSubmit} value={name} setValue={setName} />
                </div>
              </div>

              <div className="flex flex-col  w-full">
                <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow rounded-md">
                  <table className="min-w-full">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 text-lg font-semibold leading-4 tracking-wide text-left text-black uppercase border-b border-gray-400 bg-gray-200 w-2/3">
                          Name
                        </th>
                        <th className="py-3 text-lg font-semibold leading-4 tracking-wide text-left text-black uppercase border-b border-gray-400 bg-gray-200 w-1/3">
                          Actions
                        </th>
                      </tr>
                    </thead>

                    <tbody className="bg-white">
                      {categories?.map((c) => (
                        <>
                          <tr key={c._id}>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200"  >
                              <div className="text-base leading-5 text-black uppercase">{c.name}</div>
                            </td>
                            <td className="font-medium leading-5 text-left whitespace-no-wrap border-b border-gray-200 ">
                              <button
                                className='px-auto py-2 text-white hover:bg-blue-700 text-center uppercase md:text-base text-sm bg-blue-600 rounded-lg mt-1.5 mr-3 md:w-28 w-20'
                                onClick={() => { setVisible(true); setUpdatedName(c.name); setSelected(c) }}
                              >
                                <i className="fa-regular fa-pen-to-square text-white"></i> Edit
                              </button>
                              <button
                                className='px-auto py-2 text-white hover:bg-red-700 text-center uppercase md:text-base text-sm bg-red-600 rounded-lg my-1.5 md:w-28 w-20'
                                onClick={() => { handleDelete(c._id); setSelected(c) }}
                              >
                                <i className="fa-regular fa-trash-can text-white"></i> Delete
                              </button>
                            </td>
                          </tr >
                        </>
                      ))}

                    </tbody>
                  </table>
                </div>
                <Modal
                  onCancel={() => setVisible(false)}
                  footer={null}
                  open={visible}
                >
                  <br />
                  <CategoryForm
                    value={updatedName}
                    setValue={setUpdatedName}
                    handleSubmit={handleUpdate}
                  />
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout >
  )
}

export default Category