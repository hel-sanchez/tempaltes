import React, { useState, useEffect } from "react";
import {
  ChatDots,
  ChevronBarLeft,
  ChevronBarRight,
  DoorOpen,
  Gear,
  House,
  LightbulbFill,
  PersonCircle,
  PlugFill,
  SearchHeart,
} from "react-bootstrap-icons";
import Contract from "../Contract/page.jsx";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const storedMode = localStorage.getItem("isDarkMode");
    if (storedMode) {
      setIsDarkMode(storedMode === "true");
    }
  }, []);

  // Save dark mode preference to localStorage whenever it changes.
  useEffect(() => {
    localStorage.setItem("isDarkMode", isDarkMode);
  }, [isDarkMode]);

  return (
    <div
      className={`flex h-screen overflow-hidden ${
        isDarkMode ? "bg-[#191919] text-white" : "bg-white text-black"
      }`}
    >
      <div
        className={`flex flex-col h-screen items-center ${
          isDarkMode ? "bg-[#191919] text-white" : "bg-white text-black"
        } ${
          isCollapsed ? "w-21" : "w-64"
        } p-4 transition-all rounded-3xl border-r-2 border-[#e9a409]`}
      >
        <div className="flex items-center justify-center mb-8 mt-4 gap-2">
          {/* Logo */}
          <img
            src={
              isDarkMode
                ? "./logo-dangling-s-darkmode.png"
                : "./logo-dangling-s.png"
            }
            alt="Logo"
            className={`transition-all w-36 ${
              isCollapsed ? "hidden" : "block"
            }`}
          />

          {/* Dark Mode Toggle & Chevron Button (Always on the same row as the logo) */}
          <div className="inline-flex items-center">
            {isCollapsed ? (
              <ChevronBarRight
                onClick={toggleSidebar}
                className={`cursor-pointer text-4xl p-0 ${
                  isDarkMode
                    ? "text-[#e9a409] hover:text-white"
                    : "text-[#191919] hover:text-[#e9a409]"
                }`}
              />
            ) : (
              <ChevronBarLeft
                onClick={toggleSidebar}
                className={`cursor-pointer text-4xl p-0 ${
                  isDarkMode
                    ? "text-[#e9a409] hover:text-[white]"
                    : "text-[#191919] hover:text-[#e9a409]"
                }`}
              />
            )}

            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full border-2 border-[#e9a409] transition-all ${
                isDarkMode
                  ? "bg-[#e9a409] text-[#191919] hover:bg-[white] hover:text-[#e9a409]"
                  : "bg-[#191919] text-[#e9a409] hover:text-[#191919] hover:bg-[#e9a409]"
              }`}
            >
              {isDarkMode ? (
                <PlugFill className="text-xl" />
              ) : (
                <LightbulbFill className="text-xl" />
              )}
            </button>
          </div>
        </div>

        <ul className="space-y-6 flex-grow font-bold">
          <li>
            <a
              href="#"
              className={`flex flex-col justify-center items-center space-y-1 text-lg p-2 rounded-lg ${
                !isDarkMode
                  ? "text-[#191919] hover:text-[#e9a409]"
                  : "text-[#e9a409] hover:text-white"
              }`}
            >
              <House className="text-4xl" />
              <span className={`${isCollapsed ? "hidden" : "inline"}`}>
                Home
              </span>
            </a>
          </li>

          <li>
            <a
              href="#"
              className={`flex flex-col justify-center items-center space-y-1 text-lg p-2 rounded-lg ${
                !isDarkMode
                  ? "text-[#191919] hover:text-[#e9a409]"
                  : "text-[#e9a409] hover:text-white"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-10"
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
              className={`flex flex-col justify-center items-center space-y-1  text-lg p-2 rounded-lg ${
                !isDarkMode
                  ? "text-[#191919] hover:text-[#e9a409]"
                  : "text-[#e9a409] hover:text-white"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-10"
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
              className={`flex flex-col justify-center items-center space-y-1 text-lg p-2 rounded-lg ${
                !isDarkMode
                  ? "text-[#191919] hover:text-[#e9a409]"
                  : "text-[#e9a409] hover:text-white"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-10"
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

        <hr
          className={`w-full border-t-2 ${
            isDarkMode ? "border-[#e9a409]" : "border-[#191919]"
          }`}
        />

        {/* Account, Feedback, Settings, Logout */}
        <ul className="mt-auto">
          <li>
            <a
              href="#"
              className={`flex items-center space-x-2 text-lg p-2 rounded-lg ${
                isDarkMode
                  ? "text-[#e9a409] hover:text-white"
                  : "text-black hover:text-[#e9a409]"
              }`}
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
              className={`flex items-center space-x-2 text-lg p-2 rounded-lg ${
                isDarkMode
                  ? "text-[#e9a409] hover:text-white"
                  : "text-black hover:text-[#e9a409]"
              }`}
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
              className={`flex items-center space-x-2 text-lg p-2 rounded-lg ${
                isDarkMode
                  ? "text-[#e9a409] hover:text-white"
                  : "text-black hover:text-[#e9a409]"
              }`}
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
              className={`flex items-center space-x-2 text-lg p-2 rounded-lg ${
                isDarkMode
                  ? "text-[#e9a409] hover:text-white"
                  : "text-black hover:text-[#e9a409]"
              }`}
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
      <div
        className={`flex-grow p-6 transition-all ${
          isDarkMode ? "bg-[#191919] text-white" : "bg-white text-black"
        } overflow-y-auto`}
      >
        <div className="flex items-center justify-between mb-6">
          <span
            className={`text-3xl font-bold tracking-wider ${
              isDarkMode ? "text-[#e9a409]" : "text-black"
            }`}
          >
            Greetings, User!
          </span>

          <div className="relative flex items-center ml-4">
            <input
              type="text"
              placeholder="Search templates, projects, proposals..."
              className={`px-4 py-2 rounded-lg border-2 ${
                isDarkMode ? "border-[#e9a409]" : "border-[#191919]"
              } ${
                isDarkMode
                  ? "bg-[#191919] text-[#e9a409]"
                  : "bg-white text-black"
              } focus:outline-none w-80`}
            />
            <SearchHeart
              className={`absolute right-2 ${
                isDarkMode ? "text-[#e9a409]" : "text-black"
              }`}
            />
          </div>

          {isCollapsed && (
            <img
              src={
                isDarkMode
                  ? "./logo-dangling-s-darkmode.png"
                  : "./logo-dangling-s.png"
              }
              alt="Simple Projex Logo"
              width={150}
              height={150}
            />
          )}
        </div>
        <Contract isDarkMode={isDarkMode} />
      </div>
    </div>
  );
};

export default Sidebar;
