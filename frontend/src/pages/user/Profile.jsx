import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import UserMenu from '../../components/layout/UserMenu'
import { useAuth } from '../../context/auth'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router'

const Profile = () => {
  const [auth, setAuth] = useAuth()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    // const { email, name, phone, address } = auth?.user;
    setName(auth?.user?.name);
    setEmail(auth?.user?.email);
    setPhone(auth?.user?.phone);
    setAddress(auth?.user?.address);
  }, [auth?.user?.name, auth?.user?.email, auth?.user?.phone, auth?.user?.address]);

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.put(`${process.env.REACT_APP_API}/api/v1/auth/profile`, { email, name, password, phone, address });
      if (data?.error) {
        toast.error(data?.error);
      }
      else {
        setAuth({ ...auth, user: data?.updatedUser });
        let ls = localStorage.getItem("auth");
        ls = JSON.parse(ls);
        ls.user = data.updatedUser;
        localStorage.setItem("auth", JSON.stringify(ls));
        toast.success("Profile Updated Successfully");
      }
    }
    catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
    setTimeout(() => {
      window.location.href = "/login";
    }, 1500)
  }

  return (
    <Layout>
      <div className="max-w-screen-xl lg:px-6 px-4 sm:py-10 py-4 mx-auto flex flex-col md:flex-row">
        <UserMenu active={'profile'} />
        <div className="px-0 md:px-4 py-6 md:py-0 w-full">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
            <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
                <h1 className="md:text-3xl font-bold leading-tight tracking-normal text-black text-2xl text-center">
                  User Profile
                </h1>
                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-black">Your email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-gray-200 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      placeholder="e.g name@company.com"
                      disabled />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-black">Your name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g John Joe"
                      className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      autoFocus
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-black">Your phone number</label>
                    <input
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g 0123456789"
                      className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-black">Your address</label>
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="e.g Dong Tam, Hai Ba Trung, Ha Noi"
                      className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-black">Your password</label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="******"
                      className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                  </div>
                  <button
                    type="submit"
                    className="w-full font-medium rounded-xl px-5 py-3 text-center hover:text-white text-black hover:bg-blue-700 hover:border-blue-700 outline-none bg-white border-2 border-black border-solid md:text-xl my-3"
                  >UPDATE</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Profile