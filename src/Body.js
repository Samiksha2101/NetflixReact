import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";

const Body = () => {
  return <RouterProvider router={appRouter}></RouterProvider>;
};

export const appRouter = createBrowserRouter([
  { path: "/", element: <Login></Login> },
  { path: "/browse", element: <Browse /> },
]);
export default Body;
