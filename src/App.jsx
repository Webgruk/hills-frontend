import React from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import HomePage from "./pages/Home/HomePage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(<Route path="/" element={<HomePage />} />)
  );

  return (
    <RouterProvider router={router}>
      <div className="App">
        {/* <HomePage /> */}
        {/* <div>lsls</div> */}
      </div>
    </RouterProvider>
  );
}

export default App;
