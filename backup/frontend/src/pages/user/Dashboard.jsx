import React from 'react'
import Layout from '../../components/layout/Layout'
import UserMenu from '../../components/layout/UserMenu'
import { useAuth } from '../../context/auth'

const Dashboard = () => {
  const [auth] = useAuth()

  return (
    <Layout>
      <div className="max-w-screen-xl lg:px-6 px-4 sm:py-10 py-4 mx-auto flex flex-col md:flex-row">
        <UserMenu />
        <div className="px-0 md:px-4 py-6 md:py-0 w-full">
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-md">
            <div>
              <div className="px-4 sm:px-0">
                <h3 className="text-2xl font-semibold leading-7 text-black">User Information</h3>
              </div>
              <div className="mt-6 border-t border-gray-500">
                <dl className="divide-y divide-gray-300">
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-lg font-medium leading-6 text-black">Full name</dt>
                    <dd className="mt-1 text-lg leading-6 text-black sm:col-span-2 sm:mt-0 uppercase">{auth?.user?.name}</dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-lg font-medium leading-6 text-black">Email address</dt>
                    <dd className="mt-1 text-lg leading-6 text-black sm:col-span-2 sm:mt-0">{auth?.user?.email}</dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-lg font-medium leading-6 text-black">Phone number</dt>
                    <dd className="mt-1 text-lg leading-6 text-black sm:col-span-2 sm:mt-0">{auth?.user?.phone}</dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-lg font-medium leading-6 text-black">Address</dt>
                    <dd className="mt-1 text-lg leading-6 text-black sm:col-span-2 sm:mt-0">{auth?.user?.address}</dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-lg font-medium leading-6 text-black">About</dt>
                    <dd className="mt-1 text-lg leading-6 text-black sm:col-span-2 sm:mt-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Dashboard