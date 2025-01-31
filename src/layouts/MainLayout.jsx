import { Outlet } from "react-router-dom";
import Nav from "../components/PageDecorations/Nav";
import Footer from "../components/PageDecorations/Footer";

const MainLayout = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
