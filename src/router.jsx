import HomePage from "./pages/HomePage";
import "./assets/fonts/MonumentExtended-Regular.otf";
import "./assets/fonts/MonumentExtended-Ultrabold.otf";
import EventsPage from "./pages/EventsPage";
import Execom from "./pages/Execom";
import { createBrowserRouter } from "react-router-dom";
import Execom23 from "./components/Execom23/Execom23";
import Execom22 from "./components/Exicom22/Exicom22";
<<<<<<< HEAD
import ArticleGrid from "./components/BlogSIte/ArticleGrid";
<<<<<<< HEAD
import BlogComponent from "./components/BlogComponent/BlogComponent";
=======
>>>>>>> origin/experimental
=======
>>>>>>> parent of e75aab1 (Merge pull request #7 from IEEE-SB-GEC-Palakkad/experimental)

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
<<<<<<< HEAD
  {
    path: "/blog",
    element: <ArticleGrid />,
  },
<<<<<<< HEAD
  {
    path: "/blog/:id",
    element: <BlogComponent />,
  }
=======
=======
>>>>>>> parent of e75aab1 (Merge pull request #7 from IEEE-SB-GEC-Palakkad/experimental)
  
>>>>>>> origin/experimental
]);
export default router;
