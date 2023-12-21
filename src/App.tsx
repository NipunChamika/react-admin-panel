import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Login from "./pages/login/Login";
import "./styles/global.css";
import { UserContext } from "./contexts/context";
import { useEffect, useState } from "react";

function App() {
  const [editUser, setEditUser] = useState(false);
  const [isMenuVisible, setMenuVisible] = useState(true);

  useEffect(() => {
    console.log(isMenuVisible);
  }, [isMenuVisible]);

  const Layout = () => {
    return (
      <div className="main flex ">
        {isMenuVisible && (
          <div
            className="menuContainer w-3 bg-white border-none p-2"
            style={{ boxShadow: "rgba(113, 122, 131, 0.11) 0px 7px 30px 0px" }}
          >
            <Menu />
          </div>
        )}
        <div className="container w-full py-4 px-4">
          <div className="headerContainer pb-4">
            <NavBar />
          </div>
          {/* <div className="outletFooterContainer flex flex-column justify-content-between"> */}
          <div className="contentContainer w-full px-2 py-2">
            <Outlet />
          </div>
          <div className="footerContainer px-2 pt-4">
            <Footer />
          </div>
          {/* </div> */}
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/users",
          element: <Users />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <>
      <UserContext.Provider
        value={{ editUser, setEditUser, isMenuVisible, setMenuVisible }}
      >
        <RouterProvider router={router} />
      </UserContext.Provider>
    </>
  );
}

export default App;
