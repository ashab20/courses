import { useState } from "react";
import { Link } from "react-router-dom";
import LogoImage from "../../assets/images/logo.png";

// import UserDropdown from "../Dropdowns/UserDropdown";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = useState("hidden");
  // const router = useRouter();
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <Link to="/">
            <img src={LogoImage} alt={"logo"} width="120px" />
          </Link>

          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Admin Layout Pages
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link
                  className={"text-xs uppercase py-3 font-bold block text-lightBlue-500 hover:text-lightBlue-600"}
                  to="/admin/dashboard/"
                >
                  <i className={"fas fa-tv mr-2 text-sm text-blueGray-300"}></i>{" "}
                  Dashboard
                </Link>
              </li>

              <li className="items-center">
                <Link to="/admin/courses" className={"text-xs uppercase py-3 font-bold block text-lightBlue-500 hover:text-lightBlue-600"}>
                  <i
                    className={"fas fa-tools mr-2 text-sm text-blueGray-300"}
                  ></i>{" "}
                  Courses
                </Link>
              </li>

              <li className="items-center">
                <Link to="/admin/students" className={"text-xs uppercase py-3 font-bold block text-lightBlue-500 hover:text-lightBlue-600"}>
                  <i
                    className={"fas fa-table mr-2 text-sm text-blueGray-300"}
                  ></i>{" "}
                  Students
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
