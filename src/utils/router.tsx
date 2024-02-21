import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/homePage";
import MoviePage from "../pages/moviePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: < HomePage />,
  },
  {
    path: "/movie/:id",
    element: < MoviePage />,
  },
]);

export default router;
