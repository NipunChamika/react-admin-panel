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
      <div className="main">
        <NavBar />
        <div className="container flex">
          <div className="menuContainer w-15rem py-2 px-3 border-right-2 border-black-alpha-10">
            <Menu />
          </div>
          <div className="contentContainer w-15rem py-2 px-3 w-full">
            <Outlet />
          </div>
        </div>
        <Footer />
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
