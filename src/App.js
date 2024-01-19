import React, { Suspense, lazy, useEffect, useState } from "react";
import reactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import RestroMenu from "./components/RestroMenu";
import UserContext from "./components/util/UserContext";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import appStore from "./components/util/redux/appStore";


///lazy loading


const About=lazy(()=>import('./components/About'))

// Creating App Layout //
const App = () => {
  const [uname, setuname] = useState()

useEffect(()=>{
setuname('Likith')
},[])

  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{username:uname ,setuname}}>
    <div>
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
    </Provider>
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
        path: 'Cart',
        element:<Suspense fallback={<h1>wait............</h1>}><Cart /></Suspense> ,
      },
      {
        path: 'RestroMenu/:resid',
        element: <RestroMenu/>,
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
