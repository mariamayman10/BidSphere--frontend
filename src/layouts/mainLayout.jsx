import { Outlet } from "react-router-dom";
import Footer from "../component/footer";
import Navbar from "../component/navbar/navbar";

function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;
