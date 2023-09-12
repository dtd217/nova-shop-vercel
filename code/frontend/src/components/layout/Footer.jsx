import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="bg-black">
            <div className="mx-auto w-full max-w-screen-xl">
                <div className="grid gap-8 px-4 py-6 lg:py-8 grid-cols-2 xl:grid-cols-4">
                    <div>
                        <h2 className="mb-6 text-lg font-semibold text-white uppercase">Customer Care</h2>
                        <ul className="text-white font-medium">
                            <li className="mb-4">
                                <Link to="/contact" className="text-base hover:text-blue-700 hover:pl-2 duration-200">Contact us</Link>
                            </li>
                            <li className="mb-4">
                                <Link to="/contact" className="text-base hover:text-blue-700 hover:pl-2 duration-200">Payment Option</Link>
                            </li>
                            <li className="mb-4">
                                <Link to="/contact" className="text-base hover:text-blue-700 hover:pl-2 duration-200">Ordering</Link>
                            </li>
                            <li className="mb-4">
                                <Link to="/contact" className="text-base hover:text-blue-700 hover:pl-2 duration-200">Shipping & Delivery</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-lg font-semibold text-white uppercase">Information</h2>
                        <ul className="text-white font-medium">
                            <li className="mb-4">
                                <Link to="/about" className="text-base hover:text-blue-700 hover:pl-2 duration-200">About Us</Link>
                            </li>
                            <li className="mb-4">
                                <Link to="/about" className="text-base hover:text-blue-700 hover:pl-2 duration-200">Affiliates</Link>
                            </li>
                            <li className="mb-4">
                                <Link to="/about" className="text-base hover:text-blue-700 hover:pl-2 duration-200">Community</Link>
                            </li>
                            <li className="mb-4">
                                <Link to="/about" className="text-base hover:text-blue-700 hover:pl-2 duration-200">Services</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-lg font-semibold text-white uppercase">Legal</h2>
                        <ul className="text-white font-medium">
                            <li className="mb-4">
                                <Link to="/policy" className="text-base hover:text-blue-700 hover:pl-2 duration-200">Privacy Policy</Link>
                            </li>
                            <li className="mb-4">
                                <Link to="/policy" className="text-base hover:text-blue-700 hover:pl-2 duration-200">Licensing</Link>
                            </li>
                            <li className="mb-4">
                                <Link to="/policy" className="text-base hover:text-blue-700 hover:pl-2 duration-200">Terms &amp; Conditions</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-lg font-semibold text-white uppercase">Download</h2>
                        <ul className="text-white font-medium">
                            <li className="mb-4">
                                <Link to="#" className="text-base hover:text-blue-700 hover:pl-2 duration-200">iOS</Link>
                            </li>
                            <li className="mb-4">
                                <Link to="#" className="text-base hover:text-blue-700 hover:pl-2 duration-200">Android</Link>
                            </li>
                            <li className="mb-4">
                                <Link to="#" className="text-base hover:text-blue-700 hover:pl-2 duration-200">Windows</Link>
                            </li>
                            <li className="mb-4">
                                <Link to="#" className="text-base hover:text-blue-700 hover:pl-2 duration-200">MacOS</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="px-4 py-6 bg-black md:flex md:items-center md:justify-between">
                    <span className="text-white text-lg sm:text-center uppercase tracking-wide">© 2023 - NOVA Company.</span>
                    <div className="flex mt-4 space-x-5 justify-center md:mt-0">
                        <Link to="#" className="text-gray-400 hover:text-white">
                            <i className="fa-brands fa-facebook fa-xl"></i>
                        </Link>
                        <Link to="#" className="text-gray-400 hover:text-white">
                            <i className="fa-brands fa-discord fa-xl"></i>
                        </Link>
                        <Link to="#" className="text-gray-400 hover:text-white">
                            <i className="fa-brands fa-twitter fa-xl"></i>
                        </Link>
                        <Link to="#" className="text-gray-400 hover:text-white">
                            <i className="fa-brands fa-github fa-xl"></i>
                        </Link>
                        <Link to="#" className="text-gray-400 hover:text-white">
                            <i className="fa-brands fa-dribbble fa-xl"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer