import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import './App.css'

const App = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </React.Suspense>
  );
};

export default App;
