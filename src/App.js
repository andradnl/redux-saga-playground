import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import { Home } from "./pages/Home";
import { EveryLatestExample } from "./pages/EveryLatestExample";
import { TakeLeadingExample } from "./pages/TakeLeadingExample";
import { ForkExample } from "./pages/ForkExample";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/examples/every-latest",
    element: <EveryLatestExample />,
  },
  {
    path: "/examples/take-leading",
    element: <TakeLeadingExample />,
  },
  { path: "faq", element: <div>FAQ</div> },
  { path: "/examples/fork", element: <ForkExample /> },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
