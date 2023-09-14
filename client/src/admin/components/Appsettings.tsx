import React from "react";

type Props = {};

const Appsettings = (props: Props) => {
  return (
    <div className="">
      <h1 className="m-6 font-[500] font-popp text-[2rem]">App Settings</h1>
      <div className="w-full flex items-center justify-center">
        <div className="bg-white shadow-2xl w-[90%]">
          <button className="text-white bg-teal-500 m-6 p-3 rounded-md cursor-default ">
            Website Information
          </button>
          <div className="w-full flex items-center justify-center my-4">
            <form action="" className="flex flex-col gap-2 w-[90%]">
              <div className="flex flex-col">
                <label
                  className="after:content-['*'] after:ml-0.5 after:text-red-500 after:text-[20px] after:font-[500]"
                  htmlFor=""
                >
                  Website Name
                </label>
                <input
                  className="outline-0 border border-gray-300 rounded-md p-2"
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div className="flex flex-col">
                <label
                  className="after:content-['*'] after:ml-0.5 after:text-red-500 after:text-[20px] after:font-[500]"
                  htmlFor=""
                >
                  Website Title
                </label>
                <input
                  className="outline-0 border border-gray-300 rounded-md p-2"
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div className="flex flex-col">
                <label
                  className="after:content-['*'] after:ml-0.5 after:text-red-500 after:text-[20px] after:font-[500]"
                  htmlFor=""
                >
                  Website Keywords
                </label>
                <input
                  className="outline-0 border border-gray-300 rounded-md p-2"
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div className="flex flex-col">
                <label
                  className="after:content-['*'] after:ml-0.5 after:text-red-500 after:text-[20px] after:font-[500]"
                  htmlFor=""
                >
                  Website Url
                </label>
                <input
                  className="outline-0 border border-gray-300 rounded-md p-2"
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div className="flex flex-col ">
                <label
                  className="after:content-['*'] after:ml-0.5 after:text-red-500 after:text-[20px] after:font-[500]"
                  htmlFor=""
                >
                  Website Description
                </label>
                <textarea
                  className="outline-0 border border-gray-300 min-h-[100px] rounded-md p-2"
                  name=""
                  id=""
                />
              </div>
              <div className="flex flex-col">
                <label
                  className="after:content-['*'] after:ml-0.5 after:text-red-500 after:text-[20px] after:font-[500]"
                  htmlFor=""
                >
                  Logo (Recommended size; max width, 200px and max height
                  100px.)
                </label>
                <input
                  className="outline-0 border border-gray-300 rounded-md p-2"
                  type="file"
                  name=""
                  id=""
                />
              </div>
              <div className="flex flex-col">
                <label
                  className="after:content-['*'] after:ml-0.5 after:text-red-500 after:text-[20px] after:font-[500]"
                  htmlFor=""
                >
                  Favicon (Recommended type: png, size: max width, 32px and max
                  height 32px.)
                </label>
                <input
                  className="outline-0 border border-gray-300 rounded-md p-2"
                  type="file"
                  name=""
                  id=""
                />
              </div>
              <div className="flex items-center justify-center w-full">
                <button
                  className="text-white font-open font-[500] min-w-[200px] w-[70%] md:w-[25%] bg-teal-500 m-6 p-3 rounded-md"
                  type="submit"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appsettings;
