import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./components/ErrorPage/ErrorPage.tsx";
import Root from "./routes/root.tsx";
import Users from "./routes/users.tsx";
import UserProfile from "./routes/user-profile.tsx";
import SearchingResults from "./routes/searching-results.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to="/users" replace={true} />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "users/:id",
        element: <UserProfile />,
      },
      {
        path: "searching-results",
        element: <SearchingResults />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
