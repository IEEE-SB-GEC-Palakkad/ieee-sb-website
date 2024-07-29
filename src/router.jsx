import HomePage from "./pages/HomePage";
import "./assets/fonts/MonumentExtended-Regular.otf";
import "./assets/fonts/MonumentExtended-Ultrabold.otf";
import EventsPage from "./pages/EventsPage";
import Execom from "./pages/Execom";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/events",
    element: <EventsPage />,
  },
  {
    path: "/execom",
    element: <Execom />,
  },
]);
export default router;
