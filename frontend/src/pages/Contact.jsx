import React from 'react'
import Layout from '../components/layout/Layout'
import { Link } from 'react-router-dom'

const Contact = () => {
    window.scrollTo(0, 0)
    return (
        <Layout>
            <div className='max-w-screen-xl lg:px-6 px-4 sm:py-16 py-8 mx-auto'>
                <div className='px-4 mx-auto max-w-screen-sm text-center lg:px-6 mb-8 lg:mb-16'>
                    <h2 className='mb-4 text-4xl tracking-tight font-extrabold'>Contact Us</h2>
                    <p className='font-light sm:text-xl'>
                        We use an agile approach to test assumptions and connect with the needs of your audience early and often.
                    </p>
                </div>
                <div className='grid grid-cols-1 lg:gap-8 lg:grid-cols-3'>
                    <div className='col-span-2 mb-8 xl:mb-0'>
                        <form action="#" className='grid grid-cols-1 gap-8 mx-auto max-w-3xl sm:grid-cols-2'>
                            <div>
                                <label htmlFor="first-name" className="block mb-2 text-sm font-medium">First Name</label>
                                <input
                                    type="text"
                                    id="first-name"
                                    className="block p-3 w-full text-sm rounded-lg border focus:ring-primary-500 focus:border-primary-500"
                                    placeholder="Your first name"
                                    required="" />
                            </div>
                            <div>
                                <label htmlFor="last-name" className="block mb-2 text-sm font-medium">Last Name</label>
                                <input
                                    type="text"
                                    id="last-name"
                                    className="block p-3 w-full text-sm rounded-lg border focus:ring-primary-500 focus:border-primary-500"
                                    placeholder="Your last name"
                                    required="" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium">Your email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="block p-3 w-full text-sm rounded-lg border focus:ring-primary-500 focus:border-primary-500"
                                    placeholder="Your email"
                                    required="" />
                            </div>
                            <div>
                                <label htmlFor="phone-number" className="block mb-2 text-sm font-medium">Phone Number</label>
                                <input
                                    type="number"
                                    id="phone-number"
                                    className="block p-3 w-full text-sm rounded-lg border focus:ring-primary-500 focus:border-primary-500"
                                    placeholder="Your phone number"
                                    required="" />
                            </div>
                            <div className="col-span-2">
                                <label htmlFor="message" className="block mb-2 text-sm font-medium col-span-2">Your message</label>
                                <textarea
                                    id="message"
                                    rows="6"
                                    className="block p-2.5 w-full text-sm rounded-lg border focus:ring-primary-500 focus:border-primary-500"
                                    placeholder="Leave a comment...">
                                </textarea>
                                <p className="mt-4 text-sm">By submitting this form you agree to our <Link to="#" className="text-blue-700 hover:underline">terms and conditions </Link>
                                    and our <Link to="#" className="text-blue-700 hover:underline">privacy policy</Link> which explains how we may collect, use and disclose your personal information including to third parties.</p>
                            </div>
                            <button
                                type="submit"
                                className="flex justify-center w-1/2 py-3 px-5 font-medium text-center rounded-xl focus:ring-primary-300 hover:text-white text-black hover:bg-black bg-white border-2 border-black border-solid text-base uppercase"
                            >Send message</button>
                        </form>
                    </div>

                    <div className='grid grid-cols-1 col-span-1 gap-8 text-center sm:grid-cols-2 lg:grid-cols-1'>
                        <div>
                            <div className="flex justify-center items-center mx-auto mb-4 w-10 h-10 rounded-lg lg:h-16 lg:w-16">
                                <svg
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                                        clipRule="evenodd">
                                    </path>
                                </svg>
                            </div>
                            <p className="mb-2 text-xl font-bold">Company information:</p>
                            <p>NOVA<br />Tax id: VNXXXXXX</p>
                        </div>
                        <div>
                            <div className="flex justify-center items-center mx-auto mb-4 w-10 h-10 rounded-lg lg:h-16 lg:w-16">
                                <svg

                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                        clipRule="evenodd">
                                    </path>
                                </svg>
                            </div>
                            <p className="mb-2 text-xl font-semibold">Address:</p>
                            <p>Dong Tam, Hai Ba Trung, Ha Noi <br /> Zip Code/Postal code: 100000</p>
                        </div>
                        <div>
                            <div className="flex justify-center items-center mx-auto mb-4 w-10 h-10 rounded-lg lg:h-16 lg:w-16">
                                <svg
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z">
                                    </path>
                                </svg>
                            </div>
                            <p className="mb-2 text-xl font-semibold">Call us:</p>
                            <p class>Call us to speak to a member of our team. We are always happy to help.</p>
                            <p className="text-primary-600">+1 (646) 786-5060</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Contact