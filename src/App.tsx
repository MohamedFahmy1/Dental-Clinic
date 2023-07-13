import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import Team from "./pages/Team";
import Blog from "./pages/Blog";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/services", element: <Services /> },
      { path: "aboutus", element: <AboutUs /> },
      { path: "team", element: <Team /> },
      { path: "blog", element: <Blog /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
