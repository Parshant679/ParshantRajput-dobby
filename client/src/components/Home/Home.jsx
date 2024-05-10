import React, { useState, useContext } from "react";
import { CiSearch } from "react-icons/ci";
import { GlobalState } from "../../GlobalState";
import Navbar from "../Navbar/Navbar";
import Image from "../Image/Image";
import axios from "axios";
import "./Home.css";

function Home() {
  const state = useContext(GlobalState);
  const [searchText, setSearchText] = useState("");
  const [images, setImages] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  async function getImages() {
    const res = await axios.get(
      import.meta.env.VITE_BASE_URL +
        "/search?searchText=" +
        searchText +
        "&&pageNo=" +
        pageNo,
      {
        withCredentials: true,
      }
    );
    setImages(res.data.data);
  }

  function handleInput(e) {
    const inputText = e.target.val;
    setSearchText(inputText);
  }

  return (
    <div className="item-center flex-col">
      <Navbar data={state} />
      {images.length === 0 && searchText === "" && (
        <div className=" items-center m-64 ">
          <input
            className="px-4 py-1 w-full border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-xl"
            type="text"
            value={searchText}
            onChange={handleInput}
            placeholder="Search..."
          />
          <CiSearch
            className="w-10   ml-64 rounded-md focus:outline-none focus:ring focus:border-blue-500  bg-slate-300"
            onClick={getImages}
          />
        </div>
      )}
      {images.length !== 0 && searchText !== "" && (
        <div className="image__grid">
          {images.map((item) => {
            return <Image data={item} key={item._id} />;
          })}
        </div>
      )}
    </div>
  );
}

export default Home;
