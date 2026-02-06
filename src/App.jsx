import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Blog from "./components/Blog/Blog";
import ArticleDetails from "./components/ArticleDetails/ArticleDetails";
import NotFound from "./components/NotFound/NotFound";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/category/:keyword",
        element: <Blog />,
      },
      {
        path: "/blog/:slug",
        element: <ArticleDetails />,
      },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={Routers} />
    </>
  );
}
