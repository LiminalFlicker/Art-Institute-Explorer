import {
  Outlet,
  //  useLocation
} from "react-router";
import NavBar from "../components/NavBar";

// import { useEffect } from "react";
// import { NavBar, NavDrawer, Footer } from "@components";

const MainLayout = () => {
  // const location = useLocation();

  return (
    <main>
      <NavBar />
      <Outlet />
    </main>
  );
};

export { MainLayout };
