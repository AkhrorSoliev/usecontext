// rrd imports
import { Outlet } from "react-router-dom";

// components
import { Footer, Navbar, Search } from "../components";

function MainLayout() {
  return (
    <>
      <Navbar />
      <Search />
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
