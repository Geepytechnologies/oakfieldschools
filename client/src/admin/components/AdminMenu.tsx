import React, { useState, useRef, useEffect, HTMLAttributes } from "react";
import {
  FaHome,
  FaUserCircle,
  FaDownload,
  FaUpload,
  FaUserAlt,
  FaUserAltSlash,
} from "react-icons/fa";
import { AiOutlineStock } from "react-icons/ai";
import { TiArrowSortedUp } from "react-icons/ti";
import { IoSettingsSharp } from "react-icons/io5";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { HiAcademicCap } from "react-icons/hi";

type Props = {};

const AdminMenu = (props: Props) => {
  const [isOpen, setIsOpen] = useState<{ [key: string]: boolean }>({
    investments: false,
    administrators: false,
  });
  const toggleIsOpen = (section: string) => {
    setIsOpen({ ...isOpen, [section]: !isOpen[section] });
  };
  const arrowStyle = (section: string) =>
    `transform transition-transform duration-300 ${
      isOpen[section] ? "rotate-180" : ""
    }`;
  // Create a reference to the ordered list
  const investmentListRef = useRef<HTMLUListElement>(null);
  const administratorListRef = useRef<HTMLUListElement>(null);
  const settingsListRef = useRef<HTMLUListElement>(null);
  // Get the height of the ordered list
  useEffect(() => {
    if (investmentListRef.current) {
      investmentListRef.current.style.maxHeight = isOpen["investments"]
        ? investmentListRef.current.scrollHeight + "px"
        : "0px";
    }
  }, [isOpen]);

  useEffect(() => {
    if (administratorListRef.current) {
      administratorListRef.current.style.maxHeight = isOpen["administrators"]
        ? administratorListRef.current.scrollHeight + "px"
        : "0px";
    }
  }, [isOpen]);

  useEffect(() => {
    if (settingsListRef.current) {
      settingsListRef.current.style.maxHeight = isOpen["settings"]
        ? settingsListRef.current.scrollHeight + "px"
        : "0px";
    }
  }, [isOpen]);

  const [currentPage, setCurrentPage] = useState("");
  const location = useLocation();
  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location]);
  return (
    <div className="text-white h-auto px-2">
      <div className="flex w-full items-center justify-center">
        <div className="flex items-center gap-2">
          <HiAcademicCap className={`h-[50px] w-[50px] text-first`} />
          <span className="font-lora text-gray-800 tracking-[1px] font-[400] text-[20px] md:text-[30px]">
            Oakfield
          </span>
        </div>
      </div>
      <div className="bg-first">
        <div className="flex flex-col">
          <h2>Admin</h2>
        </div>
        <hr />
        {/* dashboard */}
        <Link
          to="/admin/dashboard"
          className={`flex gap-2 my-2 items-center rounded-md  p-2  ${
            currentPage === "/admin/dashboard"
              ? "bg-teal-500 text-white drop-shadow-xl"
              : " hover:text-[black] hover:bg-gray-200"
          }`}
        >
          <FaHome />
          <p>Dashboard</p>
        </Link>
        {/* Investments */}
        <div className="cursor-pointer">
          <div
            className={`flex gap-2 my-2 items-center rounded-md  p-2  ${
              currentPage.includes("plans") ||
              currentPage.includes("active-investments")
                ? "bg-teal-500 text-white drop-shadow-xl"
                : " hover:text-[black] hover:bg-gray-200"
            }`}
            onClick={() => toggleIsOpen("investments")}
          >
            <AiOutlineStock />
            <p>Students</p>
            <TiArrowSortedUp className={arrowStyle("investments")} />
          </div>

          <ul
            className=" pl-6 overflow-hidden flex flex-col gap-2"
            style={{ transition: "max-height 0.5s ease-in-out" }}
            ref={investmentListRef}
          >
            <li className="hover:bg-gray-100 p-1 px-2 rounded-md">
              <Link to="/admin/dashboard/plans">All Students</Link>
            </li>
            <li className="hover:bg-gray-100 p-1 px-2 rounded-md">
              <Link to="/admin/dashboard/active-investments">
                Student Details
              </Link>
            </li>
            <li className="hover:bg-gray-100 p-1 px-2 rounded-md">
              <Link to="/admin/dashboard/active-investments">
                Admission Form
              </Link>
            </li>
            <li className="hover:bg-gray-100 p-1 px-2 rounded-md">
              <Link to="/admin/dashboard/active-investments">
                Student Promotion
              </Link>
            </li>
          </ul>
        </div>
        {/* Manage users */}
        <Link
          to="/admin/dashboard/users"
          className={`flex gap-2 my-2 items-center rounded-md  p-2  ${
            currentPage.includes("users")
              ? "bg-teal-500 text-white drop-shadow-2xl"
              : " hover:text-[black] hover:bg-gray-200"
          }`}
        >
          <FaUserCircle />
          <p>Manage Users</p>
        </Link>
        {/* Manage Deposits */}
        <Link
          to="/admin/dashboard/deposits"
          className={`flex gap-2 my-2 items-center rounded-md  p-2  ${
            currentPage.includes("deposits")
              ? "bg-teal-500 text-white drop-shadow-2xl"
              : " hover:text-[black] hover:bg-gray-200"
          }`}
        >
          <FaDownload />
          <p>Manage Deposits</p>
        </Link>
        {/* Manage Withdrawals */}
        <Link
          to="/admin/dashboard/withdrawals"
          className={`flex gap-2 my-2 items-center rounded-md  p-2  ${
            currentPage.includes("withdrawals")
              ? "bg-teal-500 text-white drop-shadow-2xl"
              : " hover:text-[black] hover:bg-gray-200"
          }`}
        >
          <FaUpload />
          <p>Manage Withdrawals</p>
        </Link>
        {/* Administrators */}
        <div className="cursor-pointer">
          <div
            className={`flex gap-2 my-2 items-center rounded-md  p-2  ${
              currentPage.includes("administrator")
                ? "bg-teal-500 text-white drop-shadow-xl"
                : " hover:text-[black] hover:bg-gray-200"
            }`}
            onClick={() => toggleIsOpen("administrators")}
          >
            <FaUserAlt />
            <p>Administrator(s)</p>
            <TiArrowSortedUp className={arrowStyle("administrators")} />
          </div>
          <div className="">
            <ul
              className="list-disc pl-6 overflow-hidden flex flex-col gap-2"
              style={{ transition: "max-height 0.5s ease-in-out" }}
              ref={administratorListRef}
              // hidden={!isOpen["administrators"]}
            >
              <li className="hover:bg-gray-100 p-1 px-2 rounded-md">
                <Link to="/admin/dashboard/administrator/add">Add Manager</Link>
              </li>
              <li className="hover:bg-gray-100 p-1 px-2 rounded-md">
                <Link to="/admin/dashboard/administrator/manage">
                  Manage Administrator(s)
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Settings */}
        <div className="cursor-pointer">
          <div
            className={`flex gap-2 my-2 items-center rounded-md  p-2  ${
              currentPage.includes("settings")
                ? "bg-teal-500 text-white drop-shadow-xl"
                : " hover:text-[black] hover:bg-gray-200"
            }`}
            onClick={() => toggleIsOpen("settings")}
          >
            <IoSettingsSharp />
            <p>Settings</p>
            <TiArrowSortedUp className={arrowStyle("settings")} />
          </div>
          <div className="">
            <ul
              className="list-disc pl-6 overflow-hidden flex flex-col gap-2"
              style={{ transition: "max-height 0.5s ease-in-out" }}
              ref={settingsListRef}
            >
              <li className="hover:bg-gray-100 p-1 px-2 rounded-md">
                <Link to="/admin/dashboard/settings/app-settings">
                  App Settings
                </Link>
              </li>
              <li className="hover:bg-gray-100 p-1 px-2 rounded-md">
                <Link to="/admin/dashboard/settings/terms&privacy">
                  Terms & Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Leads */}
        <Link
          to="/admin/dashboard/leads"
          className={`flex gap-2 my-2 items-center rounded-md  p-2  ${
            currentPage.includes("leads")
              ? "bg-teal-500 text-white drop-shadow-2xl"
              : " hover:text-[black] hover:bg-gray-200"
          }`}
        >
          <FaUserAltSlash />
          <p>Leads</p>
        </Link>
        {/* about App */}
        <Link
          to="/admin/dashboard/about"
          className={`flex gap-2 my-2 items-center rounded-md  p-2  ${
            currentPage.includes("about")
              ? "bg-teal-500 text-white drop-shadow-2xl"
              : " hover:text-[black] hover:bg-gray-200"
          }`}
        >
          <BsFillInfoCircleFill />
          <p>About web app</p>
        </Link>
      </div>
    </div>
  );
};

export default AdminMenu;
