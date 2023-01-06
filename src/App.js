import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import { Home } from "./pages/Home";
import { EveryLatestExample } from "./pages/EveryLatestExample";
import { TakeExample } from "./pages/TakeExamples";

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
    path: "/examples/take",
    element: <TakeExample />,
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
