import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const SearchFeild = () => {
  return (
    <div className="bg-white w-max py-1.5 px-2 flex gap-2 items-center drop-shadow-md shadow-gray rounded-xl">
      <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray"/>
      <input placeholder="Search" className="bg-transparent outline-none"/>
    </div>
  );
};

export default SearchFeild;
