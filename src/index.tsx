import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import HomePage from "./routes/home";
import { Toaster } from "sonner";
import Template from "./components/container/block/tenplate";
import { Fragment } from "react/jsx-runtime";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root") as HTMLElement).render(
  <Fragment>
    <Toaster richColors position="top-center" />
    <RouterProvider router={router} />
  </Fragment>
);

reportWebVitals();
