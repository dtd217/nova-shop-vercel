import React from 'react'
import Layout from '../components/layout/Layout'
import { Link } from 'react-router-dom'

const NotFound = () => {
    window.scrollTo(0, 0)
    return (
        <Layout>
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-xl text-center">
                    <h1 className="mb-4 text-8xl tracking-tight font-extrabold lg:text-9xl text-primary-600 ">404</h1>
                    <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">Something's missing.</p>
                    <p className="mb-4 text-lg font-medium text-gray-700">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
                    <Link to="/" className="inline-flex hover:text-white text-black hover:bg-black bg-white font-medium rounded-xl border-2 border-black border-solid text-xl px-6 py-3.5 text-center my-4">Back to Homepage</Link>
                </div>
            </div>
        </Layout>
    )
}

export default NotFound