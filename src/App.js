import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OnlineStore from "./pages/OnlineStore";
import Portofilio from "./pages/Portofilio";
import Sipec from "./pages/Sipec";
import Glasses from "./pages/Glasses";
import LotOfBags from "./pages/LotOfBags";
import Clothes from "./pages/Clothes";
import FootWears from "./pages/FootWears";
import ContactUs from "./pages/ContactUs";
//Organize Dark mode
import { useContext } from "react";
import ThemeContext from "./context/ThemeContext";
// Organize color Header into OnlineStore
import { useReducer } from "react";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>SORRY *****</h1>,
  },
  {
    path: "/OnlineStore",
    element: <OnlineStore />,
  },

  {
    path: "/Portofilio",
    element: <Portofilio />,
  },

  {
    path: "/Sipec",
    element: <Sipec />,
  },
  {
    path: "/Glasses",
    element: <Glasses />,
  },

  {
    path: "/Clothes",
    element: <Clothes />,
  },

  {
    path: "/LotOfBags",
    element: <LotOfBags />,
  },

  {
    path: "/FootWears",
    element: <FootWears />,
  },

  {
    path: "/ContactUs",
    element: <ContactUs />,
  },
]);





function App() {
  
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme}`}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
