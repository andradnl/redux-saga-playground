import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import { Home } from "./pages/Home";
import { FAQs } from "./pages/FAQs";
import { EveryLatestExample } from "./pages/EveryLatestExample";
import { TakeLeadingExample } from "./pages/TakeLeadingExample";
import { ForkExample } from "./pages/ForkExample";
import { SpawnExample } from "./pages/SpawnExample";

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
  {
    path: "faq",
    element: <FAQs />,
  },
  { path: "/examples/fork", element: <ForkExample /> },
  { path: "/examples/spawn", element: <SpawnExample /> },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
