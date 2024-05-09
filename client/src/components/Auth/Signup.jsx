import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const registerSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(import.meta.env.VITE_BASE_URL + "/user/register", {
        ...user,
      });
      window.location.href = "/";
    } catch (err) {
      alert(err.msg);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 ">
      <h1 className="text-3xl font-bold mb-8 text-gray-400">SignUp</h1>
      <form
        onSubmit={registerSubmit}
        className="flex flex-col space-y-4 w-full max-w-md"
      >
        <div className="flex flex-col">
          <label
            htmlFor="name"
            className="text-sm font-medium mb-2 text-gray-400"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Name"
            autoComplete="off"
            value={user.name}
            onChange={onChangeInput}
            className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="text-sm font-medium mb-2 text-gray-400"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            autoComplete="off"
            value={user.email}
            onChange={onChangeInput}
            className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="password"
            className="text-sm font-medium mb-2 text-gray-400"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            required
            placeholder="Password"
            value={user.password}
            onChange={onChangeInput}
            className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className=" px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          SignUp
        </button>
      </form>
      <div className="flex items-center justify-between text-sm text-gray-500 mt-4">
        <Link to="/login" className="hover:underline">
          Already have an account? Login
        </Link>
      </div>
    </div>
  );
}

export default Signup;
