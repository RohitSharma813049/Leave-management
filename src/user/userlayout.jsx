import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Outlet, Link } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import { GiThreeLeaves } from "react-icons/gi";
import { FaHistory } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

function LeaveLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const Name = "Rohit";

  
 const role = "work"; 

const nav = role === "work"
  ? [
      { link: "/admin", icon: MdOutlineDashboard, label: "Dashboard" },
      { link: "viewleave", icon: GiThreeLeaves, label: "View Leave" },
      { link: "leavehistory", icon: FaHistory, label: "Leave History" },
      { link: "/login", icon: IoLogOutOutline, label: "Logout" },
    ]
  : [
      { link: "/work", icon: MdOutlineDashboard, label: "Dashboard" },
      { link: "leaveapply", icon: GiThreeLeaves, label: "Apply Leave" },
      { link: "leavehistory", icon: FaHistory, label: "Leave History" },
      { link: "/login", icon: IoLogOutOutline, label: "Logout" },
    ];

  return (
    <>
      <div className="flex h-screen overflow-hidden">
        
        <div
          className={`fixed z-40 top-0 left-0 h-full bg-blue-500 text-white xl:w-64 2xl:w-90 lg:w-70 transform transition-transform duration-300  
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:static md:w-64`}
        >
          <div className="flex justify-center items-center h-[10%] mt-4 mb-6 gap-3 px-2">
            <img
              src="./image/icons8-leave-house-50.png"
              alt="Logo"
              className="h-12"
            />
            <p className="text-green-800 font-bold leading-5 text-center">
              Leave <br /> Management
            </p>
          </div>
          <ul className="list-none">
            {nav.map((navItem, index) => (
              <Link key={index} to={navItem.link}>
                <li className="p-2 hover:bg-blue-950 flex gap-2 cursor-pointer">
                  <navItem.icon className="mt-1" />
                  {navItem.label}
                </li>
              </Link>
            ))}
          </ul>
        </div>

        {isSidebarOpen && (
          <div
            className="fixed inset-0 z-30 bg-black opacity-40 md:hidden"
            onClick={toggleSidebar}
          ></div>
        )}

        {/* Main Content */}
        <div className="flex-1 p-4 ml-0 w-full">
          <button
            className="text-2xl mb-4 text-blue-600 md:hidden"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? <RxCross2 /> : <GiHamburgerMenu />}
          </button>

          <div className="bg-white rounded shadow p-4 h-full overflow-auto w-[100%]">
            <div className="text-2xl font-bold mb-4 flex items-center justify-end gap-4">
              <div className="md:text-xl">Welcome {Name}</div>
              <button className="text-3xl text-blue-700 hover:text-blue-900">
                <div className="relative">
                  <CgProfile className="text-3xl text-blue-700 cursor-pointer" />
                </div>
              </button>
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default LeaveLayout;
