import React from "react";
import { useSearch } from "../../context/search";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SearchInput = () => {
   const [values, setValues] = useSearch();
   const navigate = useNavigate();

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         const { data } = await axios.get(
            `/api/v1/product/search/${values.keyword}`
         );
         setValues({ ...values, results: data });
         navigate("/search");
      } catch (error) {
         console.log(error);
      }
   };
   return (
      <div>
         <form
            className="d-flex search-form"
            role="search"
            onSubmit={handleSubmit}
         >
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
            <div className="relative sm:w-80 flex items-center justify-center h-full border rounded-lg bg-gray-50 mt-2 lg:mt-0 w-64">
               <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <i className="fa-solid fa-magnifying-glass"></i>
               </div>
               <input
                  type="search"
                  id="default-search"
                  className="block w-64 sm:w-80 h-10 p-4 pl-10 text-sm text-gray-900 rounded-lg border-none bg-gray-100 focus:ring-0 focus:border-0"
                  placeholder="Search here..."
                  value={values.keyword}
                  onChange={(e) => setValues({ ...values, keyword: e.target.value })}
               />
               <button
                  type="submit"
                  className="text-white h-full top-0 absolute right-0 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-r-lg text-sm px-4 py-2">Search</button>
            </div>
         </form>
      </div>
   );
};

export default SearchInput;