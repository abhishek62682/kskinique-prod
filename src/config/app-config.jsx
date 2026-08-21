import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home";

import AppLayout from "../layout/AppLayout";
import ContactUs from "../pages/ContactUs";
import TreatmentsPage from "../pages/TreatmentsPage";
import ServiceCategoryPage from "../pages/ServiceCategoryPage";
import ServiceDetailsPage from "../pages/ServiceDetailsPage";

import AboutPage from "../pages/AboutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
       {
        path: "services",
        element:<TreatmentsPage />
      },

       {
        path: "services/:category",
        element: <ServiceCategoryPage />
      },

       {
        path: "services/:category/:slug",
        element: <ServiceDetailsPage />
      },

       {
        path: "contact",
        element: <ContactUs />,
      },
    ],
  },
]);

export default router;