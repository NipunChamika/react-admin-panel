import profile from "../../assets/profile.png";
import { Button } from "primereact/button";
import "./navbar.css";
import { useContext } from "react";
import { UserContext } from "../../contexts/context";

const NavBar = () => {
  const userContext = useContext(UserContext);

  if (userContext === undefined) {
    console.log("UserContext not available.");
    return null;
  }

  const { isMenuVisible, setMenuVisible } = userContext;

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <>
      <div className="navbar w-full flex align-items-center justify-content-between">
        <div className="menuCollapser">
          <Button
            icon="pi pi-bars"
            rounded
            text
            className="icon text-gray-600 hover:bg-bluegray-50"
            onClick={toggleMenu}
          />
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
