import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage/ErrorPage.tsx";
import Root from "./routes/root.tsx";
import Users from "./routes/users.tsx";
import UserProfile from "./routes/user-profile.tsx";
import SearchingResults from "./routes/searching-results.tsx";
import { Header } from "./components/Header/Header.tsx";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: (
      <>
        <Header />
        <Outlet />
      </>
    ),
    children: [
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
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
