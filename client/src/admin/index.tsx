import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Active from "./components/Active";
import Addmanager from "./components/Addmanager";
import AdminMenu from "./components/AdminMenu";
import Appsettings from "./components/Appsettings";
import Dashboard from "./components/Dashboard";
import Deposits from "./components/Deposits";
// import Login from "./components/Login";
import ManageAdmin from "./components/ManageAdmin";
import Navbar from "./components/Navbar";
import Plans from "./components/Plans";
import Terms from "./components/Terms";
import UserPage from "./components/UserPage";
import UsersPage from "./components/UsersPage";
import Withdrawals from "./components/Withdrawals";

type Props = {};

const Admin = (props: Props) => {
  return (
    <>
      <div className="flex w-full">
        <div id="menu" className="flex-1 adminmenu overflow-y-scroll">
          <AdminMenu />
        </div>
        <div id="page" className="flex-[4] bg-[#f8f9fa]">
          <Navbar />
          <div className="">
            <Routes>
              <Route index path="/*" element={<Dashboard />}></Route>
              <Route index path="/dashboard/plans" element={<Plans />}></Route>
              <Route
                index
                path="/dashboard/active-investments"
                element={<Active />}
              ></Route>
              <Route path="/dashboard/deposits" element={<Deposits />} />
              <Route path="/dashboard/withdrawals" element={<Withdrawals />} />
              <Route
                path="/dashboard/administrator/add"
                element={<Addmanager />}
              />
              <Route
                path="/dashboard/administrator/manage"
                element={<ManageAdmin />}
              />
              <Route
                path="/dashboard/settings/app-settings"
                element={<Appsettings />}
              />
              <Route
                path="/dashboard/settings/terms&privacy"
                element={<Terms />}
              />
              <Route path="/dashboard/users" element={<UsersPage />} />
              <Route path="/dashboard/users/:id" element={<UserPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
