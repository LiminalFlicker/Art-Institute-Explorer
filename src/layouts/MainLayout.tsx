import {
  Outlet,
  //  useLocation
} from "react-router";

// import { useEffect } from "react";
// import { NavBar, NavDrawer, Footer } from "@components";

const MainLayout = () => {
  // const location = useLocation();

  return (
    <main>
      <Outlet />
    </main>
  );
};

export { MainLayout };
