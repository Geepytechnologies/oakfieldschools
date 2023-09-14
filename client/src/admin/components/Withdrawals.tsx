import React, { useRef } from "react";
import { AiFillDelete, AiFillEye } from "react-icons/ai";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

type Props = {};

const Withdrawals = (props: Props) => {
  const tableRef = useRef<HTMLTableElement>(null);

  function copyTable() {
    const table = tableRef.current;

    if (table) {
      //   const range = document.createRange();
      //   range.selectNodeContents(table);

      const selection = window.getSelection();
      //   selection?.removeAllRanges();
      //   selection?.addRange(range);

      navigator.clipboard
        .writeText(table.innerText)
        .then(() => {
          alert("Table copied to clipboard!");
        })
        .catch((error) => {
          console.error("Failed to copy table: ", error);
        })
        .finally(() => {
          selection?.removeAllRanges();
        });
    }
  }
  function downloadTable() {
    const table = tableRef.current;

    if (table) {
      const rows = Array.from(table.rows);
      const headers = Array.from(rows.shift()?.cells || []).map(
        (cell) => cell.textContent
      );
      const csv = [headers.join(",")];

      for (const row of rows) {
        const cells = Array.from(row.cells).map((cell) => cell.textContent);
        csv.push(cells.join(","));
      }

      const blob = new Blob([csv.join("\n")], {
        type: "text/csv;charset=utf-8;",
      });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.setAttribute("href", url);
      link.setAttribute("download", "mytable.csv");
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      alert("Table downloaded as CSV!");
    }
  }
  function printTable() {
    const table = tableRef.current;

    if (table) {
      const printWindow = window.open("", "_blank");
      const printDocument = printWindow?.document;

      if (printDocument) {
        const printContent = `
          <html>
            <head>
              <title>Print Table</title>
              <style>
                table {
                  border-collapse: collapse;
                  margin: 1em 0;
                }
                th, td {
                  border: 1px solid black;
                  padding: 0.5em;
                }
              </style>
            </head>
            <body>
              ${table.outerHTML}
            </body>
          </html>
        `;

        printDocument.open();
        printDocument.write(printContent);
        printDocument.close();

        printWindow?.focus();
        printWindow?.print();

        setTimeout(function () {
          printWindow?.close();
        }, 1000);
      }
    }
  }

  return (
    <div>
      <h1>Manage Client Withdrawals</h1>
      {/* table */}
      <div>
        <div className="flex gap-1 text-white my-4">
          <button
            onClick={copyTable}
            className="p-2 bg-slate-500 rounded-md shadow-xl border-[3px] border-white"
          >
            Copy
          </button>
          <button
            onClick={downloadTable}
            className="p-2 bg-yellow-500 rounded-md shadow-xl border-[3px] border-white"
          >
            CSV
          </button>
          <button
            onClick={printTable}
            className="p-2 bg-pink-500 rounded-md shadow-xl border-[3px] border-white"
          >
            Print
          </button>
        </div>
        <table ref={tableRef} className="cursor-default">
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Amount</th>
            <th>Charge</th>
            <th>Total</th>
            <th>Payment Method</th>
            <th>Status</th>
            <th>Date Created</th>
            <th>Action</th>
          </tr>
          <tr className="hover:bg-[#e5e5e5] h-[50px]">
            <th>
              <input type="checkbox" />
            </th>
            <td>1</td>
            <td>Godspower</td>
            <td>geepytechnologies@gmail.com</td>
            <td>&#8358;2500</td>
            <td>&#8358;100</td>
            <td>&#8358;2600</td>
            <td>Transfer</td>
            <td>
              <button className="p-1 rounded-md bg-green-600 text-white">
                Completed
              </button>
            </td>
            <td>1 day ago</td>
            <td className="text-white">
              <button className="text-black flex items-center justify-center">
                <AiFillEye />
              </button>
            </td>
          </tr>
          <tr className="hover:bg-[#e5e5e5] h-[50px]">
            <th>
              <input type="checkbox" />
            </th>
            <td>1</td>
            <td>Godspower</td>
            <td>geepytechnologies@gmail.com</td>
            <td>&#8358;2500</td>
            <td>&#8358;100</td>
            <td>&#8358;2600</td>
            <td>Transfer</td>
            <td>
              <button className="p-1 rounded-md bg-green-600 text-white">
                Completed
              </button>
            </td>
            <td>1 day ago</td>
            <td className="text-white">
              <button className="text-black flex items-center justify-center">
                <AiFillEye />
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

export default Withdrawals;
