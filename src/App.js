import React from "react";
import reactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import RestroMenu from "./components/RestroMenu";

// Creating App Layout //
const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
export default App
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Body />,
      },
      {
        path: 'About',
        element: <About />,
      },
      {
        path: 'ContactUs',
        element: <ContactUs />,
      },
      {
        path: 'RestroMenu/:resid',
        element: <RestroMenu />,
      },
    ],
  },
]);

const root = reactDOM.createRoot(document.getElementById("root"));

root.render(
  <RouterProvider router={appRouter}>
    <Router>
      <Routes>
        <Route
          path="/"
          element={<App />}
        />
      </Routes>
    </Router>
  </RouterProvider>
);
