import React from "react";
import { TiDownload } from "react-icons/ti";
import { AiOutlineUserDelete, AiOutlineStock } from "react-icons/ai";
import { MdPendingActions } from "react-icons/md";
import { RiUserStarLine } from "react-icons/ri";
import { TbTransferIn, TbUsers } from "react-icons/tb";
import Piechart from "../charts/Piechart";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div>
      <div className="flex items-center justify-between bg-first pb-8 px-2">
        <div className="flex flex-col gap-2 text-white">
          <p className="font-[600] text-[25px]">Dashboard</p>
          <p>welcome, Oakfield international schools</p>
        </div>
        <div className="flex gap-2">
          <button className="border border-green-400 text-green-400 p-2">
            Deposits
          </button>
          <button className="border border-red-400 text-red-400 p-2">
            Withdrawals
          </button>
          <button className="bg-blue-500 text-white p-2">Users</button>
        </div>
      </div>
      {/* info section */}
      <div className=" w-[90%] mx-auto flex justify-center z-[200] rounded-md -translate-y-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-8 w-[95%] ">
          <div className="flex items-center gap-2 shadow-2xl bg-white p-3 rounded-md">
            <div>
              <TiDownload className="text-green-600 text-[30px]" />
            </div>
            <div>
              <p>Total Deposit</p>
              <p>&#8358; 10000</p>
            </div>
          </div>
          <div className="flex items-center gap-2 shadow-2xl bg-white p-3 rounded-md">
            <div>
              <MdPendingActions className="text-yellow-600 text-[30px]" />
            </div>
            <div>
              <p>Pending Deposit(s)</p>
              <p>&#8358; 1000</p>
            </div>
          </div>
          <div className="flex items-center gap-2 shadow-2xl bg-white p-3 rounded-md">
            <div>
              <TbTransferIn className="text-red-600 text-[30px]" />
            </div>
            <div>
              <p>Total Withdrawal</p>
              <p>&#8358; 3000</p>
            </div>
          </div>
          <div className="flex items-center gap-2 shadow-2xl bg-white p-3 rounded-md">
            <div>
              <TbTransferIn className="text-yellow-600 text-[30px]" />
            </div>
            <div>
              <p>Pending Withdrawal</p>
              <p>&#8358; 1000</p>
            </div>
          </div>
          <div className="flex items-center gap-2 shadow-2xl bg-white p-3 rounded-md">
            <div>
              <TbUsers className="text-green-500 text-[30px]" />
            </div>
            <div>
              <p>Total Users</p>
              <p>1000</p>
            </div>
          </div>
          <div className="flex items-center gap-2 shadow-2xl bg-white p-3 rounded-md">
            <div>
              <AiOutlineUserDelete className="text-red-600 text-[30px]" />
            </div>
            <div>
              <p>Blocked Users</p>
              <p>0</p>
            </div>
          </div>
          <div className="flex items-center gap-2 shadow-2xl bg-white p-3 rounded-md">
            <div>
              <RiUserStarLine className="text-green-500 text-[30px]" />
            </div>
            <div>
              <p>Active Users</p>
              <p>1000</p>
            </div>
          </div>
          <div className="flex items-center gap-2 shadow-2xl bg-white p-3 rounded-md">
            <div>
              <AiOutlineStock className="text-green-600 text-[30px]" />
            </div>
            <div>
              <p>Investment Plans</p>
              <p>10</p>
            </div>
          </div>
        </div>
      </div>
      {/* chart section */}
      <Piechart
        title="Win Probability"
        series={[70, 20, 10]}
        colors={["#275be8", "#47b4ca", "#c4e8ef"]}
      />
    </div>
  );
};

export default Dashboard;
