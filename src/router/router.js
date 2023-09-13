import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/Layout";

import HomePage from "../pages/HomePage";
import MoviePage from "../pages/MoviePage";
import NotFoundPage from "../pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/movie/:id",
        element: <MoviePage />,
      },
      {
        path: "/*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
