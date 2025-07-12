import HomePage from "./pages/HomePage";
import "./assets/fonts/MonumentExtended-Regular.otf";
import "./assets/fonts/MonumentExtended-Ultrabold.otf";
import EventsPage from "./pages/EventsPage";
import Execom from "./pages/Execom";
import { createBrowserRouter } from "react-router-dom";
import Execom23 from "./components/Execom23/Execom23";
import Execom22 from "./components/Exicom22/Exicom22";
import ArticleGrid from "./components/BlogSIte/ArticleGrid";
import BlogComponent from "./components/BlogComponent/BlogComponent";
import Excelsior from "./components/Events/Excelsior"; // Import the new component

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
  {
    path: "/execom23",
    element: <Execom23 />,
  },
  {
    path: "/execom22",
    element: <Execom22 />,
  },
  {
    path: "/blog",
    element: <ArticleGrid />,
  },
  {
    path: "/blog/:id",
    element: <BlogComponent />,
  },
  {
    path: "/event/excelsior", // New route for the Excelsior page
    element: <Excelsior />,
  }
]);

export default router;
