import React from "react";

const CategoryForm = ({ handleSubmit, value, setValue }) => {
   return (
      <>
         <form onSubmit={handleSubmit}>
            <input
               type="text"
               className="bg-gray-50 border border-gray-300 text-black rounded-lg focus:ring-blue-500 focus:border-blue-500 inline-block w-full p-2.5"
               placeholder="Enter new category"
               value={value}
               onChange={(e) => setValue(e.target.value)}
            />

            <button type="submit" className="px-5 py-2 mt-4 rounded-lg bg-blue-600 text-white hover:bg-blue-700 text-lg">
               Submit
            </button>
         </form>
      </>
   );
};

export default CategoryForm;