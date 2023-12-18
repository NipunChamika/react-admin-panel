import logo from "../../assets/logo.webp";
import profile from "../../assets/profile.png";
import { Button } from "primereact/button";
import "./navbar.css";

const NavBar = () => {
  return (
    <>
      <div className="navbar w-full p-3 flex align-items-center justify-content-between">
        <div className="logo flex align-items-center font-semibold gap-1">
          <img src={logo} alt="Admin Panel Logo" className="w-3rem h-3rem" />
          <span>Swiftly</span>
        </div>
        <div className="icons flex align-items-center gap-3">
          <div className="user flex align-items-center gap-2">
            <img
              src={profile}
              alt="Profile Picture"
              className="w-2rem h-2rem"
            />
            <span>Nipun</span>
          </div>
          <Button
            icon="pi pi-cog"
            rounded
            text
            className="icon text-gray-600 hover:bg-bluegray-50"
          />
          {/* <i className="icon pi pi-cog"></i> */}
        </div>
      </div>
    </>
  );
};

export default NavBar;
