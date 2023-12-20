import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Login from "./pages/login/Login";
import "./styles/global.css";

function App() {
  const Layout = () => {
    return (
      <div className="main flex h-screen">
        <div className="menuContainer w-3 bg-white border-right-2 border-black-alpha-10 p-3">
          <Menu />
        </div>
        <div className="container w-full py-4 px-4">
          <div className="headerContainer pb-4">
            <NavBar />
          </div>
          <div className="outletFooterContainer flex flex-column justify-content-between">
            <div className="contentContainer w-full pb-4 relative">
              <Outlet />
            </div>
            <div className="footerContainer absolute bottom-0">
              <Footer />
            </div>
          </div>
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
      <RouterProvider router={router} />
    </>
  );
}

export default App;
