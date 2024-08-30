"use client";
import { useState } from "react";
import {
  FaUserCircle,
  FaIdBadge,
  FaUser,
  FaEnvelope,
  FaLock,
  FaLockOpen,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
export default function Signupform() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    repassword: "",
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form Data:", formData);
  };

  return (
    <div>
      <div className="h-[100vh] w-full flex justify-center items-center   bg-[url('/assets/signup-bg.png')] bg-cover bg-no-repeat bg-center bg-black  ">
        <aside className="  w-full max-w-md   ">
          <form action="" onSubmit={handleSubmit} className="signup-form p-6  ">
            <h1 className="text-left text-[#0466AE] font-bold text-3xl  m-0 mb-4">
              Sign Up
            </h1>

            <div className="flex flex-col items-center ">
              <div className="bg-black-100 w-full p-2 flex items-center mb-3 rounded-t-xl rounded-b-xl border border-white  ">
                <label htmlFor="firstname"></label>
                <FaUserCircle
                  className="text-white-500 ml-1"
                  color="#0466AE"
                  m-2
                />
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="Enter First Name"
                  value={formData.firstname}
                  onChange={handleChange}
                  required
                  className="py-2 w-full px-5 bg-black  text-white text-xs font-light outline-none rounded-t-xl rounded-b-xl "
                />
              </div>

              <div className="bg-black-100 w-full p-2 flex items-center mb-3 rounded-t-xl rounded-b-xl border border-white  ">
                <label htmlFor="lastname"></label>
                <FaIdBadge
                  className="text-white-500 ml-1"
                  color="#0466AE"
                  m-2
                />
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder="Enter Last Name"
                  value={formData.lastname}
                  onChange={handleChange}
                  required
                  className="py-2 w-full px-5 bg-black  text-white text-xs font-light outline-none rounded-t-xl rounded-b-xl "
                />
              </div>

              <div className="bg-black-100 w-full p-2 flex items-center mb-3 rounded-t-xl rounded-b-xl border border-white  ">
                <label htmlFor="username"></label>
                <FaUser className="text-white-500 ml-1" color="#0466AE" m-2 />
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Enter Username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  className="py-2 w-full px-5 bg-black  text-white text-xs font-light outline-none rounded-t-xl rounded-b-xl "
                />
              </div>

              <div className="bg-black-100 w-full p-2 flex items-center mb-3 rounded-t-xl rounded-b-xl border border-white  ">
                <label htmlFor="email"></label>
                <FaEnvelope
                  className="text-white-500 ml-1"
                  color="#0466AE"
                  m-2
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="py-2 w-full px-5 bg-black  text-white text-xs font-light outline-none rounded-t-xl rounded-b-xl "
                />
              </div>

              <div className="bg-black-100 w-full p-2 flex items-center mb-3 rounded-t-xl rounded-b-xl border border-white  ">
                <label htmlFor="password"></label>
                <FaLock className="text-white-500 ml-1" color="#0466AE" m-2 />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="py-2 w-full px-5 bg-black  text-white text-xs font-light outline-none rounded-t-xl rounded-b-xl "
                />
              </div>

              <div className="bg-black-100 w-full p-2 flex items-center mb-3 rounded-t-xl rounded-b-xl border border-white bg-opacity-40  ">
                <label htmlFor="repassword"></label>
                <FaLockOpen
                  className="text-white-500 ml-1"
                  color="#0466AE"
                  m-2
                />
                <input
                  type="password"
                  name="repassword"
                  id="repassword"
                  placeholder="Confirm Password"
                  value={formData.repassword}
                  onChange={handleChange}
                  required
                  className="py-2 w-full px-5 bg-black  text-white text-xs font-light outline-none rounded-t-xl rounded-b-xl bg-opacity-40 "
                />
              </div>
            </div>

            <div className="w-64 mb-3 flex mt-1">
              <label
                htmlFor="agreeToTerms"
                className="flex items-center text-xs text-white"
              >
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  id="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  required
                  className="mr-5 appearance-none w-[15px] h-[15px] rounded-full border border-[#565454] checked:bg-[#0466AE]"
                />
                I agree to all terms
              </label>
            </div>

            <button
              type="submit"
              className="bg-[#0466AE] text-white font-medium py-2 px-8 hover:text-black rounded-3xl  mt-2 mb-2"
            >
              {" "}
              Register{" "}
            </button>

            <br />

            <p className="text-white text-xs cursor-pointer mt-5">
              Already have an account?
              <a href="/signin">
                <span className="text-[#0466AE] px-3 ">Sign in</span>
              </a>
            </p>
          </form>
        </aside>
      </div>
    </div>
  );
}
