import React, { useState } from "react";
import LinkButton from "../Utils/LinkButton";
import Logout from "../Auth/Logout";
function Navbar() {
  const [searchText, setSearchText] = useState("");
  const [isLoggedIn, setLogin] = useState(false);
  function handleInput(e) {
    const inputText = e.target.val;
    setSearchText(inputText);
  }

  return (
    <div className="flex flex-wrap justify-around">
      <div className="flex items-center">
        <input
          className="px-4 py-1 w-full border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-xl"
          type="text"
          value={searchText}
          onChange={handleInput}
          placeholder="Search..."
        />
        {/* <CiSearch className="w-10  rounded-md focus:outline-none focus:ring focus:border-blue-500 " /> */}
      </div>
      {!isLoggedIn && (
        <div className="flex felx-wrap items-center p-2">
          <LinkButton
            path="/login"
            title="Login"
            reqClass="text-cyan-500 p-2 "
          />

          <div className="px-2 py-2 rounded-xl bg-sky-700">
            <LinkButton
              path="/signup"
              title="Sign up"
              reqClass="text-stone-50"
            />
          </div>
        </div>
      )}
      {isLoggedIn && (
        <div className="flex p-2">
          <LinkButton
            path="/user/:id"
            title="Profile"
            reqClass="text-cyan-500 px-2"
          />
          <Logout />
        </div>
      )}
    </div>
  );
}

export default Navbar;
