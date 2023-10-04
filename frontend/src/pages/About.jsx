import React from 'react'
import Layout from '../components/layout/Layout'
import mem1 from '../assets/images/member-1.png'
import mem2 from '../assets/images/member-2.png'
import mem3 from '../assets/images/member-3.png'
import mem4 from '../assets/images/member-4.png'
import teams from '../assets/images/teams-1.png'

const About = () => {
    return (
        <Layout>

            <div className="max-w-screen-xl lg:px-6 px-4 sm:py-16 py-8 mx-auto">
                <div className="flex flex-col lg:flex-row justify-between gap-8">
                    <div className="w-full lg:w-5/12 flex flex-col justify-start">
                        <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-black pb-4">About Us</h1>
                        <p className="font-normal text-base leading-6 text-black-600 text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div className="w-full lg:w-8/12">
                        <img className="w-full h-full" aria-hidden src={teams} alt="A group of People" />
                    </div>
                </div>

                <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                    <div className="w-full lg:w-5/12 flex flex-col justify-start">
                        <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-black pb-4">Our Story</h1>
                        <p className="font-normal text-base leading-6 text-black text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className="w-full lg:w-8/12 md:pt-2">
                        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                            <div className="p-4 pb-6 flex justify-center flex-col items-center">
                                <img className="md:block hidden" aria-hidden src={mem1} alt="Alexa featured Image" />
                                <img className="md:hidden block w-full px-5" aria-hidden src={mem1} alt="Alexa featured Image" />
                                <p className="font-medium text-xl leading-5 text-black mt-4">Alexa</p>
                            </div>
                            <div className="p-4 pb-6 flex justify-center flex-col items-center">
                                <img className="md:block hidden" aria-hidden src={mem2} alt="Olivia featured Image" />
                                <img className="md:hidden block w-full px-5" aria-hidden src={mem2} alt="Olivia featured Image" />
                                <p className="font-medium text-xl leading-5 text-black mt-4">Olivia</p>
                            </div>
                            <div className="p-4 pb-6 flex justify-center flex-col items-center">
                                <img className="md:block hidden" aria-hidden src={mem3} alt="Liam featued Image" />
                                <img className="md:hidden block w-full px-5" aria-hidden src={mem3} alt="Liam featued Image" />
                                <p className="font-medium text-xl leading-5 text-black mt-4">Liam</p>
                            </div>
                            <div className="p-4 pb-6 flex justify-center flex-col items-center">
                                <img className="md:block hidden" aria-hidden src={mem4} alt="Elijah featured image" />
                                <img className="md:hidden block w-full px-5" aria-hidden src={mem4} alt="Elijah featured image" />
                                <p className="font-medium text-xl leading-5 text-black mt-4">Elijah</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default About