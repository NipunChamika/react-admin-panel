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
        <div className="menuContainer w-18rem bg-white border-right-2 border-black-alpha-10 py-2 px-2">
          <Menu />
        </div>
        <div className="container w-full py-3 px-4">
          <div className="headerContainer pb-4">
            <NavBar />
          </div>
          <div className="contentContainer w-full pb-4">
            <Outlet />
          </div>
          <div className="footerContainer ">
            <Footer />
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
