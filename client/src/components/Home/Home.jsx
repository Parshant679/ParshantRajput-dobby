import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
function Home() {
  const [searchText, setSearchText] = useState(null);
  const [images, setImages] = useState([]);
  function handleInput(e) {
    const inputText = e.target.val;
    setSearchText(inputText);
  }
  return (
    <div className="item-center">
      <Navbar />
      {images.length === 0 && (
        <div className=" items-center m-64">
          <input
            className="px-4 py-1 w-full border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-xl"
            type="text"
            value={searchText}
            onChange={handleInput}
            placeholder="Search..."
          />
          {/* <CiSearch className="w-10  rounded-md focus:outline-none focus:ring focus:border-blue-500 " /> */}
        </div>
      )}
    </div>
  );
}

export default Home;
