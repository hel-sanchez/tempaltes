import React, { useState } from "react";
import {
  ChatDots,
  ChevronBarLeft,
  ChevronBarRight,
  DoorOpen,
  Gear,
  House,
  PersonCircle,
} from "react-bootstrap-icons";
import Contract from "../Contract/page.jsx";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <div
        className={`flex flex-col h-screen bg-[#191919] text-white items-center  ${
          isCollapsed ? "w-20" : "w-64"
        } p-4 transition-all rounded-3xl border-r-2 border-[#e9a409]`}
      >
        <div className="flex items-center justify-center mb-8 mt-4 gap-4">
          <img
            src="./logo-dangling-s-darkmode.png"
            alt="Logo"
            className={`transition-all ${
              isCollapsed ? "hidden" : "block"
            } w-36`}
          />
          {isCollapsed ? (
            <ChevronBarRight
              onClick={toggleSidebar}
              className="cursor-pointer text-4xl text-[#e6a310] p-1 hover:text-[white]"
            />
          ) : (
            <ChevronBarLeft
              onClick={toggleSidebar}
              className="cursor-pointer text-4xl text-[#e6a310] p-1 hover:text-[white]"
            />
          )}
        </div>

        <ul className="space-y-6 flex-grow">
          <li>
            <a
              href="#"
              className="flex flex-col justify-center items-center space-y-1 text-[#e9a409] hover:text-[white] text-lg p-2 rounded-lg"
            >
              <House className="text-2xl" />
              <span className={`${isCollapsed ? "hidden" : "inline"}`}>
                Home
              </span>
            </a>
          </li>

          <li>
            <a
              href="#"
              className="flex flex-col justify-center items-center space-y-1 text-[#e9a409] hover:text-[white] text-lg p-2 rounded-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                />
              </svg>
              <span className={`${isCollapsed ? "hidden" : "inline"}`}>
                Templates
              </span>
            </a>
          </li>

          <li>
            <a
              href="#"
              className="flex flex-col justify-center items-center space-y-1 text-[#e9a409] hover:text-[white] text-lg p-2 rounded-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                />
              </svg>
              <span className={`${isCollapsed ? "hidden" : "inline"}`}>
                Projects
              </span>
            </a>
          </li>

          <li>
            <a
              href="#"
              className="flex flex-col justify-center items-center space-y-1 text-[#e9a409] hover:text-[white] text-lg p-2 rounded-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v7.5m2.25-6.466a9.016 9.016 0 0 0-3.461-.203c-.536.072-.974.478-1.021 1.017a4.559 4.559 0 0 0-.018.402c0 .464.336.844.775.994l2.95 1.012c.44.15.775.53.775.994 0 .136-.006.27-.018.402-.047.539-.485.945-1.021 1.017a9.077 9.077 0 0 1-3.461-.203M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                />
              </svg>
              <span className={`${isCollapsed ? "hidden" : "inline"}`}>
                Proposals
              </span>
            </a>
          </li>
        </ul>

        <hr className="w-full border-t-2 border-[#e9a409]" />

        {/* Account, Feedback, Settings, Logout */}
        <ul className="mt-auto">
          <li>
            <a
              href="#"
              className="flex items-center space-x-2 text-[#e9a409] hover:text-white text-lg p-2 rounded-lg"
            >
              <PersonCircle
                className={`${isCollapsed ? "inline" : "hidden"} text-2xl mt-2`}
              />
              <span className={`${isCollapsed ? "hidden" : "inline"}`}>
                Account
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center space-x-2 text-[#e9a409] hover:text-white text-lg p-2 rounded-lg"
            >
              <ChatDots
                className={`${isCollapsed ? "inline" : "hidden"} text-2xl mt-2`}
              />
              <span className={`${isCollapsed ? "hidden" : "inline"}`}>
                Feedback
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center space-x-2 text-[#e9a409] hover:text-white text-lg p-2 rounded-lg"
            >
              <Gear
                className={`${isCollapsed ? "inline" : "hidden"} text-2xl mt-2`}
              />
              <span className={`${isCollapsed ? "hidden" : "inline"}`}>
                Settings
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center space-x-2 text-[#e9a409] hover:text-white text-lg p-2 rounded-lg"
            >
              <DoorOpen
                className={`${isCollapsed ? "inline" : "hidden"} text-2xl mt-2`}
              />
              <span className={`${isCollapsed ? "hidden" : "inline"}`}>
                Logout
              </span>
            </a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-grow p-6 transition-all bg-[#191919] overflow-y-auto">
      <div className="flex items-center justify-between mb-6">
          <span className="text-3xl font-bold tracking-wider text-[#e9a409]">
            Greetings, User!
          </span>

          <div className="relative flex items-center ml-4">
            <input
              type="text"
              placeholder="Search templates, projects, proposals..."
              className="px-4 py-2 rounded-lg border-2 border-[#e9a409] bg-[#191919] focus:outline-none text-[#e9a409] w-80"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#e9a409"
              className="absolute right-2 w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 16.5c2.625 0 4.5-1.875 4.5-4.5S13.625 7.5 11 7.5 6.5 9.375 6.5 12s1.875 4.5 4.5 4.5zM21 21l-4.35-4.35"
              />
            </svg>
          </div>

          {isCollapsed && (
            <img
              src={"/logo-dangling-s-darkmode.png"}
              alt="Simple Projex Logo"
              width={150}
              height={150}
            />
          )}
        </div>
        <Contract />
      </div>
    </div>
  );
};

export default Sidebar;
