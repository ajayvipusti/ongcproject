import React, { useState } from "react";
import { MdGroups, MdHealing } from "react-icons/md";
import classNames from "classnames";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CircleLogo } from "../logos/CircleLogo";
import {
  AiFillHome,
  AiFillSetting,
  AiOutlineDown,
  AiOutlineUp,
} from "react-icons/ai";
import { BsFillFileBarGraphFill, BsPencilSquare } from "react-icons/bs";
import { SiChatbot, SiSimpleanalytics } from "react-icons/si";
import { FaUsers } from "react-icons/fa";
import { BiCategoryAlt } from "react-icons/bi";
import { MdCategory } from "react-icons/md";
import { RiUserSettingsFill } from "react-icons/ri";
import { BiCurrentLocation } from "react-icons/bi";
import { HiDocumentReport } from "react-icons/hi";

const linkClass =
  "flex items-center gap-2 font-light px-3 my-0.5 py-2 hover:bg-neutral-900 hover:no-underline active:bg-neutral-900 rounded-sm text-base";

const Sidebar = ({ showSideBar, setShowSideBar }) => {
  const [showSetting, setShowSetting] = useState(false);
  const { pathname } = useLocation();

  const [showSelfHelf, setShowSelfHelp] = useState(false);
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [showAdminConsole, setShowAdminConsole] = useState(false);
  const [showContentManagement, setShowContentManagement] = useState(false);
  const [showContentManagement2, setShowContentManagement2] = useState(false);
  const [showSelfHeal, setShowSelfHeal] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [showSystem, setShowSystem] = useState(false);

  const navigate = useNavigate();

  const contentManagementList = [
    {
      title: "CSAT Update",
      path: "solutions",
    },
    {
      title: "CSAT Report",
      path: "proactivesolution",
    },
  ];

  const contentManagementList2 = [
    {
      title: "Category",
      path: "categoryinfo",
    },
    {
      title: "SubCategory",
      path: "subcategoryinfo",
    },
    {
      title: "Area Info",
      path: "areainfo",
    },
    {
      title: "Query",
      path: "queryinfo",
    },
  ];

  const systemList = [
    {
      title: "System Table",
      path: "systemtable",
    },
    {
      title: "User Info",
      path: "userinfo",
    },
  ];

  const selfHealList = [
    {
      title: "Agent Version",
      path: "agentversion",
    },
  ];

  const advancedList = [
    {
      title: "User Version",
      path: "userversions",
    },
    {
      title: "CSAT Setting",
      path: "setting",
    },
    {
      title: "CSAT Close Setting",
      path: "closesetting",
    },
  ];
  // const contentManagementList = ['Customize Images','Customize About Us', 'Customize Home-Page', 'Notice (App & Portal)', 'Upload Resources', 'Create Page', 'Page List', 'Categories', 'Sub-Categories', 'Solutions', 'Proactive Solution','Auto Mailer']

  const analytics = [
    {
      title: "Summary",
      path: "summary",
    },
  ];

  // const analytics =['Summary', "Search", 'Visitors', "Solution", "User", "Incident Feedback", "Searched Query", "User Feedback", "App Version", "Download Reports"]

  const adminConsoleList = [
    {
      title: "Run Solutions Remotely",
      path: "",
    },
  ];
  // const adminConsoleList = ['Run Solutions Remotely', "Update Self Help App"]

  return (
    <div
      className={`flex flex-col h-screen transition-all overflow-y-scroll no-scrollbar delay-150 duration-150 z-50 bg-primary ${
        showSideBar
          ? " translate-x-0 w-64 p-3 transition-all duration-100 delay-100  "
          : " -translate-x-60 transition-all p-0 duration-100 w-0 delay-100"
      } inset-y-0 left-0 absolute lg:relative text-white`}
    >
      <div className="flex items-center justify-center gap-2 px-1 lg:py-2 py-2">
        <Link to="/admin" className="cursor-pointer">
          <img src="/logo.png" alt="CIPL Logo" className="h-8" />
        </Link>
      </div>
      <hr className={`${showSideBar ? "py-1" : "hidden"} py-1`} />
      <div className="py-2 flex flex-1 flex-col gap-0.5">
        <Link
          to={"/admin"}
          className={classNames(
            pathname === "/admin"
              ? "bg-neutral-900 delay-150 duration-150 transition-all  text-white"
              : "text-white bg-gray-800 delay-150 duration-150 transition-all hover:text-white",
            linkClass
          )}
        >
          <span className="text-xl">
            <AiFillHome />
          </span>
          Home
        </Link>
        <div className="py-0.5 flex flex-col gap-0.5">
          <div
            onClick={() => navigate("/admin/userinfo")}
            className={classNames(
              pathname === "/admin/userinfo"
                ? "bg-neutral-900 delay-150 duration-150 transition-all  text-white"
                : "text-white bg-gray-800 delay-150 duration-150 transition-all hover:text-white",
              linkClass
            )}
          >
            <button className="flex items-center ">
              <FaUsers
                className={`mr-2 rotate-360 delay-200 duration-200 transition-all}`}
              />
              System
            </button>
          </div>
        </div>

        <div className="py-0.5 flex flex-col gap-0.5">
          <div
            onClick={() => setShowContentManagement(!showContentManagement)}
            className="flex justify-between p-2 cursor-pointer rounded items-center bg-neutral-900 delay-150 duration-150 transition-all text-white"
          >
            <button className="flex items-center ">
              <BsFillFileBarGraphFill
                className={`mr-2 ${
                  showContentManagement
                    ? "rotate-360 delay-200 duration-200 transition-all"
                    : "rotate-360 delay-200 duration-200 transition-all"
                }`}
              />
              CSAT
            </button>
            {showContentManagement ? <AiOutlineUp /> : <AiOutlineDown />}
          </div>
          {showContentManagement &&
            contentManagementList?.map((x, index) => (
              <React.Fragment key={index}>
                <button
                  onClick={() => navigate(`/admin/${x?.path}`)}
                  className="opacity-100 transition-opacity bg-gray-800 p-1.5 duration-500 delay-500"
                >
                  <span className=" flex items-center pl-2">
                    <CircleLogo />
                    {x?.title}
                  </span>
                </button>
              </React.Fragment>
            ))}
        </div>

        <div className="py-0.5 flex flex-col gap-0.5">
          <div
            onClick={() => setShowContentManagement2(!showContentManagement2)}
            className="flex justify-between p-2 cursor-pointer rounded items-center bg-neutral-900 delay-150 duration-150 transition-all text-white"
          >
            <button className="flex items-center ">
              <BsFillFileBarGraphFill
                className={`mr-2 ${
                  showContentManagement2
                    ? "rotate-360 delay-200 duration-200 transition-all"
                    : "rotate-360 delay-200 duration-200 transition-all"
                }`}
              />
              Smax
            </button>
            {showContentManagement2 ? <AiOutlineUp /> : <AiOutlineDown />}
          </div>
          {showContentManagement2 &&
            contentManagementList2?.map((x, index) => (
              <React.Fragment key={index}>
                <button
                  onClick={() => navigate(`/admin/${x?.path}`)}
                  className="opacity-100 transition-opacity bg-gray-800 p-1.5 duration-500 delay-500"
                >
                  <span className=" flex items-center pl-2">
                    <CircleLogo />
                    {x?.title}
                  </span>
                </button>
              </React.Fragment>
            ))}
        </div>
        <div className="py-0.5 flex flex-col gap-0.5">
          <div
            onClick={() => navigate("/admin/chatbot")}
            className={classNames(
              pathname === "/admin/userinfo"
                ? "bg-neutral-900 delay-150 duration-150 transition-all  text-white"
                : "text-white bg-gray-800 delay-150 duration-150 transition-all hover:text-white",
              linkClass
            )}
          >
            <button className="flex items-center ">
              <SiChatbot
                className={`mr-2 rotate-360 delay-200 duration-200 transition-all}`}
              />
              Chatbot
            </button>
          </div>
        </div>
        <div className="py-0.5 flex flex-col gap-0.5">
          {showSelfHelf && (
            <div className="py-0.5 flex flex-col gap-0.5">
              <div
                onClick={() => setShowAnalytics(!showAnalytics)}
                className="flex justify-between p-2 cursor-pointer rounded items-center bg-neutral-900 delay-150 duration-150 transition-all text-white"
              >
                <button className="flex items-center ">
                  <SiSimpleanalytics
                    className={`mr-2 ${
                      showAnalytics
                        ? "rotate-360 delay-200 duration-200 transition-all"
                        : "-rotate-360 delay-200 duration-200 transition-all"
                    }`}
                  />
                  Analytics
                </button>
                {showAnalytics ? <AiOutlineUp /> : <AiOutlineDown />}
              </div>
              {showAnalytics &&
                analytics?.map((x, index) => (
                  <React.Fragment key={index} className="block">
                    <button
                      onClick={() => navigate(`/admin/${x?.path}`)}
                      className="opacity-100 transition-opacity bg-gray-800 p-1.5 duration-500 delay-500"
                    >
                      <span className=" flex items-center pl-2">
                        <CircleLogo />
                        {x?.title}
                      </span>
                    </button>
                  </React.Fragment>
                ))}
            </div>
          )}

          {showSelfHelf && (
            <div className="py-0.5 flex flex-col gap-0.5">
              <div
                onClick={() => setShowAdminConsole(!showAdminConsole)}
                className="flex justify-between p-2 cursor-pointer rounded items-center bg-neutral-900 delay-150 duration-150 transition-all text-white"
              >
                <button className="flex items-center ">
                  <AiFillSetting
                    className={`mr-2 ${
                      showAdminConsole
                        ? "rotate-180 delay-200 duration-200 transition-all"
                        : "-rotate-180 delay-200 duration-200 transition-all"
                    }`}
                  />
                  Admin Console
                </button>
                {showAdminConsole ? <AiOutlineUp /> : <AiOutlineDown />}
              </div>
              {showAdminConsole &&
                adminConsoleList?.map((x, index) => (
                  <React.Fragment key={index} className="block">
                    <Link
                      to={`/admin/${x?.path}`}
                      className="opacity-100 transition-opacity bg-gray-800 p-1.5 duration-500 delay-500"
                    >
                      <span className=" flex items-center pl-2">
                        <CircleLogo />
                        {x?.title}
                      </span>
                    </Link>
                  </React.Fragment>
                ))}
            </div>
          )}
        </div>
        <div className="py-0.5 flex flex-col gap-0.5">
          <div
            onClick={() => navigate("/admin/feedback")}
            className="flex justify-between p-2 cursor-pointer rounded items-center bg-neutral-900 delay-150 duration-150 transition-all text-white"
          >
            <button className="flex items-center ">
              <BsPencilSquare className="pr-2" size={26} />
              Feedback
            </button>
          </div>
        </div>

        <div className="py-0.5 flex flex-col gap-0.5">
          <div
            onClick={() => setShowSelfHeal(!showSelfHeal)}
            className="flex justify-between p-2 cursor-pointer rounded items-center bg-neutral-900 delay-150 duration-150 transition-all text-white"
          >
            <button className="flex items-center ">
              <MdHealing
                className={`mr-2 ${
                  showSelfHeal
                    ? "rotate-180 delay-200 duration-200 transition-all"
                    : "-rotate-180 delay-200 duration-200 transition-all"
                }`}
              />
              Self Heal
            </button>
            {showSelfHeal ? <AiOutlineUp /> : <AiOutlineDown />}
          </div>
          {showSelfHeal &&
            selfHealList?.map((x, index) => (
              <React.Fragment key={index}>
                <Link
                  to={`/admin/${x?.path}`}
                  className="opacity-100 transition-opacity bg-gray-800 p-1.5 duration-500 delay-500"
                >
                  <span className=" flex items-center pl-2">
                    <CircleLogo />
                    {x?.title}
                  </span>
                </Link>
              </React.Fragment>
            ))}
        </div>
        <div className="py-0.5 flex flex-col gap-0.5">
          <div
            onClick={() => navigate("/admin/comingsoon")}
            className="flex justify-between p-2 cursor-pointer rounded items-center bg-neutral-900 delay-150 duration-150 transition-all text-white"
          >
            <button className="flex items-center ">
              <FaUsers
                className={`mr-2 rotate-360 delay-200 duration-200 transition-all}`}
              />
              Facility & Users
            </button>
          </div>
        </div>

        <div className="py-0.5 flex flex-col gap-0.5">
          <div
            onClick={() => navigate("/admin/report")}
            className={classNames(
              pathname === "/admin/userinfo"
                ? "bg-neutral-900 delay-150 duration-150 transition-all  text-white"
                : "text-white bg-gray-800 delay-150 duration-150 transition-all hover:text-white",
              linkClass
            )}
          >
            <button className="flex items-center ">
              <HiDocumentReport
                className={`mr-2 rotate-360 delay-200 duration-200 transition-all}`}
              />
              Report
            </button>
          </div>
        </div>
      </div>
      {/* Advance Sidebar Menu */}
      <div className="py-2 flex flex-col gap-0.5">
        <div
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="flex justify-between p-2 cursor-pointer rounded items-center bg-neutral-900 delay-150 duration-150 transition-all text-white"
        >
          <button className="flex items-center ">
            <RiUserSettingsFill
              className={`mr-2 ${
                showAdvanced
                  ? "rotate-360 delay-200 duration-200 transition-all"
                  : "-rotate-360 delay-200 duration-200 transition-all"
              }`}
            />
            Advance
          </button>
          {showAdvanced ? <AiOutlineUp /> : <AiOutlineDown />}
        </div>
        {showAdvanced &&
          advancedList?.map((x, index) => (
            <React.Fragment key={index}>
              <Link
                to={`/admin/${x?.path}`}
                className="opacity-100 transition-opacity bg-gray-800 p-1.5 duration-500 delay-500"
              >
                <span className=" flex items-center pl-2">
                  <CircleLogo />
                  {x?.title}
                </span>
              </Link>
            </React.Fragment>
          ))}
        {showAdvanced && (
          <a
            href={"/assets/CIPL.exe"}
            download={"CIPL.exe"}
            className="opacity-100 transition-opacity bg-gray-800 p-1.5 duration-500 delay-500"
          >
            <span className=" flex items-center pl-2">
              <CircleLogo />
              Download Agents
            </span>
          </a>
        )}
      </div>
    </div>
  );
};

function SidebarLink({ link }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(link.path)}
      className={classNames(
        pathname === link.path
          ? "bg-neutral-900 delay-150 duration-150 transition-all  text-white"
          : "text-white bg-gray-800 delay-150 duration-150 transition-all hover:text-white",
        linkClass
      )}
    >
      <span className="text-xl">
        <MdGroups />
      </span>
      {link.label}
    </button>
  );
}

export default Sidebar;
