import React, { Suspense, lazy } from "react";
import reactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
// import ContactUs from "./components/ContactUs";
import RestroMenu from "./components/RestroMenu";


const ContactUs=lazy(()=>import('./components/ContactUs'))

const About=lazy(()=>import('./components/About'))


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
        element: <Suspense fallback={<p>ok..........</p>}><About /></Suspense>,
      },
      {
        path: 'ContactUs',
        element:<Suspense fallback={<h1>wait............</h1>}><ContactUs /></Suspense> ,
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
