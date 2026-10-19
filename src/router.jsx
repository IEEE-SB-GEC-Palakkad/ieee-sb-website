/* eslint-disable react-refresh/only-export-components */
import HomePage from "./pages/HomePage";
import "./assets/fonts/MonumentExtended-Regular.otf";
import "./assets/fonts/MonumentExtended-Ultrabold.otf";
import EventsPage from "./pages/EventsPage";
import Execom from "./pages/ExecomPage";
import {
  createBrowserRouter,
  ScrollRestoration,
  Outlet
} from "react-router-dom";
import Reise from "./components/Events/Reise/Reise";
import Excelsior25 from "./components/Events/Excelsior2025/Excelsior25";

const Layout = () => {
  return (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HomePage />
      },
      {
        path: "events",
        element: <EventsPage />
      },
      {
        path: "execom",
        element: <Execom defaultYear="2026" />
      },
      {
        path: "execom25",
        element: <Execom defaultYear="2025" />
      },
      {
        path: "execom24",
        element: <Execom defaultYear="2024" />
      },
      {
        path: "execom23",
        element: <Execom defaultYear="2023" />
      },
      {
        path: "execom22",
        element: <Execom defaultYear="2022" />
      },
      {
        path: "event/reise",
        element: <Reise />
      },
      {
        path: "excelsior",
        element: <Excelsior25 />
      }
    ]
  }
], {
  basename: import.meta.env.BASE_URL
});

export default router;
