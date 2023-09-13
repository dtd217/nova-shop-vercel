import React from 'react'
import { Link } from 'react-router-dom'

const UserMenu = ({ active }) => {
   return (
      <div >
         <aside id="default-sidebar" className="top-0 z-40 w-full md:w-72 inline-block left-0">
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-100 text-lg">
               <span className='flex justify-center text-xl font-semibold pb-4 uppercase tracking-wider'>Admin Dashboard</span>
               <ul className="space-y-2 font-medium">
                  <li>
                     <Link to="/dashboard/user/profile" className={`${active === "profile" ? "bg-blue-700" : ""} flex items-center p-2 text-black rounded-md hover:bg-gray-600 group`}>
                        <svg
                           className={`flex-shrink-0 w-5 h-5 text-black transition duration-75 ${active === "profile" ? "text-white" : ""} group-hover:text-white`}
                           aria-hidden="true"
                           xmlns="http://www.w3.org/2000/svg"
                           fill="currentColor"
                           viewBox="0 0 22 21">
                           <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                           <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                        </svg>
                        <span className={`flex-1 ml-3 whitespace-nowrap text-black ${active === "profile" ? "text-white" : ""} group-hover:text-white`}>Profile</span>
                     </Link>
                  </li>
                  <li>
                     <Link to="/dashboard/user/orders" className={`${active === "orders" ? "bg-blue-700" : ""} flex items-center p-2 text-black rounded-md hover:bg-gray-600 group`}>
                        <svg
                           className={`flex-shrink-0 w-5 h-5 text-black transition duration-75 ${active === "orders" ? "text-white" : ""} group-hover:text-white`}
                           aria-hidden="true"
                           xmlns="http://www.w3.org/2000/svg"
                           fill="currentColor"
                           viewBox="0 0 18 20">
                           <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                        </svg>
                        <span className={`flex-1 ml-3 whitespace-nowrap text-black ${active === "orders" ? "text-white" : ""} group-hover:text-white`}>Orders</span>
                     </Link>
                  </li>
               </ul>
            </div>
         </aside>
      </div>
   )
}

export default UserMenu