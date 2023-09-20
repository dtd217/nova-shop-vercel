import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/auth';
import { toast } from "react-toastify";
import SearchInput from '../form/SearchInput';
import axios from 'axios';
import { useCart } from '../../context/cart';
// import { Button, Dropdown } from 'antd';
import { Collapse, Dropdown, initTE } from "tw-elements";
initTE({ Collapse, Dropdown });

const Header = () => {
    const [cart] = useCart();
    const [categories, setCategories] = useState([]);
    const [isOpenMenu, setOpenMenu] = useState(false);
    const [isOpenMobileMenu, setOpenMobileMenu] = useState(false);
    const [isOpenCategory, setOpenCategory] = useState(false);
    const [auth, setAuth] = useAuth();

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

    const handleDropDownMenu = () => {
        setOpenMenu(!isOpenMenu);
    };
    const handleDropDownCategory = () => {
        setOpenCategory(!isOpenCategory);
    };
    const handleDropDownMobileMenu = () => {
        setOpenMobileMenu(!isOpenMobileMenu);
    };

    const handleLogout = () => {
        setAuth({
            ...auth,
            user: null,
            token: "",
        });
        localStorage.removeItem("auth");
        toast.success("Logout Successfully");
    };

    useEffect(() => {
        getAllCategories();
    }, [])

    return (<>
        <nav className="navbar bg-white border-b border-gray-300 relative">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center navbar-brand">
                    NOVASHOP
                </Link>
                <SearchInput />

                <button onClick={handleDropDownMobileMenu} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100">
                    <i className="fa-solid fa-bars fa-xl"></i>
                </button>

                <div className={`${isOpenMobileMenu ? "block" : "hidden"} w-full md:block md:w-auto`}>
                    <ul className="relative flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                        <li>
                            <Link
                                to="/"
                                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0"
                                aria-current="page"
                            >HOME</Link>
                        </li>
                        <li>
                            <button onClick={handleDropDownCategory} className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded md:w-auto md:border-0 md:hover:text-blue-700 md:p-0">
                                CATEGORIES
                                {isOpenCategory ? <i className="fa-solid fa-caret-up ml-1.5"></i> : <i className="fa-solid fa-caret-down ml-1.5"></i>}
                            </button>
                            <div
                                id="categories-dropdown"
                                className={`${isOpenCategory ? 'block' : 'hidden'} dropdown-menu-categories z-10 bg-white rounded-md md:w-44 w-full shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]`}
                            >
                                <ul className=" text-black max-w-screen-xl">
                                    <li>
                                        <Link
                                            to={`/categories`}
                                            className="block px-4 py-2 rounded text-black hover:bg-blue-500 hover:text-white uppercase">
                                            All categories
                                        </Link>
                                    </li>
                                    {categories?.map((c) => (
                                        <li key={c._id}>
                                            <Link
                                                to={`/category/${c.slug}`}
                                                className="block px-4 py-2 rounded text-black hover:bg-blue-500 hover:text-white uppercase">
                                                {c.name}
                                            </Link>
                                        </li>
                                    ))}    
                                </ul>
                            </div>
                        </li>

                        {!auth?.user ? (<>
                            <li>
                                <Link to="/register" className="block py-2 pl-3 pr-4 text-gray-900 rounded md:border-0 hover:text-blue-700 md:p-0">
                                    REGISTER
                                </Link>
                            </li>
                            <li>
                                <Link to="/login" className="block py-2 pl-3 pr-4 text-gray-900 rounded md:border-0 hover:text-blue-700 md:p-0">
                                    LOGIN
                                </Link>
                            </li></>
                        ) : (<>
                            <li>
                                <Link
                                    onClick={handleDropDownMenu}
                                    to='#'
                                    className="flex items-center justify-between py-2 pl-3 pr-4 text-gray-900 rounded md:border-0 hover:text-blue-700 md:p-0"
                                >
                                    {auth?.user?.name}
                                    {isOpenMenu ? <i className="fa-solid fa-caret-up ml-1.5"></i> : <i className="fa-solid fa-caret-down ml-1.5"></i>}
                                </Link>
                            </li>
                            <div className={`${isOpenMenu ? 'block' : 'hidden'} dropdown-menu z-10 bg-white rounded-md md:w-44 w-full shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]`}>
                                <ul className="text-black max-w-screen-xl">
                                    <li>
                                        <Link
                                            to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`}
                                            className="block px-4 py-2 rounded text-black hover:bg-blue-500 hover:text-white">
                                            DASHBOARD
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/login"
                                            className="block px-4 py-2 rounded text-black hover:bg-blue-500 hover:text-white"
                                            onClick={handleLogout}>
                                            LOGOUT
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </>)}
                        <li>
                            <Link to="/cart" className="relative block py-2 pl-3 pr-4 text-gray-900 rounded md:border-0 hover:text-blue-700 md:p-0">
                                {/* <Badge count={cart?.length}> */}
                                <i className="fa-solid fa-bag-shopping"></i>
                                <span className='absolute top-0 bg-red-500 rounded-full text-sm text-white w-5 h-5 flex items-center justify-center translate-x-3 md:-translate-y-2 translate-y-0'>{cart?.length}</span>
                                {/* </Badge> */}
                            </Link>
                        </li>
                    </ul>
                </div >
            </div >
        </nav >
    </>)
}

export default Header