import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import MintPage from "./routes/mint";
import HomePage from "./routes/home";
import { Toaster } from "sonner";
import Template from "./components/container/block/tenplate";
import { Fragment } from "react/jsx-runtime";
import CheckoutPage from "./routes/checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Template />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/mint",
        element: <MintPage />,
      },
      {
        path: "/mint/:title",
        element: <CheckoutPage />,
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
