import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "../styles/index.css";
import HomePage from "./HomePage.jsx";
import ThemesPage from "./ThemesPage.jsx";
import BuildPage from "./BuildPage.jsx";
import TermsPage from "./TermsPage.jsx";
import ErrorPage from "./ErrorPage.jsx";
import Root from "./Root.jsx";
import { ThemeProvider } from "../context/ThemeContext.jsx";
import FormProvider from "../context/FormContext.jsx";

const Routes = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      { path: "themes", Component: ThemesPage },
      { path: "build", Component: BuildPage },
      { path: "terms-of-use", Component: TermsPage },
      { path: "*", Component: ErrorPage },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FormProvider>
      <ThemeProvider>
        <RouterProvider router={Routes} />
      </ThemeProvider>
    </FormProvider>
  </StrictMode>,
);
