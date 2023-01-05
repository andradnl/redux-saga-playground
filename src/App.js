import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import { EveryLatestExample } from "./pages/EveryLatestExample";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home</div>,
  },
  {
    path: "/examples",
    element: <EveryLatestExample />,
  },
  { path: "faq", element: <div>FAQ</div> },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
