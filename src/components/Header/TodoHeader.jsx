import React from "react";
// import logo from "./logo.png";
import CompletedTask from "../CompletedTask/CompletedTask";
function TodoHeader() {
  return (
    <React.Fragment>
      <nav className="flex items-center justify-between flex-wrap bg-gradient-to-br from-cyan-900 to-blue-800 p-4">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          {/* <img className="h-[60px] w-auto" src={logo} alt="" /> */}
          <a
          className="font-semibold text-2xl tracking-tight"
          href="/"
          >Todos List</a>
        </div>
        {/* <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div> */}
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto ">
          <div className="text-sm lg:flex-grow ">
            {/* <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 border-2 p-3 rounded-md"
              >
                Completed Task
              </a> */}
            {/* <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              >
                Examples
              </a>
              <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
              >
                Blog
              </a> */}
          </div>
          <div>
            <a
              href="/completedTask"
              className="inline-block font-semibold text-l px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-white-500 hover:bg-purple-800 mt-4 lg:mt-0"
            >
              Completed Task
            </a>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default TodoHeader;
