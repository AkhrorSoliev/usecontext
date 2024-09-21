// rrd imports
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// layouts
import MainLayout from "./layouts/MainLayout";

// pages
import { Home, About, Contact, LikedImages } from "./pages";

// actions
import { action as SearchAction } from "./components/search/Search";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      action: SearchAction,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/likedImages",
          element: <LikedImages />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
