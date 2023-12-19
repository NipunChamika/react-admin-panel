import { Link } from "react-router-dom";
import logo from "../../assets/logo.webp";

const Menu = () => {
  return (
    <>
      <div className="menuContainer flex flex-column gap-5">
        <div className="logoContainer flex align-items-center text-xl font-bold gap-1">
          <img src={logo} alt="Admin Panel Logo" className="w-4rem h-4rem" />
          <span>Swiftly</span>
        </div>
        <div className="itemContainer flex flex-column gap-3">
          <div className="item flex flex-column gap-2">
            <span className="title text-sm">DASHBOARD</span>
            <Link to={"/"} className="no-underline">
              <div className="flex flex-row align-items-center gap-3 py-2 px-3 hover:bg-gray-200 text-base border-round-xl">
                <i className="pi pi-home text-gray-500"></i>
                <span className="text-black-alpha-90">Home</span>
              </div>
            </Link>
          </div>

          <div className="item flex flex-column gap-2">
            <span className="title text-sm">PAGES</span>
            <Link to={"/users"} className="no-underline">
              <div className="flex flex-row align-items-center gap-3 py-2 px-3 hover:bg-gray-200 text-base border-round-xl">
                <i className="pi pi-users text-gray-500"></i>
                <span className="text-black-alpha-90">Users</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
