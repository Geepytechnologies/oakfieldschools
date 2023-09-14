import React from "react";
import { AiFillDelete, AiFillEye } from "react-icons/ai";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

type Props = {};

const Deposits = (props: Props) => {
  return (
    <div>
      <h1>Manage Client Deposits</h1>
      {/* table */}
      <div>
        <table>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Amount</th>
            <th>Payment Method</th>
            <th>Status</th>
            <th>Date Created</th>
            <th>Action</th>
          </tr>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <td>1</td>
            <td>Godspower</td>
            <td>geepytechnologies@gmail.com</td>
            <td>&#8358;2500</td>
            <td>Transfer</td>
            <td>
              <button className="p-1 rounded-md bg-green-600 text-white">
                Completed
              </button>
            </td>
            <td>1 day ago</td>
            <td className="text-white flex flex-col gap-1">
              <button className="text-black flex items-center justify-center">
                <AiFillEye />
              </button>
              <button className="bg-red-500 flex items-center justify-center p-1 gap-1">
                <AiFillDelete />
                Delete
              </button>
            </td>
          </tr>
        </table>
        {/* filter & pagination */}
        <div>
          <p>Showing 1 to 10 of 231 entries</p>
          {/* filter */}
          <div>
            <select className="outline-none border p-2 border-black">
              <option value="10">10</option>
            </select>
            <select>
              <option value="Id">ID</option>
              <option value="name">Name</option>
              <option value="email">Email</option>
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>
            <select>
              <option value="descending">Descending</option>
              <option value="asscending">Ascending</option>
            </select>
          </div>
          {/* pagination */}
          <div className="flex items-center mt-4">
            <FaAngleDoubleLeft />
            <div className="w-6 h-6 border border-black text-center">1</div>
            <div className="w-6 h-6 border border-black text-center">2</div>
            <div className="w-6 h-6 border border-black text-center">3</div>
            <div className="w-6 h-6 border border-black text-center">4</div>
            <FaAngleDoubleRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deposits;
