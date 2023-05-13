import { createBrowserRouter } from "react-router-dom";
import { Login } from "./pages/login/Login";
import { MainScreen } from "./pages/mainScreen/MainScreen";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/main-screen",
    element: <MainScreen />,
  },
]);
