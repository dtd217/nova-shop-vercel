import React, { useState } from 'react'
import Layout from '../../components/layout/Layout'
import { Link } from 'react-router-dom'
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from '../../context/auth';

const Login = () => {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [auth, setAuth] = useAuth()

   const navigate = useNavigate();
   const location = useLocation();

   const toastObject = {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      draggable: true,
      progress: undefined,
      theme: "light",
   }

   const handleSubmit = async (e) => {
      e.preventDefault()
      try {
         const res = await axios.post("/api/v1/auth/login", { email, password })
         if (res && res.data.success) {
            toast.success(res.data && res.data.message, toastObject);
            console.log("Login success")
            setAuth({
               ...auth,
               user: res.data.user,
               token: res.data.token
            })
            localStorage.setItem("auth", JSON.stringify(res.data))
            navigate(location.state || "/");
         }
         else {
            toast.error(res.data.message, toastObject);
            console.log("Login failed")
         }
      }
      catch (err) {
         console.log(err);
         toast.error("Something went wrong", toastObject);
      }
   }

   return (
      <Layout>
         <section className="my-12">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
               <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                  <div className="p-6 space-y-4 md:space-y-6 sm:p-8 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
                     <h1 className="md:text-3xl font-bold leading-tight tracking-wide text-black text-2xl text-center">
                        LOGIN
                     </h1>
                     <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                        <div>
                           <label className="block mb-2 text-sm font-medium text-black">EMAIL</label>
                           <input
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              id="email"
                              className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                              placeholder="e.g name@company.com"
                              required="" />
                        </div>
                        <div>
                           <label className="block mb-2 text-sm font-medium text-black">PASSWORD</label>
                           <input
                              type="password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              id="password"
                              placeholder=""
                              className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg block w-full p-2.5"
                              required="" />
                        </div>

                        <button
                           type="submit"
                           className="w-full font-medium rounded-xl px-5 py-3 text-center hover:text-white text-black hover:bg-blue-700 hover:border-blue-700 outline-none bg-white border-2 border-black border-solid md:text-xl my-3"
                        >
                           LOGIN
                        </button>

                        <p className="text-sm font-light text-gray-500">
                           Don't have an account yet? <Link to="/register" className="font-medium hover:underline text-blue-700">Register</Link>
                        </p>
                     </form>
                  </div>
               </div>
            </div>
         </section>
      </Layout>
   )
}

export default Login