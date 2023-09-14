import React, { useState } from "react";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaUserPlus,
} from "react-icons/fa";
import { IoMail } from "react-icons/io5";

type Props = {};

const UsersPage = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="min-h-screen">
      <h1 className="text-[30px] font-[400] p-4">Trinkle Users List</h1>
      <div className="w-full flex items-center justify-center">
        <div className="w-[95%] drop-shadow-2xl bg-white flex flex-col p-4 gap-1">
          <div className="flex items-center justify-between m-3 px-2">
            <input
              type="text"
              className="p-2 outline-none border rounded-tl-lg rounded-br-lg border-black"
              placeholder="name, username or Email"
            />
            <button className="flex items-center justify-center rounded-tl-lg rounded-br-lg bg-red-500 text-white gap-1 p-2">
              <IoMail />
              Send Message
            </button>
            <button className="flex items-center justify-center rounded-tl-lg rounded-br-lg  bg-blue-500 text-white gap-1 p-2 rounded-sm">
              <FaUserPlus />
              New User
            </button>
          </div>
          {/* table */}
          <div className="overflow-x-auto overflow-y-hidden">
            <table className=" w-full">
              <thead>
                <tr className="">
                  <th>
                    <input type="checkbox" />
                  </th>
                  <th className="">Client Name</th>
                  <th>Username</th>
                  <th>Account Balance</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Status</th>
                  <th>Date Registered</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="h-[60px]">
                  <th>
                    <input type="checkbox" />
                  </th>
                  <td className="">Godspower</td>
                  <td>Geepy</td>
                  <td>&#8358;2500</td>
                  <td>geepytechnologies@gmail.com</td>
                  <td>08106974201</td>
                  <td>
                    <button className="p-2 rounded-lg bg-green-600 text-white">
                      Active
                    </button>
                  </td>
                  <td>1 day ago</td>
                  <td className="">
                    <button className="p-2 bg-yellow-700 text-white">
                      Manage
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            {/* filter & pagination */}
            <div className="my-5">
              {/* filter */}
              <div className="flex gap-3">
                <select className="outline-none rounded-tl-lg rounded-br-lg border p-2 border-black">
                  <option value="10">10</option>
                </select>
                <select className="outline-none border rounded-tl-lg rounded-br-lg p-2 border-black">
                  <option value="Id">ID</option>
                  <option value="name">Name</option>
                  <option value="email">Email</option>
                  <option value="date">Signup Date</option>
                </select>
                <select className="outline-none border rounded-tl-lg rounded-br-lg p-2 border-black">
                  <option value="descending">Descending</option>
                  <option value="asscending">Ascending</option>
                </select>
              </div>
              {/* pagination */}
              <div className="flex items-center mt-4">
                <div className="w-6 h-6 flex items-center rounded-l-lg shadow-lg cursor-pointer justify-center border-2 border-white text-white bg-blue-500 text-center">
                  <FaAngleDoubleLeft className="" />
                </div>
                <div className="w-7 h-7 rounded-sm border border-gray-400 cursor-pointer text-center">
                  1
                </div>
                <div className="w-7 h-7 rounded-sm  border border-gray-400 cursor-pointer text-center">
                  2
                </div>
                <div className="w-7 h-7 rounded-sm  border border-gray-400 cursor-pointer text-center">
                  3
                </div>
                <div className="w-7 h-7 rounded-sm  border border-gray-400 cursor-pointer text-center">
                  4
                </div>
                <div className="w-6 h-6 flex items-center rounded-r-lg shadow-lg cursor-pointer justify-center border-2 border-white text-white bg-blue-500 text-center">
                  <FaAngleDoubleRight className="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* test  */}
      <div className="relative inline-block text-left">
        <button
          className="relative w-full bg-gray-100 border border-gray-300 rounded-md shadow-sm py-2 px-4 text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          Dropdown
        </button>
        <div
          className={`absolute z-10 mt-2 w-full rounded-md bg-white shadow-lg ${
            isOpen ? "" : "hidden"
          }`}
        >
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 12l-5-5h10l-5 5z" />
            </svg>
          </span>
          <div className="py-1 px-2 hover:bg-gray-100 cursor-pointer">
            Item 1
          </div>
          <div className="py-1 px-2 hover:bg-gray-100 cursor-pointer">
            Item 2
          </div>
          <div className="py-1 px-2 hover:bg-gray-100 cursor-pointer">
            Item 3
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
