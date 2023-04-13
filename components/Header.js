import Link from "next/link";
import React from "react";
import { useAuth } from "../contexts/AuthContext";

const Header = () => {
  const { currentUser, logout, login } = useAuth();
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href={"/"}>Homepage</Link>
            </li>
            <li>
              <Link href={"/addEmployee"}>Add Employee</Link>
            </li>
            <li>
              <Link href={"/addAttendance"}>Add Attendance</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link
          href={"/"}
          className="btn btn-ghost normal-case text-sm md:text-lg"
        >
          JOM JOM FOAM & PORDA GALLERY
        </Link>
      </div>
      <div className="navbar-end">
        {currentUser ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="">
              <button className="btn btn-ghost btn-circle">
                <div className="avatar">
                  <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
              </button>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow-2xl border border-gray-200 bg-base-100 rounded-box w-72"
            >
              <div className="flex items-center justify-around">
                <div className="avatar">
                  <div className="w-14 rounded-full">
                    <img src="http://localhost:3000/_next/image?url=https%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1aGPwGNgRWyJt5OJDtbz1KIORTubroEIZ&w=128&q=75" />
                  </div>
                </div>
                <div>
                  <h2>Md Shahjalal</h2>
                  <div>mdshahjalal.bu@gmail.com</div>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 my-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
                  // disabled={loading}
                  onClick={logout}
                >
                  Logout
                </button>
              </div>
            </ul>
          </div>
        ) : (
          <>
            <Link href={"/register"} className="btn btn-sm">
              Signup
            </Link>
            <Link href={"/login"} className="btn btn-sm ml-2">
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
