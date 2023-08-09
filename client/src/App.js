import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import LeftBar from "./components/leftBar/LeftBar";
import Navbar from "./components/navbar/Navbar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import "./style.scss";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  //actual user
  const { currentUser } = useContext(AuthContext);

  //theme
  const { darkMode } = useContext(DarkModeContext);
  //console.log(darkMode)

  //query
  const queryClient = new QueryClient();

  //Outlet
  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <div className={`theme-${darkMode ? "dark" : "light"}`}>
          <Navbar />
          <div style={{ display: "flex" }}>
            {/* <LeftBar /> */}
            <div style={{ flex: 7 }}>
              <Outlet />
            </div>
          </div>
        </div>
      </QueryClientProvider>
    );
  };

  //if not login, not show / nor /profile, go to /login
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  //Routes to paths
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      //where to show more the outlet
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
